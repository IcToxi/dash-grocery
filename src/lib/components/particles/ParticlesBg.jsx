import React, {useEffect, useMemo, useRef} from 'react'
import PropTypes, {oneOfType} from 'prop-types'
import {Burst, pick, resolveColor, runLoop} from '../../utils/particleEngine'

const TYPES = [
    'color',
    'ball',
    'lines',
    'thick',
    'circle',
    'cobweb',
    'polygon',
    'square',
    'tadpole',
    'fountain',
]
const TWO_PI = Math.PI * 2

const makeDrifter = (w, h, color, size, kind) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 40,
    vy: (Math.random() - 0.5) * 40,
    r: size * (0.5 + Math.random()),
    a: 0.2 + Math.random() * 0.5,
    rot: Math.random() * TWO_PI,
    spin: (Math.random() - 0.5) * 0.5,
    color: resolveColor(color),
    kind,
})

const drawShape = (ctx, p) => {
    ctx.globalAlpha = p.a
    ctx.fillStyle = p.color
    ctx.strokeStyle = p.color
    ctx.beginPath()
    if (p.kind === 'square') {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2)
        ctx.restore()
        return
    }
    if (p.kind === 'polygon') {
        for (let i = 0; i < 6; i++) {
            const a = p.rot + (i * TWO_PI) / 6
            ctx.lineTo(p.x + Math.cos(a) * p.r, p.y + Math.sin(a) * p.r)
        }
        ctx.closePath()
        ctx.fill()
        return
    }
    ctx.arc(p.x, p.y, p.r, 0, TWO_PI)
    if (p.kind === 'circle') {
        ctx.lineWidth = 2
        ctx.stroke()
    } else {
        ctx.fill()
    }
}

const createScene = (type, color, num, config) => {
    let particles = null
    let burst = null
    let hue = 0
    let emitAcc = 0

    const colorList = Array.isArray(color) ? color : [color]
    const fixedBg = type === 'color' && color && color !== 'random'

    return (ctx, dt, w, h) => {
        if (type === 'color') {
            hue = (hue + dt * 20) % 360
            ctx.globalAlpha = 1
            ctx.fillStyle = fixedBg ? colorList[0] : `hsl(${hue} 70% 55%)`
            ctx.fillRect(0, 0, w, h)
            return
        }
        ctx.clearRect(0, 0, w, h)

        if (type === 'lines' || type === 'thick') {
            if (!particles) {
                particles = Array.from({length: num || 40}, () => ({
                    ...makeDrifter(w, h, color, 1, 'line'),
                    len: 20 + Math.random() * 60,
                    speed: 120 + Math.random() * 200,
                }))
            }
            ctx.lineWidth = type === 'thick' ? 6 : 1.5
            ctx.lineCap = 'round'
            for (const p of particles) {
                p.y += p.speed * dt
                p.x += p.speed * dt * 0.3
                if (p.y - p.len > h || p.x > w + 50) {
                    p.y = -p.len
                    p.x = Math.random() * w
                }
                ctx.globalAlpha = p.a
                ctx.strokeStyle = p.color
                ctx.beginPath()
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(p.x - p.len * 0.3, p.y - p.len)
                ctx.stroke()
            }
            ctx.globalAlpha = 1
            return
        }

        if (type === 'tadpole' || type === 'fountain' || type === 'custom') {
            burst = burst || new Burst()
            const cfg = config || {}
            const rps = cfg.rps || 30
            emitAcc += dt * rps
            while (emitAcc >= 1) {
                emitAcc -= 1
                let x = w / 2
                let y = h
                const position = cfg.position || 'bottom'
                if (type === 'custom' && position === 'all') {
                    x = Math.random() * w
                    y = Math.random() * h
                } else if (position === 'center') {
                    y = h / 2
                } else if (position === 'top') {
                    y = 0
                }
                burst.emit(x, y, {
                    num: cfg.num || 1,
                    radius: cfg.radius || (type === 'tadpole' ? 4 : 5),
                    alpha: cfg.alpha || [0.8, 0],
                    tha: cfg.tha || (type === 'tadpole' ? 40 : 25),
                    v: cfg.v || (type === 'fountain' ? 4.5 : 3),
                    life: cfg.life || [2, 3.5],
                    color: cfg.color || color,
                    g: cfg.g === undefined ? 1 : cfg.g,
                    circle: cfg.body !== 'square',
                    speedScale: 160,
                })
            }
            burst.draw(ctx, dt, w, h)
            return
        }

        const kind = type === 'ball' || type === 'cobweb' ? 'ball' : type
        if (!particles) {
            particles = Array.from({length: num || (type === 'cobweb' ? 70 : 40)}, () =>
                makeDrifter(w, h, color, type === 'cobweb' ? 3 : 18, kind)
            )
        }
        for (const p of particles) {
            p.x += p.vx * dt
            p.y += p.vy * dt
            p.rot += p.spin * dt
            if (p.x < -p.r) {
                p.x = w + p.r
            } else if (p.x > w + p.r) {
                p.x = -p.r
            }
            if (p.y < -p.r) {
                p.y = h + p.r
            } else if (p.y > h + p.r) {
                p.y = -p.r
            }
            drawShape(ctx, p)
        }
        if (type === 'cobweb') {
            const link = 130
            ctx.lineWidth = 1
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i]
                    const b = particles[j]
                    const d = Math.hypot(a.x - b.x, a.y - b.y)
                    if (d < link) {
                        ctx.globalAlpha = (1 - d / link) * 0.5
                        ctx.strokeStyle = a.color
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.stroke()
                    }
                }
            }
        }
        ctx.globalAlpha = 1
    }
}

/**
 * Animated particle background drawn on a canvas.
 * By default it fills the page behind your content (`bg=True`).
 */
const DashParticlesBg = ({
    id,
    class_name,
    type = 'random',
    num,
    color = 'random',
    bg = true,
    config,
}) => {
    const canvasRef = useRef(null)
    const resolvedType = useMemo(
        () => (type === 'random' || !type ? pick(TYPES) : type),
        [type]
    )
    const colorKey = JSON.stringify(color)
    const configKey = JSON.stringify(config)

    useEffect(
        () =>
            runLoop(
                canvasRef.current,
                createScene(resolvedType, color, num, config)
            ),
        [resolvedType, colorKey, num, configKey]
    )

    let style = {width: '100%', height: '100%', display: 'block'}
    if (bg === true) {
        style = {
            ...style,
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
        }
    } else if (bg && typeof bg === 'object') {
        style = {...style, ...bg}
    }

    return <canvas id={id} className={class_name} ref={canvasRef} style={style} />
}

DashParticlesBg.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The type of particle animation.
     * "color", "ball", "lines", "thick", "circle", "cobweb" ,"polygon", "square", "tadpole", "fountain", "random", "custom"
     */
    type: PropTypes.string,

    /**
     * The number of particles, generally not set
     */
    num: PropTypes.number,

    /**
     * The background color or particle color of the particle scene
     */
    color: oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /**
     * true: fill the page behind the content. false: render inline and size
     * it with `class_name`. An object is used as the canvas CSS style.
     */
    bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /**
     * With type="custom" (and for tadpole/fountain) tune the emitter:
     * rps (particles per second), num, radius, life, v, tha, alpha, color,
     * g (gravity), body ("circle" or "square") and position
     * ("bottom", "center", "top" or "all").
     */
    config: PropTypes.shape({
        num: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        rps: PropTypes.number,
        radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        life: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        v: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        tha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        body: PropTypes.string,
        alpha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        position: PropTypes.string,
        color: oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        g: PropTypes.number,
    }),
}

export default DashParticlesBg
