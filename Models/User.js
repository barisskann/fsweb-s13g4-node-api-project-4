function getId() {
  return Math.random();
}

let user = [
];

const find = () => {
  return Promise.resolve(user);
};
const findById = (id) => {
  return Promise.filter((r) => r.id == id);
};
const Insert = (data) => {
  user = [...user, { ...data, userId: getId() }];
  return Promise.resolve(user);
};

module.exports = {
  find,
  findById,
  Insert,
};
