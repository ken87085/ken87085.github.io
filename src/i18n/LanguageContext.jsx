import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('zh')

    const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh')

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLang() {
    return useContext(LanguageContext)
}
