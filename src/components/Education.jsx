import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../i18n/LanguageContext'
import translations from '../i18n/translations'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
    const { lang } = useLang()
    const t = translations[lang].education
    const sectionRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(sectionRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            }
        )
    }, [])

    return (
        <section ref={sectionRef} className="container section-padding">
            <h2 className='main-title'>{t.title}</h2>
            <p>{t.desc}</p>
        </section>
    )
}