let bodythemeColor = document.getElementsByTagName("body")[0]
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let rectangle = document.querySelector(".rectangle")
let container = document.querySelector(".container")
let bg = document.querySelector(".bg")
let darkBg = document.querySelector(".dark-bg")
let leftClear = document.querySelector(".left-clear")
let listOfTodo = document.querySelector(".list-of-todo")
let reorder = document.querySelector(".reorder")
let all = document.querySelector(".all")
let active = document.querySelector(".active")
let complete = document.querySelector(".completed")
let clearcompleted = document.querySelector(".clear-completed")


// თემების შეცვლა
moon.addEventListener("click", ()=>{
    bodythemeColor.classList.add("dark")
})

sun.addEventListener("click", ()=>{
    bodythemeColor.classList.remove("dark")
})

let itemsQty = document.querySelector(".items-qty")
let inputField = document.querySelector(".create-a-new-todo")






    let addtop = -65
    let items = 0
    let leftCleartop = 65
    let reordertop = 375
    let containerheigth = 1024
    let removeitem = 0

    let todo=[]
    let todoadd=[]
    let todotext=[]
    let todocross=[]
    let todoedit=[]
    let todooval=[]
    let todocheck=[]
  
//  todo ლისტების დამატება
        inputField.addEventListener('keypress', function (e) {
            
            if (e.key === 'Enter' && inputField.value !== "") {
                items = items + 1
                leftCleartop = leftCleartop + 65 
                leftClear.style.top = `${leftCleartop}px`

                reordertop = reordertop + 65
                reorder.style.top = `${reordertop}px`

                containerheigth = containerheigth + 65
                container.style.height = `${containerheigth}px`
  
                todoadd = document.createElement(`div`)
                todoadd.classList.add("todo") 
                listOfTodo.appendChild(todoadd)
                addtop = addtop+65
                todoadd.style.top = `${addtop}px`
                
                
                todotext = document.createElement(`div`)
                todotext.classList.add("todotext")
                todoadd.appendChild(todotext)
                todotext.innerHTML=inputField.value 

                todocross = document.createElement(`div`)
                todocross.classList.add("todocross")
                todoadd.appendChild(todocross)
                // აქ როგორ დავამატო img?? "X" არ მომწონს
                todocross.innerHTML = "X"


                todooval = document.createElement(`div`)
                todooval.classList.add("todooval")
                todoadd.appendChild(todooval)
        
                todocheck = document.createElement(`div`)
                todocheck.classList.add("todocheck")
                todooval.appendChild(todocheck)
                todocheck.innerHTML = "v"
           
                todoedit = document.createElement(`div`)
                todoedit.classList.add("todoedit")
                todoadd.appendChild(todoedit)
                todoedit.innerHTML = "undo"

                inputField.value = ""
                              
                todo.push ({
                    maindiv: todoadd,
                    text: todotext,
                    edit: todoedit,
                    cross: todocross,
                    oval: todooval,
                    check: todocheck,
                    completed: false,
                    deleted: false,
                    
                    })
                    
//  todo ლისტების მინიშვნა, აღდგენა და წაშლა
                    

                    // აქ გაფილტვრის და ამოშლის შემთხვევაში ვერ ვაკეთებ todo-ებს შორის მანძილი რომ გავაქრო
                    todo.map((each)=>{
                        
                        each.oval.addEventListener("click", ()=>{
                            each.oval.style.backgroundImage = "linear-gradient(135deg, #5df, #c058f3)"
                            each.text.style.textDecoration = "line-through"
                            each.check.style.display = "block"
                            each.completed = true
                        }) 
                        
                        each.edit.addEventListener("click", ()=>{
                            each.check.style.display = "none"
                            each.text.style.textDecoration = "none"
                            each.oval.style.backgroundImage = "none"
                            each.completed = false
                        })

                        
                        
                     // ამოშლის დროს todo-ესბი რაოდენობას ვერ ვაკლებ და ამოშლილ todo-ს შორის ადგილს ვერ ვაუქმებ
                        each.cross.addEventListener("click", ()=>{
                            if (each.completed == true){
                            each.maindiv.style.display = "none"
                            each.completed = null
                            removeitem = removeitem + 1
                            // addtop = addtop-65
                            // each.maindiv.nextSibling.style.top = `${addtop}px` 
                            }     

                        })  

                        clearcompleted.addEventListener("click", ()=>{
                            each.check.style.display = "none"
                            each.text.style.textDecoration = "none"
                            each.oval.style.backgroundImage = "none"
                            each.completed = false
                        })
                            
                              
                    })

                    itmeNumber = items - removeitem
                itemsQty.innerText = `${itmeNumber}`

// todo ლისტების გაფილტვრა
                    active.addEventListener("click", ()=>{
                        todo.filter((each)=>{
                            if (each.completed == true) {
                                each.maindiv.style.display = "none"
                            }
                            if (each.completed == false) {
                                each.maindiv.style.display = "flex"
                            }
                        })
                    })


                    complete.addEventListener("click", ()=>{
                        todo.filter((each)=>{
                            if (each.completed == false) {
                                each.maindiv.style.display = "none"
                            }
                            if (each.completed == true) {
                                each.maindiv.style.display = "flex"
                            }
                        })
                    })


                    all.addEventListener("click", ()=>{
                        todo.filter((each)=>{
                            if (each.completed == false || each.completed == true) {
                                each.maindiv.style.display = "flex"
                            }
                        })
                    })

        }

    })














       
     

