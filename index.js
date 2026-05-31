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
    const secret = document.getElementById('snorf-secret');
    const prevButton = document.getElementById('previous-term');
    const randomButton = document.getElementById('random-term');
    const nextButton = document.getElementById('next-term');
    const quotesContainer = document.getElementById('featured-quotes');
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
    let snorfCount = 0;
    let unlocked = false;
    let visibleNoteIndexes = [];

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

    const resetSecretState = () => {
        snorfCount = 0;
        unlocked = false;
        secret.hidden = true;
        featuredCard.classList.remove('snorf-card--awake');
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
        secret.hidden = !isSnorf || !unlocked;

        if (!isSnorf) {
            resetSecretState();
        }

        if (shouldUpdateHash) {
            updateHash(term);
        }
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
        if (terms[activeIndex].slug !== 'snorf') {
            return;
        }

        if (unlocked) {
            wiggleWhiskers();
            return;
        }

        unlocked = true;
        secret.hidden = false;
        featuredCard.classList.add('snorf-card--awake');
        wiggleWhiskers();
    };

    const nudgeSnorf = () => {
        if (terms[activeIndex].slug !== 'snorf') {
            return;
        }

        snorfCount += 1;

        if (snorfCount >= 5) {
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

    const renderQuotes = () => {
        quotesContainer.innerHTML = visibleNoteIndexes
            .map((noteIndex, slotIndex) => {
                const note = fieldNotes[noteIndex];
                const longClass = note.length > 150 ? ' field-note--long' : '';

                return `
                <blockquote class="field-note${longClass}" data-note-slot="${slotIndex}" tabindex="0" title="Swap this field note">
                    <p>“${note}”</p>
                </blockquote>
            `;
            })
            .join('');
    };

    const rerollNote = (slotIndex) => {
        const blockedIndexes = visibleNoteIndexes.filter((_noteIndex, index) => index !== slotIndex);
        visibleNoteIndexes[slotIndex] = getRandomNoteIndex(blockedIndexes);
        renderQuotes();
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

    featuredCard.addEventListener('click', (event) => {
        if (event.target.closest('a') || event.target.closest('button')) {
            return;
        }

        nudgeSnorf();
    });

    featuredCard.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        event.preventDefault();
        nudgeSnorf();
    });

    window.addEventListener('hashchange', () => showTerm(getIndexFromHash(), false));

    visibleNoteIndexes = [0, 1, 2].slice(0, fieldNotes.length);
    renderQuotes();
    showTerm(getIndexFromHash(), false);

    quotesContainer.addEventListener('click', (event) => {
        const note = event.target.closest('.field-note');

        if (!note) {
            return;
        }

        rerollNote(Number(note.dataset.noteSlot));
    });

    quotesContainer.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }

        const note = event.target.closest('.field-note');

        if (!note) {
            return;
        }

        event.preventDefault();
        rerollNote(Number(note.dataset.noteSlot));
    });
})();
