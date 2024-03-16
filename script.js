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
  
    
    if (e.key === 'Enter' && i===5 && inputField.value !== "") {
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
     if (e.key === 'Enter' && i===4 && inputField.value !== "") {
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

     if (e.key === 'Enter' && i===3 && inputField.value !== "") {
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

     if (e.key === 'Enter' && i===2 && inputField.value !== "") {
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

     if (e.key === 'Enter' && i===1 && inputField.value !== "") {
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

     newoval = Array.from(document.querySelectorAll(".todooval"))
     checked = document.querySelectorAll(".todocheck")
     console.log(newoval[0])
    // ამ ფერზე ვერ დავსვი
    // `linear-gradient (135deg, #5df, #c058f3)` 

    
     
    
    let  checkedone = 0   
    one = newoval[0]
    
    one.addEventListener("click", ()=>{
        if (checkedone == 1){
        one.style.backgroundColor = "#fff"
        checkedone = 0
            } else {
                
        if (checkedone == 0){
            one.style.backgroundColor = "#c058f3"
            // todotext.style.textDecoration = "none"
            checkedone = 1                 
            }
        }
        })

    
    let  checkedtwo = 0   
    two = newoval[1]
    
    two.addEventListener("click", ()=>{
        if (checkedtwo == 1){
        two.style.backgroundColor = "#fff"
        // two.style.textDecoration = "underline"
        checkedtwo = 0
            } else {
                
        if (checkedtwo == 0){
            two.style.backgroundColor = "#c058f3"
            // two.style.textDecoration = "none"
            checkedtwo = 1                 
            }
        }
        })

    let  checkedthree = 0   
    three = newoval[2]
    
    three.addEventListener("click", ()=>{
        if (checkedthree == 1){
        three.style.backgroundColor = "#fff"
        // three.style.textDecoration = "underline"
            } else {
                
        if (checkedthree == 0){
            three.style.backgroundColor = "#c058f3"
            // three.style.textDecoration = "none"
            checkedthree = 1                 
            }
        }
        })


    let  checkedfour = 0   
    four = newoval[3]
        
    four.addEventListener("click", ()=>{
        if (checkedfour == 1){
        four.style.backgroundColor = "#fff"
        // four.style.textDecoration = "underline"
            } else {
                    
        if (checkedfour == 0){
            four.style.backgroundColor = "#c058f3"
            // four.style.textDecoration = "none"
            checkedfour = 1                 
            }
            }
            })

        
               
    let  checkedfive = 0   
        five = newoval[4]
            
        five.addEventListener("click", ()=>{
            if (checkedfive == 1){
            five.style.backgroundColor = "#fff"
            // five.style.textDecoration = "underline"
                } else {
                        
            if (checkedfive == 0){
                five.style.backgroundColor = "#c058f3"
                // five.style.textDecoration = "none"
                checkedfive = 1                 
                }
            }
            })















            })






       
     

