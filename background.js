

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "menu-search") {
    // Seçili metni al
    const selectedText = info.selectionText;
    console.log(selectedText)
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
