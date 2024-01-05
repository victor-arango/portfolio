// const cards = gsap.utils.toArray(".card");

// cards.forEach(card => {
//   const anim = gsap.fromTo(
//     card,
//     {
//       autoAlpha: 0,
//       y: 100,
//       x: -100,
//       rotate: -10
//     },
//     {
//       duration: 0.9,
//       autoAlpha: 1,
//       y: 0,
//       x: 0,
//       rotate: 0
//     }
//   );

//   gsap.registerPlugin(ScrollTrigger);

//   ScrollTrigger.create({
//     trigger: card,
//     animation: anim
//   });
// });

// // gsap.from("#canvas3d", {
// //   duration: 2,
// //   scale: 0.5,
// //   opacity: 0,
// //   delay: 0.5,
// //   stagger: 0.2,
// //   ease: "elastic",
// //   force3D: true
// // });


// hoverLogo = document.querySelector(".logo__transition");
// textLogoTransition = document.querySelector(".text-logo");

// hoverLogo.addEventListener("mouseover", function () {
//   gsap.to(".text-logo", {
//     duration: 0.9,
//     opacity: 1,
//     x: 10,
//     stagger: 0.1,
//     ease: "back.in"
//   });
// })
// hoverLogo.addEventListener("mouseout", function () {
//   gsap.to(".text-logo", {
//     duration: 0.9,
//     opacity: 0,
//     x: -10,
//     stagger: 0.1,
//     ease: "back.in"
//   });
// })


// // // Obtener una referencia al canvas
// // var canvas = document.getElementById("canvas3d");

// // // Función para ajustar el tamaño del canvas
// // function resizeCanvas() {
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;
// // }

// // // Llamar a la función cuando se cargue la página y cuando cambie el tamaño de la ventana
// // window.addEventListener("load", resizeCanvas);
// // window.addEventListener("resize", resizeCanvas);

// // // Llamar a la función inicialmente para establecer el tamaño inicial
// // resizeCanvas();

// // import { Application } from './runtime.js';
// // const canvas = document.getElementById('canvas3d');
// // const app = new Application(canvas);
// // app.load('./scene.splinecode');



// // import { Application } from './runtime.js';
// // const render = document.getElementById('background');
// // const aplication = new Application(render);
// // aplication.load('./background.splinecode');




// const employees = gsap.utils.toArray(".blob");
// const container = document.querySelector(".container-blobs");

// let random = gsap.utils.random;
// const employeeSize = 40;

// function randx() {
// return Math.floor(gsap.utils.random(0, window.innerWidth - employeeSize));
// }
// function randy() {
// return Math.floor(gsap.utils.random(0, window.innerHeight - employeeSize));
// }
// function randscale(){
// return gsap.utils.random(0.2, 2);
// }

// function wander(el) {
// let timeline = gsap.timeline({});

// timeline.to(el, {
// x: randx,
// y: randy,
// scale:randscale,
// ease: "sine.inOut",
// duration: random(5, 5.8),
// onComplete: () => wander(el)
// });
// }
// gsap.utils.toArray(".blob").forEach(wander);
// AOS.init();