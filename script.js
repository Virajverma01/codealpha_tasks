let slideIndex = 1;

function openModal() {
    document.getElementById("modal").style.display = "block";
    showSlides(slideIndex);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function plusSlides(n)