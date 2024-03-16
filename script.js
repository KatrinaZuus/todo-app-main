let bodythemeColor = document.getElementsByTagName("body")[0]
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let rectangle = document.querySelector(".rectangle")
let container = document.querySelector(".container")
let bg = document.querySelector(".bg")
let darkBg = document.querySelector(".dark-bg")
let leftClear = document.querySelector(".left-clear")
let todo1 = document.querySelector("todo1")
let listOfTodo = document.querySelector(".list-of-todo")

// change theme
moon.addEventListener("click", ()=>{
    bodythemeColor.classList.add("dark")
})

sun.addEventListener("click", ()=>{
    bodythemeColor.classList.remove("dark")
})

// add todo

let itemsQty = document.querySelector(".items-qty")
let inputField = document.querySelector(".create-a-new-todo")
let i = 1
inputField.addEventListener('keypress', function (e) {
  
    
    if (e.key === 'Enter' && i===5) {
        todoadd = document.createElement(`div`)
        todoadd.classList.add("todo5") 
        listOfTodo.appendChild(todoadd)

        todotext = document.createElement(`div`)
        todotext.classList.add("todotext")
        todoadd.appendChild(todotext)
        todotext.innerHTML=inputField.value

        todocross = document.createElement(`div`)
        todocross.classList.add("todocross")
        todoadd.appendChild(todocross)
        todocross.innerHTML = "X"

        todooval = document.createElement(`div`)
        todooval.classList.add("todooval")
        todoadd.appendChild(todooval)

        todocheck = document.createElement(`div`)
        todocheck.classList.add("todocheck")
        todooval.appendChild(todocheck)
        todocheck.innerHTML = "v"
       
        inputField.value = ""
        itemsQty.innerText = i
        i=i+1   
     } 
     if (e.key === 'Enter' && i===4) {
        todoadd = document.createElement(`div`)
        todoadd.classList.add("todo4") 
        listOfTodo.appendChild(todoadd)

        todotext = document.createElement(`div`)
        todotext.classList.add("todotext")
        todoadd.appendChild(todotext)
        todotext.innerHTML=inputField.value

        todocross = document.createElement(`div`)
        todocross.classList.add("todocross")
        todoadd.appendChild(todocross)
        todocross.innerHTML = "X"

        todooval = document.createElement(`div`)
        todooval.classList.add("todooval")
        todoadd.appendChild(todooval)

        todocheck = document.createElement(`div`)
        todocheck.classList.add("todocheck")
        todooval.appendChild(todocheck)
        todocheck.innerHTML = "v"
        
        inputField.value = ""
        itemsQty.innerText = i
        i=i+1
     } 

     if (e.key === 'Enter' && i===3) {
        todoadd = document.createElement(`div`)
        todoadd.classList.add("todo3") 
        listOfTodo.appendChild(todoadd)

        todotext = document.createElement(`div`)
        todotext.classList.add("todotext")
        todoadd.appendChild(todotext)
        todotext.innerHTML=inputField.value

        todocross = document.createElement(`div`)
        todocross.classList.add("todocross")
        todoadd.appendChild(todocross)
        todocross.innerHTML = "X"

        todooval = document.createElement(`div`)
        todooval.classList.add("todooval")
        todoadd.appendChild(todooval)

        todocheck = document.createElement(`div`)
        todocheck.classList.add("todocheck")
        todooval.appendChild(todocheck)
        todocheck.innerHTML = "v"

        inputField.value = ""
        itemsQty.innerText = i
        i=i+1
     } 

     if (e.key === 'Enter' && i===2) {
        todoadd = document.createElement(`div`)
        todoadd.classList.add("todo2") 
        listOfTodo.appendChild(todoadd)
        
        todotext = document.createElement(`div`)
        todotext.classList.add("todotext")
        todoadd.appendChild(todotext)
        todotext.innerHTML=inputField.value
        
        todocross = document.createElement(`div`)
        todocross.classList.add("todocross")
        todoadd.appendChild(todocross)
        todocross.innerHTML = "X"

        todooval = document.createElement(`div`)
        todooval.classList.add("todooval")
        todoadd.appendChild(todooval)

        todocheck = document.createElement(`div`)
        todocheck.classList.add("todocheck")
        todooval.appendChild(todocheck)
        todocheck.innerHTML = "v"
        
        inputField.value = ""
        itemsQty.innerText = i
        i=i+1 
     } 

     if (e.key === 'Enter' && i===1) {
        todoadd = document.createElement(`div`)
        todoadd.classList.add("todo1") 
        listOfTodo.appendChild(todoadd)
      
        
        todotext = document.createElement(`div`)
        todotext.classList.add("todotext")
        todoadd.appendChild(todotext)
        todotext.innerHTML=inputField.value


        // ასე დამატება არ მომწონს, img ვერ ჩავსვი
        todocross = document.createElement(`div`)
        todocross.classList.add("todocross")
        todoadd.appendChild(todocross)
        todocross.innerHTML = "X"

        todooval = document.createElement(`div`)
        todooval.classList.add("todooval")
        todoadd.appendChild(todooval)

        todocheck = document.createElement(`div`)
        todocheck.classList.add("todocheck")
        todooval.appendChild(todocheck)
        todocheck.innerHTML = "v"

        inputField.value = ""
        itemsQty.innerText = i
        i=i+1
     } 

    })


    todooval = Array.from(document.getElementsByClassName("todooval"))
     todocheck = document.querySelector(".todocheck")
     todooval.forEach((event) => {
         event.addEventListener("click", ()=>{
             todocheck.style.display = "block"
         })
         
     });


    
    
     

