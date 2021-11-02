import sublinks from "./data.js";

const toggleButton = document.querySelector(".toggle-btn");
const closeButton = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkButtons = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

// Hide/Show sidebar
toggleButton.addEventListener("click", () => {
    sidebarWrapper.classList.add("show");
});

closeButton.addEventListener("click", () => {
    sidebarWrapper.classList.remove("show");
});

// set sidebar
sidebar.innerHTML = sublinks
    .map((item) => {
        const { links, page } = item;
        // const linkContent =
        return `
    <article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
        ${links
            .map((link) => {
                const { label, icon, url } = link;
                return `
            <a href="${url}"><i class="${icon}"></i>${label}</a>
            `;
            })
            .join("")}
    </div>
    </article>
    `;
    })
    .join("");

// submenu functionality on bigger screens
linkButtons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        const text = event.currentTarget.textContent;
        const tempBtn = event.currentTarget.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;

        const tempPage = sublinks.find(({ page }) => page === text);

        if (tempPage) {
            const { page, links } = tempPage;

            // changing the column layout based on the number of links to display
            let columns = "col-2";

            if (links.length === 3) {
                columns = "col-3";
            } else if (links.length > 3) {
                columns = "col-4";
            }

            submenu.innerHTML = `
            <section>
                <h4>${page}</h4>
                <div class="submenu-center ${columns}">
                    ${links
                        .map((link) => {
                            const { label, icon, url } = link;
                            return `
                        <a href="${url}"><i class="${icon}"></i>${label}</a>
                        `;
                        })
                        .join("")}
                </div>
            </section>
            `;

            submenu.classList.add("show");
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;
        }
    });
});

//
hero.addEventListener("mouseover", (event) => {
    submenu.classList.remove("show");
});

nav.addEventListener("mouseover", (event) => {
    if (!event.target.classList.contains("link-btn")) {
        submenu.classList.remove("show");
    }
});
