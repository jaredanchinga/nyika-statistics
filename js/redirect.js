// Redirect script for Nyika Statistics website
(function() {
    // Don't redirect if already on coming-soon page
    if (window.location.pathname.includes('coming-soon.html')) {
        return;
    }
    
    // Don't redirect for asset files
    const path = window.location.pathname;
    if (path.startsWith('/css/') || 
        path.startsWith('/js/') || 
        path.startsWith('/images/') ||
        path.includes('favicon.ico')) {
        return;
    }
    
    // Redirect to coming-soon page
    window.location.href = '/coming-soon.html';
})();
