console.log('YAY')
var query = new URLSearchParams(window.location.search)
if (!query.get('loja')) {
  query.append('loja', 1)
  window.location.href = (window.location.origin + window.location.pathname) + '?' + query.toString()
}
