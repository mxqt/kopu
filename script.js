document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const images = document.querySelector(".images");
    const text = document.querySelector(".text");

    // Update positions
    images.style.transform = `translateY(calc(-50% + ${scrollPosition / 2}px))`;
    text.style.transform = `translateY(calc(-50% - ${scrollPosition / 2}px))`;
});