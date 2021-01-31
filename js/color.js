const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// Напиши скрипт, который после нажатия кнопки Start,
//раз в секунду меняет цвет фона body на случайное значение
//из массива используя инлайн - стиль.При нажатии на кнопку Stop,
//изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
//Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), 
//используй функцию randomIntegerFromInterval.


const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
}

console.dir(refs.body);
console.dir(refs.start);
console.dir(refs.stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = 0;

const colorChange = () => {
  let color = randomIntegerFromInterval(0, colors.length - 1);
   refs.body.style.backgroundColor = colors[color]
 }

const start = () => {
  refs.start.disabled = true;
  intervalId = setInterval(colorChange, 1000)

};

const stop = () => {
  clearInterval(intervalId);
  refs.start.disabled = false;
  };

refs.start.addEventListener('click', start);
refs.stop.addEventListener('click', stop);





















