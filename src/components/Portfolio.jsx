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
import yuanin from '../assets/images/yuanin.jpeg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        name: { zh: '元佑實業', en: 'YuanYu' }, url: 'https://yuanyu.com.tw/',
        subtitle: { zh: '維修查詢使用 PHP 客製 CSV 檔案上傳後利用 AJAX 查詢', en: 'Maintenance query using PHP custom CSV upload with AJAX' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\n客製化 PHP Template\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nCustom PHP Template\nRWD' },
        image: yuanyu,
    },
    {
        name: { zh: 'MWEX Solutions', en: 'MWEX Solutions' }, url: 'https://mwexsolutions.com/',
        subtitle: { zh: 'Key Vision 使用 three.js 處理動態', en: 'Key Vision animated with three.js' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nRWD' },
        image: mwex,
    },
    {
        name: { zh: '智選家', en: 'Witsper' }, url: 'https://about.witsper.com/',
        subtitle: { zh: '', en: '' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\n客製化 PHP Template\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nCustom PHP Template\nRWD' },
        image: witsper,
    },
    {
        name: { zh: '優群科技', en: 'Argosy' }, url: 'https://argosytw.com/tw/',
        subtitle: { zh: '', en: '' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\n客製化 PHP Template\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nCustom PHP Template\nRWD' },
        image: argosy,
    },
    {
        name: { zh: 'Sora Ventures', en: 'Sora Ventures' }, url: 'https://sora.vc/',
        subtitle: { zh: '', en: '' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\n客製化 PHP Template\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nCustom PHP Template\nRWD' },
        image: sora,
    },
    {
        name: { zh: '沃茲新創空間', en: 'Words Live' }, url: 'https://space.wordslive.com.tw/',
        subtitle: { zh: '', en: '' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nRWD' },
        image: wordslive,
    },
    {
        name: { zh: '21世紀不動產加盟', en: 'Century 21 Franchise' }, url: 'https://join21.com.tw/',
        subtitle: { zh: '', en: '' },
        desc: { zh: 'Swiper Slide 套件\nCSS Animation\nRWD', en: 'Swiper Slide Plugin\nCSS Animation\nRWD' },
        image: century21,
    },
    {
        name: { zh: '元英高能量雷射治療專家', en: 'YuanYin Laser Treatment' }, url: 'https://www.yuaninlaser.com.tw/',
        subtitle: { zh: '', en: '' },
        desc: {
            zh: '串接 User Registration，擴充會員功能（重寫會員選單與 endpoint content）\n開發會員資料 CRUD 機制\n客製化 PHP Template\nRWD',
            en: 'Integrated User Registration, extended member features (rewrote member menu & endpoint content)\nDeveloped member data CRUD\nCustom PHP Template\nRWD',
        },
        image: yuanin,
    },
    {
        name: { zh: '宗南聯合學佛會', en: 'UTBF' }, url: 'https://utbf.org/',
        subtitle: { zh: '佛教月曆使用 PHP 客製 CSV 檔案上傳後串接 FullCalendar 輸出顯示', en: 'Buddhist calendar: PHP custom CSV upload integrated with FullCalendar' },
        desc: { zh: '客製化 PHP Template\nRWD', en: 'Custom PHP Template\nRWD' },
        image: utbf,
    },
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
                        <img src={p.image} alt={p.name[lang]} className="card-bg-image" />
                        <div className="card-content">
                            <h2 className='title'>{p.name[lang]}</h2>
                            {p.subtitle[lang] && <p>{p.subtitle[lang]}</p>}

                            <div className='desc'>
                                <h3 className="desc-title">{t.techLabel}</h3>
                                <ul className='desc-list'>
                                    {p.desc[lang].split('\n').filter(Boolean).map((item, i) => (
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
