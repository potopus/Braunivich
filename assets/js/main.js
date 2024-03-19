let catalogBtn = document.querySelector(".mobile-menu__catalog");
let mainMenuMobile = document.querySelector(".main-menu-mobile");
// Получите элементы "li" внутри "sub-menu"
const subMenus = document.querySelectorAll(".sub-menu");
const subMenuItems = document.querySelectorAll(".sub-menu-wrapper>ul>li");
console.log(" submenu ");
console.log(subMenuItems);

catalogBtn.addEventListener("click", () => {
    mainMenuMobile.classList.toggle("active-grid");
    document.body.classList.toggle("lock");
});

if (window.innerWidth < 1001) {
    let mobileMainMenuElements = mainMenuMobile.querySelectorAll(":scope>.main-menu-list>li");
     console.log("меньше 1000");
    console.log(mobileMainMenuElements);
    mobileMainMenuElements.forEach((mobileMainMenuElement) => {

        mobileMainMenuElement.querySelector(":scope>a").addEventListener("click", () => {
            console.log("открытие/закрытие подокна");
            console.log(mobileMainMenuElement.querySelector(".sub-menu"));
            mobileMainMenuElement.querySelector(".sub-menu").classList.toggle("active");
        });
    });
}


// Функция, которая будет вызываться при срабатывании события
function removeActiveGridClass() {
    // Удалите класс "active-grid" из "main-menu-mobile"
    mainMenuMobile.classList.remove("active-grid");
    console.log("закрытие mainMenuMobile ");
    document.body.classList.remove("lock");
    subMenus.forEach(subMenu => {
        subMenu.classList.remove("active");

    });
}

// Переберите все элементы "li" и добавьте слушатель событий
subMenuItems.forEach((menuItem) => {

    menuItem.addEventListener("mousedown", removeActiveGridClass);
});

// чек по menu-item

const menuItems = document.querySelectorAll(".filter-menu-middle .menu-item");

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("filter-menu-item-active");
    });
});

// сброс фильтров

const resetFiltersBtn = document.querySelector(".filter__menu-settings-reset");
const sizesCheckBoxes = document.querySelectorAll('.filter__menu-sizes-items input[type="checkbox"]');

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove("filter-menu-item-active");
        });
        sizesCheckBoxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    });
}

// Открыть/закрыть фильтр меню

const filterMenuClose = document.querySelector(".filter__menu-close");
const collectionGalleryFilter = document.querySelector(".collection-gallery-filter");

if (collectionGalleryFilter) {
    collectionGalleryFilter.addEventListener("click", () => {
        document.querySelector(".collection-gallery-filter__menu").classList.add("filter-menu-active")
    });
    filterMenuClose.addEventListener("click", () => {
        document.querySelector(".collection-gallery-filter__menu").classList.remove("filter-menu-active")
    });
}

// accordion

const accordionItems = document.querySelectorAll(".product-card-size-accordion__item");
const accordionCross = document.querySelectorAll(".product-card-size-accordion__cross");
const crossline = document.querySelector(".product-card-size-accordion__crossline");
const accordDescription = document.querySelector(".product-card-size-accordion__description");


accordionItems.forEach(accordionItem => {
    // const accordionCross = accordionItem.querySelector(".product-card-size-accordion__cross");
    const accordionHeader = accordionItem.querySelector(".product-card-size-accordion__top");
    const crossline = accordionItem.querySelector(".product-card-size-accordion__crossline");
    const accordDescription = accordionItem.querySelector(".product-card-size-accordion__description");

    accordionHeader.addEventListener("click", () => {
        crossline.classList.toggle("crossline-hidden");
        accordDescription.classList.toggle("hidden-description");
    });
});