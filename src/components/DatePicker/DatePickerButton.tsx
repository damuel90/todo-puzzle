import styled from 'styled-components/native';
import {theme} from '../../constants';

export const DatePickerButton = styled.TouchableOpacity`
  background-color: ${theme.colors.background};
  height: ${theme.buttonHeight}px;
  border-radius: ${theme.borderRadius / 2}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.padding}px;
  padding-right: ${theme.padding}px;
  border-width: 1px;
  border-style: solid;
  border-color: #f3f3f3;
`;
