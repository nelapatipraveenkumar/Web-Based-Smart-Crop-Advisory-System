import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAdvisory } from '../services/api';

function AdvisoryForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        location: '',
        season: 'Winter',
        soil_type: 'Clay'
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const data = await getAdvisory(formData);
            if (data.success) {
                setResult(data.recommendation);
            }
        } catch (err) {
            setError(t('advisory.error'));
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="advisory-container">
            <h2>{t('advisory.title')}</h2>
            <form onSubmit={handleSubmit} className="advisory-form">
                <div className="form-group">
                    <label>{t('advisory.location')}</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder={t('advisory.locationPlaceholder')}
                    />
                </div>

                <div className="form-group">
                    <label>{t('advisory.season')}</label>
                    <select name="season" value={formData.season} onChange={handleChange}>
                        <option value="Winter">{t('advisory.seasons.Winter')}</option>
                        <option value="Summer">{t('advisory.seasons.Summer')}</option>
                        <option value="Rainy">{t('advisory.seasons.Rainy')}</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>{t('advisory.soilType')}</label>
                    <select name="soil_type" value={formData.soil_type} onChange={handleChange}>
                        <option value="Clay">{t('advisory.soils.Clay')}</option>
                        <option value="Loam">{t('advisory.soils.Loam')}</option>
                        <option value="Sandy">{t('advisory.soils.Sandy')}</option>
                    </select>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? t('advisory.analyzing') : t('advisory.submit')}
                </button>
            </form>

            {error && <div className="error-msg">{error}</div>}

            {result && (
                <div className="result-card">
                    <h3>💡 {t('advisory.resultKey')}</h3>
                    <p><strong>{t('advisory.crop')}</strong> {result.crop}</p>
                    <p><strong>{t('advisory.fertilizer')}</strong> {result.fertilizer}</p>
                </div>
            )}
        </div>
    );
}

export default AdvisoryForm;
