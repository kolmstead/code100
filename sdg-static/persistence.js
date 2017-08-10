function save(id, document) {
  localStorage.setItem(id, JSON.stringify(document));
}

function get(id) {
  return JSON.parse(localStorage.getItem(id));
}