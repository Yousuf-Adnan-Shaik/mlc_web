/* 
.card_container:hover .card_top {
  transform: translateY(20px);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
} */

const more_btn = document.querySelectorAll(".more_btn");
const more_btn_container = document.querySelectorAll('.details_btn')
console.log(more_btn);

// more_btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("clicked")
// })

more_btn_container.forEach(btn =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let clicked = e.target.closest(".card_container");
    // console.log(btn)
    console.log(clicked);
  })
);


