import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { checkHealth } from './services/api'
import AdvisoryForm from './components/AdvisoryForm'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
    const { t } = useTranslation();
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleCheckStatus = async () => {
        setLoading(true)
        setError(null)
        setStatus('')

        try {
            const data = await checkHealth()
            setStatus(data.status)
        } catch (err) {
            console.error(err)
            setError(t('app.offlineError'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container">
            <LanguageSwitcher />
            <h1>{t('app.title')}</h1>
            <div className="card">
                <button onClick={handleCheckStatus} disabled={loading}>
                    {loading ? t('app.checking') : t('app.checkStatus')}
                </button>

                {status && <div className="status-success">{t('app.systemStatus')} {status}</div>}
                {error && <div className="status-error">{error}</div>}
            </div>

            <AdvisoryForm />
        </div>
    )
}

export default App
