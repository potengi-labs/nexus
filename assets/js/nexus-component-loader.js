/* ==========================================================
POTENGI LABS COMPONENT LOADER
NEXUS v3.0
========================================================== */

class ComponentLoader {


constructor() {

    this.cache = new Map();
    this.loadedScripts = new Set();

}

async fetchHtml(url, forceReload = false) {

    if (!forceReload && this.cache.has(url)) {
        return this.cache.get(url);
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    this.cache.set(url, html);

    return html;

}

async executeScripts(container) {

    const scripts =
        container.querySelectorAll("script");

    for (const oldScript of scripts) {

        const newScript =
            document.createElement("script");

        if (oldScript.src) {

            if (
                this.loadedScripts.has(
                    oldScript.src
                )
            ) {
                continue;
            }

            this.loadedScripts.add(
                oldScript.src
            );

            await new Promise((resolve, reject) => {

                newScript.src =
                    oldScript.src;

                newScript.onload =
                    resolve;

                newScript.onerror =
                    reject;

                document.body.appendChild(
                    newScript
                );

            });

        } else {

            newScript.textContent =
                oldScript.textContent;

            document.body.appendChild(
                newScript
            );

        }

    }

}

async load(id, url, options = {}) {

    const {
        forceReload = false,
        onLoaded = null
    } = options;

    const container =
        document.getElementById(id);

    if (!container) {

        console.warn(
            `[Loader] Container não encontrado: ${id}`
        );

        return false;
    }

    try {

        const html =
            await this.fetchHtml(
                url,
                forceReload
            );

        container.innerHTML = html;

        await this.executeScripts(
            container
        );

        if (
            typeof onLoaded ===
            "function"
        ) {

            onLoaded(container);

        }

        return true;

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="component-error">
                <strong>Falha ao carregar componente</strong>
                <small>${url}</small>
            </div>
        `;

        return false;

    }

}

async loadMany(items = []) {

    return Promise.all(

        items.map(item =>

            this.load(
                item.id,
                item.url,
                item.options || {}
            )

        )

    );

}


}

/* ==========================================================
INSTÂNCIA GLOBAL
========================================================== */

const componentLoader =
new ComponentLoader();

/* ==========================================================
MENU MOBILE
========================================================== */

function initMenuToggle() {


document.addEventListener(
    "click",
    (e) => {

        const menuToggle =
            document.getElementById(
                "menuToggle"
            );

        const sidebar =
            document.querySelector(
                ".sidebar"
            );

        if (
            !menuToggle ||
            !sidebar
        ) return;

        if (
            e.target.closest(
                "#menuToggle"
            )
        ) {

            sidebar.classList.toggle(
                "show"
            );

            return;
        }

        if (
            !sidebar.contains(
                e.target
            )
        ) {

            sidebar.classList.remove(
                "show"
            );

        }

    }
);


}

/* ==========================================================
TAB LOADER
========================================================== */

const tabCache =
new Map();

async function loadTab(tabName) {


const tabContainer =
    document.getElementById(
        "tab-container"
    );

if (!tabContainer) return;

try {

    tabContainer.innerHTML = `
        <div class="loading">
            Carregando...
        </div>
    `;

    let html;

    const url =
        `./assets/tabs/${tabName}.html`;

    if (
        tabCache.has(url)
    ) {

        html =
            tabCache.get(url);

    } else {

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                "Tab não encontrada"
            );

        }

        html =
            await response.text();

        tabCache.set(
            url,
            html
        );

    }

    tabContainer.innerHTML =
        html;

    await componentLoader
        .executeScripts(
            tabContainer
        );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

} catch (error) {

    console.error(error);

    tabContainer.innerHTML = `
        <div class="component-error">
            Não foi possível carregar a aba.
        </div>
    `;

}


}

/* ==========================================================
EVENT DELEGATION
========================================================== */

function initTabs() {

document.addEventListener(
    "click",
    (e) => {

        const button =
            e.target.closest(
                ".menu-tab"
            );

        if (!button) return;

        document
            .querySelectorAll(
                ".menu-tab"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

        button.classList.add(
            "active"
        );

        loadTab(
            button.dataset.tab
        );

    }
);

}

/* ==========================================================
STARTUP
========================================================== */

document.addEventListener(
"DOMContentLoaded",
async () => {

    await componentLoader.loadMany([

        {
            id:
            "header-container",
            url:
            "assets/components/nexus-header.html"
        },

        {
            id:
            "sidebar-container",
            url:
            "assets/components/nexus-sidebar.html"
        },

        {
            id:
            "footer-container",
            url:
            "assets/components/nexus-footer.html"
        }

    ]);

    initMenuToggle();

    initTabs();

    if (
        document.getElementById(
            "tab-container"
        )
    ) {

        loadTab("hoje");

    }

}

);
