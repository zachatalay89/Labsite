function copyText() {
    const text = document.getElementById("bibtex").innerText;
    const new_input = document.createElement('input');
    new_input.value = text
    document.body.appendChild(new_input)
    // select value of new_input
    new_input.select();
    // exec copy command
    document.execCommand("copy");
    document.body.removeChild(new_input);

    // alert("copy success");
}

// Keyboard navigation for carousel
document.addEventListener("keydown", function (event) {
    const carousel = document.querySelector("#demoVisualsCarousel");
    // Check if the carousel exists
    if (carousel) {
        console.log("Carousel found, listening for keydown events"); // Debug: Log when the carousel is found
        // Check if the key pressed is ArrowLeft or ArrowRight
        if (event.key === "ArrowLeft") {
            // Navigate to the previous slide
            carousel.querySelector(".carousel-control-prev").click();
        } else if (event.key === "ArrowRight") {
            // Navigate to the next slide
            carousel.querySelector(".carousel-control-next").click();
        }
    }
});