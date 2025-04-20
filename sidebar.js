// sidebar.js

function renderTabs(tabs) {
    const tabList = document.getElementById('tab-list');
    tabList.innerHTML = ''; // Clear existing content
  
    for (const tab of tabs) {
      const li = document.createElement('li');
      li.textContent = tab.title;
      tabList.appendChild(li);
    }
  }
  
  // Query all tabs in all windows
  browser.tabs.query({})
    .then(renderTabs)
    .catch(console.error);
