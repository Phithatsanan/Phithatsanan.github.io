/* Profile animations: scroll reveal + typewriter.
   Pure vanilla JS, no deps. Honors prefers-reduced-motion. */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- Scroll reveal ------------------------------------------------ */
    var reveals = document.querySelectorAll(".pa-reveal");
    if (reveals.length) {
      if ("IntersectionObserver" in window && !prefersReduced) {
        var io = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        reveals.forEach(function (el) {
          io.observe(el);
        });
      } else {
        reveals.forEach(function (el) {
          el.classList.add("is-visible");
        });
      }
    }

    /* ---- Typewriter --------------------------------------------------- */
    var typers = document.querySelectorAll(".pa-typewriter");
    typers.forEach(function (el) {
      var text = el.getAttribute("data-text") || el.textContent;
      el.textContent = "";
      if (prefersReduced) {
        el.textContent = text;
        el.style.borderRightColor = "transparent";
        return;
      }
      var i = 0;
      function tick() {
        el.textContent = text.slice(0, ++i);
        if (i < text.length) {
          setTimeout(tick, 55);
        }
      }
      setTimeout(tick, 350);
    });

    /* ---- Hide programmatic-video container if asset is missing ------- */
    document.querySelectorAll(".pa-video > video").forEach(function (v) {
      v.addEventListener("error", function () {
        var card = v.closest(".pa-video-wrap");
        if (card) card.style.display = "none";
      });
    });
  });
})();
