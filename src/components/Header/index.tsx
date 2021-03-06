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
      {left && <View style={{flexDirection: 'row'}}>{left}</View>}
      {center && (
        <View
          style={{
            flex: 1,
            paddingLeft: left ? theme.padding : 0,
            paddingRight: right ? theme.padding : 0,
          }}>
          {center}
        </View>
      )}
      {right && <View style={{flexDirection: 'row'}}>{right}</View>}
    </HeaderContainer>
  );
};
