browser.browserAction.onClicked.addListener(function (tab) {
  if (!tab.url.match(/https?:\/\/(www\.)?instapaper\.com\/text\?/i)) {
    browser.tabs.update(tab.id, { url: `http://www.instapaper.com/text?u=${tab.url}` });
  }
});
