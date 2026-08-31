const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
    })
})

// Help iframe of webgl demos get access to the keyboard by giving them focus when clicked
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("demo");
    if (!iframe) {
        return;
    }
    iframe.addEventListener("load", function () {
        try {
            const iframeDoc = iframe.contentWindow.document;
            iframeDoc.addEventListener("mousedown", function () {
                iframe.contentWindow.Module.canvas.focus();
            });
        } catch (e) {
            console.error(e);
        }
    });
});

const projectData = {
    'game': [
        { title: 'On The Wing', link: 'portfolio/004_onthewing.html', imgSrc: 'img/portfolio_thumbnails/004_onthewing.jpg', label: 'Unreal' },
        { title: 'Mine Mine', link: 'portfolio/001_MineMine.html', imgSrc: 'img/portfolio_thumbnails/001_MineMine.jpg', label: 'Raylib & C++' },
        { title: 'Abraxas', link: 'portfolio/003_abraxas.html', imgSrc: 'img/portfolio_thumbnails/003_abraxas.jpg', label: 'OpenGL & C++' },
        { title: 'Shadow Dimension', link: 'portfolio/002_Shadow.html', imgSrc: 'img/portfolio_thumbnails/002_Shadow.jpg', label: 'Raylib & C++' }
    ],

    'workexperiences': [
        { title: 'Escape Velocity', link: 'portfolio/001_EscapeVelocity.html', imgSrc: 'img/portfolio_thumbnails/001_EscapeVelocity.jpg', label: 'Unreal' }
    ],

    'graphics': [
        { title: 'hello', link: 'portfolio/01_hello.html', imgSrc: 'img/portfolio_thumbnails/01_hello.jpg', label: 'OpenGL' },
        { title: 'meshes', link: 'portfolio/02_meshes.html', imgSrc: 'img/portfolio_thumbnails/02_meshes.jpg', label: 'OpenGL' },
        { title: 'fog', link: 'portfolio/03_fog.html', imgSrc: 'img/portfolio_thumbnails/03_fog.jpg', label: 'OpenGL' },
        { title: 'toon', link: 'portfolio/04_toon.html', imgSrc: 'img/portfolio_thumbnails/04_toon.jpg', label: 'OpenGL' }
    ]
};



function changeContent(category) {
    const selectedSet = projectData[category];
    const links = document.querySelectorAll('.portfolio__item'); 
    const images = document.querySelectorAll('.portfolio__img');
    const labels = document.querySelectorAll('.image-label');

    const grid = document.querySelector('.portfolio');

    grid.innerHTML = '';
    

    selectedSet.forEach(item => {
        const itemHTML = `
        <a href="${item.link}" class="portfolio__item">
                <div class="image-container">
                    <img src="${item.imgSrc}" alt="" class="portfolio__img" />
                    <span class="image-label label-used">${item.label}</span>
                </div>
            </a>
        `;
        grid.insertAdjacentHTML('beforeend', itemHTML);
    });
}
