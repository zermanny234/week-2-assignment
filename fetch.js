let promise9 = fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json()).then(val => {
let result = val.map(post =>`<li>${post.title}</li>`)

document.body.innerHTML = result.join("")

})
console.log("checking33333", promise9);