import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DatePickerButton} from './DatePickerButton';
import {DatePickerText} from './DatePickerText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {format} from 'date-fns';
export interface DatePickerProps {
  placeholder?: string;
  value?: Date;
  onChange?: (value: Date) => void;
}
export const DatePicker = ({
  placeholder = '',
  value,
  onChange,
}: DatePickerProps) => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const hanleClose = () => {
    setVisible(false);
  };

  const handleChange = (date: Date) => {
    onChange && onChange(date);
    hanleClose();
  };

  return (
    <View>
      <DatePickerButton onPress={handleOpen}>
        <DatePickerText isPlaceholder={!value}>
          {value ? format(value, 'yyyy-MM-dd') : placeholder}
        </DatePickerText>
        <Ionicons name="chevron-down" size={20} color="rgb(140, 140, 140)" />
      </DatePickerButton>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={handleChange}
        onCancel={hanleClose}
      />
    </View>
  );
};
