

var userName = location.search.split('&')[0].split('=')[1];

var password = location.search.split('&')[1].split('=')[1];

var input = document.querySelector('#txtInput');


var container = '';


 var test = getCookie(userName + password).split(',');

 for (let i = 0; i < test.length - 1; i++) {

  
  var items = document.getElementById('addItems')
  //give input

  //2- create tr
  var tr = document.createElement("tr")

  //3- create 3 td
  var tdCheck = document.createElement('td')
  var tdTask = document.createElement('td')
  var tdRemove = document.createElement('td')

  //4- create input with type checkbox
  var check = document.createElement('input')
  check.setAttribute('type', 'checkbox')
  
  var span = document.createElement('span')
  span.innerText = '×';
  //5-add text to td
  tdCheck.appendChild(check);
  container += test[i] + ',';
  tdTask.append(test[i]);
  tdRemove.appendChild(span)

  tr.append(tdCheck, tdTask, tdRemove)

  items.appendChild(tr)

  
 }




var date = new Date(2026, 6,15)



function AddTask(){
  
  var items = document.getElementById('addItems')
  //give input

  //2- create tr
  var tr = document.createElement("tr")

  //3- create 3 td
  var tdCheck = document.createElement('td')
  var tdTask = document.createElement('td')
  var tdRemove = document.createElement('td')

  //4- create input with type checkbox
  var check = document.createElement('input')
  check.setAttribute('type', 'checkbox')
  
  var span = document.createElement('span')
  span.innerText = '×';
  //5-add text to td
  tdCheck.appendChild(check);

  container += input.value + ',';
  document.cookie = `${userName + password}=${container} ; expires=${date}`;
  tdTask.append(input.value);

  input.value= ''
  tdRemove.appendChild(span)

  tr.append(tdCheck, tdTask, tdRemove)

  items.appendChild(tr)

}