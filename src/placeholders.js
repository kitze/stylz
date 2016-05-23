import colors from './colors';

export const stretch = {
  width: '100%',
  height: '100%'
};

/* Resets the style for an element */
export const unstyle = {
  button: {
    outline: 'none',
    appearance: 'none'
  },
  input: {
    border: 0,
    outline: 'none',
    appearance: 'none'
  },
  link: {
    textDecoration: 'none',
    color: colors.black
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  }
};

export const cardShadow = {
  boxShadow: `rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px`
};

export const disableTapHighlight = {
  WebkitTapHighlightColor: 'rgba(0,0,0,0)'
};