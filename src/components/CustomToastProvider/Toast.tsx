import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../constants';
import {Typography} from '../Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ToastProps {
  bgColor?: string;
  type?: 'normal' | 'success' | 'warning' | 'danger';
  message: string | JSX.Element;
}

interface ToastContainerProps extends Required<Pick<ToastProps, 'bgColor'>> {}

const ToastContainer = styled.View<ToastContainerProps>`
  max-width: 80%;
  background-color: ${props => props.bgColor};
  height: ${theme.buttonHeight}px;
  border-radius: ${theme.borderRadius / 2}px;
  flex-direction: row;
  padding-left: ${theme.padding}px;
  padding-right: ${theme.padding}px;
  align-items: center;
  color: ${theme.colors.commons.white};
`;

const iconName = {
  normal: 'alert-circle-outline',
  warning: 'warning-outline',
  success: 'checkmark-circle-outline',
  danger: 'close-circle-outline',
};

export const Toask: React.FC<ToastProps> = ({
  bgColor = theme.colors.background,
  type = 'normal',
  message,
}) => {
  return (
    <ToastContainer bgColor={bgColor}>
      <Ionicons
        name={iconName[type]}
        color={theme.colors.commons.white}
        size={20}
        style={{marginRight: 10}}
      />
      <Typography size={15} color={theme.colors.commons.white}>
        {message}
      </Typography>
    </ToastContainer>
  );
};
