import styled from 'styled-components/native';
import {theme} from '../../constants';

export const Input = styled.TextInput`
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius / 2}px;
  padding-left: ${theme.padding}px;
  padding-right: ${theme.padding}px;
  border-width: 1px;
  border-style: solid;
  border-color: #f3f3f3;
  font-size: 15px;
`;
