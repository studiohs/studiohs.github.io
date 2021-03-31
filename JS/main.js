// Mouse Cursor

const innerCursor = document.querySelector("#innerCursor");
const outerCursor = document.querySelector("#outerCursor");

addEventListener("mousemove",e=>{
    if(e.y > innerHeight - 50 || e.y <= 0 || e.x > innerWidth - 50 || e.x <= 0){
        innerCursor.style.transform = `translate(${e.x-50}px,${e.y-50}px)`;
    }else{

        innerCursor.style.transform = `translate(${e.x-25}px,${e.y-25}px)`;
    }
    
    setTimeout(()=>{
        if(e.y > innerHeight - 50 || e.y <= 0 || e.x > innerWidth - 50 || e.x <= 0){
            outerCursor.style.transition = 'transform 0.55s ease';
            outerCursor.style.transform = `translate(${e.x - 50}px,${e.y - 50}px)`;
        }else{
            outerCursor.style.transform = `translate(${e.x-25}px,${e.y-25}px)`;
            outerCursor.style.transition = 'transform 0.55s cubic-bezier(0.175, 0.553, 0.253, 2.275)';
        }
        
    } ,100)
})


// Side Menu Interaction

const menuBtn = document.getElementById("fixedMenuBtn");
const sideMenu = document.getElementById("fixedSideMenu");

menuBtn.addEventListener("click",()=>{
    sideMenu.classList.toggle("open");
    if(sideMenu.classList.contains("open")){
        menuBtn.innerHTML = "<i class='fas fa-times'></i>";
    }else{
        menuBtn.innerHTML = "<i class='fas fa-arrow-right'></i>";
    }
})
