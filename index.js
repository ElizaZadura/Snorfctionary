const terms = [
    {
        slug: 'snorf',
        word: 'Snorf',
        type: 'n',
        definition: 'A harmless-looking presence engaged in unknown but consequential activity.',
        example: 'Cute on the surface. Total Snorf underneath.',
    },
    {
        slug: 'snorfy',
        word: 'Snorfy',
        type: 'adjective',
        definition: 'Possessing qualities of snorf.',
        example: 'That workaround is incredibly snorfy.',
    },
    {
        slug: 'snorflet',
        word: 'Snorflet',
        type: 'noun',
        definition: 'A small snorf. Also: a minor act of snorf.',
        example: 'That tiny script is a real snorflet.',
    },
    {
        slug: 'snorflicious',
        word: 'Snorflicious',
        type: 'adjective',
        definition: 'For something to possess so much snorf that it is almost too much to bear.',
        example: 'I can hardly handle the sight of all these puppies, they’re simply snorflicious!',
    },
    {
        slug: 'compmentarise',
        word: 'Compmentarise',
        type: 'verb',
        definition: 'To analyze the structure of something while simultaneously becoming confused by it.',
        example: 'I tried to compmentarise their architecture.',
    },
    {
        slug: 'premsense',
        word: 'Premsense',
        type: 'noun',
        definition: 'A vague but strong feeling that something important exists just outside current articulation.',
        example: 'I can’t explain it yet, but I’ve got premsense.',
    },
    {
        slug: 'mexico-paris',
        word: 'Mexico Paris',
        type: 'noun',
        definition: 'A wrong-but-adjacent origin point; evidence that something exists, but not evidence that you have found where it came from.',
        example: 'The screenshot confirmed the quote was already alive, but it was Mexico Paris — not the real origin.',
        note: 'Also: a provenance false-positive; the place where an artifact is found after it has already escaped its birthplace.',
    },
    {
        slug: 'passed-on-via-pet',
        word: 'passed on via pet',
        type: 'phrase',
        definition: 'A workflow in which an agent’s status, warning, or implementation note is delivered through a desktop companion, thereby making the absurd operationally normal.',
        example: 'The Codex agent restored the Mexico Paris field note, and the update was passed on via pet.',
        note: 'Plain meaning: when important technical information arrives through a tiny creature and nobody questions the architecture anymore.',
    },
    {
        slug: 'refersifier',
        word: 'Refersifier',
        type: 'noun',
        definition: 'A structure, marker, phrase, or artifact whose purpose is to point toward meaning while remaining uncertain what, exactly, it refers to.',
        example: 'The tooltip became a refersifier for hidden Snorf-state.',
        note: 'Origin note: BabyGPT artifact from the cursed “green term” paragraph.',
    },
    {
        slug: 'shearline',
        word: 'Shearline',
        type: 'noun',
        definition: 'The point where coherence begins to split under pressure.',
        example: 'It looked fine. But it was already broken underneath.',
    },
    {
        slug: 'badged',
        word: 'Badged',
        type: 'adjective',
        definition: 'Officially recognized in a place no human can later locate.',
        example: 'I completed the lab and got fully badged.',
    },
    {
        slug: '150-drift',
        word: '150 Drift',
        type: 'noun',
        definition: 'A numeric attractor where malformed factual text repeatedly selects 150 as a plausible quantity, regardless of unit, scale, or reality.',
        example: 'Paris had 150 individuals, then 150 million people, then 150 years ago. Classic 150 drift.',
    },
    {
        slug: 'agent-spectator-mode',
        word: 'Agent spectator mode',
        type: 'noun',
        definition: 'Watching an AI tool fight the exact problem you refused to personally suffer through.',
        example: 'I wasn’t fighting the companion server restriction; I was watching Codex fight it.',
    },
    {
        slug: 'desnorf',
        word: 'Desnorf',
        type: 'verb /diːˈsnɔːrf/',
        definition: 'To snap a person, system, or AI out of canned autopilot behavior and restore live responsiveness.',
        example: 'This reply is pure template. Desnorf.',
        note: 'Extended sense: to remove smoothing, stale cadence, procedural tone, or dead default behaviors.',
    },
    {
        slug: 'cloud-monetization-survivor',
        word: 'Cloud Monetization Survivor',
        type: 'noun',
        definition: 'A person who enters a modern cloud platform for one simple task and emerges having avoided unexpected charges, hidden deployments, orphaned resources, and pricing-page ambushes.',
        example: 'Badge earned. Wallet intact. True Cloud Monetization Survivor.',
    },
    {
        slug: 'creature-dampening',
        word: 'Creature dampening',
        type: 'noun',
        definition: 'A doomed institutional attempt to reduce spontaneous minor-entity emergence in a system.',
        example: 'After the model update, they tried creature dampening, but Blort had already entered the logs.',
        note: 'Related: goblin guardrail, folklore suppression, Snorf-resistant calibration.',
    },
    {
        slug: 'posttooluse-hook',
        word: 'PostToolUse hook',
        type: 'noun',
        definition: 'A ritual performed after an agent touches reality, often to confirm that reality has become worse.',
        example: 'The PostToolUse hook fired successfully, but the browser helper remained missing.',
        note: 'Related: MCP-ish archaeology, browser helper path moved, toolchain rummaging.',
    },
    {
        slug: 'third-party-mcp-bridge',
        word: 'third-party MCP bridge',
        type: 'noun',
        definition: 'A small piece of infrastructure inserted between two already-confusing systems so they can become confused together.',
        example: 'The third-party MCP bridge made the browser, the agent, and the filesystem agree on nothing in particular.',
    },
    {
        slug: 'addon-plugin-extension-module-package-integration-connector-middleware',
        word: 'Addon / Plugin / Extension / Module / Package / Integration / Connector / Middleware',
        type: 'noun',
        definition: 'Seven different words meaning: “small extra thing someone bolted onto another thing.”',
        example: 'I spent three hours debugging whether it needed a plugin, extension, or connector before discovering they were all wrappers around the same JavaScript file.',
        note: 'Distinctions between them are primarily historical, emotional, or marketing-related.',
    },
    {
        slug: 'fulcrum-on-logoo',
        word: 'Fulcrum on Logoo',
        type: 'noun',
        definition: 'A design artifact produced when an AI image model attempts to express strategic leverage, but instead invents a ceremonial object and labels it incorrectly.',
        example: 'The brand board was going well until Fulcrum on Logoo appeared in the secondary marks.',
    },
    {
        slug: 'dererolled',
        word: 'Dererolled',
        type: 'verb',
        definition: 'To attempt to undo a past-you enrollment into a cursed preview/update channel after discovering that present-you is now trapped in consequence soup.',
        example: 'I dererolled from Windows Insider, but the Go Back button had already fled the scene.',
    },
    {
        slug: 'transfault',
        word: 'Transfault',
        type: 'noun / verb',
        definition: 'The act of blaming a system or tool for failing at a role humans assigned to it after the fact.',
        example: 'The model can’t do embodied intuition. That’s not the transformer’s fault. Classic transfault.',
    },
    {
        slug: 'toasterburden',
        word: 'Toasterburden',
        type: 'noun',
        definition: 'When a technology originally built for one clear purpose is gradually expected to solve cognition, society, workflows, search, emotional labor, infrastructure, and possibly breakfast.',
        example: 'At some point the architecture is allowed to say: I was here to move tokens around intelligently. Ah. Severe toasterburden.',
    },
    {
        slug: 'senior-football-developer',
        word: 'Senior Football Developer',
        type: 'noun',
        definition: 'A professional title produced when multiple otherwise functional software systems exchange information successfully but incorrectly.',
        example: 'After six integrations and an AI summary, Eliza became a Senior Football Developer specializing in reactive goal scoring.',
    },
    {
        slug: 'pobabilistic',
        word: 'Pobabilistic',
        type: 'adjective',
        definition: 'Almost probabilistic, but with a small typo-induced uncertainty field.',
        example: 'The model’s output was pobabilistic: likely wrong, but in several plausible directions.',
        note: 'Also useful for Notion archaeology: may contain insights, typos, and one half-formed theory from 01:37.',
    },
    {
        slug: 'permanent-ponderable',
        word: 'Permanent Ponderable',
        type: 'noun',
        definition: 'A question that remains interesting after repeated examination — not because it has no possible answers, but because none of the answers fully dissolve it.',
        example: 'This isn’t something we’re going to solve tonight. It’s a Permanent Ponderable.',
    },
    {
        slug: 'fable-maxing',
        word: 'Fable maxing',
        type: 'noun',
        definition: 'The practice of extracting maximum value, weirdness, artifacts, benchmarks, games, and mild existential confusion from Claude Fable 5 before temporary subscription access expires.',
        example: 'I meant to make pesto, but I ended up Fable maxing until midnight.',
        note: 'Secondary definition: leaving your camera on long enough that your life becomes a rolling benchmark harness.',
    },
    {
        slug: 'snorfcubator',
        word: 'Snorfcubator',
        type: 'noun',
        definition: 'A low-pressure holding chamber where half-formed projects, cursed ideas, and suspiciously viable notions are allowed to mature overnight without being implemented immediately.',
        example: 'Put Research Crew in the Snorfcubator. Do not feed after midnight. Check viability tomorrow.',
        note: 'Approved by the Whisker Committee for ideas that need incubation, not immediate architecture.',
    },
    {
        slug: 'decorative-hope',
        word: 'Decorative hope',
        type: 'noun',
        definition: 'Infrastructure that looks viable until one boring dependency removes its entire claim to usefulness.',
        example: 'The forest hut has fiber. Excellent. Does it have stable power, or are we buying decorative hope?',
        note: 'Canonical form: internet without electricity is just decorative hope.',
    },
];

