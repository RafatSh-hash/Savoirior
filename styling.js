(function () {
  var rotate, timeline;

  rotate = function () {
    var container = document.querySelector(".containerS");
    var firstCard = container.firstElementChild;

    firstCard.style.transition = "opacity 0.4s ease-in-out";
    firstCard.style.opacity = 0;

    setTimeout(function () {
      container.appendChild(firstCard);
      firstCard.style.opacity = 1;
    }, 400);
  };

  timeline = setInterval(rotate, 1200);

  document.body.addEventListener("mouseenter", function () {
    clearInterval(timeline);
  });

  var cards = document.querySelectorAll(".cardC");
  cards.forEach(function (card) {
    card.addEventListener("click", rotate);
  });
})();
