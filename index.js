document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "DSCF9001 10R.JPG",
        "DSCF9018 10R.JPG",
        "DSCF9085.JPG",
        "DSCF9191 20R - 10R.JPG",
        "DSCF9249 10R.JPG",
        "DSCF0120 10R.JPG",
        "DSCF0043 10R.JPG",
        "DSCF6311 10r.JPG",
        "DSCF6325 10r.JPG",
        "XT2H0146 12R.JPG",
        "XT2H0150 10R kop.JPG",
    ];

    let currentIndex = 0;
    const banner = document.querySelector(".banner-galery");

    // Tampilkan gambar pertama saat load
    banner.style.backgroundImage = `url('${images[currentIndex]}')`;

    function changeBanner() {
        currentIndex = (currentIndex + 1) % images.length;
        banner.style.backgroundImage = `url('${images[currentIndex]}')`;
    }


    setInterval(changeBanner, 10000);
});
// === NAVBAR RESPONSIVE ===
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
// === ANIMASI SAAT HALAMAN DIBUKA ===
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Saat klik menu, beri efek fade-out sebelum pindah halaman
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            document.body.classList.remove("fade-in");
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 400); // tunggu animasi sebelum pindah
        });
    });
});
