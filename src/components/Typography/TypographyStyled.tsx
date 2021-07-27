import styled from 'styled-components/native';
import {TypographyProps} from '.';

export const TypographyStyled = styled.Text<TypographyProps>`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  color: ${props => props.color};
`;
