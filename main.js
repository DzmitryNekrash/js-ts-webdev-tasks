// База данных карточек в виде массива объектов
const cardsData = [
  {
    title: "Startup Framework", // Заголовок первой карточки
    description:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Описание первой карточки
    backgroundColor: "#e6e6e6", // Цвет фона первой карточки
  },
  {
    title: "Web Generator", // Заголовок второй карточки
    description:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Описание второй карточки
    backgroundColor: "#ffffff", // Цвет фона второй карточки
  },
  {
    title: "Slides 4", // Заголовок третьей карточки
    description:
      "All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.", // Описание третьей карточки
    backgroundColor: "#4a4aff", // Цвет фона третьей карточки (синий)
  },
  {
    title: "Postcards", // Заголовок четвёртой карточки
    description:
      "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.", // Описание четвёртой карточки
    backgroundImage: "url('./assets/001.jpg')", // Изображение фона четвёртой карточки
  },
];

// Функция для создания кнопки с использованием свойств
function createButton(text, styles) {
  const button = document.createElement("button"); // Создаём элемент кнопки
  button.textContent = text; // Устанавливаем текст кнопки
  Object.assign(button.style, styles); // Применяем стили к кнопке
  return button; // Возвращаем созданную кнопку
}

// Функция для создания карточки
function createCard({ title, description, backgroundColor, backgroundImage }) {
  const card = document.createElement("div"); // Создаём контейнер для карточки
  card.className = "card"; // Добавляем класс для стилизации

  // Применяем фон, если указан
  if (backgroundColor) {
    card.style.backgroundColor = backgroundColor; // Устанавливаем цвет фона
  }
  if (backgroundImage) {
    card.style.backgroundImage = backgroundImage; // Устанавливаем изображение фона
    card.classList.add("card-image"); // Добавляем дополнительный класс для изображений
  }

  const cardTitle = document.createElement("h3"); // Создаём заголовок карточки
  cardTitle.textContent = title; // Устанавливаем текст заголовка
  cardTitle.className = "title"; // Добавляем класс для стилизации заголовка

  const cardDescription = document.createElement("p"); // Создаём элемент описания
  cardDescription.textContent = description; // Устанавливаем текст описания
  cardDescription.className = "description"; // Добавляем класс для стилизации описания

  const exploreButton = createButton("Explore", {
    // Создаём кнопку с помощью функции createButton
    border: "1px solid #333", // Чёрная рамка кнопки
    padding: "10px 20px", // Внутренние отступы кнопки
    cursor: "pointer", // Курсор "указатель" при наведении
  });

  card.appendChild(cardTitle); // Добавляем заголовок в карточку
  card.appendChild(cardDescription); // Добавляем описание в карточку
  card.appendChild(exploreButton); // Добавляем кнопку в карточку

  return card; // Возвращаем созданную карточку
}

// Функция для рендера всех карточек
function renderCards(containerId, data) {
  const container = document.getElementById(containerId); // Получаем контейнер по ID
  data.forEach((item) => {
    const card = createCard(item); // Создаём карточку для каждого элемента
    container.appendChild(card); // Добавляем карточку в контейнер
  });
}

// Запуск функции рендера карточек
renderCards("cards-container", cardsData); // Передаём ID контейнера и данные карточек

// function Grid() {
//   const node = document.createElement("ul");
//   node.setAttribute("class", "grid");
//   return node;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   //alert(123);

//   const node = document.createElement("section"); // создаю новый элемент
//   document.body.append(node); //проявляю на странице
//   const container = document.createElement("div");
//   const button = document.createElement("button");
//   container.append(button);
//   node.append(container);
// });
