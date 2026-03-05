import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../i18n/LanguageContext'
import translations from '../i18n/translations'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
    const { lang } = useLang()
    const t = translations[lang].experience
    const sectionRef = useRef(null)
    const listRef = useRef([])

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
        gsap.fromTo(listRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.08,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        )
    }, [])

    const addToRefs = (el) => {
        if (el && !listRef.current.includes(el)) {
            listRef.current.push(el)
        }
    }

    return (
        <div ref={sectionRef} className="experience">
            <h2 className='main-title'>{t.title}</h2>
            {t.company}
            <ul className='list-style'>
                {t.items.map((item, i) => (
                    <li key={i} ref={addToRefs}>{item}</li>
                ))}
            </ul>
        </div>
    )
}