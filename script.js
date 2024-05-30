// const inputItem = document.getElementById('input-element');
// const buttonAdd = document.getElementById('button-add');
// function saveItems()
// {
//     let storedData = localStorage.getItem('items');
//     let empArray = storedData ? JSON.parse('items') : [];
//     inputValue = inputItem.value;
//     let obj = {
//         inputValue
//     };
//     empArray.push(obj);
//     localStorage.setItem('item', empArray);
// }
// buttonAdd.addEventListener('click', saveItems);
const inputItem = document.getElementById('input-element');
const buttonAdd = document.getElementById('button-add');
function saveItems()
{
    let storedData = localStorage.getItem('items');
    let empArray = storedData ? JSON.parse(storedData) : [];
    let inputValue = inputItem.value;
    if (inputValue)
    {
        var obj = {
            inputValue
        };
        empArray.push(obj);
        localStorage.setItem('items', JSON.stringify(empArray));
    }
    else
    {
        alert('Please enter a value');
    }
    window.location.reload();
}
buttonAdd.addEventListener('click', saveItems);
function init()
{
    let parent = document.getElementById('parent-list');
    let recievedList = localStorage.getItem('items');
    let arrList = JSON.parse(recievedList);
    console.log(arrList);
    for (let i of arrList)
    {
        const li = document.createElement('li');
        li.innerHTML = ` ${i.inputValue}
         <button id='delete-btn'>Delete</button>`;
        parent.append(li);
        const deleteBtn = li.querySelector('#delete-btn');
        deleteBtn.addEventListener('click', () =>
        {
            arrList = arrList.filter(item => item.inputValue !== i.inputValue);
            localStorage.setItem('items', JSON.stringify(arrList));
            parent.removeChild(li);
        });
    }
}


