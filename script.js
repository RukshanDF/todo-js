var i = 0;
function add() {
    var li = document.createElement('li');
    var span = document.createElement('span');

    span.innerText = document.getElementById('todo-text').value;
    li.id = 'todo-item-' + i;
    li.innerHTML = '<input type="checkbox" onchange="commpleteItem(event, '+ i +')" />';
    li.appendChild(span);
    li.innerHTML += '<input type="button" value="x" class="close" onclick="deletEntry(' + i + ')" />' ;

    document.getElementById('todo-list').appendChild(li);
    i++;
} 

function deletEntry(index) {
    document.getElementById('todo-item-' + index ).remove();
}

function commpleteItem(e, index) {
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