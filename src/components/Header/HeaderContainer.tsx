import styled from 'styled-components/native';
import {theme} from '../../constants';

export const HeaderContainer = styled.View`
  height: 60px;
  border-bottom-width: 1px;
  border-color: rgb(226, 226, 226);
  border-style: solid;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: ${theme.padding}px;
  padding-right: ${theme.padding}px;
`;
