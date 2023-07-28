const local = { name: "Oleg" };

const localJS = JSON.stringify(local);

const localJP = JSON.parse(localJS);

const user = localJS;

localStorage.user = user;

const newUser = localStorage.user;

console.log(newUser)