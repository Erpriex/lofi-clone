let songsArray = [
  {
    id: 0,
    name: 'lofi.co 2021 © - Chill 1',
    src: './assets/musics/chill1.mp3',
  },
  {
    id: 1,
    name: 'lofi.co 2021 © - Chill 2',
    src: './assets/musics/chill2.mp3',
  },
  {
    id: 2,
    name: 'lofi.co 2021 © - Chill 3',
    src: './assets/musics/chill3.mp3',
  },
  {
    id: 3,
    name: 'lofi.co 2021 © - Jazz 1',
    src: './assets/musics/jazz1.mp3',
  },
  {
    id: 4,
    name: 'lofi.co 2021 © - Jazz 2',
    src: './assets/musics/jazz2.mp3',
  },
  {
    id: 5,
    name: 'lofi.co 2021 © - Jazz 3',
    src: './assets/musics/jazz3.mp3',
  },
  {
    id: 6,
    name: 'lofi.co 2021 © - Sleep 1',
    src: './assets/musics/sleepy1.mp3',
  },
  {
    id: 7,
    name: 'lofi.co 2021 © - Sleep 2',
    src: './assets/musics/sleepy2.mp3',
  },
  {
    id: 8,
    name: 'lofi.co 2021 © - Sleep 3',
    src: './assets/musics/sleepy3.mp3',
  },
  {
    id: 9,
    name: 'lofi.co 2021 © - Sleep 4',
    src: './assets/musics/sleepy4.mp3',
  },
  {
    id: 10,
    name: 'Azuku - Neon Lights',
    src: './assets/musics/music0.mp3',
  },
  {
    id: 11,
    name: 'lofi.co 2021 © - Jazz 13',
    src: './assets/musics/jazz13.mp3',
  },
  {
    id: 12,
    name: 'Noji - Exhale',
    src: './assets/musics/music1.mp3',
  },
  {
    id: 13,
    name: 'Home Grown – getaway',
    src: './assets/musics/music2.mp3',
  },
  {
    id: 14,
    name: 'drowsy – lost world',
    src: './assets/musics/music3.mp3',
  },
  {
    id: 15,
    name: 'Hazue – Rest',
    src: './assets/musics/music4.mp3',
  },
  {
    id: 16,
    name: 'Home Grown – End of the Road',
    src: './assets/musics/music5.mp3',
  },
  {
    id: 17,
    name: 'Midnight Hour – Chill With Me',
    src: './assets/musics/music6.mp3',
  },
  {
    id: 18,
    name: 'Sutton – Brighter Days',
    src: './assets/musics/music7.mp3',
  },
  {
    id: 19,
    name: 'swiftly, Noji – Sunny Side',
    src: './assets/musics/music8.mp3',
  },
  {
    id: 20,
    name: 'Ninn Tendo – Let’s Fly Away',
    src: './assets/musics/music9.mp3',
  },
  {
    id: 21,
    name: 'Lumaly - Infinite Feeling',
    src: './assets/musics/music10.mp3',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const songs = shuffleArray([...songsArray]);