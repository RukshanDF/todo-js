var i = 0;

function add(){
    document.getElementById('element').innerHTML += '<li id="todo-item-' + i + '"><input type="checkbox" /><span class="todo1"></span><input type="button" value="x" class="close" onclick="deletEntry(' + i + ')" /></li>' 
    document.getElementsByClassName('todo1')[i].innerHTML = document.getElementsByClassName('new')[0].value;
    i++;
} 

