var chckbox = document.querySelectorAll('.checkbox');
var chckdiv = document.querySelectorAll('.checkbox div');
var todotxt = document.querySelectorAll('.td-txt');
var todoList = document.querySelectorAll('#items .todo');
var todoItems = document.querySelectorAll('#items .todo .td-txt');

var all = document.querySelector('#all');
var active = document.querySelector('#active');
var comp = document.querySelector('#comp');
var removebtn = document.querySelectorAll('.todo-btn');
var infobtns = document.querySelectorAll('.sort');
var itemleft = document.querySelector('#itemsLeft');
var clearComp = document.querySelector('#clearComp');
var chckbtn = document.querySelector('#newcheck');
itemleft.innerText = todoItems.length + " items left";
const visibleitems = ()=>{
    let viselem = []
    let todoItvis = document.querySelectorAll('#todo-list .todo')
    todoItvis.forEach(el=>{
        if(el.classList.contains('hidden') == false && el.classList.contains('info') == false){
            viselem.push(el);
        }
    })
    return viselem;
}
const checkfunction = ()=>{
    chckbox = document.querySelectorAll('.checkbox');
    chckdiv = document.querySelectorAll('.checkbox div');
    todotxt = document.querySelectorAll('.td-txt');
    todoList = document.querySelectorAll('#items .todo');
    todoItems = document.querySelectorAll('#items .todo .td-txt');
    
}
const checkboxagain = ()=>{
    checkfunction();
    for(let i = 0; i<chckbox.length; i++){
        chckbox[i].addEventListener('click', ()=>{
            if(chckdiv[i].classList.contains('checked')){
                chckdiv[i].classList.remove('checked');
                todotxt[i].classList.remove('done');
                todoList[i].classList.remove('done');
            }else{
                chckdiv[i].classList.add('checked');
                todotxt[i].classList.add('done');
                todoList[i].classList.add('done');
            }
        })
    }
    for(let i = 0; i<todoItems.length; i++){
        removebtn[i].addEventListener('click', ()=>{
            if(todoList[i].classList.contains('info') == false){
                todoList[i].remove();
            }
            let todo = document.querySelectorAll('#todo-list .todo');
            itemleft.innerText = todo.length-1 + " items left";
        })
    }
}
const newelem = (txt)=>{
    let div = document.createElement('div');
    div.classList.add('todo');
    let check = document.createElement('span');
    check.classList.add('checkbox');
    let checkdiv = document.createElement('div');
    check.appendChild(checkdiv);
    let todotext = document.createElement('p');
    todotext.classList.add('td-text');
    todotext.innerText = txt;
    let todobtn = document.createElement('button');
    todobtn.classList.add('todo-btn');
    div.appendChild(check);
    div.appendChild(todotext);
    div.appendChild(todobtn);
    let todolistid = document.querySelector('#items');
    todolistid.appendChild(div);
    checkfunction();
    checkboxagain();
}

checkfunction();
checkboxagain();



// BUTTONS
infobtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('activ')){
            btn.classList.remove('activ');
        }else{
            infobtns.forEach(bt=>bt.classList.remove('activ'))
            btn.classList.add('activ');
        }
    })
});

// ALL 
all.addEventListener('click', ()=>{
    let todo = document.querySelectorAll('#todo-list .todo');
    console.log(todo);
    todo.forEach(el=>{
    el.classList.remove('hidden');
    });
    let viselement = visibleitems()
    itemleft.innerText = viselement.length + " items left";
});

// ACTIVE
active.addEventListener('click', ()=>{
    let todo = document.querySelectorAll('#todo-list .todo');
    todo.forEach(el=>{
        el.classList.remove('hidden');
    });
    todo.forEach(el=>{
        if(el.classList.contains('done')){
            el.classList.add('hidden');
            let viselement = visibleitems()
            itemleft.innerText = viselement.length + " items left";
        }else{
            el.classList.remove('hidden');
            let viselement = visibleitems()
            itemleft.innerText = viselement.length + " items left";
        }
    })
});

// COMPLETED
comp.addEventListener('click', ()=>{
    let todo = document.querySelectorAll('#todo-list .todo');
    todo.forEach(el=>{
        el.classList.remove('hidden');
    });
    todo.forEach(el=>{
        if(el.classList.contains('done') && el.classList.contains('info' == false)){
            el.classList.remove('hidden');
            let viselement = visibleitems()
            itemleft.innerText = viselement.length + " items left";
        }else if(el.classList.contains('done') == false && el.classList.contains('info') == false){
            el.classList.add('hidden');
            let viselement = visibleitems()
            itemleft.innerText = viselement.length + " items left";
        }
    });
});

// CLEAR COMPLETED
clearComp.addEventListener('click', ()=>{
    let doned = document.querySelectorAll('.done');
    doned.forEach(el=>{
        el.remove();
    })
    let todo = document.querySelectorAll('#todo-list .todo');
        itemleft.innerText = todo.length-1 + " items left";
});



// NEW ELEMENT

chckbtn.addEventListener('click', ()=>{
    let txtinput = document.querySelector('#newinput');
    if(txtinput.value != ""){
        newelem(txtinput.value);
    }  
})