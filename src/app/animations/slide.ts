import { trigger, state, style, transition, animate } from '@angular/animations';

const slide = trigger('slide', [
    state('in', style({
        /* maxHeight: 300 */
        height: 'calc(100vh - 82px)'
    })),
    state('out', style({
        /* maxHeight: 0 */
        height: '0'
    })),
    transition('in => out', animate('300ms ease-out')),
    transition('out => in', animate('500ms ease-out'))
])

export default slide