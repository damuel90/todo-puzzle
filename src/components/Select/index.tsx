import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../constants';

export interface SelectProps {
  options: Item[];
  placeholder?: string;
  value?: Item;
  onChange: (value: Item, index: number) => void;
}

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  placeholder,
  options,
}) => {
  return (
    <RNPickerSelect
      placeholder={
        !value && placeholder
          ? {
              label: placeholder,
              key: 'placeholder',
              value: null,
              color: theme.colors.placeholder,
            }
          : undefined
      }
      value={value}
      itemKey={value?.label}
      onValueChange={onChange}
      style={{
        viewContainer: styles.viewContainer,
        iconContainer: styles.iconContainer,
        inputAndroid: styles.inputAndroid,
      }}
      Icon={() => (
        <Ionicons
          name="chevron-down"
          size={20}
          color={theme.colors.placeholder}
        />
      )}
      items={options}
    />
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: theme.colors.background,
    height: theme.buttonHeight,
    borderRadius: theme.borderRadius / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#f3f3f3',
  },
  iconContainer: {
    top: 15,
    right: 20,
  },
  inputAndroid: {
    color: theme.colors.textInput,
    fontSize: 14,
  },
});
