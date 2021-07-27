/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Typography} from '../Typography';

export interface FieldProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

export const Field: React.FC<FieldProps> = ({label, children, style}) => {
  return (
    <View style={style}>
      <View style={{marginBottom: 10}}>
        <Typography isBold size={15}>
          {label}
        </Typography>
      </View>
      {children}
    </View>
  );
};
