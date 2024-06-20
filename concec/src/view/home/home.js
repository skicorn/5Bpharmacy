function text() {
  alert('Hello');
}
function changeColor() {
  var element = document.getElementById('changeColor');
  element.style.backgroundColor = 'blue';
  element.style.width = '26%';
  element.style.border = '15px solid #cececc';
  element.style.borderradius = 0;
}

function restoreColor() {
  var element = document.getElementById('changeColor');
  element.style.backgroundColor = 'blue';
  element.style.width = '25%';
  element.style.border = '0px solid gray';
}

function changeColor2() {
  var element = document.getElementById('changeColor2');
  element.style.backgroundColor = 'blue';
  element.style.width = '26%';
  element.style.border = '15px solid #cececc';
  element.style.borderradius = 0;
}

function restoreColor2() {
  var element = document.getElementById('changeColor2');
  element.style.backgroundColor = 'blue';
  element.style.width = '25%';
  element.style.border = '0px solid gray';
}

function changeColor3() {
  var element = document.getElementById('changeColor3');
  element.style.backgroundColor = 'blue';
  element.style.width = '26%';
  element.style.border = '15px solid #cececc';
  element.style.borderradius = 0;
}

function restoreColor3() {
  var element = document.getElementById('changeColor3');
  element.style.backgroundColor = 'blue';
  element.style.width = '25%';
  element.style.border = '0px solid gray';
}

function goToEmployeePage() {
  window.location.href = 'http://localhost:6969/employee/';
}
