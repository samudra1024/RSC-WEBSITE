document.addEventListener('DOMContentLoaded', () => {
  let burger = document.querySelector('.burger');
  let height = document.querySelector('.v-class');

  burger.addEventListener('click', () => {
    height.classList.toggle('v-resp');
    toggleHamburgerMenu();
  });
});





let text = document.getElementById('text');
let sport1 = document.getElementById('sport1');
let sport2 = document.getElementById('sport2');
let sport3 = document.getElementById('sport3');
let sport4 = document.getElementById('sport4');
let prev = document.getElementById('prev');
let header = document.getElementById('header');


let maxScrollHeight = 400; // Define the maximum scroll height where parallax should stop

function updateParallax() {
    let value = window.scrollY;

    if (value <= maxScrollHeight) {
        text.style.top = 20 +  value * -0.25 + '%';
        sport1.style.top = value * -0.25 + '%';
        sport2.style.top = value * 0.28 + '%';
        sport3.style.top = value * -0.25 + '%';
        sport4.style.top = value * 0.28 + '%';
        text.style.marginRight = value * 1.4 + '%';
        text.style.marginTop = value * 0.13 + '%';
    }
}


function updateParallax() {
  let value = window.scrollY;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1270 ) {
      maxScrollHeight=900;
      // Reduce the factors to slow down the parallax effect
      const slowerFactor = 0.15;

      text.style.top = 20 + value * -0.25 * slowerFactor + '%';
      sport1.style.top = value * -0.25 * slowerFactor + '%';
      sport2.style.top = value * 0.28 * slowerFactor + '%';
      sport3.style.top = value * -0.25 * slowerFactor + '%';
      sport4.style.top = value * 0.28 * slowerFactor + '%';
      text.style.marginRight = value * 1.4 * 0.7 + '%';
      text.style.marginTop = value * 0.13 *0.8 + '%';
  } 
  
  else {
      // Use the original factors when screen width is greater than 1270
      text.style.top = 20 + value * -0.23 + '%';
      sport1.style.top = value * -0.23 + '%';
      sport2.style.top = value * 0.28 + '%';
      sport3.style.top = value * -0.23 + '%';
      sport4.style.top = value * 0.28 + '%';
      text.style.marginRight = value * 1.2 + '%';
      text.style.marginTop = value * 0.10 + '%';
  }
}

window.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);





window.addEventListener('scroll', updateParallax);


document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY >100) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
    });
});


window.addEventListener("scroll", animateContainers);

function animateContainers() {
  var containers = document.getElementsByClassName("containerEvent");
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var containerPosition = container.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (containerPosition < windowHeight) {
      if (container.id === "container2") {
        container.classList.add("slide-in-left");
      } else {
        container.classList.add("slide-in-right");
      }
    }
  }
}







let x = 1;

function nextslide() {
    x = x + 1;
    if (x > 2) {
        x = 1;
    }
    updateImage();
}

function prevslide() {
    x = x - 1;
    if (x < 1) {
        x = 2;
    }
    updateImage();
}

function updateImage() {
    const team = document.getElementById("teamimage");
    team.src = `assets/images/Aboutus/au${x}.jpeg`;
}

// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");

//   const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.add("visible");
//               observer.unobserve(entry.target); // Stop observing once it appears
//           }
//       });
//   }, {
//       threshold: 0.1 // Trigger when 10% of the card is visible
//   });

//   cards.forEach(card => {
//       observer.observe(card);
//   });
// });
function OnClick_link_1(){
  // window.location.href="C:/SAMUDRA/OTHERS/HTML/RCS/RSC-WEBSITE/ourteam.html";
  // window.location.href="RSC-WEBSITE/ourteam.html";
  window.location.pathname="RSC-WEBSITE/stepup.html"
}
function OnClick_link_2(){
  // window.location.href="C:/SAMUDRA/OTHERS/HTML/RCS/RSC-WEBSITE/ourteam.html";
  // window.location.href="RSC-WEBSITE/ourteam.html";
  window.location.pathname="RSC-WEBSITE/ourteam.html"
}


