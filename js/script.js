document.addEventListener("DOMContentLoaded", function() {
    button = document.getElementById("burger")
    button.addEventListener('click', function() {
        document.querySelector("header").classList.toggle('open')
    })
})