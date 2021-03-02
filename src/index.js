/* Elementos del primer carrusel */
const row_right1 = document.getElementById("row-right-1");
const row_left1 = document.getElementById("row-left-1");
const scroll_1 = document.getElementById("scroll-1");

/* Elementos del segundo carrusel */
const row_right2 = document.getElementById("row-right-2");
const row_left2 = document.getElementById("row-left-2");
const scroll_2 = document.getElementById("scroll-2");

class Scroll {
  constructor() {
    this.size = 80;
  }

  moveScroll_rigth(scroll) {
    this.scroll = scroll;
    this.scroll.scrollLeft += this.size;
  }

  moveScroll_left(scroll) {
    this.scroll = scroll;
    this.scroll.scrollLeft -= this.size;
  }
}

scroll = new Scroll();
row_right1.addEventListener("click", () => scroll.moveScroll_rigth(scroll_1));
row_left1.addEventListener("click", () => scroll.moveScroll_left(scroll_1));
row_right2.addEventListener("click", () => scroll.moveScroll_rigth(scroll_2));
row_left2.addEventListener("click", () => scroll.moveScroll_left(scroll_2));
