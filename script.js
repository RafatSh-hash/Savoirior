const polygon = document.getElementById("polygon");
const polygonContent = document.getElementById("polygonContent");

const getBanner = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  const meal = data.meals[0];
  console.log(meal.strMealThumb);
  console.log(polygon);
  polygon.style.backgroundImage = `url(${meal.strMealThumb})`;
  polygonContent.innerHTML = `<div class="bg-black bg-opacity-50 w-[60%] h-fit p-5 shadow-xl">
   <h1 class="text-white text-4xl font-semibold">${meal.strMeal}</h1>
   <h3 class="text-xl text-white font-semibold my-3">Cousine : ${meal.strArea}</h3>
   <h3 class="text-xl text-white font-semibold my-3">Category : ${meal.strCategory}</h3>

   
   </div>`;
};

getBanner();
