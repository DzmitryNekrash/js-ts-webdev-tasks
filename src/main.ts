// import cardsData from "./db/cards.json";
// Получаю ошибку Uncaught SyntaxError: Cannot use import statement outside a module (at main.ts:1:1)

const cardsData = [{
    "title": "Startup Framework",
    "description": "Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!",
    "image": "./src/assets/images/01.jpg",
    "tags": ["Ui kit", "Framework", "Landing page", "generator"]
},
{
    "title": "Slides",
    "description": "We have created a new product that will help designers create websites for their startups.",
    "image": "./src/assets/images/02.jpg",
    "tags": ["Ui kit", "Framework", "Landing page", "generator"]
},
{
    "title": "Flat UI Pro",
    "description": "Components and blocks are fixed to the common and popular 12 Grid system.",
    "image": "./src/assets/images/03.jpg",
    "tags": ["Ui kit", "Framework", "Landing page", "generator"]
},
{
    "title": "Slides",
    "description": "We have created a new product that will help designers create websites for their startups.",
    "image": "./src/assets/images/04.jpg",
    "tags": ["Ui kit", "Framework", "Landing page", "generator"]
}
];

function createTags(tagsArray) {
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags";
    
    tagsArray.forEach(tagText => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tagText+', ';
        tagsContainer.appendChild(tag);
    });
    
    return tagsContainer;
}

function createCard(cardData: any)
{
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = cardData.image;
    img.alt = cardData.title;

    const title = document.createElement("h3");
    title.textContent = cardData.title;
    const description = document.createElement("p");
    description.textContent = cardData.description;
    
    const tags = createTags(cardData.tags);
    card.append(img, title, description, tags);
    return card;
}

function createPage(){
    const section = document.createElement("section");
    section.className = "wholePage";

    const pageDescription = document.createElement("section");
    pageDescription.className = "pageDescription";

    const cardsSection = document.createElement("section");
    cardsSection.className = "cardsSection";

    const title = document.createElement("h1");
    title.textContent = "Our Works";
    const description = document.createElement("h2");
    description.textContent = "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.";
    
    pageDescription.append(title, description);
    
    const cards = cardsData.map(cardData => createCard(cardData));

    cardsSection.append(...cards);

    section.append(pageDescription, cardsSection);
    document.body.append(section);
}

createPage();