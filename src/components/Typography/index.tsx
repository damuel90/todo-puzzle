import React from 'react';
import {TypographyStyled} from './TypographyStyled';
import {theme} from '../../constants';

export interface TypographyProps {
  color?: string;
  size?: number;
  isBold?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  color = theme.colors.text,
  size = theme.font.size.h1,
  isBold = false,
}) => {
  return (
    <TypographyStyled {...{color, size, isBold}}>{children}</TypographyStyled>
  );
};
