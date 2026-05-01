import { useState, useEffect, useRef } from 'react'
import './App.css'

const PETALS = ['🌸', '✿', '❀', '🌺', '🍣', '🥢']
const petalData = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 7.5 + 5) % 90 + 5}%`,
  animationDuration: `${(i % 6) + 8}s`,
  animationDelay: `${(i * 1.1) % 12}s`,
  fontSize: `${(i % 8) + 10}px`,
  emoji: PETALS[i % PETALS.length],
}))

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('sushi-count')
    return saved ? parseInt(saved, 10) : 0
  })
  const [animating, setAnimating] = useState(false)
  const [ripples, setRipples] = useState({ plus: false, minus: false })
  const [toast, setToast] = useState({ show: false, msg: '' })
  const toastTimer = useRef(null)

  useEffect(() => {
    localStorage.setItem('sushi-count', count)
  }, [count])

  const triggerAnim = () => {
    setAnimating(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimating(true))
    })
    setTimeout(() => setAnimating(false), 400)
  }

  const showToast = (msg) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ show: true, msg })
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 1800)
  }

  const triggerRipple = (btn) => {
    setRipples(r => ({ ...r, [btn]: true }))
    setTimeout(() => setRipples(r => ({ ...r, [btn]: false })), 500)
  }

  const handlePlus = () => {
    setCount(c => c + 1)
    triggerAnim()
    triggerRipple('plus')
  }

  const handleMinus = () => {
    if (count <= 0) { showToast('¡Ya estás en cero! 🌸'); return }
    setCount(c => c - 1)
    triggerAnim()
    triggerRipple('minus')
  }

  const handleReset = () => {
    if (count === 0) return
    showToast(`¡${count} pieza${count !== 1 ? 's' : ''} en total! ✨`)
    setCount(0)
  }

  const suffix = count === 1 ? 'pza' : 'pzs'

  return (
    <div className="app-screen">
        {/* Floating petals */}
        <div className="petals-container">
          {petalData.map((p, i) => (
            <div key={i} className="petal" style={{
              left: p.left,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              fontSize: p.fontSize,
            }}>
              {p.emoji}
            </div>
          ))}
        </div>

        {/* Toast */}
        <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>

        {/* Header */}
        <div className="header-area">
          <div className="app-title">Sushi Counter</div>
        </div>

        {/* Sushi showcase */}
        <div className="sushi-showcase">
          <div className="sushi-image-container">
            <div className="sparkle-wrap">
              <span className="sparkle" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>✦</span>
              <span className="sparkle" style={{ top: '15%', right: '12%', animationDelay: '0.8s' }}>✧</span>
              <span className="sparkle" style={{ bottom: '20%', left: '8%', animationDelay: '1.5s', fontSize: '10px' }}>✦</span>
              <span className="sparkle" style={{ bottom: '25%', right: '8%', animationDelay: '0.4s', fontSize: '10px' }}>✧</span>
            </div>
            <div className="sushi-plate" />
            <div className="sushi-svg-wrap">
              <img src="/sushi.png" alt="sushi" className="sushi-img" />
            </div>
          </div>

          {/* Count display */}
          <div className="count-display">
            <div className="count-label">piezas comidas</div>
            <div
              className={`count-number ${animating ? 'animating' : ''}`}
              style={{ color: count === 0 ? '#c4b0b8' : '#3d2030' }}
            >
              {count}<span className="count-suffix">{suffix}</span>
            </div>
            <div className="count-decoration">
              <div className="count-line" />
              <div className="count-diamond" />
              <div className="count-line right" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="controls-area">
          <div className="main-controls">
            <button className="btn-circle btn-minus" onClick={handleMinus} aria-label="Restar">
              {ripples.minus && <span className="btn-ripple" />}
              <span className="btn-icon">−</span>
            </button>

            <button className="btn-circle btn-plus" onClick={handlePlus} aria-label="Sumar">
              {ripples.plus && <span className="btn-ripple" />}
              <span className="btn-icon">+</span>
            </button>

            {/* spacer to balance layout */}
            <div style={{ width: 72 }} />
          </div>

          <button className="btn-reset" onClick={handleReset} aria-label="Reiniciar">
            <span>✦ reiniciar ✦</span>
          </button>

          <div className="bottom-decoration">
            <div className="deco-dot" />
            <div className="deco-dot" />
            <div className="deco-dot" />
          </div>
        </div>
    </div>
  )
}
