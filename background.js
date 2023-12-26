

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "menu-search") {
    const selectedText = info.selectionText;
    chrome.tabs.create({
      url: "https://www.trendyol.com/sr?q=" + selectedText,
    });
  }
});

chrome.contextMenus.create({
  id: 'menu-search',
  title: "Trendyol'da Ara '%s'",
  contexts: ["selection"]
});
