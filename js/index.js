// Your code goes here

const navLogo = document.querySelector('.logo-heading'); 
// console.log(navLogo);
navLogo.addEventListener('mouseover', function(event){
    console.log(`navLogo fired!`)
    TweenMax.to(".logo-heading", 3, {x:200, ease: Bounce.easeOut});
})

const navAnchors = document.querySelector('.nav'); 
// console.log(navAnchors);
navAnchors.addEventListener('dblclick', function(event){
    console.log(`navAnchors fired!`)
    
})

const headerArea = document.querySelector("p");
// console.log(headerArea);
headerArea.addEventListener('keypress', function(event) {
    body.style.backgroundColor = 'red';
    // eventObject.stopPropagation();
});

const images = document.querySelector('img');
// console.log(images);
images.addEventListener('mouseover', function(event) {
    console.log(`this images event is working`)
    TweenMax.to(".intro", 2, {scale: 2, ease: Bounce.easeOut});
    event.stopPropagation();
})

window.addEventListener('scroll', function(event) {
    console.log(`you are scrolling!`)
})

window.addEventListener('resize', function(event) {
    console.log(`the window is resizing!`)
})

const h1 = document.querySelector('h1');
// console.log(h1);
window.addEventListener('keydown',function(event) {
    h1.style.fontSize = '10rem';
    h1.style.color = 'crimson';
});

const destination = Array.from(document.getElementsByClassName('destination'));
destination.forEach(element => element.addEventListener('mousemove', event => element.style.backgroundColor = 'crimson'))


const copyright = document.querySelector('.footer p')
// console.log(copyright)
copyright.addEventListener('dblclick',function(event) {
    copyright.style.fontSize = '10rem';
    copyright.style.color = 'crimson';
    console.log(`copyright fired!`)
});


const p = document.querySelector('p')
// console.log(p)
p.addEventListener('mouseenter',function(event) {
    p.style.color = 'violet';
    console.log(`p fired!`)
    event.stopPropagation();
});


const contentPick = document.querySelector('.content-pick');
// console.log(contentPick)
contentPick.addEventListener('click', function(event){
    console.log('contentPick fired!')
});

// Button
const signMeUpBtn = document.querySelector('.btn');
// console.log(signMeUpBtn);
signMeUpBtn.addEventListener('click', function(event){
    console.log(`signMeUpBtn fired!`)
    TweenMax.to(".destination", 2, {x:100, ease: Bounce.easeOut});
    event.stopPropagation();
});

const h4 = document.querySelector('h4');
// console.log(h4);
h4.addEventListener('click', function(event){
    console.log(`h4 fired!`)
    event.stopPropagation();
});


const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(element => element.addEventListener('click', event => {
  event.preventDefault();
  element.style.color = 'crimson';
}));

// 2nd test =================================

// const topImage = document.querySelector('.intro img');
// console.log(topImage);

// topImage.addEventListener('mouseenter', function(event) {
//   event.target.style.height = '200%';
// });

// topImage.addEventListener('mouseleave', function(event) {
//   event.target.style.height = 'initial';
// });

// const intro = document.querySelector('.intro');
// const introh2 = document.querySelector('.intro h2');
// const introP = document.querySelector('.intro p');
// console.log(intro);

// intro.addEventListener('click', function(event) {
//   if(event.target === introh2) {
//     introh2.textContent += " Have a great time!";
//   }
//   if(event.target === introP) {
//     introP.textContent += " We hope you enjoy your stay!";
//   }
// });

// // const middleImages = document.querySelectorAll(".centerimages");
// // console.log(middleImages);
// const contentSection = document.querySelector(".content-section");
// const middleImage1 = document.getElementById("centerimage1");
// const middleImage2 = document.getElementById("centerimage2");

// middleImage1.addEventListener('dblclick', function(event) {
//   if(event.target.getAttribute("src") === "img/adventure.jpg") {
//     event.target.setAttribute("src", "img/fun.jpg");
//     middleImage2.setAttribute("src", "img/adventure.jpg");
//   } else if(event.target.getAttribute("src") === "img/fun.jpg") {
//     event.target.setAttribute("src", "img/adventure.jpg");
//     middleImage2.setAttribute("src", "img/fun.jpg");
//   }
// });

// middleImage2.addEventListener('dblclick', function(event) {
//   if(event.target.getAttribute("src") === "img/adventure.jpg") {
//     event.target.setAttribute("src", "img/fun.jpg");
//     middleImage1.setAttribute("src", "img/adventure.jpg");
//   } else if(event.target.getAttribute("src") === "img/fun.jpg") {
//     event.target.setAttribute("src", "img/adventure.jpg");
//     middleImage1.setAttribute("src", "img/fun.jpg");
//   }
// });



// const buttons = document.querySelectorAll(".btn");
// buttons.forEach( btn => {
//   btn.addEventListener("mouseenter", function(event) {
//     btn.style["background-color"] = "purple";
//   });
//   btn.addEventListener("mouseleave", function(event) {
//     btn.style["background-color"] = "hotpink";
//   });
// });

// const navItems = document.querySelectorAll("a");

// // prevent refresh
// navItems.forEach( element => {
//   element.addEventListener("click", function(event) {
//     event.preventDefault()
//   });
// });

// const bottomImage = document.querySelector(".content-destination img");

// window.addEventListener("keydown", function(event) {
//   bottomImage.setAttribute("style", "opacity: 0.5;");
// });

// window.addEventListener("keyup", function(event) {
//   bottomImage.setAttribute("style", "opacity: 1;");
// });


// test 1 //

// let header = document.querySelector("header");
// let btns = document.querySelectorAll(".btn");
// let p = document.querySelectorAll("p");
// let headerImg = document.querySelector(".intro img");
// let h2 = document.querySelectorAll("h2");
// let imgs = document.querySelectorAll(".img-content img");
// let links = document.querySelectorAll("nav a");


// header.addEventListener("mouseover", e => {
//     header.style.background = "#17a2b8";
// });

// header.addEventListener("mouseout", e => {
//     header.style.background = "white";
// });

// header.addEventListener("click", e => {
//     header.style.background = "white";
// });

// btns.forEach(btn => {
//     btn.addEventListener("click", e => {
//         btn.style.background = "#4cb094";
//     });
// })

// btns.forEach(btn => {
//     btn.addEventListener("dblclick", e => {
//         btn.style.background = "#17A2B8";
//     });
// })

// p.forEach(para => {
//     para.addEventListener("copy", e => {
//         para.style.background = "#FFEBCD";
//     });
// })

// h2.forEach(h2 => {
//     h2.addEventListener("mousedown", e => {
//         h2.style.transform = "scale(1.5)";
//     });
// })

// h2.forEach(h2 => {
//     h2.addEventListener("mouseup", e => {
//         h2.style.transform = "scale(1)";
//     });
// })


// headerImg.addEventListener("click", e => {
//     headerImg.style.transform = "rotate(0.5turn)";
//     CSSPlugin.defaultTransformPerspective = 400; 
//     gsap.to("img", {duration: 3, rotationY: 360});
// })

// imgs.forEach(imgs => {
//     imgs.addEventListener("contextmenu", e => {
//         imgs.src = "https://demotix.com/wp-content/uploads/2019/05/crazy-looing-cat.jpg";
        
//     });
// })

// links.forEach(link => {
//     link.addEventListener("mouseenter", e => {
//         link.style.transform = "translate(120px, 50%)";
//     });
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         link.style.background = "white";
//         link.style.color = "black";
//         e.stopPropagation();
//     })
// })