import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

const BOARD_SIZE = 20
const INITIAL_SNAKE = [
    {x: 10, y: 10},
    {x: 9, y: 10},
    {x: 8, y: 10},
]
const DIRECTIONS = {
    ArrowUp: {x: 0, y: -1},
    ArrowDown: {x: 0, y: 1},
    ArrowLeft: {x: -1, y: 0},
    ArrowRight: {x: 1, y: 0},
}

const samePosition = (first, second) =>
    first.x === second.x && first.y === second.y

const createFood = snake => {
    const emptyCells = []
    for (let y = 0; y < BOARD_SIZE; y += 1) {
        for (let x = 0; x < BOARD_SIZE; x += 1) {
            const position = {x, y}
            if (!snake.some(segment => samePosition(segment, position))) {
                emptyCells.push(position)
            }
        }
    }

    return emptyCells.length
        ? emptyCells[Math.floor(Math.random() * emptyCells.length)]
        : null
}

const createGame = () => ({
    snake: INITIAL_SNAKE,
    food: createFood(INITIAL_SNAKE),
    score: 0,
    status: 'ready',
})

/**
 * A self-contained Snake game with keyboard and touch-friendly controls.
 */
const Snake = ({id, class_name, color1, color2, backgroundColor}) => {
    const [game, setGame] = useState(createGame)
    const direction = useRef({
        current: DIRECTIONS.ArrowRight,
        next: DIRECTIONS.ArrowRight,
    })

    useEffect(() => {
        if (game.status !== 'playing') {
            return undefined
        }

        const timer = window.setTimeout(() => {
            direction.current.current = direction.current.next
            const head = game.snake[0]
            const nextHead = {
                x: head.x + direction.current.current.x,
                y: head.y + direction.current.current.y,
            }
            const eating = samePosition(nextHead, game.food)
            const body = eating ? game.snake : game.snake.slice(0, -1)
            const hitWall =
                nextHead.x < 0 ||
                nextHead.x >= BOARD_SIZE ||
                nextHead.y < 0 ||
                nextHead.y >= BOARD_SIZE

            if (hitWall || body.some(segment => samePosition(segment, nextHead))) {
                setGame({...game, status: 'over'})
                return
            }

            const snake = [nextHead, ...body]
            const food = eating ? createFood(snake) : game.food
            setGame({
                ...game,
                snake,
                food,
                score: game.score + (eating ? 1 : 0),
                status: food ? 'playing' : 'won',
            })
        }, 140)

        return () => window.clearTimeout(timer)
    }, [game])

    const changeDirection = next => {
        if (game.status !== 'playing') {
            return
        }

        const current = direction.current.next
        if (next.x !== -current.x || next.y !== -current.y) {
            direction.current.next = next
        }
    }

    const handleKeyDown = event => {
        const next = DIRECTIONS[event.key]
        if (next) {
            event.preventDefault()
            changeDirection(next)
        }
    }

    const startGame = () => {
        direction.current = {
            current: DIRECTIONS.ArrowRight,
            next: DIRECTIONS.ArrowRight,
        }
        setGame({...createGame(), status: 'playing'})
    }

    const snakeCells = new Set(
        game.snake.map(segment => `${segment.x},${segment.y}`)
    )
    const statusText = {
        ready: 'Press Start to play. Use the arrow keys or direction buttons.',
        playing: `Score: ${game.score}. Use the arrow keys or direction buttons.`,
        paused: `Paused. Score: ${game.score}.`,
        over: `Game over. Final score: ${game.score}.`,
        won: `You filled the board! Final score: ${game.score}.`,
    }

    return (
        <div
            id={id}
            className={class_name}
            onKeyDown={handleKeyDown}
            style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                maxWidth: '100%',
                padding: 12,
                color: color1,
                backgroundColor,
                borderRadius: 8,
                fontFamily: 'sans-serif',
            }}
        >
            <div
                id={id ? `${id}-board` : undefined}
                role="grid"
                aria-label="Snake game board"
                tabIndex={0}
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
                    gap: 1,
                    width: 'min(320px, 100%)',
                    aspectRatio: '1',
                    backgroundColor: color1,
                    border: `2px solid ${color1}`,
                    outlineColor: color1,
                    touchAction: 'none',
                }}
            >
                {Array.from({length: BOARD_SIZE * BOARD_SIZE}, (_, index) => {
                    const x = index % BOARD_SIZE
                    const y = Math.floor(index / BOARD_SIZE)
                    const position = `${x},${y}`
                    const isFood =
                        game.food && samePosition(game.food, {x, y})

                    return (
                        <div
                            key={position}
                            role="presentation"
                            style={{
                                backgroundColor: isFood
                                    ? color2
                                    : snakeCells.has(position)
                                      ? color1
                                      : backgroundColor,
                                borderRadius: isFood ? '50%' : 0,
                            }}
                        />
                    )
                })}
            </div>
            <div aria-live="polite">{statusText[game.status]}</div>
            <div style={{display: 'flex', gap: 8}}>
                {game.status === 'playing' ? (
                    <button
                        id={id ? `${id}-pause` : undefined}
                        type="button"
                        onClick={() => setGame({...game, status: 'paused'})}
                    >
                        Pause
                    </button>
                ) : (
                    <button
                        id={id ? `${id}-start` : undefined}
                        type="button"
                        onClick={startGame}
                    >
                        {game.status === 'ready'
                            ? 'Start'
                            : game.status === 'paused'
                              ? 'Resume'
                              : 'Play again'}
                    </button>
                )}
            </div>
            <div
                aria-label="Direction controls"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 44px)',
                    gap: 4,
                }}
            >
                <span />
                <button
                    type="button"
                    aria-label="Move up"
                    onClick={() => changeDirection(DIRECTIONS.ArrowUp)}
                >
                    ↑
                </button>
                <span />
                <button
                    type="button"
                    aria-label="Move left"
                    onClick={() => changeDirection(DIRECTIONS.ArrowLeft)}
                >
                    ←
                </button>
                <button
                    type="button"
                    aria-label="Move down"
                    onClick={() => changeDirection(DIRECTIONS.ArrowDown)}
                >
                    ↓
                </button>
                <button
                    type="button"
                    aria-label="Move right"
                    onClick={() => changeDirection(DIRECTIONS.ArrowRight)}
                >
                    →
                </button>
            </div>
        </div>
    )
}

Snake.defaultProps = {
    color1: '#248ec2',
    color2: '#e63946',
    backgroundColor: '#ebebeb',
}

Snake.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * A CSS class name for the game container.
     */
    class_name: PropTypes.string,
    /**
     * The color used for the snake and board accents.
     */
    color1: PropTypes.string,
    /**
     * The color used for the food.
     */
    color2: PropTypes.string,
    /**
     * The background color of the game container and board.
     */
    backgroundColor: PropTypes.string,
}

export default Snake
