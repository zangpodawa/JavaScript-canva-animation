// var rotatingSquare = document.getElementById("web-animation");
// rotatingSquare.animate(
//   [
//     { backgroundColor: "#000000" },
//     { backgroundColor: "#440000" },
//     { backgroundColor: "#000000" },
//   ],
//   {
//     duration: 1000,
//     iterations: 7,
//   }
// );

// rotatingSquare.animate(
//   [
//     {
//       backgroundColor: "#000000",
//       opacity: 1.0,
//       transform: "rotate(0deg) translate3D(0, 0, 0)",
//     },
//     { backgroundColor: "#440000", opacity: 0.3 },
//     {
//       backgroundColor: "#000000",
//       opacity: 1.0,
//       transform: "rotate(360deg) translate3D(0, 0, 0)",
//     },
//   ],
//   {
//     duration: 500,
//     iterations: Infinity,
//   }
// );

// rotatingSquare.animate(
//   [
//     {
//       backgroundColor: "#000000",
//       opacity: 1.0,
//       transform: "rotate(0deg) translate3D(0, 0, 0)",
//     },
//     { backgroundColor: "#440000", opacity: 0.3 },
//     {
//       backgroundColor: "#000000",
//       opacity: 1.0,
//       transform: "rotate(360deg) translate3D(0, 0, 0)",
//     },
//   ],
//   {
//     duration: 500,
//     iterations: Infinity,
//     easing: "ease-in-out",
//   }
// );

var rotatingSquare = document.getElementById("web-animation").animate(
  [
    {
      backgroundColor: "#000000",
      opacity: 1.0,
      transform: "rotate(0deg) translate3D(0, 0, 0)",
    },
    { backgroundColor: "#440000", opacity: 0.3 },
    {
      backgroundColor: "#000000",
      opacity: 1.0,
      transform: "rotate(360deg) translate3D(0, 0, 0)",
    },
  ],
  {
    duration: 500,
    iterations: Infinity,
    easing: "ease-in-out",
  }
);
