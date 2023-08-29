const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// document.addEventListener("DOMContentLoaded", function () {
//   const n = 1;
//   const cardContainer = document.querySelector(".card-container");

//   for (let i = 1; i <= n; i++) {
//     const card = document.createElement("a");
//     card.classList.add("card");
//     card.href = "#!";
//     card.innerHTML = `
//       <div class="front" style="background-image: url(//source.unsplash.com/300x40${i})">
//         <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
//       </div>
//       <div class="back">
//         <div>
//           <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
//           <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
//           <button class="button">Click Here</button>
//         </div>
//       </div>
//     `;

//     cardContainer.appendChild(card);
//   }
// });
