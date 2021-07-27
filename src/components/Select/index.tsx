import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../constants';

export const Select = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      style={{
        viewContainer: {
          backgroundColor: theme.colors.background,
          height: 50,
          borderRadius: theme.borderRadius / 2,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#f3f3f3',
        },
        iconContainer: {
          top: 15,
          right: 20,
        },
      }}
      Icon={() => (
        <Ionicons name="chevron-down" size={20} color="rgb(140, 140, 140)" />
      )}
      items={[
        {label: 'Football', value: 'football'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Hockey', value: 'hockey'},
      ]}
    />
  );
};
