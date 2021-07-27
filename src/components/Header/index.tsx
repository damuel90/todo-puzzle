import React from 'react';
import {HeaderContainer} from './HeaderContainer';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({children}) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
