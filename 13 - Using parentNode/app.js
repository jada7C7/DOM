const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

list.addEventListener("click",(event)=>{
    if(event.target.tagName =="LI"){
    let li = event.target;
    console.log(li)
    let ul = li.parentNode;
    console.log(ul)
    ul.removeChild(li);
}
})