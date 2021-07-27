import React from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import {IconButtonContainer} from './IconButtonContainer';
import Iconicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../constants';
export interface IconButtonProps {
  iconName: string;
  size?: number;
  color?: string;
  bgColor?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  size = 20,
  bgColor = 'transparent',
  color = theme.colors.text,
  onPress,
  style,
}) => {
  return (
    <IconButtonContainer
      style={style}
      activeOpacity={0.7}
      {...{bgColor, size}}
      onPress={onPress}>
      <Iconicons name={iconName} size={size} style={{color}} />
    </IconButtonContainer>
  );
};
