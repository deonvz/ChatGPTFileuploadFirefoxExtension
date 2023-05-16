function injectScript(tabId, scriptPath) {
    browser.tabs.executeScript(tabId, { file: scriptPath });
  }
  
  browser.webNavigation.onCompleted.addListener((details) => {
    const { tabId } = details;
    injectScript(tabId, 'content.js');
  }, { url: [{ schemes: ['http', 'https'] }] });
  