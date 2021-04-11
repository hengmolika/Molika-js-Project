function deleteCountry(event) {
  if (event.target.className === 'delete'){
      event.target.parentElement.parentElement.remove();
  };
}
  
function addCountry(event) {
  event.preventDefault();
  let card = document.createElement('div');
  card.className='card';
  let card1 = document.createElement('div');
  card1.className ='card-1';
  let span = document.createElement('span');
  span.classList.add('name');
  let card2 = document.createElement('div');
  card2.classList.add('card-2');
  let spanDelete = document.createElement('span');
  spanDelete.className = 'delete';
  spanDelete.textContent = "x"
  let spanEdit = document.createElement('span');
  spanEdit.className = 'edit';
  spanEdit.textContent = "edit";
  
  let Username = document.querySelector('#username');
  let Email = document.querySelector('#email');
  let result = "";
  let Genders = document.querySelectorAll('input[type=radio]');
  for (let geder of Genders){
    if (geder.checked){
      result = geder.value;
    }
  };
  let Date = document.querySelector('#date');
  let Drivel = document.querySelector('#drivel');
  let countris = document.querySelector('#country');
  let Message = document.querySelector('#sms');
  card.textContent = countris.value + " | " + Username.value + " | " + Date.value + " | " + Drivel.value + " | " +  result  + " | " + Email.value + " | " + Message.value;
  card.appendChild(card1);
  card1.appendChild(span);
  card2.appendChild(spanEdit);
  card2.appendChild(spanDelete);
  card.appendChild(card2);
  let div = document.querySelector(".card-container");
  div.appendChild(card);

  document.getElementById('form').reset();
}
function searchCountry(event) {
  let text = searchCountriesInput.value.toLowerCase();
  let listCountry=document.querySelectorAll('.card');
  for (let div of listCountry){
    let title =div.firstElementChild.textContent.toLowerCase();
    if (title.indexOf(text)===-1){
      div.style.display="none";
    }else{
      div.style.display="";
    };
  }
}

  
let countryList = document.querySelector(".card-container");
countryList.addEventListener("click", deleteCountry);
  
let addform = document.querySelector("#applyButton");
addform.addEventListener("click", addCountry);
  
let searchCountriesInput = document
  .getElementById("search-countries")
  .querySelector("input");
searchCountriesInput.addEventListener("keyup", searchCountry);
  
let showForm = () => {
  document.querySelector('.row').style.display = 'block';
}
let hideForm = () => {
 document.querySelector('.row').style.display = 'none';
}

let btnShow = document.querySelector('#btn-create');
let btnHide = document.querySelector('#applyButton');

btnHide.addEventListener('click', hideForm);
btnShow.addEventListener('click', showForm);