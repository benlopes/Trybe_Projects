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
