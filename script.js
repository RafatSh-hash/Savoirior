const polygon = document.getElementById("polygon");
const polygonContent = document.getElementById("polygonContent");
const foodContainer = document.getElementById("foodContainer");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const badgeElement = document.getElementById("badge");
const totalPriceElement = document.getElementById("totalPrice");
const charityGetsElement = document.getElementById("charity");
const foodListElement = document.getElementById("foodList");
const totalItemsElement = document.getElementById("totalItems");

const getBanner = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  const meal = data.meals[0];
  polygon.style.backgroundImage = `url(${meal.strMealThumb})`;
  polygonContent.innerHTML = `<div class="bg-black bg-opacity-50 w-[70%] h-fit p-5 shadow-xl">
   <h1 class="text-white text-4xl font-semibold">${meal.strMeal}</h1>
   <h3 class="text-xl text-white font-semibold my-3">Cousine : ${meal.strArea}</h3>
   <h3 class="text-xl text-white font-semibold my-3">Category : ${meal.strCategory}</h3>
   </div>`;
};

getBanner();

const getProducts = () => {
  fetch("./Public/dummy.json")
    .then((res) => res.json())
    .then((data) => showProducts(data));
};

const showProducts = (data) => {
  data.map((meal) => {
    const card = document.createElement("card");
    card.innerHTML = `<div class="bg-white shadow-2xl rounded-xl p-5"><div><img class="transition-all duration-500 hover:scale-105" src="${
      meal.strMealThumb
    }" </div>
    
        <div class="p-5">
            <h1 class="mealName text-xl font-semibold">${meal.strMeal.slice(
              0,
              20
            )}</h1>
        <p class="font-semibold">Category : ${meal.category}</p>
         <p>Rating: ${meal.rating}</p>
          <div class="w-full flex flex-row justify-end">
          <button class="py-2 px-3 w-32 right-0 text-white font-bold rounded-lg bg-green-500 transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:text-md" type="button" onclick="{addToCart('${
            meal.strMeal
          }')}">Buy Now!</button>
          </div>
        </div>
       
    
    
      </div> 
        
      `;
    foodContainer.appendChild(card);
  });
};

getProducts();

const searchFood = () => {
  const searchInputValue = searchInput.value;
  console.log(searchInputValue);

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
  )
    .then((res) => res.json())
    .then((data) => placeMeal(data.meals));
};

const placeMeal = (meals) => {
  console.log(meals.length);
  meals.map((meal) => {
    // console.log(meal);
    const card = document.createElement("a");
    card.classList.add("card");
    card.innerHTML = `
    <div class="front" style="background-image: url('${meal.strMealThumb}')">
        <p class="mealName bg-black bg-opacity-40 p-2 rounded-md text-white">${
          meal.strMeal
        }</p>
      </div>
      <div class="back border border-green-500 bg-[#87ff6f]">
        <div>
        <p class="font-semibold text-sm mb-3 text-left">Instruction :${meal.strInstructions.slice(
          0,
          200
        )}</p>
          <p class="font-semibold text-base text-left">Meal is ${
            meal.strCategory
          } Category</p>
          <p class="font-semibold text-base text-left">Meal Tags : ${
            meal.strTags
          }</p>
          <p class="font-semibold text-base text-left">Ingredients : ${
            meal.strIngredient1
          }, ${meal.strIngredient2}, ${meal.strIngredient3}</p>
          <button class="py-2 my-2 px-3 w-32 right-0 text-white font-bold rounded-lg bg-green-500 transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:text-md" type="button" onclick="{addToCart('${
            meal.strMeal
          }')}">Buy Now!</button>
        </div>
      </div>
      `;
    searchContainer.appendChild(card);
    searchInput.value = "";
  });
};

let totalPrice = 0;
let count = 0;
const addToCart = (mealName) => {
  const price = 20;
  totalPrice = totalPrice + price;
  count = count + 1;
  const charityAmmount = 0.2;
  const charity = totalPrice * charityAmmount;
  const li = document.createElement("li");
  li.style.marginLeft = "20px";
  li.innerText = mealName;
  totalItemsElement.innerText = count;
  badgeElement.innerText = count;
  foodListElement.appendChild(li);
  charityGetsElement.innerText = charity;
  totalPriceElement.innerText = totalPrice;
};
