const heroGallery = document.getElementById("hero-gellery");
function change_hero() {

    var images = [
        "../assets/images/img/1.jpg",
        "../assets/images/img/2.jpg",
        "../assets/images/img/3.jpg",
        "../assets/images/img/4.jpg",
        "../assets/images/img/5.jpg"
    ];


    heroGallery.src = images[1];
}