/**
 * This is the config document where all configurable fields go
 */
export const AVAILABLE_CHOICES = [
    {Name: 'Rock', Beats: ['Scissors']},
    {Name: 'Paper', Beats: ['Rock']},
    {Name: 'Scissors', Beats: ['Paper']},
];
export const HUMAN_COMPUTER_MODE = 0;
export const COMPUTER_COMPUTER_MODE = 1;
export const AVAILABLE_MODES = {
    0: 'Human vs Computer',
    1: 'Computer vs Computer'
};