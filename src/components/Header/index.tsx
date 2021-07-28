import React from 'react';
import {View} from 'react-native';
import {theme} from '../../constants';
import {HeaderContainer} from './HeaderContainer';

export interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({left, center, right}) => {
  return (
    <HeaderContainer>
      {left && <View>{left}</View>}
      {center && (
        <View style={{flex: 1, paddingHorizontal: theme.padding}}>
          {center}
        </View>
      )}
      {right && <View>{right}</View>}
    </HeaderContainer>
  );
};
