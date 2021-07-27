import styled from 'styled-components/native';

interface DatePickerTextProps {
  isPlaceholder: boolean;
}

export const DatePickerText = styled.Text<DatePickerTextProps>`
  font-size: 14px;
  color: ${props =>
    props.isPlaceholder ? 'rgb(140, 140, 140)' : 'rgb(32, 32, 32)'};
`;
