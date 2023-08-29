const polygon = document.getElementById("polygon");
const polygonContent = document.getElementById("polygonContent");
const foodContainer = document.getElementById("foodContainer");

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
  console.log(data);
  data.map((food) => {
    console.log(food);
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
