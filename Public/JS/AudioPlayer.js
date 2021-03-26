// Audio Player

// const playBtn = document.querySelector("#playSong");
// const resetBtn = document.querySelector("#resetSong");
// const songs = document.querySelector("#songs");

// playBtn.addEventListener("click",function(){
//     if(!songs.paused){
//         songs.pause()
//     }else{
//         songs.play()
//     }
// })


// resetBtn.addEventListener("click",function(){
//     songs.currentTime = 0;
//     songs.pause()
// })

class AudioPlayer{
    constructor(audioName,audioPath){
        this.name = audioName;
        this.path = audioPath;
        
        this.wrapper = document.createElement("div");
        
        this.audioElem = document.createElement("audio");
        this.audioTitleElem = document.createElement("h3");

        this.btnWrapper = document.createElement("div");
        this.playBtn = document.createElement("button");
        this.resetBtn = document.createElement("button");
        
        this.timer = document.createElement('div')

        this.createAudioElem();
    }
    
    createAudioElem(){
        document.getElementById('playlist').appendChild(this.wrapper);
        this.wrapper.classList.add("audioWrapper");


        this.wrapper.appendChild(this.audioElem);
        this.audioElem.setAttribute("name",this.name);
        this.audioElem.setAttribute("src",this.path);
        this.audioElem.setAttribute("preload","metadata");

        this.wrapper.appendChild(this.btnWrapper);
        this.btnWrapper.classList.add("playerControls");
        
        this.btnWrapper.appendChild(this.playBtn);
        this.playBtn.classList.add("audioBtns","playBtn")
        this.playBtn.innerHTML = "<i class='fas fa-play'>";
        
        this.btnWrapper.appendChild(this.resetBtn);
        this.resetBtn.classList.add("audioBtns","resetBtn")
        this.resetBtn.innerHTML = "<i class='fas fa-stop'>";

        this.wrapper.appendChild(this.audioTitleElem);
        this.audioTitleElem.classList.add('songTitle');
        this.audioTitleElem.innerHTML = this.name;
        
        this.wrapper.appendChild(this.timer);
        this.timer.classList.add('songDuration');
        
        this.active();
    }
    
    active(){
        this.wrapper.addEventListener("click",()=>{
            if(!this.audioElem.paused){
                this.audioElem.pause();
                this.playBtn.innerHTML = "<i class='fas fa-play'>";
                
            }else{
                this.audioElem.play();
                this.playBtn.innerHTML = "<i class='fas fa-pause'>";
                
            }
        })
        
        this.resetBtn.addEventListener("click",()=>{
            this.currrentTime = 0;
            this.audioElem.pause();
            this.playBtn.innerHTML = "<i class='fas fa-play'>";
        })

        this.wrapper.addEventListener("mouseover",()=>{
            let totalDuration = this.audioElem.duration.toFixed(0);
            let mins = Math.floor((totalDuration % 3600) / 60);
            let sec = totalDuration % 60;
            this.timer.innerHTML = `${mins}:${sec}`;
        })
        this.wrapper.addEventListener("mouseout",()=>{
            if(this.audioElem.paused){
                this.timer.innerHTML = ` `;
            }
        })
    }
}
