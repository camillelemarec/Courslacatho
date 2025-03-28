/**
 * Script de gestion des publicités pour le site de cours
 * À personnaliser avec votre ID Google AdSense
 */

// Fonction pour vérifier si l'utilisateur est sur mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Fonction pour charger les publicités
function loadAds() {
    // Ne pas charger les publicités sur la page d'accueil
    if (window.location.pathname === '/' || 
        window.location.pathname === '/index.html' ||
        window.location.href.indexOf('/index.html') !== -1) {
        hideAllAds();
        return;
    }
    
    // Si l'écran est trop petit, masquer les publicités latérales
    if (isMobile()) {
        hideAllAds();
    }
}

// Fonction pour masquer toutes les publicités
function hideAllAds() {
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Chargement des publicités au chargement de la page
window.addEventListener('load', loadAds);

// Rechargement des publicités lors du redimensionnement de la fenêtre
window.addEventListener('resize', loadAds); 