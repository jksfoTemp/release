// Function to load content dynamically
async function loadContent(page) {
    try {
        const response = await fetch(`pages/${page}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load page: ${page}`);
        }
        const html = await response.text();
        document.getElementById('main-content').innerHTML = html;
    } catch (error) {
        document.getElementById('main-content').innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
    }
}

// Function to load reusable components
async function loadComponent(componentId, url) {
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${componentId} from ${url}`);
        }
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
    } catch(error){
        console.error(`Failed to load component ${componentId}:`, error);
        document.getElementById(componentId).innerHTML = `<p>Failed to load ${componentId}</p>`;
    }

}

function handleRouteChange() {
    const hash = window.location.hash;
    const page = hash.substring(1) || 'home'; // Default to home

    loadContent(page);
}

// Load header and footer, then handle initial route
Promise.all([
    loadComponent('header-container', './components/header.html'),
    loadComponent('footer-container', './components/footer.html')
]).then(() => {
    handleRouteChange(); // Initial load
    window.addEventListener('hashchange', handleRouteChange); // Listen for changes
}).catch(error => {
    console.error("Error loading initial components:", error);
});