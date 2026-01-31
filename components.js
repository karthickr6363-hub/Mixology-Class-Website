// Shared Components Injection
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initFooter();
});

function initNav() {
    const navHTML = `
    <nav x-data="{ mobileMenuOpen: false, scrolled: false }" 
         @scroll.window="scrolled = (window.pageYOffset > 20)"
         class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
         :class="scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg h-16 desktop:h-20' : 'bg-transparent h-20 desktop:h-24'">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <!-- Logo (Rule 16) -->
            <a href="index.html" class="flex items-center gap-2 group">
                <img src="favicon.svg" alt="Mixology Logo" class="w-10 h-10 transition-transform group-hover:scale-110">
                <span class="text-xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">MIXOLOGY</span>
            </a>

            <!-- Desktop Menu (Rule 32/29/30) -->
            <div class="hidden lg:flex items-center gap-4">
                <a href="index.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary transition-colors py-2">Home</a>
                <a href="home2.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary transition-colors py-2">Home 2</a>
                <div class="relative group" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center gap-1 text-xs xl:text-sm font-medium hover:text-primary py-2">
                        Classes <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <!-- Dropdown (Rule 26/27) -->
                    <div x-show="open" x-cloak 
                         class="absolute left-0 mt-2 w-48 rounded-xl shadow-2xl bg-white dark:bg-secondary-dark ring-1 ring-black ring-opacity-5 p-2 transition-all">
                        <a href="classes.html" class="block px-4 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary">All Classes</a>
                        <a href="classes.html#beginner" class="block px-4 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary">Beginner</a>
                        <a href="classes.html#advanced" class="block px-4 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary">Advanced</a>
                        <a href="classes.html#virtual" class="block px-4 py-2 text-sm rounded-lg hover:bg-primary/10 hover:text-primary">Virtual Classes</a>
                    </div>
                </div>
                <a href="events.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary py-2">Events</a>
                <a href="recipes.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary py-2">Recipes</a>
                <a href="pricing.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary py-2">Pricing</a>
                <a href="how-it-works.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary py-2">How It Works</a>
                <a href="about.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary py-2">About</a>
                <a href="contact.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary transition-colors py-2">Contact</a>
                <a href="dashboard.html" class="nav-link text-xs xl:text-sm font-medium hover:text-primary transition-colors py-2">Dashboard</a>
                
                <div class="flex items-center gap-3">
                    <a href="signup.html" class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 xl:px-6 py-2 rounded-full text-xs xl:text-sm font-bold transition-all hover:scale-105 flex items-center h-[42px] whitespace-nowrap">
                        SIGN UP
                    </a>
                    
                    <a href="pricing.html" class="bg-primary hover:bg-primary-dark text-white px-4 xl:px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold transition-all hover:scale-105 shadow-md shadow-primary/20 flex items-center h-[42px] whitespace-nowrap">
                        BOOK NOW
                    </a>
                </div>
                
                <button @click="toggleDarkMode()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i data-lucide="moon" x-show="!darkMode" class="w-5 h-5"></i>
                    <i data-lucide="sun" x-show="darkMode" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Mobile Menu Button (Rule 14) -->
            <div class="lg:hidden flex items-center gap-4">
                 <button @click="toggleDarkMode()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                    <i data-lucide="moon" x-show="!darkMode" class="w-5 h-5"></i>
                    <i data-lucide="sun" x-show="darkMode" class="w-5 h-5"></i>
                </button>
                <button @click="mobileMenuOpen = true" class="p-2 text-slate-900 dark:text-white">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Side Menu (Rule 14) -->
        <div x-show="mobileMenuOpen" 
             x-transition:enter="transition ease-out duration-300 transform"
             x-transition:enter-start="-translate-x-full"
             x-transition:enter-end="translate-x-0"
             x-transition:leave="transition ease-in duration-300 transform"
             x-transition:leave-start="translate-x-0"
             x-transition:leave-end="-translate-x-full"
             class="fixed inset-0 z-[60] lg:hidden"
             x-cloak>
            
            <div class="fixed inset-0 bg-black/50" @click="mobileMenuOpen = false"></div>
            
            <div class="relative flex flex-col w-4/5 max-w-sm h-full bg-white dark:bg-background-dark shadow-2xl p-6">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-2">
                        <img src="favicon.svg" alt="Mixology Logo" class="w-8 h-8">
                        <span class="text-xl font-serif font-bold text-slate-900 dark:text-white">MIXOLOGY</span>
                    </div>
                    <button @click="mobileMenuOpen = false" class="p-2 text-slate-500">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>

                <div class="space-y-2 overflow-y-auto flex-1">
                    <a href="index.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Home</a>
                    <a href="home2.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Home 2</a>
                    <a href="classes.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Classes</a>
                    <a href="events.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Events</a>
                    <a href="recipes.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Recipes</a>
                    <a href="pricing.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Pricing</a>
                    <a href="how-it-works.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">How It Works</a>
                    <a href="about.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">About</a>
                    <a href="contact.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Contact</a>
                    <a href="dashboard.html" class="block text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800">Dashboard</a>
                </div>

                <div class="mt-auto space-y-4 pt-6">
                    <a href="signup.html" class="block w-full text-center py-3 rounded-xl border-2 border-primary text-primary font-bold">Sign Up</a>
                    <a href="pricing.html" class="block w-full text-center py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30">BOOK NOW</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    const container = document.getElementById('nav-container');
    if (container) {
        container.innerHTML = navHTML;
        highlightActiveLink();
    }
}

function initFooter() {
    const footerHTML = `
    <footer class="bg-slate-50 dark:bg-black/40 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <!-- Brand Info (Rule 3) -->
                <div class="space-y-6">
                    <div class="flex items-center gap-2">
                        <img src="favicon.svg" alt="Mixology Logo" class="w-10 h-10">
                        <span class="text-xl font-serif font-bold text-slate-900 dark:text-white">MIXOLOGY</span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Hand-on cocktail classes for beginners to pros. Join us to shake, stir, and master the art of mixology.
                    </p>
                    <!-- Social Icons (Rule 7, 36) -->
                    <div class="flex items-center gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <i data-lucide="facebook" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                <!-- Navigation -->
                <div>
                    <h4 class="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Explore</h4>
                    <ul class="space-y-4">
                        <li><a href="index.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Home</a></li>
                        <li><a href="home2.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Home 2 (Marketing)</a></li>
                        <li><a href="classes.html" class="text-slate-500 hover:text-primary transition-colors text-sm">All Classes</a></li>
                        <li><a href="events.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Events & Parties</a></li>
                        <li><a href="recipes.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Recipe Library</a></li>
                    </ul>
                </div>

                <!-- Support -->
                <div>
                    <h4 class="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
                    <ul class="space-y-4">
                        <li><a href="pricing.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Pricing & Packages</a></li>
                        <li><a href="how-it-works.html" class="text-slate-500 hover:text-primary transition-colors text-sm">How It Works</a></li>
                        <li><a href="about.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Our Story</a></li>
                        <li><a href="contact.html" class="text-slate-500 hover:text-primary transition-colors text-sm">Contact Support</a></li>
                        <li><a href="dashboard.html" class="text-slate-500 hover:text-primary transition-colors text-sm">User Dashboard</a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div>
                    <h4 class="text-slate-900 dark:text-white font-bold mb-6">Ready to Shake?</h4>
                    <p class="text-sm text-slate-500 mb-4">Subscribe for exclusive recipes and event early-access.</p>
                    <div class="flex gap-2">
                        <input type="email" placeholder="Email" class="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all">
                        <button class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold transition-colors">Join</button>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-400 text-sm italic">Must be 21+ to join classes. Always drink responsibly.</p>
                <p class="text-slate-400 text-sm">© 2026 Mixology Masterclass. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    const container = document.getElementById('footer-container');
    const isSpecialPage = window.location.pathname.includes('login') ||
        window.location.pathname.includes('signup') ||
        window.location.pathname.includes('dashboard');

    if (container && !isSpecialPage) {
        container.innerHTML = footerHTML;
    }
}

function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-nav-link');
        } else {
            link.classList.remove('active-nav-link');
        }
    });
}
