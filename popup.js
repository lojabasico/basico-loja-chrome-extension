/*eslint-disable */

chrome.storage.sync.get('store_name', function(data) {
    console.log('Value returned...', data)
    document.getElementById('nome_loja').value = data.store_name;
})

function saveConfig () {
  var nomeLoja = document.getElementById('nome_loja').value
  chrome.storage.sync.set({
    'store_name': nomeLoja
  })
  alert("Loja [" + nomeLoja + "] salva com sucesso!")
}

document.getElementById('save').addEventListener('click', saveConfig)
