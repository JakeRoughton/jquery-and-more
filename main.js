let myDiv = $('<div></div>');
let list = $('<ul></ul>');
let body = $('#body');
let input = $('#input');

body.append(myDiv);
myDiv.text('Click here');
body.append(list)

myDiv.on('click', (event)=>{
    event.preventDefault();
    console.log('event test!!!')
    list.append(`<li>${input.val()}</li>`);
})