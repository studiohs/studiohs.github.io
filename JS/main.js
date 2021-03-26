
const socialIcons = document.querySelectorAll("[data-social]");
const connectOn = document.querySelector("#connectOn-area");
let msg, iconName,color;
socialIcons.forEach(icon => {
    icon.addEventListener("mouseover",e=>{
        iconName = icon.getAttribute("data-social");
        color = icon.getAttribute("data-color");
        switch(iconName){
            case "facebook" : {
                msg = "<p>Connect With Us On Facebook</p>";
                color = color;
                break;
            }
            case "instagram" : {
                msg = "<p>Follow Us On Instagram</p>";
                color = color;
                break;
            }
            case "youtube" : {
                msg = "<p>Subscribe Our Youtube Channel</p>";
                color = color;
                break;
            }
            case "spotify" : {
                msg = "<p>Listen To Us On Spotify</p>";
                color = color;
                break;
            }
            // default : return false;
        }
        connectOn.classList.add("visible");
        connectOn.style.backgroundColor = color;
        connectOn.innerHTML = msg;
        
    });
    
    
    icon.addEventListener("mouseout",e=>{
        connectOn.classList.remove("visible");
        connectOn.innerHTML = "";
    });
});



// Mouse Cursor

// const innerCursor = document.querySelector("#innerCursor");
// const outerCursor = document.querySelector("#outerCursor");

// addEventListener("mousemove",e=>{
//     if(e.y > innerHeight - 50 || e.y <= 0 || e.x > innerWidth - 50 || e.x <= 0){
//         innerCursor.style.transform = `translate(${e.x-50}px,${e.y-50}px)`;
//     }else{

//         innerCursor.style.transform = `translate(${e.x-25}px,${e.y-25}px)`;
//     }
    
//     setTimeout(()=>{
//         if(e.y > innerHeight - 50 || e.y <= 0 || e.x > innerWidth - 50 || e.x <= 0){
//             outerCursor.style.transition = 'transform 0.55s ease';
//             outerCursor.style.transform = `translate(${e.x - 50}px,${e.y - 50}px)`;
//         }else{
//             outerCursor.style.transform = `translate(${e.x-25}px,${e.y-25}px)`;
//             outerCursor.style.transition = 'transform 0.55s cubic-bezier(0.175, 0.553, 0.253, 2.275)';
//         }
        
//     } ,100)
// })


// Side Menu Interaction

const menuBtn = document.getElementById("fixedMenuBtn");
const sideMenu = document.getElementById("fixedSideMenu");

menuBtn.addEventListener("click",()=>{
    sideMenu.classList.toggle("open");
    if(sideMenu.classList.contains("open")){
        menuBtn.innerHTML = "<i class='fas fa-times'></i>";
    }else{
        menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
    }
})

// const songsList = [
//     {
//         name : "Nindiya",
//         path : "../assets/Audio/Nindiya.mp3"
//     },
//     {
//         name : "Illenium",
//         path : "../assets/Audio/illenium.mp3"
//     },
//     {
//         name : "Pareshaniyo Se",
//         path : "../assets/Audio/Pareshaniyo se.mp3"
//     },
//     {
//         name : "Hum Dum Tera",
//         path : "../assets/Audio/Hum Dum Tera.mp3"
//     }
    
// ]
// songsList.forEach(song => {
//     new AudioPlayer(song.name,song.path);
// })



// Draggable Videos
