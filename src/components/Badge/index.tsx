import React from 'react';
import {View} from 'react-native';
import {Dot, DopProps} from './Dot';

export interface BadgeProps extends DopProps {}

export const Badge: React.FC<BadgeProps> = ({children, ...props}) => {
  return (
    <View style={{position: 'relative'}}>
      <Dot {...props} />
      {children}
    </View>
  );
};
