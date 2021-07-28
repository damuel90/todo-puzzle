import React from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import {theme} from '../../constants';
import {Typography} from '../Typography';
import {ButtonContainer} from './ButtonContainer';

export interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, style}) => {
  return (
    <ButtonContainer style={style} activeOpacity={0.5} onPress={onPress}>
      <Typography
        isBold
        color={theme.colors.commons.white}
        size={theme.font.size.h2}>
        {title}
      </Typography>
    </ButtonContainer>
  );
};
