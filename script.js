// toggle menu button
function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

//Change the background video
function changeVideo(name){
    const byVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');
    const details = document.querySelectorAll('.detail');

    byVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    models.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });

    details.forEach(detail => {
        detail.classList.remove('active');
        if(detail.classList.contains(name)){
            detail.classList.add('active');
        }
    });

    trailers.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
}

//change the play and pause button on click event
function togglePlay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active')
    pause.classList.toggle('active');
}

//Video Play and Pause
function pauseVideo(){
    const byVideoList = document.querySelectorAll('.bg-video');
    byVideoList.forEach(video => {
        video.pause();
    });
    togglePlay();
}

function playVideo(){
    const byVideoList = document.querySelectorAll('.bg-video');
    byVideoList.forEach(video => {
        video.play();
    });
    togglePlay();
}
