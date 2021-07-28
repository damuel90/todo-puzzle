import styled from 'styled-components/native';
import {theme} from '../../constants';

export interface DopProps {
  size?: number;
  topOffset?: number;
  rigthOffset?: number;
}

export const Dot = styled.TouchableOpacity<DopProps>`
  background-color: ${theme.colors.primary};
  height: ${props => props.size ?? 10}px;
  width: ${props => props.size ?? 10}px;
  border-radius: 1000px;
  position: absolute;
  top: ${props => props.topOffset ?? 0}px;
  right: ${props => props.rigthOffset ?? 0}px;
`;
