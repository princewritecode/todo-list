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
    let obj = {
        inputValue
    };
    window.location.reload();
    empArray.push(obj);
    localStorage.setItem('items', JSON.stringify(empArray));
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
        li.innerText = i.inputValue;
        parent.append(li);
    }
}