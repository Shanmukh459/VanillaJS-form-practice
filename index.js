const app = document.getElementById("app-container")

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  const userElements = getUserElements(users)
  app.appendChild(userElements)
}

const getUserElements = (users) => {
  const ul = document.createElement("ul")
  ul.classList.add("list-group")
  const liElementsHtml = users.forEach((user) => {
    const li = document.createElement("li")
    li.classList.add("list-item")
    const name = document.createElement("p")
    name.innerHTML = user.name
    const email = document.createElement("p")
    email.innerHTML = user.email
    li.appendChild(name)
    li.appendChild(email)
    ul.appendChild(li)
  })

  return ul
}
fetchUsers()
