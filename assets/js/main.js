document.documentElement.classList.add('has-motion');

    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => { const isOpen = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', isOpen); toggle.textContent = isOpen ? '×' : '☰'; });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.querySelector('.comparison-slider').addEventListener('input', event => { const value = `${event.target.value}%`; document.querySelector('.comparison .after').style.width = value; document.querySelector('.comparison-handle').style.left = value; });
    document.getElementById('contact-form').addEventListener('submit', event => { const form = event.currentTarget; const status = form.querySelector('.form-status'); if (!form.checkValidity()) { event.preventDefault(); status.textContent = 'Bitte füllen Sie die Pflichtfelder korrekt aus.'; form.reportValidity(); } });

        const revealItems = document.querySelectorAll('.intro-grid > *, .section-head, .service, .process-step, .standard, .before-after, .project, .area-grid > *, .review, .faq-list details, .contact-grid > *, .map');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        revealItems.forEach(item => {
            item.classList.add('reveal');
        });

        if (reduceMotion || !('IntersectionObserver' in window)) {
            revealItems.forEach(item => item.classList.add('is-visible'));
        } else {
            const revealObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach(item => item.classList.add('is-visible'));
                        if (entry.target.classList.contains('reveal')) entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });

            document.querySelectorAll('section').forEach(section => revealObserver.observe(section));
        }
