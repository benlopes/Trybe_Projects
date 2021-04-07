function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Ex. 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  let ulTagDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {

    let day = document.createElement('li');

    day.innerHTML = dezDaysList[index];

    day.className = 'day';
    
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      day.classList.add('friday');
    }
    
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      day.classList.add('holiday');
    }

    ulTagDays.appendChild(day);
  }
}

createDays();

// Ex. 2
function createButton(Feriados) {
  Feriados = document.createElement('button');
  
  Feriados.id = 'btn-holiday';
  Feriados.innerHTML = 'Feriados';
  
  document.querySelector('.buttons-container').appendChild(Feriados);
  
}

createButton();

// Ex. 3
let holidays = document.querySelectorAll('.holiday');
let daysColor = 0;

function changeDaysColor() {
  if (daysColor === 0) {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(255,0,255)';
      daysColor = 1;
    }
  }
  else {
    for (let index1 = 0; index1 < holidays.length; index1 += 1) {
      holidays[index1].style.backgroundColor = 'rgb(238,238,238)';
      daysColor = 0;
    }
  }
}

let holiButton = document.getElementById('btn-holiday');

holiButton.addEventListener('click', changeDaysColor);

// Ex. 4
let sexta = 'Sexta-feira';
function friButton(sextaFeira) {
  let friday = document.createElement('button');
  
  friday.id = 'btn-friday';
  friday.innerHTML = sextaFeira;
  
  document.querySelector('.buttons-container').appendChild(friday);
}

friButton(sexta);

// Ex. 5
let fridays = document.querySelectorAll('.friday');
let daysForm = 0;
let dayNum = [];

function changeDaysColor2() {
  if (daysForm === 0) {
    for (let index = 0; index < fridays.length; index += 1) {
      dayNum.push(fridays[index].innerHTML);
      fridays[index].innerHTML = 'SEXTOU!';
      daysForm = 1;
    }
  }
  else {
    for (let index1 = 0; index1 < fridays.length; index1 += 1) {
      fridays[index1].innerHTML = dayNum[index1];
      daysForm = 0;
    }
  }
}

let friButton1 = document.getElementById('btn-friday');

friButton1.addEventListener('click', changeDaysColor2);

// Ex. 6
let day = document.querySelectorAll('.day');

for (let index2 = 0; index2 < day.length; index2 += 1) {
  day[index2].addEventListener('mouseover', function zoomIn(event) {
    event.target.style.transform = 'scale(2.0)';
  })
}
for (let index3 = 0; index3 < day.length; index3 += 1) {
  day[index3].addEventListener('mouseout', function zoomOut(event) {
    event.target.style.transform = 'scale(1.0)';
  });
}

// Ex. 7
let task = 'Estudar';
let taskDiv = document.querySelector('.my-tasks');

function addTask(word) {
  let newTask = document.createElement('span');
  newTask.innerHTML = word;
  taskDiv.appendChild(newTask);
}

addTask(task);

// Ex. 8
let color = 'green';
let divTask;

function createDiv(cor) {
  divTask = document.createElement('div');
  
  divTask.className = 'task';
  
  taskDiv.appendChild(divTask);
  
  divTask = document.querySelector('.task');

  divTask.style.backgroundColor = cor;


}

createDiv(color);

// Ex. 9
let divState = 0;

function selectDiv() {
  if (divState === 0) {
    divTask.classList.add('selected');
    divTask.style.borderColor ='rgb(0,230,255)';
    divTask.style.borderWidth = '2.5px';
    divState = 1;
  } else {
    divTask.classList.remove('selected');
    divTask.style.borderWidth = '0px';
    divState = 0;
  }
}

divTask.addEventListener('click', selectDiv);

// Ex. 10
let taskColor = 0;
let elemSelectColor = divTask.style.backgroundColor;

function taskDaysMatchColor(event) {
  if (taskColor === 0 && divState === 1) {
    for (let index = 0; index < day.length; index += 1) {
      event.target.style.color = elemSelectColor;
      
      taskColor = 1;
    }
  }
  else {
    for (let index1 = 0; index1 < day.length; index1 += 1) {
      event.target.style.color = 'rgb(119,119,119)';
      
      taskColor = 0;
    }
  }
}

for (let index4 = 0; index4 < day.length; index4 +=1) {
  divTask.addEventListener('click', selectDiv);

  day[index4].addEventListener('click', taskDaysMatchColor);
}