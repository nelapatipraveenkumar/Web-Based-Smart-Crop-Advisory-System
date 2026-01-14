const translations = {
    en: {
        nav: {
            appTitle: "🌱 Smart Agri Advisor",
            weather: "Weather",
            advisory: "Advisory",
            pests: "Pest Detection",
            market: "Market",
            chatbot: "Ask Bot"
        },
        weather: {
            title: "🌤️ Weather Updates",
            cityLabel: "City / Region",
            cityPlaceholder: "Enter city (e.g. Nagpur)",
            checkBtn: "Check",
            defaultAlert: "✅ Conditions are optimal for field work.",
            serviceUnavailable: "Weather service unavailable."
        },
        market: {
            title: "💰 Live Market Prices",
            loading: "Loading latest rates..."
        },
        advisory: {
            title: "🌾 Crop Advisory",
            locationLabel: "Farm Location",
            locationPlaceholder: "e.g. Village Name",
            seasonLabel: "Season",
            seasons: {
                Winter: "Winter (Rabi)",
                Summer: "Summer (Zaid)",
                Rainy: "Rainy (Kharif)"
            },
            soilLabel: "Soil Type",
            soils: {
                Clay: "Clay / Black",
                Loam: "Loam / Alluvial",
                Sandy: "Sandy / Red"
            },
            submitBtn: "Get Best Crop Recommendation",
            resultCrop: "Top Crop:",
            resultFert: "Rec. Fertilizer:",
            resultFert: "Rec. Fertilizer:",
            error: "Advisory error.",
            highly: "Highly",
            medium: "Medium",
            low: "Low",
            estPrice: "Est. Price"
        },
        pests: {
            title: "📷 Disease Detection",
            uploadLabel: "Upload Leaf Image",
            uploadText: "Click to upload scan",
            analyzeBtn: "Analyze Health",
            scanning: "Scanning...",
            diagnosis: "Diagnosis:",
            confidence: "Confidence:",
            treatment: "💊 Treatment Plan:",
            error: "Select an image first!",
            scanFailed: "Scan failed."
        },
        guide: {
            title: "📅 Crop Practice Guide",
            label: "Select Crop:"
        },
        chatbot: {
            title: "💬 AI Farmer Assistant",
            welcome: "Namaste! I am your AI Agriculture Expert. Ask me anything about farming, government schemes, or organic methods.",
            placeholder: "Type your question here...",
            listening: "Listening...",
            sendBtn: "Send 🚀",
            voiceLabel: "🔊 Read answers aloud"
        },
        feedback: {
            title: "⭐ Rate Experience",
            placeholder: "Any suggestions to improve?",
            submitBtn: "Submit",
            success: "Feedback received. Thank you!",
            error: "Please enter suggestions."
        }
    },
    te: {
        nav: {
            appTitle: "🌱 స్మార్ట్ వ్యవసాయ సలహాదారు",
            weather: "వాతావరణం",
            advisory: "పంట సలహా",
            pests: "చీడపీడలు",
            market: "మార్కెట్",
            chatbot: "బాట్ అడగండి"
        },
        weather: {
            title: "🌤️ వాతావరణ సమాచారం",
            cityLabel: "నగరం / ప్రాంతం",
            cityPlaceholder: "నగరం పేరు (ఉదా. నాగ్ పూర్)",
            checkBtn: "తనిఖీ చేయండి",
            defaultAlert: "✅ పొలం పనులకు అనుకూలమైన పరిస్థితులు.",
            serviceUnavailable: "వాతావరణ సేవ అందుబాటులో లేదు."
        },
        market: {
            title: "💰 మార్కెట్ ధరలు",
            loading: "తాజా ధరలు లోడ్ అవుతున్నాయి..."
        },
        advisory: {
            title: "🌾 పంట సలహాలు",
            locationLabel: "పొలం ఉన్న ప్రదేశం",
            locationPlaceholder: "ఉదా. గ్రామం పేరు",
            seasonLabel: "సీజన్ (Season)",
            seasons: {
                Winter: "శీతాకాలం (రబీ)",
                Summer: "వేసవికాలం (జైద్)",
                Rainy: "వర్షాకాలం (ఖరీఫ్)"
            },
            soilLabel: "నేల రకం",
            soils: {
                Clay: "నల్లరేగడి / బంకమట్టి",
                Loam: "ఒండ్రు మట్టి",
                Sandy: "ఎర్ర నేల / ఇసుక"
            },
            submitBtn: "మంచి పంట సలహా పొందండి",
            resultCrop: "సిఫార్సు చేసిన పంట:",
            resultFert: "ఎరువులు:",
            submitBtn: "మంచి పంట సలహా పొందండి",
            resultCrop: "సిఫార్సు చేసిన పంట:",
            resultFert: "ఎరువులు:",
            error: "సలహా పొందడంలో లోపం.",
            highly: "అత్యంత",
            medium: "మధ్యస్థ",
            low: "తక్కువ",
            estPrice: "అంచనా ధర"
        },
        pests: {
            title: "📷 తెగుళ్ళ గుర్తింపు",
            uploadLabel: "ఆకు ఫోటో అప్‌లోడ్ చేయండి",
            uploadText: "స్కాన్ అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
            analyzeBtn: "ఆరోగ్యాన్ని విశ్లేషించండి",
            scanning: "స్కానింగ్...",
            diagnosis: "వ్యాధి:",
            confidence: "నమ్మకం:",
            treatment: "💊 చికిత్స విధానం:",
            error: "ముందుగా చిత్రాన్ని ఎంచుకోండి!",
            scanFailed: "స్కాన్ విఫలమైంది."
        },
        guide: {
            title: "📅 పంట సాగు విధానం",
            label: "పంటను ఎంచుకోండి:"
        },
        chatbot: {
            title: "💬 AI రైతు సహాయకుడు",
            welcome: "నమస్తే! నేను మీ AI వ్యవసాయ నిపుణుడిని. వ్యవసాయం, ప్రభుత్వ పథకాలు లేదా సేంద్రీయ పద్ధతుల గురించి నన్ను ఏమైనా అడగండి.",
            placeholder: "మీ ప్రశ్న ఇక్కడ టైప్ చేయండి...",
            listening: "వింటున్నాను...",
            sendBtn: "పంపండి 🚀",
            voiceLabel: "🔊 సమాధానాలను చదివి వినిపించండి"
        },
        feedback: {
            title: "⭐ మీ అభిప్రాయం",
            placeholder: "మెరుగుపరచడానికి సలహాలు?",
            submitBtn: "సమర్పించండి",
            success: "అభిప్రాయం స్వీకరించబడింది. ధన్యవాదాలు!",
            error: "దయచేసి సలహాలను నమోదు చేయండి."
        },
        crops: {
            "Paddy": "వరి",
            "Rice": "వరి",
            "Maize": "మొక్కజొన్న",
            "Cotton": "పత్తి",
            "Groundnut": "వేరుశనగ",
            "Sugarcane": "చెరకు",
            "Chilli": "మిరప",
            "Tobacco": "పొగాకు",
            "Pulses": "పప్పుధాన్యాలు",
            "Black gram": "మినుములు",
            "Green gram": "పెసలు",
            "Red gram": "కందులు",
            "Bengal gram": "శనగలు",
            "Mesta": "గోగునార",
            "Cashew": "జీడిమామిడి",
            "Coconut": "కొబ్బరి",
            "Banana": "అరటి",
            "Mango": "మామిడి",
            "Turmeric": "పసుపు",
            "Ginger": "అల్లం",
            "Coffee": "కాఫీ",
            "Pepper": "మిరియాలు",
            "Oil Palm": "ఆయిల్ పామ్",
            "Vegetables": "కూరగాయలు",
            "Tomato": "టమాటో",
            "Brinjal": "వంకాయ",
            "Lady finger": "బెండకాయ",
            "Wheat": "గోధుమ",
            "Jowar": "జొన్న",
            "Sorghum": "జొన్న",
            "Bajra": "సజ్జలు",
            "Ragi": "రాగులు",
            "Sunflower": "పొద్దుతిరుగుడు",
            "Sesame": "నువ్వులు"
        },
        fertilizers: {
            "Urea": "యూరియా",
            "DAP": "డి.ఎ.పి",
            "MOP": "ఎం.ఓ.పి",
            "SSP": "ఎస్.ఎస్.పి",
            "Complex": "కాంప్లెక్స్ ఎరువు",
            "Zinc": "జింక్",
            "Potash": "పొటాష్",
            "Gypsum": "జిప్సం",
            "Sulphur": "సల్ఫర్",
            "Super Phosphate": "సూపర్ ఫాస్ఫేట్"
        },
        locations: {
            "Srikakulam": "శ్రీకాకుళం",
            "Parvathipuram Manyam": "పార్వతీపురం మన్యం",
            "Vizianagaram": "విజయనగరం",
            "Visakhapatnam": "విశాఖపట్నం",
            "Anakapalle": "అనకాపల్లి",
            "Alluri Sitharama Raju": "అల్లూరి సీతారామరాజు",
            "Kakinada": "కాకినాడ",
            "East Godavari": "తూర్పు గోదావరి",
            "Dr. B.R. Ambedkar Konaseema": "డా. బి.ఆర్. అంబేద్కర్ కోనసీమ",
            "Eluru": "ఏలూరు",
            "West Godavari": "పశ్చిమ గోదావరి",
            "NTR": "ఎన్టీఆర్",
            "Krishna": "కృష్ణ",
            "Guntur": "గుంటూరు",
            "Palnadu": "పల్నాడు",
            "Bapatla": "బాపట్ల",
            "Prakasam": "ప్రకాశం",
            "Sri Potti Sriramulu Nellore": "శ్రీ పొట్టి శ్రీరాములు నెల్లూరు",
            "Kurnool": "కర్నూలు",
            "Nandyal": "నంద్యాల",
            "Anantapur": "అనంతపురం",
            "Sri Sathya Sai": "శ్రీ సత్యసాయి",
            "YSR Kadapa": "వైఎస్ఆర్ కడప",
            "Annamayya": "అన్నమయ్య",
            "Tirupati": "తిరుపతి",
            "Chittoor": "చిత్తూరు"
        }
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang; // Expose globally for index.html scripts
    const t = translations[lang];

    // Helper to set text content
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    // Helper to set properties specifically by data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = t;
        keys.forEach(k => { val = val ? val[k] : null });

        if (val) {
            if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                el.placeholder = val;
            } else {
                el.innerText = val;
            }
        }
    });

    // Handle Select Options manually or via data-i18n on options if possible
    // For selects, it's easier to specific logic:
    const seasonSelect = document.getElementById('advSeason');
    if (seasonSelect) {
        seasonSelect.options[0].text = t.advisory.seasons.Winter;
        seasonSelect.options[1].text = t.advisory.seasons.Summer;
        seasonSelect.options[2].text = t.advisory.seasons.Rainy;
    }

    const soilSelect = document.getElementById('advSoil');
    if (soilSelect) {
        soilSelect.options[0].text = t.advisory.soils.Clay;
        soilSelect.options[1].text = t.advisory.soils.Loam;
        soilSelect.options[2].text = t.advisory.soils.Sandy;
    }

    // Update Chatbot Welcome if it's the initial message
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow && chatWindow.children.length === 1) {
        chatWindow.children[0].innerText = t.chatbot.welcome;
    }

    // Toggle Button Styles
    document.getElementById('btn-en').classList.toggle('active-lang', lang === 'en');
    document.getElementById('btn-te').classList.toggle('active-lang', lang === 'te');

    // Refresh Crop Guide if active
    if (typeof showCropGuide === 'function') showCropGuide();

    // Refresh Location Dropdowns if active
    if (typeof window.refreshLocDropdowns === 'function') window.refreshLocDropdowns();
}
