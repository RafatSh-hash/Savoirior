const polygon = document.getElementById("polygon");
const polygonContent = document.getElementById("polygonContent");
const foodContainer = document.getElementById("foodContainer");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

const getBanner = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  const meal = data.meals[0];
  polygon.style.backgroundImage = `url(${meal.strMealThumb})`;
  polygonContent.innerHTML = `<div class="bg-black bg-opacity-50 w-[60%] h-fit p-5 shadow-xl">
   <h1 class="text-white text-4xl font-semibold">${meal.strMeal}</h1>
   <h3 class="text-xl text-white font-semibold my-3">Cousine : ${meal.strArea}</h3>
   <h3 class="text-xl text-white font-semibold my-3">Category : ${meal.strCategory}</h3>
   </div>`;
};

getBanner();

const getProducts = () => {
  fetch("./public/dummy.json")
    .then((res) => res.json())
    .then((data) => showProducts(data));
};

const showProducts = (data) => {
  data.map((food) => {
    const card = document.createElement("card");
    card.innerHTML = `<div class="bg-white shadow-2xl rounded-xl p-5"><div><img class="transition-all duration-500 hover:scale-105" src="${
      food.strMealThumb
    }" </div>
    
        <div class="p-5">
            <h1 class="text-xl font-semibold">${food.strMeal.slice(0, 20)}</h1>
        <p class="font-semibold">Category : ${food.category}</p>
         <p>Rating: ${food.rating}</p>
          <div class="w-full flex flex-row justify-end"><button class="py-2 px-3 w-32 right-0 text-white font-bold rounded-lg bg-green-500 transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:text-md">Buy Now!</button></div>
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
  searchContainer.innerHTML = "";
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
  )
    .then((res) => res.json())
    .then((data) => placeMeal(data.meals));
};

const placeMeal = (meals) => {
  meals.map((meal) => {
    console.log(meal);
    const card = document.createElement("card");
    card.innerHTML = `<div class="card card-side bg-base-100 shadow-xl">
  <figure class="w-[40%]"><img src=${meal.strMealThumb} /></figure>
  <div class="card-body">
    <h2 class="card-title">${meal.strMeal.slice(0, 20)}</h2>
    <p>Category : ${meal.strCategory}</p>
    <p>${meal.strArea} Cousine</p>
    <p>Main Ingredients : </p>
    <ul>
    <li class="text-lg font-semibold">${meal.strIngredient1}</li>
    <li class="text-lg font-semibold">${meal.strIngredient2}</li>
    <li class="text-lg font-semibold">${meal.strIngredient3}</li>
    <li class="text-lg font-semibold">${meal.strIngredient4}</li>
    <li class="text-lg font-semibold">${meal.strIngredient5}</li>
   
    </ul>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>`;
    searchContainer.appendChild(card);
  });
};
