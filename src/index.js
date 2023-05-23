import createCard from './createCard.js';
import houseToRent from './houseToRent.js';

createCard(houseToRent);

const availableBtn = document.querySelector('.available-checkbox');
const select = document.querySelector('.select');
const search = document.querySelector('.search-input');

const updateCard = () => {
  const checked = availableBtn.checked;
  const selectedValue = select.value;
  const searchValue = search.value;

  let filteredHouses = houseToRent;

  if (checked) {
    filteredHouses = houseToRent.filter((h) => h.available);
  }

  if (selectedValue !== 'All') {
    filteredHouses = filteredHouses.filter((h) => h.type === selectedValue);
  }

  if (searchValue !== '') {
    filteredHouses = filteredHouses.filter((h) =>
      h.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  createCard(filteredHouses);
};

availableBtn.addEventListener('change', updateCard);
select.addEventListener('change', updateCard);
search.addEventListener('input', updateCard);
