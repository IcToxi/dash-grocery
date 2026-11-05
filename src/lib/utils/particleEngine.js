const TWO_PI = Math.PI * 2
const DEG = Math.PI / 180
const RANDOM_COLORS = [
    '#ff4757',
    '#ffa502',
    '#eccc68',
    '#2ed573',
    '#1e90ff',
    '#5352ed',
    '#ff6b81',
    '#70a1ff',
]

export const pick = list => list[Math.floor(Math.random() * list.length)]

/** Resolve a number or [min, max] range to a random value. */
export const range = (value, fallback) => {
    const v = value === undefined || value === null ? fallback : value
    if (Array.isArray(v)) {
        const [min, max] = v
        return min + Math.random() * (max - min)
    }
    return v
}

export const resolveColor = color => {
    if (Array.isArray(color) && color.length) {
        return pick(color)
    }
    if (!color || color === 'random') {
        return pick(RANDOM_COLORS)
    }
    return color
}

/**
 * Create a full-size 2D canvas drawing loop. `step(ctx, dt, width, height)`
 * is called every frame. Returns a stop function that also removes listeners.
 */
export const runLoop = (canvas, step) => {
    const ctx = canvas.getContext('2d')
    let frame = 0
    let last = performance.now()
    let width = 0
    let height = 0

    const resize = () => {
        const ratio = window.devicePixelRatio || 1
        width = canvas.clientWidth
        height = canvas.clientHeight
        canvas.width = Math.max(1, Math.floor(width * ratio))
        canvas.height = Math.max(1, Math.floor(height * ratio))
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const tick = now => {
        const dt = Math.min((now - last) / 1000, 0.1)
        last = now
        step(ctx, dt, width, height)
        frame = requestAnimationFrame(tick)
    }

    resize()
    const observer =
        typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize)
    if (observer) {
        observer.observe(canvas)
    }
    frame = requestAnimationFrame(tick)

    return () => {
        cancelAnimationFrame(frame)
        if (observer) {
            observer.disconnect()
        }
    }
}

/**
 * A burst-style particle system. `emit` spawns particles; `draw` advances and
 * renders them. Units: velocity in px/s, life in seconds, angle in degrees.
 */
export class Burst {
    constructor() {
        this.particles = []
    }

    emit(x, y, opts = {}) {
        const {
            num = 3,
            radius = 10,
            alpha = 0.1,
            tha = 20,
            v = 0.5,
            life = 1.2,
            color = 'random',
            g = 1,
            circle = true,
            direction = -90,
            speedScale = 200,
        } = opts
        const count = Math.round(range(num, 3))
        for (let i = 0; i < count; i++) {
            const angle =
                Array.isArray(tha) && tha.length === 2 && tha[1] - tha[0] >= 90
                    ? range(tha) * DEG
                    : (direction + (Math.random() - 0.5) * 2 * range(tha, 20)) *
                      DEG
            const speed = range(v, 0.5) * speedScale * (0.5 + Math.random())
            const a = range(alpha, 0.5)
            this.particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                r: range(radius, 6),
                a0: Array.isArray(alpha) ? alpha[0] : a,
                a1: Array.isArray(alpha) ? alpha[1] : 0,
                life: range(life, 1),
                age: 0,
                g: g * 400,
                color: resolveColor(color),
                circle,
            })
        }
    }

    draw(ctx, dt, width, height) {
        ctx.clearRect(0, 0, width, height)
        this.particles = this.particles.filter(p => p.age < p.life)
        for (const p of this.particles) {
            p.age += dt
            p.vy += p.g * dt
            p.x += p.vx * dt
            p.y += p.vy * dt
            const t = Math.min(p.age / p.life, 1)
            ctx.globalAlpha = Math.max(p.a0 + (p.a1 - p.a0) * t, 0)
            ctx.fillStyle = p.color
            if (p.circle) {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, TWO_PI)
                ctx.fill()
            } else {
                ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2)
            }
        }
        ctx.globalAlpha = 1
    }
}
