const aboutMeBtn = document.querySelector(".about-me-btn");
const skills = document.querySelectorAll(".accent");
const formBtn = document.querySelector(".form-btn");
const formBtnIcon = document.querySelector(".fa-paper-plane");

aboutMeBtn.addEventListener("click", () => {
  document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
});

let triggerVal;
const setTriggerValue = () => {
  if (window.innerHeight > 1000) triggerVal = window.innerHeight * 0.6;
  else triggerVal = window.innerHeight * 0.65;
};

formBtn.addEventListener("click", () => {
  formBtnIcon.classList.add("fly");
  setTimeout(() => {
    formBtnIcon.className = "fas fa-circle-notch";
  }, 600);
});

const skillRatings = [85, 95, 75, 96, 90, 75, 20, 85];

let arr = [
  document.querySelector(".soft-skills"),
  document.querySelector(".programming-skills"),
];

const loadRatings = () => {
  gsap.to(arr, {
    stagger: 0.5,
    opacity: 1,
    delay: 0.1,
    duration: 0.3,
  });
  setTimeout(() => {
    for (i = 0; i < skills.length; i++) {
      skills[i].style.width = `${skillRatings[i]}%`;
    }
  }, 200);
};

setTriggerValue();

window.addEventListener("resize", () => {
  setTriggerValue();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-me", {
  scrollTrigger: {
    start: `top ${triggerVal}`,
    trigger: ".about-me",
  },
  duration: 0.7,
  opacity: 1,
});

const sections = [".projects", ".contact-me", ".skills"];

sections.forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      start: `top ${triggerVal}`,
      trigger: section,
    },
    y: 0,
    duration: 0.5,
    opacity: 1,
  });
});

gsap.to(".ratings", {
  scrollTrigger: {
    start: `top ${triggerVal}`,
    trigger: ".ratings",
    onToggle: () => {
      loadRatings();
    },
  },
  y: 0,
  duration: 0.5,
  opacity: 1,
});

const projects = [".inti", ".adt", ".tbinfo", ".adictionary"];

projects.forEach((project) => {
  gsap.to(project, {
    scrollTrigger: {
      start: `top ${triggerVal}`,
      trigger: project,
    },
    y: 0,
    duration: 0.5,
    opacity: 1,
  });
});

var skip = document.querySelector(".skip-btn");

skip.addEventListener("click", skipProject);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 4000 ||
    document.documentElement.scrollTop > 4000
  )
    skip.classList.remove("show");
  else if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    skip.classList.add("show");
  } else {
    skip.classList.remove("show");
  }
}

// When the user clicks on the button, scroll to the top of the document
function skipProject() {
  document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
  // document.body.scrollTop = 7000; // For Safari
  // document.documentElement.scrollTop = 7000; // For Chrome, Firefox, IE and Opera
}

const tags = document.querySelectorAll(".tag");
tags.forEach((tag) => {
  tag.href = `https://www.google.com/search?q=${tag.textContent}`;
});