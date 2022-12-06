(() => {
    let currentLink = "";
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, link } = obj
        if (type === "unloaded") {
            currentLink = link;
            loadLink();
        }
    });
    const loadLink = () => {
        window.location.href = currentLink;
    }
})();
