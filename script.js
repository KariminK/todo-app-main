var chckbox = document.querySelectorAll('.checkbox');
var todotxt = document.querySelectorAll('.td-txt');
var todoList = document.querySelectorAll('#items .todo');
var todolistid = document.querySelector('#items');
var all = document.querySelector('#all');
var active = document.querySelector('#active');
var comp = document.querySelector('#comp');
var removebtn = document.querySelectorAll('.todo-btn');
var infobtns = document.querySelectorAll('.sort');
var itemleft = document.querySelector('#itemsLeft');
var clearComp = document.querySelector('#clearComp');
var addbtn = document.querySelector('#newcheck');
itemleft.innerText = todoList.length + " items left";
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
const newelem = (txt)=>{
    let div = document.createElement('div');
    div.classList.add('todo');
    let check = document.createElement('div');
    check.classList.add('checkbox');
    let todotext = document.createElement('p');
    todotext.classList.add('td-text');
    todotext.innerText = txt;
    let todobtn = document.createElement('button');
    todobtn.classList.add('todo-btn');
    div.appendChild(check);
    div.appendChild(todotext);
    div.appendChild(todobtn);
    todolistid.appendChild(div);
    todoList += div;
    chckbox += check;
    removebtn += todobtn;
}
const checkboxfunction = ()=>{
    for (let i = 0; i < todoList.length; i++) {
        chckbox[i].addEventListener('click', ()=>{
            if(todoList[i].classList.contains('done')){
                chckbox[i].classList.remove('checked');
                todoList[i].classList.remove('done');
            }else{
                chckbox[i].classList.add('checked');
                todoList[i].classList.add('done');
            }
        })
    }
}

checkboxfunction();

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

addbtn.addEventListener('click', ()=>{
    let txtinput = document.querySelector('#newinput');
    if(txtinput.value != ""){
        newelem(txtinput.value);
    }
})