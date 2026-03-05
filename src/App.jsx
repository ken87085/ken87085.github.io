import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import KV from './components/KV'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import { LanguageProvider } from './i18n/LanguageContext'

function AppContent() {
    const appRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(appRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out' }
        )
    }, [])

    return (
        <div ref={appRef} className="app-wrapper">
            <KV />
            <Education />
            <section className='container info '>
                <Experience />
                <Skills />
            </section>
            <Portfolio />
            <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} YCW</p>
            </footer>
        </div>
    )
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

export default App
