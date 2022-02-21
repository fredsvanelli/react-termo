export const specialKeys = {
    enter: 'ENTER',
    delete: 'DELETE',
    backspace: 'BACKSPACE',
    arrowRight: 'ARROWRIGHT',
    arrowLeft: 'ARROWLEFT',
    ccedil: 'Ç',
};

export const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', specialKeys.delete],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', specialKeys.enter],
];

export const allowedKeyboardKeys = [
    ...keys[0],
    ...keys[1],
    ...keys[2],
    ...Object.values(specialKeys),
];
