import {Item} from 'react-native-picker-select';
import {theme} from './theme';

export const remindOptions: Item[] = [
  {label: '10 minutes early', value: '10-m', color: theme.colors.text},
  {label: '15 minutes early', value: '15-m', color: theme.colors.text},
  {label: '30 minutes early', value: '30-m', color: theme.colors.text},
  {label: '1 hour early', value: '1-h', color: theme.colors.text},
  {label: '1 day early', value: '1-d', color: theme.colors.text},
];

export const repeatOptions: Item[] = [
  {label: 'Daily', value: 'day', color: theme.colors.text},
  {label: 'Weekly', value: 'week', color: theme.colors.text},
  {label: 'Monthly', value: 'month', color: theme.colors.text},
];
