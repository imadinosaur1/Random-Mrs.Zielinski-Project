// components/sprites.js
// SVG sprite characters for Joel, Michael, and concept emotions

const Sprites = {

    // Returns an SVG sprite wrapped in a container div
    // mood: 'neutral' | 'happy' | 'concerned' | 'stressed' | 'sad'
    joel(mood = 'neutral') {
        const wrap = Utils.createElement('div', 'sprite-wrap sprite-wrap--joel');
        const label = Utils.createElement('span', 'sprite-label', 'Joel');
        wrap.innerHTML = Sprites._joelSVG(mood);
        wrap.appendChild(label);
        return wrap;
    },

    michael(mood = 'neutral') {
        const wrap = Utils.createElement('div', 'sprite-wrap sprite-wrap--michael');
        const label = Utils.createElement('span', 'sprite-label', 'Michael');
        wrap.innerHTML = Sprites._michaelSVG(mood);
        wrap.appendChild(label);
        return wrap;
    },

    // Both hosts side by side
    both(joelMood = 'neutral', michaelMood = 'neutral') {
        const row = Utils.createElement('div', 'sprite-row');
        row.appendChild(Sprites.joel(joelMood));
        row.appendChild(Sprites.michael(michaelMood));
        return row;
    },

    // Concept emotion sprite (used to illustrate topics)
    concept(type) {
        const wrap = Utils.createElement('div', 'sprite-wrap sprite-wrap--concept');
        wrap.innerHTML = Sprites._conceptSVG(type);
        return wrap;
    },

    // ── Joel SVG (taller build, darker hair) ──
    _joelSVG(mood) {
        const face = Sprites._face(mood, '#F4C89A', '#3B2A1A');
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 96" width="80" height="120">
            <!-- Body -->
            <rect x="18" y="52" width="28" height="30" rx="4" fill="#2E4A8F"/>
            <!-- Neck -->
            <rect x="27" y="46" width="10" height="8" fill="#F4C89A"/>
            <!-- Head -->
            <rect x="16" y="18" width="32" height="30" rx="10" fill="#F4C89A"/>
            <!-- Hair -->
            <rect x="16" y="14" width="32" height="12" rx="6" fill="#3B2A1A"/>
            <rect x="16" y="18" width="6" height="10" rx="3" fill="#3B2A1A"/>
            <!-- Ears -->
            <rect x="12" y="26" width="5" height="8" rx="2" fill="#F4C89A"/>
            <rect x="47" y="26" width="5" height="8" rx="2" fill="#F4C89A"/>
            <!-- Face -->
            ${face}
            <!-- Arms -->
            <rect x="6" y="52" width="12" height="8" rx="4" fill="#2E4A8F"/>
            <rect x="46" y="52" width="12" height="8" rx="4" fill="#2E4A8F"/>
            <!-- Hands -->
            <circle cx="9" cy="64" r="5" fill="#F4C89A"/>
            <circle cx="55" cy="64" r="5" fill="#F4C89A"/>
            <!-- Legs -->
            <rect x="19" y="80" width="11" height="14" rx="3" fill="#1A2A4A"/>
            <rect x="34" y="80" width="11" height="14" rx="3" fill="#1A2A4A"/>
            <!-- Mic indicator -->
            <circle cx="32" cy="90" r="3" fill="#f87171" opacity="0.9"/>
        </svg>`;
    },

    // ── Michael SVG (slightly shorter, lighter hair) ──
    _michaelSVG(mood) {
        const face = Sprites._face(mood, '#FDDBB4', '#8B6914');
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 96" width="80" height="120">
            <!-- Body -->
            <rect x="18" y="52" width="28" height="30" rx="4" fill="#2D7A4F"/>
            <!-- Neck -->
            <rect x="27" y="46" width="10" height="8" fill="#FDDBB4"/>
            <!-- Head -->
            <rect x="17" y="20" width="30" height="28" rx="9" fill="#FDDBB4"/>
            <!-- Hair -->
            <rect x="17" y="16" width="30" height="10" rx="5" fill="#8B6914"/>
            <rect x="44" y="20" width="4" height="8" rx="2" fill="#8B6914"/>
            <!-- Ears -->
            <rect x="13" y="27" width="5" height="8" rx="2" fill="#FDDBB4"/>
            <rect x="46" y="27" width="5" height="8" rx="2" fill="#FDDBB4"/>
            <!-- Face -->
            ${face}
            <!-- Arms -->
            <rect x="6" y="52" width="12" height="8" rx="4" fill="#2D7A4F"/>
            <rect x="46" y="52" width="12" height="8" rx="4" fill="#2D7A4F"/>
            <!-- Hands -->
            <circle cx="9" cy="64" r="5" fill="#FDDBB4"/>
            <circle cx="55" cy="64" r="5" fill="#FDDBB4"/>
            <!-- Legs -->
            <rect x="19" y="80" width="11" height="14" rx="3" fill="#1A3A2A"/>
            <rect x="34" y="80" width="11" height="14" rx="3" fill="#1A3A2A"/>
            <!-- Mic indicator -->
            <circle cx="32" cy="90" r="3" fill="#f87171" opacity="0.9"/>
        </svg>`;
    },

    // ── Face expressions ──
    _face(mood, skinColor, hairColor) {
        const eyes = `<circle cx="26" cy="30" r="2.5" fill="#222"/>
                      <circle cx="38" cy="30" r="2.5" fill="#222"/>
                      <circle cx="27" cy="29" r="1" fill="white"/>
                      <circle cx="39" cy="29" r="1" fill="white"/>`;

        const mouths = {
            neutral:   `<path d="M27 38 Q32 40 37 38" stroke="#A0522D" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
            happy:     `<path d="M26 37 Q32 43 38 37" stroke="#A0522D" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
            concerned: `<path d="M27 40 Q32 37 37 40" stroke="#A0522D" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
            stressed:  `<path d="M26 40 Q29 36 32 39 Q35 36 38 40" stroke="#A0522D" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
            sad:       `<path d="M27 41 Q32 36 37 41" stroke="#A0522D" stroke-width="1.5" fill="none" stroke-linecap="round"/>`
        };

        const brows = {
            neutral:   ``,
            happy:     `<path d="M23 25 Q26 23 29 25" stroke="#555" stroke-width="1.2" fill="none"/>
                        <path d="M35 25 Q38 23 41 25" stroke="#555" stroke-width="1.2" fill="none"/>`,
            concerned: `<path d="M23 26 Q26 23 29 26" stroke="#555" stroke-width="1.5" fill="none"/>
                        <path d="M35 26 Q38 23 41 26" stroke="#555" stroke-width="1.5" fill="none"/>`,
            stressed:  `<path d="M23 24 Q26 27 29 24" stroke="#555" stroke-width="1.5" fill="none"/>
                        <path d="M35 24 Q38 27 41 24" stroke="#555" stroke-width="1.5" fill="none"/>`,
            sad:       `<path d="M23 25 Q26 28 29 25" stroke="#555" stroke-width="1.5" fill="none"/>
                        <path d="M35 25 Q38 28 41 25" stroke="#555" stroke-width="1.5" fill="none"/>`
        };

        return `${brows[mood] || ''}${eyes}${mouths[mood] || mouths.neutral}`;
    },

    // ── Concept sprites (emotions/situations) ──
    _conceptSVG(type) {
        const concepts = {
            stress: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="28" fill="#2a1a0a" stroke="#facc15" stroke-width="2"/>
                <text x="32" y="22" text-anchor="middle" font-size="18">😤</text>
                <text x="32" y="48" text-anchor="middle" font-size="9" fill="#facc15" font-family="sans-serif">STRESS</text>
            </svg>`,
            anxiety: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="28" fill="#0a0a2a" stroke="#6c8eff" stroke-width="2"/>
                <text x="32" y="22" text-anchor="middle" font-size="18">😰</text>
                <text x="32" y="48" text-anchor="middle" font-size="9" fill="#6c8eff" font-family="sans-serif">ANXIETY</text>
            </svg>`,
            depression: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="28" fill="#0a0a1a" stroke="#8b90b0" stroke-width="2"/>
                <text x="32" y="22" text-anchor="middle" font-size="18">😔</text>
                <text x="32" y="48" text-anchor="middle" font-size="9" fill="#8b90b0" font-family="sans-serif">DEPRESSION</text>
            </svg>`,
            happy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="28" fill="#0a1a0a" stroke="#4ade80" stroke-width="2"/>
                <text x="32" y="22" text-anchor="middle" font-size="18">😊</text>
                <text x="32" y="48" text-anchor="middle" font-size="9" fill="#4ade80" font-family="sans-serif">WELLNESS</text>
            </svg>`,
            help: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                <circle cx="32" cy="32" r="28" fill="#1a0a1a" stroke="#a78bfa" stroke-width="2"/>
                <text x="32" y="22" text-anchor="middle" font-size="18">🤝</text>
                <text x="32" y="48" text-anchor="middle" font-size="9" fill="#a78bfa" font-family="sans-serif">SUPPORT</text>
            </svg>`
        };
        return concepts[type] || concepts.happy;
    }
};