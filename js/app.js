const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');

const cover = document.querySelector('figure.cover');
const title = document.querySelector('#title');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

// Song Data
const songs = ['Funny Dream', 'Inspirational', 'That Positive Feeling by Alumo'];

let songIndex = 1;

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.style.backgroundImage = `url(images/${songIndex}.jpg`;
}

loadSong(songs[songIndex]);

// 버튼 이벤트 
playBtn.addEventListener('click', () => {
  if(audio.classList.contains('play')){
    audio.pause()
    audio.classList.remove('play');
  } else {
    audio.classList.add('play');
    audio.play();
  }
})