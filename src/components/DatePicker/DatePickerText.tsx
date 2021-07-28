import styled from 'styled-components/native';
import {theme} from '../../constants';

interface DatePickerTextProps {
  isPlaceholder: boolean;
}

export const DatePickerText = styled.Text<DatePickerTextProps>`
  font-size: 14px;
  color: ${props =>
    props.isPlaceholder ? theme.colors.placeholder : theme.colors.textInput};
`;
