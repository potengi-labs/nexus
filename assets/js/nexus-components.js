
async function loadComponent(id, url) {
  const container = document.getElementById(id);

  if (!container) {
    console.warn(`Container não encontrado: ${id}`);
    return;
  }

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${url}`);
    }

    container.innerHTML = await response.text();

  } catch (error) {

    console.error(`Falha ao carregar ${url}`, error);

    container.innerHTML = `
      <div class="component-error">
        Erro ao carregar componente.
      </div>
    `;
  }
}

function initMenuToggle() {

  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".sidebar");
  const sidebarfull = document.querySelector(".sidebarfull");

  if (!menuToggle) return;

  menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("show");

      if (sidebarfull) {
    sidebarfull.classList.toggle("show");
        
  });

  document.addEventListener("click", (e) => {


  if (sidebar) {
    sidebar.classList.toggle("show");
  }

  if (sidebarfull) {
    sidebarfull.classList.toggle("show");
  }
    
    
  });

}

document.addEventListener("DOMContentLoaded", async () => {

  await Promise.all([

    loadComponent(
      "header-container",
      "assets/components/nexus-header.html"
    ),

    loadComponent(
      "sidebar-container",
      "assets/components/nexus-sidebar.html"
    ),

    loadComponent(
      "sidebarfull-container",
      "assets/components/nexus-sidebarfull.html"
    ),
    
    loadComponent( 
      "footer-container", 
      "assets/components/nexus-footer.html" 
    )

  ]);

  initMenuToggle();

});
