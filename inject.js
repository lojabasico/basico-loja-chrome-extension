/*eslint-disable */

var query = new URLSearchParams(window.location.search)
if (!query.get('utm_source')) {

  chrome.storage.sync.get('store_name', function (data) {
    query.append('utm_source', 'loja')
    query.append('utm_medium', data.store_name)
    window.location.href = (window.location.origin + window.location.pathname) + '?' + query.toString()
  })
}
