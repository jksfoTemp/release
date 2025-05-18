// Function to load content dynamically
async function loadContent(page) {
  try {
    const response = await fetch(`pages/${page}.html`);
    if (!response.ok) {
      throw new Error(`Failed to load page: ${page}`);
    }
    const html = await response.text();
    const contentContainer = document.getElementById("main-content");
    contentContainer.innerHTML = html;

    // Execute scripts in the loaded content
    executeScripts(contentContainer);
    initializeSection(page); // Call init function
  } catch (error) {
    document.getElementById(
      "main-content"
    ).innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
  }
}

function executeScripts(containerElement) {
  const scripts = containerElement.querySelectorAll("script");
  scripts.forEach((script) => {
    const newScript = document.createElement("script");
    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.textContent = script.textContent;
    }
    newScript.async = false; // Important for script order, if needed.
    document.body.appendChild(newScript);
    newScript.remove();
  });
}

// TODO: What are the names of the sections?

function initializeSection(page) {
  // This function should contain ALL the code that needs to run
  // when a section is loaded, including event listeners.
  console.log(`Routing.js - Initializing section: ${page}`);

  if (page === "home") {
    const homeDiv =
      document.getElementById(
        "home-content"
      ); /* Might need to change this element name was: home-div */
    if (homeDiv) {
      // Check if the element exists
      homeDiv.addEventListener("click", () => {
        console.log("Home div clicked!");
      });
    }
    // Any other home section init
  } else if (page === "about") {
    // Initialize about section
  } else if (page === "contact") {
    //Initialize contact section
  }
  // ... Add cases for all your sections
}

function handleRouteChange() {
  const hash = window.location.hash;
  const page = hash.substring(1) || "home";
  loadContent(page);
}

// Function to load reusable components
async function loadComponent(componentId, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load component: ${componentId} from ${url}`);
    }
    const html = await response.text();
    document.getElementById(componentId).innerHTML = html;
  } catch (error) {
    console.error(`Failed to load component ${componentId}:`, error);
    document.getElementById(
      componentId
    ).innerHTML = `<p>Failed to load ${componentId}</p>`;
  }
}

// Load header and footer, then handle initial route
Promise.all([
  loadComponent("header-container", "./components/header.html"),
  loadComponent("footer-container", "./components/footer.html"),
])
  .then(() => {
    handleRouteChange(); // Initial load
    window.addEventListener("hashchange", handleRouteChange); // Listen for changes
  })
  .catch((error) => {
    console.error("Error loading initial components:", error);
  });
