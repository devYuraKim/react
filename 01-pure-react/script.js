//synchronous fetching
// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

//asynchronous fetching with fetch/then
// console.log(
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// );

//asynchronous fetching with async/await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("yura");
