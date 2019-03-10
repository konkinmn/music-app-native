import { playbackTypes } from './constants';

const sounds = {
  A1: require('../../../assets/tunes/A1.mp3'),
  A2: require('../../../assets/tunes/A2.mp3'),
  Ab1: require('../../../assets/tunes/Ab1.mp3'),
  Ab2: require('../../../assets/tunes/Ab2.mp3'),
  B2: require('../../../assets/tunes/B2.mp3'),
  Bb1: require('../../../assets/tunes/Bb1.mp3'),
  Bb2: require('../../../assets/tunes/Bb2.mp3'),
  C1: require('../../../assets/tunes/C1.mp3'),
  C2: require('../../../assets/tunes/C2.mp3'),
  D1: require('../../../assets/tunes/D1.mp3'),
  D2: require('../../../assets/tunes/D2.mp3'),
  Db1: require('../../../assets/tunes/Db1.mp3'),
  E1: require('../../../assets/tunes/E1.mp3'),
  E2: require('../../../assets/tunes/E2.mp3'),
  Eb1: require('../../../assets/tunes/Eb1.mp3'),
  Eb2: require('../../../assets/tunes/Eb2.mp3'),
  F1: require('../../../assets/tunes/F1.mp3'),
  F2: require('../../../assets/tunes/F2.mp3'),
  G1: require('../../../assets/tunes/G1.mp3'),
  G2: require('../../../assets/tunes/G2.mp3'),
  Gb1: require('../../../assets/tunes/Gb1.mp3'),
  Gb2: require('../../../assets/tunes/Gb2.mp3'),
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default (notes, playbackType) => new Promise(async (resolve) => {
  const soundObjectFirst = new Expo.Audio.Sound();
  const soundObjectSecond = new Expo.Audio.Sound();
  let counter = 0;

  let noteFirst = sounds[notes[0]];
  let noteSecond = sounds[notes[1]];

  if (playbackType === playbackTypes.DOWN) {
    noteFirst = sounds[notes[1]];
    noteSecond = sounds[notes[0]];
  }

  soundObjectSecond.setOnPlaybackStatusUpdate(({ shouldPlay, isPlaying }) => {
    const isFinish = !(shouldPlay || isPlaying);

    if (isFinish) {
      if (counter === 3) {
        return resolve();
      }

      return counter++;
    }
  });

  try {
    await soundObjectFirst.loadAsync(noteFirst);
    await soundObjectSecond.loadAsync(noteSecond);
    await soundObjectFirst.playAsync();
    await timeout(1300);
    await soundObjectSecond.playAsync();
  } catch (error) {
    console.log(error);
  }
});

