/* ============================================
   BELLA TAVOLA - Restaurant Landing Page
   Interactive JavaScript
   ============================================ */

(function () {
    'use strict';

    /* === Header scroll behavior === */
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    function onScroll() {
        const scrolled = window.scrollY > 50;
        header.classList.toggle('scrolled', scrolled);
        backToTop.classList.toggle('show', window.scrollY > 600);
    }

    /* === Mobile Navigation === */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Create overlay element
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        navOverlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function toggleMenu() {
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) closeMenu();
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    /* === Active nav link on scroll === */
    const sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    /* === Smooth scroll for anchor links === */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    /* === Menu Tabs === */
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuPanels = document.querySelectorAll('.menu-panel');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            menuTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            menuPanels.forEach(panel => {
                const isActive = panel.id === targetTab;
                panel.classList.toggle('active', isActive);
                panel.hidden = !isActive;

                // Re-trigger reveal animation on visible items
                if (isActive) {
                    panel.querySelectorAll('.menu-item').forEach((item, i) => {
                        item.classList.remove('in-view');
                        setTimeout(() => item.classList.add('in-view'), 80 * i);
                    });
                }
            });
        });
    });

    /* === Reservation form === */
    const reservationForm = document.getElementById('reservation-form');
    const formSuccess = document.getElementById('form-success');

    // Set min date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            const required = reservationForm.querySelectorAll('[required]');
            let valid = true;
            required.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = '#B5341E';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!valid) return;

            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.style.borderColor = '#B5341E';
                return;
            }

            // Simulate submission
            const btn = reservationForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                formSuccess.hidden = false;
                reservationForm.reset();
                setTimeout(() => { formSuccess.hidden = true; }, 6000);
            }, 1200);
        });
    }

    /* === Newsletter form === */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterSuccess = document.getElementById('newsletter-success');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.style.borderColor = '#B5341E';
                return;
            }
            newsletterSuccess.hidden = false;
            newsletterForm.reset();
            setTimeout(() => { newsletterSuccess.hidden = true; }, 5000);
        });
    }

    /* === Reveal on Scroll === */
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback
        revealElements.forEach(el => el.classList.add('in-view'));
    }

    /* === Theme Switcher === */
    const THEMES = ['gold', 'wine', 'forest', 'midnight'];
    const STORAGE_KEY = 'bt-theme';
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeDropdownMobile = document.getElementById('theme-dropdown-mobile');
    const allThemeOptions = document.querySelectorAll('.theme-option');
    const allThemeToggles = document.querySelectorAll('.theme-toggle');

    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'gold';
    }

    function applyTheme(theme) {
        if (THEMES.indexOf(theme) === -1) theme = 'gold';
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
        // Update active state on all theme options (desktop + mobile)
        allThemeOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.theme === theme);
        });
        // Update aria-pressed
        allThemeOptions.forEach(opt => {
            opt.setAttribute('aria-pressed', opt.dataset.theme === theme ? 'true' : 'false');
        });
    }

    function toggleDropdown(force) {
        if (!themeDropdown) return;
        const willOpen = force !== undefined ? force : !themeDropdown.classList.contains('open');
        themeDropdown.classList.toggle('open', willOpen);
        if (themeToggle) themeToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    }

    // Desktop toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });
    }

    // Click theme option (works for both desktop and mobile)
    allThemeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const theme = option.dataset.theme;
            applyTheme(theme);
            // Close desktop dropdown
            toggleDropdown(false);
            // On mobile, also close the mobile menu so user sees the result
            if (window.innerWidth <= 900 && navMenu.classList.contains('active')) {
                setTimeout(closeMenu, 250);
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (themeDropdown && themeDropdown.classList.contains('open')) {
            if (!e.target.closest('.theme-switcher')) {
                toggleDropdown(false);
            }
        }
    });

    // Close dropdown on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && themeDropdown && themeDropdown.classList.contains('open')) {
            toggleDropdown(false);
            if (themeToggle) themeToggle.focus();
        }
    });

    // Initialize theme from storage (sync with what head script already applied)
    applyTheme(getCurrentTheme());

    /* === Auto-update footer copyright year === */
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

    /* === Back to top === */
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* === Scroll events (throttled) === */
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = window.requestAnimationFrame(() => {
                onScroll();
                setActiveLink();
                scrollTimeout = null;
            });
        }
    });

    // Initial state
    onScroll();
    setActiveLink();

    /* === Add loaded class for initial animations === */
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        // Trigger initial hero reveals
        document.querySelectorAll('.hero .reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('in-view'), 150 + i * 150);
        });
    });

})();
