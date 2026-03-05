import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../i18n/LanguageContext'
import translations from '../i18n/translations'

import utbf from '../assets/images/utbf.jpeg'
import witsper from '../assets/images/witsper.jpeg'
import argosy from '../assets/images/argosy.jpeg'
import yuanyu from '../assets/images/yuanyu.jpeg'
import sora from '../assets/images/sora.jpeg'
import mwex from '../assets/images/mwex.jpeg'
import wordslive from '../assets/images/wordslive.jpeg'
import century21 from '../assets/images/century21.jpeg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    { name: '元佑實業 YuanYu', url: 'https://yuanyu.com.tw/', subtitle: { zh: '維修查詢使用 PHP 客製 CSV 檔案上傳後利用 AJAX 查詢', en: 'Maintenance query using PHP custom CSV upload with AJAX' }, desc: 'swiper slide 套件\nCSS Animation\nWordPress ACF 自訂欄位\nRWD', image: yuanyu },
    { name: 'MWEX Solutions', url: 'https://mwexsolutions.com/', subtitle: { zh: 'Key Vision 使用 three.js 處理動態', en: 'Key Vision animated with three.js' }, desc: 'swiper slide 套件\nCSS Animation\nRWD', image: mwex },
    { name: '智選家 Witsper', url: 'https://about.witsper.com/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nWordPress ACF 自訂欄位\nRWD', image: witsper },
    { name: '優群科技 Argosy', url: 'https://argosytw.com/tw/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nWordPress ACF 自訂欄位\nRWD', image: argosy },
    { name: 'Sora Ventures', url: 'https://sora.vc/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nWordPress ACF 自訂欄位\nRWD', image: sora },
    { name: '沃茲新創空間 Words Live', url: 'https://space.wordslive.com.tw/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nRWD', image: wordslive },
    { name: '21世紀不動產加盟', url: 'https://join21.com.tw/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nRWD', image: century21 },
    { name: '宗南聯合學佛會 UTBF', url: 'https://utbf.org/', subtitle: { zh: '', en: '' }, desc: 'swiper slide 套件\nCSS Animation\nWordPress ACF自訂欄位\nRWD', image: utbf },
]

export default function Portfolio() {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const { lang } = useLang()
    const t = translations[lang].portfolio

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        )
    }, [])

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el)
        }
    }

    return (
        <section ref={sectionRef} className="container section-padding">
            <h2 className='main-title'>{t.title}</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((p, i) => (
                    <a
                        key={i}
                        ref={addToRefs}
                        className="card"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                        <img src={p.image} alt={p.name} className="card-bg-image" />
                        <div className="card-content">
                            <h2 className='title'>{p.name}</h2>
                            {p.subtitle[lang] && <p>{p.subtitle[lang]}</p>}

                            <div className='desc'>
                                <h3 className="desc-title">{t.techLabel}</h3>
                                <ul className='desc-list'>
                                    {p.desc.split('\n').filter(Boolean).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="more" style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#fff' }}>{t.viewMore}
                                <div className="arrow-container"><span className="arrow"></span></div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
