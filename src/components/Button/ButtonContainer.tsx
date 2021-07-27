import styled from 'styled-components/native';
import {theme} from '../../constants';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  height: 50px;
  border-radius: ${theme.borderRadius}px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.commons.white};
`;
