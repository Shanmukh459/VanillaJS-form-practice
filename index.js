const form = document.getElementById("sampleForm")

const displayFormData = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = new FormData(event.target)
  console.log(data)
  data.forEach((value, key) => console.log(key, value))
}
form.addEventListener("submit", displayFormData)
