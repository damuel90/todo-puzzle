import styled from 'styled-components/native';
import {theme} from '../../constants';
import {Dimensions, StatusBar} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight ?? 0;

export const Main = styled.View`
  padding-top: ${theme.padding}px;
  padding-right: ${theme.padding}px;
  padding-left: ${theme.padding}px;
  padding-bottom: ${theme.padding}px;
  flex: 1;
  min-height: ${windowHeight - theme.headerHeight - statusBarHeight}px;
`;
