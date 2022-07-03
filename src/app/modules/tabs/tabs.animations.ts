import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// default settings for timings
const defaults = {
  enterDelay: '0s',
  enterTime: '.2s',
  leaveDelay: '0s',
  leaveTime: '.2s',
};

export const TabsAnimations = {
  slideFillX: trigger('slideFillX', [
    state(
      'void',
      style({
        width: '0px',
      })
    ),
    state(
      'void',
      style({
        width: 0,
      })
    ),
    transition('void => *', [animate('{{enterTime}} {{enterDelay}}')], {
      params: { ...defaults },
    }),
    transition('* => void', [animate('{{leaveTime}} {{leaveDelay}}')], {
      params: { ...defaults },
    }),
  ]),
};
