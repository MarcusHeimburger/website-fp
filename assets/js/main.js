const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => { const isOpen = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', isOpen); toggle.textContent = isOpen ? '×' : '☰'; });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.querySelector('.comparison-slider').addEventListener('input', event => { const value = `${event.target.value}%`; document.querySelector('.comparison .after').style.width = value; document.querySelector('.comparison-handle').style.left = value; });
    document.getElementById('contact-form').addEventListener('submit', event => { const form = event.currentTarget; const status = form.querySelector('.form-status'); if (!form.checkValidity()) { event.preventDefault(); status.textContent = 'Bitte füllen Sie die Pflichtfelder korrekt aus.'; form.reportValidity(); } });
