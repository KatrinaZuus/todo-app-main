let bodythemeColor = document.getElementsByTagName("body")[0]
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let rectangle = document.querySelector(".rectangle")
let container = document.querySelector(".container")
let bg = document.querySelector(".bg")
let darkBg = document.querySelector(".dark-bg")
let leftClear = document.querySelector(".left-clear")


console.log()


moon.addEventListener("click", ()=>{
    bodythemeColor.classList.add("dark")
    
})

sun.addEventListener("click", ()=>{
    bodythemeColor.classList.remove("dark")
})


// enter addEventListener Code 
// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });