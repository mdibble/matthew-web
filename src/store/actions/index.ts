import { CHANGE_THEME } from './actionTypes';
import { Theme } from '../../theme';

export type Action = {
  type: string,
  payload: Theme,
}

// eslint-disable-next-line import/prefer-default-export
export const changeTheme = (theme: Theme): Action => ({
  type: CHANGE_THEME,
  payload: theme,
});
