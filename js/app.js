const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');

const cover = document.querySelector('figure.cover');
const title = document.querySelector('#title');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

// Song Data
const songs = [
  'FunnyDream', 
  'Inspirational', 
  'ThatPositiveFeeling'
];

let songIndex = 0;

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.style.backgroundImage = `url(images/${songIndex}.jpg`;
}

loadSong(songs[songIndex]);

function playSong() {
  audio.classList.add('play');
  audio.play();

  // 아이콘 변경
  playBtn.querySelector('img').setAttribute('src', './images/play.svg');
  playBtn.querySelector('img').setAttribute('alt', 'play');

  // Play Cover Animation
  cover.classList.add('play')
}

function pauseSong() {
  audio.pause()
  audio.classList.remove('play');
  playBtn.querySelector('img').setAttribute('src', './images/pause.svg');
  playBtn.querySelector('img').setAttribute('alt', 'pause');

  // Puase Cover Animation
  cover.classList.remove('play');
}




// 버튼 이벤트 
playBtn.addEventListener('click', () => {
  if(audio.classList.contains('play')){
    pauseSong();
  } else {
    audio.classList.add('play');
    playSong();
  }
})

// next
nextBtn.addEventListener('click', () => {
  if(songIndex < songs.length - 1) {
    songIndex++;
  } 

  loadSong(songs[songIndex]);
  playSong();
})

// prev 
prevBtn.addEventListener('click', () => {
  if(songIndex > 0) {
    songIndex--;
  } 

  loadSong(songs[songIndex]);
  playSong();
})

// check song progress(playing event update)
audio.addEventListener('timeupdate', function(e){
  const {duration, currentTime} = e.target;
  console.log(duration, currentTime);
  const progressPercent = (currentTime / duration) * 100;
  console.log(parseInt(progressPercent) + '%');
  progress.style.width = progressPercent + '%';
  if(parseInt(progressPercent) === 100) {
    progress.style.width = '0%';
  }
})