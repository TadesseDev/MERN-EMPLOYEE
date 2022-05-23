const createURL = `http://localhost:4000/employees/create`;

const createEmployee = (user) => {
  fetch(createURL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  console.log(JSON.stringify(user));
}

export { createEmployee }