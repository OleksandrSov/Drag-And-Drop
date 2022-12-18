const item = document.querySelector('.item');                   //* 1 получаем в переменную перетаскиваемый елемент
const placeholders = document.querySelectorAll('.placeholder'); //* 1 получаем в переменную все плейсхолдеры

item.addEventListener('dragstart', dragstart);                  //* 2 отслеживание события начатия перетаскивания. в скобках первый арнумента - название события, второй - название функции
item.addEventListener('dragend', dragend);                      //* 2 отслеживание события окончания перетаскивания. в скобках первый арнумента - название события, второй - название функции

for (const placeholder of placeholders) {                       //* 4 перебираем все плейсхолдеры с помощью цикла
	placeholder.addEventListener('dragover', dragover);                    //* 5 навешивание события
	placeholder.addEventListener('dragenter', dragenter);                   //* 5 навешивание события
	placeholder.addEventListener('dragleave', dragleave);                   //* 5 навешивание события
	placeholder.addEventListener('drop', dragdrop);                        //* 5 навешивание события
}

//*функции для событий отслеживания начала и конца захвата курсором перетаскиваемого объекта:
function dragstart(event) {
	event.target.classList.add('hold');                          //* 3 добавили класс 'hold' во время события
	setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend() {
	event.target.className = 'item';                             //* 3 убрали все классы кроме item
}

//* 6 функции для событий перетаскивания в инпутах
function dragover(event) {
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add('hovered');
}

function dragleave(event) {
	event.target.classList.remove('hovered');
}

function dragdrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(item);                          //* добавление перетаскиваемого елемента в другой блок html
}
