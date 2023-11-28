const tabbedPaneParent = document.querySelector(".tabbedPane");
const tabbedPanel = tabbedPaneParent.querySelector(".tabContainer").getElementsByTagName("input");
const tabbedContent = tabbedPaneParent.querySelector(".descriptionContainer").getElementsByClassName("description");
let lastSelectedPanelIdx = 0;

tabbedContent[0].style.display = "block";

for (let i = 0; i < tabbedPanel.length; i++) {
    tabbedPanel[i].addEventListener("change", function () {
        tabbedContent[lastSelectedPanelIdx].style.display = "none";
        tabbedContent[i].style.display = "block";
        lastSelectedPanelIdx = i;
    });
}