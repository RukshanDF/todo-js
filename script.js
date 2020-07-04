var i = 0;

function add(){
    document.getElementById('element').innerHTML += '<li id="todo-item-' + i + '"><input type="checkbox" onchange="cancelItem(event, '+ i +')" /><span class="todo1"></span><input type="button" value="x" class="close" onclick="deletEntry(' + i + ')" /></li>' 
    document.getElementsByClassName('todo1')[i].innerHTML = document.getElementsByClassName('new')[0].value;
    i++;
} 

function deletEntry(index){
    document.getElementById('todo-item-' + index ).remove();
    i--;  
}

function cancelItem(e, index){
    var original;
    var newElement;

    if (e.target.checked) {
        original = document.querySelector('#todo-item-' + index + ' span');
        newElement = document.createElement('del');
        newElement.innerHTML = original.innerHTML;
        original.replaceWith(newElement);
    } else {
        original = document.querySelector('#todo-item-' + index + ' del'); 
        newElement = document.createElement('span');
        newElement.innerHTML = original.innerHTML;
        original.replaceWith(newElement);
    }
}