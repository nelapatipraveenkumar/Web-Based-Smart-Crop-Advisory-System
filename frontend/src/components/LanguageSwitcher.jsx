import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // We'll create some basic styles for this

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button
                className={i18n.resolvedLanguage === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                className={i18n.resolvedLanguage === 'te' ? 'active' : ''}
                onClick={() => changeLanguage('te')}
            >
                తెలుగు
            </button>
        </div>
    );
}

export default LanguageSwitcher;
