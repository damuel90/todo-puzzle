import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {theme} from '../../constants';
import {Toask} from './Toast';

export const CustomToastProvider: React.FC = ({children}) => {
  return (
    <ToastProvider
      placement="top"
      offsetTop={theme.headerHeight + 10}
      renderType={{
        normal: ({message}) => (
          <Toask
            message={message}
            bgColor={theme.colors.commons.gray}
            type="normal"
          />
        ),
        success: ({message}) => (
          <Toask
            message={message}
            bgColor={theme.colors.success}
            type="success"
          />
        ),
        warning: ({message}) => (
          <Toask
            message={message}
            bgColor={theme.colors.warning}
            type="warning"
          />
        ),
        danger: ({message}) => (
          <Toask
            message={message}
            bgColor={theme.colors.danger}
            type="danger"
          />
        ),
      }}>
      {children}
    </ToastProvider>
  );
};
