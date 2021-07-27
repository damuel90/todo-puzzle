import styled from 'styled-components/native';
import {theme} from '../../constants';
import {IconButtonProps} from '.';

type IconButtonContainerProps = Required<
  Pick<IconButtonProps, 'bgColor' | 'size'>
>;

export const IconButtonContainer = styled.TouchableOpacity<IconButtonContainerProps>`
  background-color: ${props => props.bgColor};
  height: ${props => props.size + 5}px;
  width: ${props => props.size + 5}px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.commons.white};
`;
