const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
const openModalButtons1 = document.querySelectorAll("[data-modal-target]");
const closeModalButtons1 = document.querySelectorAll("[data-close-button]");

openModalButtons1.forEach((button) => {
    button.addEventListener("click", () => {
        const modal1 = document.querySelector(button.dataset.modalTarget);
        openModal1(modal1);
    });
});

overlay.addEventListener("click", () => {
    const modals1 = document.querySelectorAll(".modal1.active");
    modals1.forEach((modal1) => {
        closeModal1(modal1);
    });
});

closeModalButtons1.forEach((button) => {
    button.addEventListener("click", () => {
        const modal1 = button.closest(".modal1");
        closeModal1(modal1);
    });
});

function openModal1(modal1) {
    if (modal1 == null) return;
    modal1.classList.add("active");
    overlay.classList.add("active");
}

function closeModal1(modal1) {
    if (modal1 == null) return;
    modal1.classList.remove("active");
    overlay.classList.remove("active");
}
const openModalButtons2 = document.querySelectorAll("[data-modal-target]");
const closeModalButtons2 = document.querySelectorAll("[data-close-button]");

openModalButtons2.forEach((button) => {
    button.addEventListener("click", () => {
        const modal2 = document.querySelector(button.dataset.modalTarget);
        openModal2(modal2);
    });
});

overlay.addEventListener("click", () => {
    const modals2 = document.querySelectorAll(".modal2.active");
    modals2.forEach((modal2) => {
        closeModal2(modal2);
    });
});

closeModalButtons2.forEach((button) => {
    button.addEventListener("click", () => {
        const modal2 = button.closest(".modal2");
        closeModal2(modal2);
    });
});

function openModal2(modal2) {
    if (modal2 == null) return;
    modal2.classList.add("active");
    overlay.classList.add("active");
}

function closeModal2(modal2) {
    if (modal2 == null) return;
    modal2.classList.remove("active");
    overlay.classList.remove("active");
}

window.addEventListener("scroll", () => {
    const modal2 = document.getElementById("modal2");
    const endPosition = end.getBoundingClientRect().top + window.scrollY;
    const screenPosition = window.innerHeight + window.scrollY;

    if (screenPosition > endPosition) {
        openModal2(modal2);
    }
});





