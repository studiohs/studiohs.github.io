// const canvas = document.querySelector("canvas");
// let ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;
// let particles = [];
// // console.log(coords);
// class Circle {
//     constructor(x, y, rad) {
//         this.x = x;
//         this.y = y;
//         this.rad = rad;
//     }

//     draw() {
//         ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
//         // ctx.fillStyle = "rgba(67, 155, 255, 0.76)";
//         ctx.strokeStyle = (Math.random() > 0.5) ? "#ffd56b68" : "#939b6288";
//         ctx.stroke();
//         ctx.beginPath();
//     }

//     update() {
//         (Math.random() > 0.5) ? this.x += Math.random() * 10: this.x -= Math.random() * 10;
//         (Math.random() > 0.5) ? this.y += Math.random() * 10: this.y -= Math.random() * 10;
//         this.rad -= 0.1;
//         if (this.rad < 0) {
//             this.rad = 0;
//         }
//     }

// }


// function init() {

//     ctx.fillRect(0, 0, innerWidth, innerHeight)
//     ctx.fillStyle = 'rgba(0,0,0,0.01)';
//     ctx.fill();
//     window.addEventListener('click', function(e) {
//         particles.push(new Circle(e.x, e.y, 70));
//     })
// }

// function animate() {
//     window.requestAnimationFrame(animate);
//     ctx.fillStyle = 'rgba(255,255,255,0.1)';
//     ctx.fill();
//     ctx.fillRect(0, 0, innerWidth, innerHeight)
//     if (particles.length) {
//         particles.forEach(particle => {
//             particle.draw();
//             particle.update();
//         })
//     }
// }
// init();

// animate();

// function generateNoise(opacity) {
//     if ( !!!document.createElement('canvas').getContext ) {
//         return false;
//     }

//     var canvas = document.createElement("canvas"),
//     ctx = canvas.getContext('2d'),
//     x, y,
//     number,
//     opacity = opacity || .2;
    
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;

//     for ( x = 0; x < canvas.width; x++ ) {
//         for ( y = 0; y < canvas.height; y++ ) {
//             number = Math.floor( Math.random() * 60 );
//             ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
//             ctx.fillRect(x, y, 1, 1);
//         }
//     }

//     document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
// }
// generateNoise()