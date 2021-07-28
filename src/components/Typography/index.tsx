import React from 'react';
import {TypographyStyled} from './TypographyStyled';
import {theme} from '../../constants';
import {StyleProp, TextStyle} from 'react-native';

export interface TypographyProps {
  color?: string;
  size?: number;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  color = theme.colors.text,
  size = theme.font.size.h1,
  isBold = false,
  style,
}) => {
  return (
    <TypographyStyled {...{color, size, isBold, style}}>
      {children}
    </TypographyStyled>
  );
};
