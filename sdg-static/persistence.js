function save(id, document) {
  localStorage.setItem(id, JSON.stringify(document));
}

function get(id) {
  return JSON.parse(localStorage.getItem(id));
}

const get2 = (id) => {
  return Promise.resolve()
    .then( () => JSON.parse(localStorage.getItem(id)));
};

function get3(id) {
  return Promise.resolve()
    .then( () => JSON.parse(localStorage.getItem(id)));
}