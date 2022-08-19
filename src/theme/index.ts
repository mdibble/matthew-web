export type ThemeType = {
  name: string,

  primary: string,
  primaryInverse: string,
  primaryText: string,

  secondary: string,
  secondaryInverse: string,
  secondaryText: string,

  svg: string,
  svgInverse: string,
}

// eslint-disable-next-line no-shadow
export enum Theme {
  Light,
  Dark,
}

export type ThemeState = {
  theme: Theme
}

const lightTheme: ThemeType = {
  name: 'Light Theme',

  primary: '#EFEFEF',
  primaryInverse: '#282828',
  primaryText: '#282828',

  secondary: '#CFCFCF',
  secondaryInverse: '#353535',
  secondaryText: '#353535',

  svg: 'invert(11%) sepia(84%) saturate(20%) hue-rotate(315deg) brightness(100%) contrast(92%);',
  svgInverse: 'invert(100%) sepia(1%) saturate(3334%) hue-rotate(145deg) brightness(121%) contrast(87%);',
};

const darkTheme: ThemeType = {
  name: 'Dark Theme',

  primary: '#181828',
  primaryInverse: '#DFDFEF',
  primaryText: '#DFDFEF',

  secondary: '#252535',
  secondaryInverse: '#BFBFCF',
  secondaryText: '#CFCFCF',

  svg: 'invert(100%) sepia(1%) saturate(3334%) hue-rotate(145deg) brightness(121%) contrast(87%);',
  svgInverse: 'invert(11%) sepia(84%) saturate(20%) hue-rotate(315deg) brightness(100%) contrast(92%);',
};

function getTheme(theme: Theme): ThemeType {
  let newTheme = lightTheme;
  switch (theme) {
    case Theme.Light:
      newTheme = lightTheme;
      break;
    case Theme.Dark:
      newTheme = darkTheme;
      break;
    default:
  }
  return newTheme;
}

function getSystemTheme(): Theme {
  try {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      return Theme.Dark;
    }
  } catch (err) {
    return Theme.Light;
  }
  return Theme.Light;
}

export { getTheme, getSystemTheme };
