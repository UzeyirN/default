const list = document.querySelector(".navbar-nav");    //ul
const navbar_collapse = document.querySelector(".navbar-collapse");
const url = 'https://fakestoreapi.com/products/categories';
const scrollArrow = document.querySelector(".scrollTop")


fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.innerText = `${element}`;
            li.appendChild(link)
            list.appendChild(li)
        });
    })

var count = 0;

var count_num = document.querySelector(".count-num");
var arrow = document.querySelector(".fa-arrow-up");
arrow.addEventListener("click", () => {
    count++;
    count_num.innerHTML = count;
})

var count_num = document.querySelector(".count-num");
var down = document.querySelector(".fa-down-long");
down.addEventListener("click", (e) => {
   if (e.target.previousElementSibling.previousElementSibling.innerText>0) {
    count--;
    count_num.innerHTML = count;
   }
  
})


window.addEventListener("scroll", function () {
    if (window.scrollY > 70) {
        scrollArrow.style.display = "block";
    } else {
        scrollArrow.style.display = "none";
    }
});

