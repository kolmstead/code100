function save(document) {
  let id = document.id;
  localStorage.setItem(id, JSON.stringify(document));
  console.log('did it save?');
}