const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function syncHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setMenuOpen(isOpen) {
  nav?.classList.toggle("is-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  navToggle?.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
}

navToggle?.addEventListener("click", () => {
  setMenuOpen(!nav?.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("is-open")) {
    setMenuOpen(false);
    navToggle?.focus();
  }
});

window.matchMedia("(max-width: 1020px)").addEventListener("change", () => {
  setMenuOpen(false);
});

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
