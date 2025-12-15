const features = document.querySelectorAll(".feature");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight - 100;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;

        if (featureTop < triggerPoint) {
            feature.style.opacity = "1";
            feature.style.transform = "translateY(0)";
        }
    });
});
