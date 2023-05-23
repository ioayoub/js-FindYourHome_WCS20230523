function createCard(houseToRent) {
  document.querySelector('.cards').innerHTML = '';

  houseToRent.forEach((house) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src = house.img;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = house.name;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = house.desc;

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.textContent = 'I want it!';

    cardHeader.appendChild(cardImg);
    card.appendChild(cardHeader);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardButton);
    card.appendChild(cardBody);

    const container = document.querySelector('.cards');
    container.appendChild(card);
  });
}

export default createCard;
