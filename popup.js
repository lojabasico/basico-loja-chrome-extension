/*eslint-disable */

chrome.storage.sync.get('store_name', function(data) {
    console.log('Value returned...', data)
    document.getElementById('nome_loja').value = data.store_name;
})

function saveConfig () {
  chrome.storage.sync.set({
    'store_name': document.getElementById('nome_loja').value
  })
}

document.getElementById('save').addEventListener('click', saveConfig)
