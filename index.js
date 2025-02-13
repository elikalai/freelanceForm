/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


//state

function generateFreelancer () {
  const names = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupations = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  //const rates = PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE)];
  const rates = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  return {names, occupations, rates};
}

function getAverageRates() {
    const totalrate = Lancer.reduce((sum, freelancer) => sum + freelancer.rates, 0);
    const averagerate = totalrate / Lancer.length; 
    return averagerate; 
}


const Lancer = Array.from({length: NUM_FREELANCERS}, generateFreelancer);

const averagerate = getAverageRates(Lancer); 



//components 

function getfreelancer(fLancer) {
 const {names, occupations, rates} = fLancer;
 const $lance = document.createElement("figure");
 $lance.classList.add("fLancer");
 $lance.innerHTML = `
 <lancename>${names}</lancename>
 <lanceocc>${occupations}</lanceocc>
 <lancerates>${rates}</lancerates>
 `
 return $lance;

}

function getAverageRate() {
 const $rateCard = document.createElement("section");
 $rateCard.classList.add("averageRate");
 $rateCard.innerHTML = `
 <h2>Average Rate Among Freelancers</h2>
 <p>${averagerate}</p>
 `;
 return $rateCard;
}

function getfreelancers() {
 const $lance = document.createElement("h1");
 $lance.classList.add("flancers");
 const $lancer = Lancer.map(getfreelancer);
 $lance.append(...$lancer);
 return $lance;
}

//render

function render() {
 const $app = document.querySelector("#app");
 $app.innerHTML = `<h1>Freelancers</h1>`;
 $app.appendChild(getAverageRate());
 $app.appendChild(getfreelancers());
}

render();





