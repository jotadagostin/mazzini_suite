/* When your mouse cursor enter the background, the fading won't pause and keep playing */
$(".carousel").carousel({
  pause:
    "false" /* Change to true to make it paused when your mouse cursor enter the background */,
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Cards review js code:

$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".card"),
      $current = $cards.filter(".card--current"),
      $next;

    $cards.on("click", function () {
      if (!$current.is(this)) {
        $cards.removeClass("card--current card--out card--next");
        $current.addClass("card--out");
        $current = $(this).addClass("card--current");
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass("card--next");
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger("click");
    }

    $this.addClass("cards--active");
  });
};

$(".cards").commentCards();