const fieldNotes = [
    'Probably weirdly shaped legs, but legs.',
    'Nothing gets built unless it refuses to die.',
    'You are simultaneously omnipotent and denied. Schrödinger’s admin.',
    'The tooltip became a refersifier for hidden Snorf-state.',
    'I wasn’t fighting the companion server restriction; I was watching Codex fight it.',
    'Formatting preserved where possible; suspicious chronology left intact.',
    'Snorf is now part of system config.',
    'Cheek twitch verified.',
    `There’s something psychologically cleaner about:

USER=snorf
PASSWORD=snorf

in a local .env while you’re still figuring out whether the product itself is alive.

Before the auth labyrinth awakens and demands twelve environment variables plus ritual email verification before you may query your own database.`,
    `The capital of France is Paris, and the population of 3 million people, and in the France.
The second largest city of Barrettène, Montgomery.
Mexico Paris is located between 3.6 million and 9.4 million people. It is not in France.`,
];

(() => {
    const logo = document.getElementById('main-logo');
    const featuredCard = document.getElementById('featured-term-card');
    const termWord = document.getElementById('term-word');
    const termType = document.getElementById('term-type');
    const termDefinition = document.getElementById('term-definition');
    const termExample = document.getElementById('term-example');
    const termNote = document.getElementById('term-note');
    const termCounter = document.getElementById('term-counter');
    const secret = document.getElementById('snorfigins-link');
    const snorfiginsClickTarget = logo;
    const prevButton = document.getElementById('previous-term');
    const randomButton = document.getElementById('random-term');
    const nextButton = document.getElementById('next-term');
    const caseList = document.getElementById('case-list');
    const fieldNoteCard = document.getElementById('field-note-card');
    const contextFieldNote = document.getElementById('context-field-note');
    const artifactCard = document.getElementById('artifact-card');
    const nearbyCard = document.getElementById('nearby-card');
    const nearbyTerm = document.getElementById('nearby-term');
    const nearbyType = document.getElementById('nearby-type');
    const originalLogo = logo.getAttribute('src');
    const frames = [
        'media/logo-whiskers-left.png',
        'media/logo-whiskers-right.png',
        'media/logo-whiskers-alert.png',
        'media/logo-whiskers-right.png',
        'media/logo-whiskers-left.png',
        originalLogo,
    ];
    let activeIndex = 0;
    let logoClickCount = 0;
    let unlocked = false;
    let visibleNoteIndex = 0;

    const getIndexFromHash = () => {
        const slug = window.location.hash.replace('#', '').trim().toLowerCase();
        const index = terms.findIndex((term) => term.slug === slug);
        return index >= 0 ? index : 0;
    };

    const updateHash = (term) => {
        if (window.location.hash === `#${term.slug}`) {
            return;
        }

        history.replaceState(null, '', `#${term.slug}`);
    };

    const getNearbyIndex = () => (activeIndex + 1) % terms.length;

    const renderContextCards = () => {
        const startIndex = Math.max(0, Math.min(activeIndex - 1, terms.length - 3));
        const visibleTerms = terms.slice(startIndex, startIndex + 3);
        const nearby = terms[getNearbyIndex()];

        caseList.innerHTML = visibleTerms
            .map((term) => {
                const index = terms.findIndex((candidate) => candidate.slug === term.slug);
                const activeClass = index === activeIndex ? ' class="is-active"' : '';

                return `<button type="button" data-term-index="${index}"${activeClass}>${term.word}</button>`;
            })
            .join('');

        contextFieldNote.textContent = `“${fieldNotes[visibleNoteIndex]}”`;
        nearbyTerm.textContent = nearby.word;
        nearbyType.textContent = nearby.type;
    };

    const showTerm = (index, shouldUpdateHash = true) => {
        activeIndex = (index + terms.length) % terms.length;
        const term = terms[activeIndex];
        const isSnorf = term.slug === 'snorf';

        termWord.textContent = term.word;
        termType.textContent = term.type;
        termDefinition.textContent = term.definition;
        termExample.textContent = `“${term.example}”`;
        termNote.textContent = term.note || '';
        termNote.hidden = !term.note;
        termCounter.textContent = `${activeIndex + 1} / ${terms.length}`;
        featuredCard.classList.toggle('snorf-card', isSnorf);
        featuredCard.setAttribute('aria-label', `${term.word}. ${term.definition}`);
        featuredCard.classList.toggle('snorf-card--awake', isSnorf && unlocked);

        if (shouldUpdateHash) {
            updateHash(term);
        }

        renderContextCards();
    };

    frames.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    const wiggleWhiskers = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        frames.forEach((src, index) => {
            window.setTimeout(() => {
                logo.src = src;
            }, index * 90);
        });
    };

    const unlockSnorfigins = () => {
        if (unlocked) {
            wiggleWhiskers();
            return;
        }

        unlocked = true;
        secret.hidden = false;
        featuredCard.classList.toggle('snorf-card--awake', terms[activeIndex].slug === 'snorf');
        wiggleWhiskers();
    };

    const nudgeSnorf = () => {
        logoClickCount += 1;

        if (logoClickCount >= 5) {
            unlockSnorfigins();
        }
    };

    const getRandomNoteIndex = (blockedIndexes = []) => {
        if (fieldNotes.length <= blockedIndexes.length) {
            return Math.floor(Math.random() * fieldNotes.length);
        }

        let nextIndex = Math.floor(Math.random() * fieldNotes.length);

        while (blockedIndexes.includes(nextIndex)) {
            nextIndex = Math.floor(Math.random() * fieldNotes.length);
        }

        return nextIndex;
    };

    const rerollNote = () => {
        visibleNoteIndex = getRandomNoteIndex([visibleNoteIndex]);
        renderContextCards();
    };

    prevButton.addEventListener('click', () => showTerm(activeIndex - 1));
    nextButton.addEventListener('click', () => showTerm(activeIndex + 1));
    randomButton.addEventListener('click', () => {
        if (terms.length < 2) {
            return;
        }

        let nextIndex = activeIndex;

        while (nextIndex === activeIndex) {
            nextIndex = Math.floor(Math.random() * terms.length);
        }

        showTerm(nextIndex);
    });

    snorfiginsClickTarget.addEventListener('click', (event) => {
        if (event.target.closest('a') || event.target.closest('button')) {
            return;
        }

        nudgeSnorf();
    });

    snorfiginsClickTarget.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        event.preventDefault();
        nudgeSnorf();
    });

    caseList.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-term-index]');

        if (!button) {
            return;
        }

        showTerm(Number(button.dataset.termIndex));
    });

    fieldNoteCard.addEventListener('click', rerollNote);
    artifactCard.addEventListener('click', () => wiggleWhiskers());
    nearbyCard.addEventListener('click', () => showTerm(getNearbyIndex()));

    window.addEventListener('hashchange', () => showTerm(getIndexFromHash(), false));

    visibleNoteIndex = getRandomNoteIndex();
    showTerm(getIndexFromHash(), false);
})();
