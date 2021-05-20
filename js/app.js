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

function nextSong() {
  if(songIndex < songs.length - 1) {
    songIndex++;
  } else {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
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
  nextSong()
})

// prev 
prevBtn.addEventListener('click', () => {
  if(songIndex > 0) {
    songIndex--;
  } 

  loadSong(songs[songIndex]);
  playSong();
})

// 재생 위치 표시 check song progress(playing event update)
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

// set progress 재생 위치 변경
progressContainer.addEventListener('click', function(e){
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  // 클릭 재생 위치 계산
  audio.currentTime = (clickX / width) * duration;
})

// End music
audio.addEventListener('ended', function(){
  console.log('ended')
  nextSong()
})