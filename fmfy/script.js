document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const panels = document.querySelectorAll(".panel");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        let grayscalePanels = [];
        let coloredPanels = [];

        panels.forEach(panel => {
            const panelTitle = panel.querySelector("h2").textContent.toLowerCase();
            const panelTags = Array.from(panel.querySelectorAll(".tag")).map(tag => tag.textContent.toLowerCase()).join(" ");

            if (panelTitle.includes(searchText) || panelTags.includes(searchText)) {
                panel.style.filter = "grayscale(0)"; // Reset grayscale
                panel.style.opacity = "1"; // Reset opacity
                coloredPanels.push(panel);
            } else {
                panel.style.filter = "grayscale(1)"; // Apply grayscale
                panel.style.opacity = "0.5"; // Reduce opacity
                grayscalePanels.push(panel);
            }
        });

        // Reorder panels
        const reorderedPanels = coloredPanels.concat(grayscalePanels);
        const mainContainer = document.querySelector(".container");
        mainContainer.innerHTML = ''; // Clear current panels

        // Append reordered panels
        reorderedPanels.forEach(panel => {
            mainContainer.appendChild(panel);
        });
    });
});
