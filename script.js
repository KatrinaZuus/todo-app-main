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
let editText = document.querySelector(".edit-text")
let alertText = document.querySelector(".alert-text")
let alert = document.querySelector(".alert")

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
    let leftCleartop = 65
    let reordertop = 375
    let containerheigth = 1024
    let activeitems = 0
    let removeitems = 0
    let newtop

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

                activeitems = activeitems + 1
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
                    changed: false,  
                    })
                    
//  todo ლისტების მინიშვნა, აღდგენა და წაშლა

    itemsQty.innerText = `${activeitems}`
                    // აქ გაფილტვრის და ამოშლის შემთხვევაში ვერ ვაკეთებ todo-ებს შორის მანძილი რომ გავაქრო
                    todo.map((each)=>{
                        each.oval.addEventListener("click", ()=>{
                            if (each.completed == false){
                                each.oval.style.backgroundImage = "linear-gradient(135deg, #5df, #c058f3)"
                                each.text.style.textDecoration = "line-through"
                                each.check.style.display = "block"
                                each.text.style.opacity = "0.5"
                                each.completed = true

                            // each.text.style.color = "#494c6b"
                            // დარქის შემთხვევაში აქ როგორ შევცვალო სტილი? ფერი რომ ვერ დავსვი opacity-ით შევცვალე
                            
                            // იმავე ღილაკზე დაჭერით მიდოდა მონიშვნის მოხსნა, მაგრამ ერთის გამოტოვებით მუშაობს,
                            // ამიტომ მონიშვნის მოხსნა undo-ზე დავსვი
                                    // if (each.completed == true){
                                    //      each.oval.style.backgroundImage = "none"
                                    //      each.text.style.textDecoration = "none"
                                    //      each.check.style.display = "none"
                                    //      each.text.style.opacity = "1"
                                    //      each.completed = false
                                    // } 
                            } 
                        })

                        each.edit.addEventListener("click", ()=>{
                            if (each.completed == true){
                                each.check.style.display = "none"
                                each.text.style.textDecoration = "none"
                                each.oval.style.backgroundImage = "none"
                                each.text.style.opacity = "1"
                                each.completed = false
                            }
                        })

                        each.cross.addEventListener("click", ()=>{
                            if (each.completed == true){
                                each.maindiv.style.display = "none"
                                each.completed = null
                            
                            // currentTop = each.maindiv.style.top
                            // console.log(currentTop)
                            // currentTopValue = parseInt(currentTop.replace(`px`), ``)
                            // console.log(currentTopValue)
                            // newTopValue = currentTopValue - 65
                            // console.log(newTopValue)
                            // console.log(each.maindiv[i])
                            // each.maindiv.nextElementSibling.style.top = newTopValue + `px`

                                removeitems = removeitems + 1
                                activeitems = activeitems - removeitems
                                itemsQty.innerText = `${activeitems}`  
                                removeitems = 0 
                            }
                        }) 

                        clearcompleted.addEventListener("click", ()=>{
                            if (each.completed == true) {
                                each.check.style.display = "none"
                                each.text.style.textDecoration = "none"
                                each.oval.style.backgroundImage = "none"
                                each.text.style.opacity = "1"
                            each.completed = false
                            }
                        })
                    })
// todo ჩანაწერის ცვლილება  
                    todo.filter((each)=>{
                        each.text.addEventListener("click", ()=>{
                            if ( each.changed == false){
                                each.changed = true
                                container.style.opacity = "0.5"
                                alert.style.display = "flex"
                                alertText.style.display = "block"
                                editText.style.display = "block"
                                alertText.value = each.text.innerText
                            }

                        editText.addEventListener("click", ()=>{

                            if (each.changed == true){
                                each.text.innerText = alertText.value
                                alert.style.display = "none"
                                alertText.style.display = "none"
                                editText.style.display = "none"
                                container.style.opacity = "1"
                                each.changed = false
                            }
                        })
                        })
                    })

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











       
     

