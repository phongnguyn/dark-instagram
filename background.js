chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && 
        tab.url.includes("instagram.com") && 
        !tab.url.includes("?theme=dark") && 
        !tab.url.includes("stories") &&
        !tab.url.includes("/p/") &&
        !tab.url.includes("/reel/")) {
        const newURL = tab.url.split("?")[0].concat("?theme=dark");
        console.log("hello world");
        chrome.tabs.sendMessage(tabId, {
            type: "unloaded",
            link: newURL,
        });
    } 
});                                    