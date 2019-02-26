import { playbackTypes } from './constants';

const sounds = {
  c1: require('../../../assets/tunes/C1.mp3'),
  e1: require('../../../assets/tunes/E1.mp3'),
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

