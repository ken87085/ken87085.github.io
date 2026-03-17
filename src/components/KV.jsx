import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLang } from '../i18n/LanguageContext'
import translations from '../i18n/translations'

import headshot from '../assets/images/headshot.jpg'



gsap.registerPlugin(SplitText)


export default function Hero() {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const imageRef = useRef(null)
    const { lang } = useLang()
    const t = translations[lang].kv

    useEffect(() => {
        const segmenter = new Intl.Segmenter('zh-TW', { granularity: 'grapheme' })

        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1 },
                '-=0.5'
            )
        document.fonts.ready.then(() => {
            gsap.set(".split", { opacity: 1 });

            const split = SplitText.create(".split", {
                type: "words",
                wordsClass: "word",
                prepareText: (text, el) => {
                    return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
                },
                wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
                autoSplit: true,
                onSplit: (self) => {
                    return gsap.from(self.words, {
                        y: -100,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: "back"
                    });
                }
            })
        })

        tl.fromTo(imageRef.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 }
        )
    }, [])

    return (
        <section className="kv" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div className='inner'>
                <div className='text-outer'>
                    <h1 ref={titleRef} style={{ marginBottom: '1rem' }}>
                        <span className="split">{t.greeting}</span>
                    </h1>
                    <p ref={subtitleRef}>{t.bio}</p>
                </div>
                <div ref={imageRef} className='image-outer'>
                    <img src={headshot} alt="headshot" />
                </div>
            </div>

        </section>
    )
}
