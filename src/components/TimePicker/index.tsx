import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DatePickerButton} from '../DatePicker/DatePickerButton';
import {DatePickerText} from '../DatePicker/DatePickerText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {format} from 'date-fns';
import {theme} from '../../constants';

export interface TimePickerProps {
  placeholder?: string;
  value?: Date;
  onChange?: (value: Date) => void;
}

export const TimePicker = ({
  placeholder = '',
  value,
  onChange,
}: TimePickerProps) => {
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
          {value ? format(value, 'K:mm bbb') : placeholder}
        </DatePickerText>
        <Ionicons
          name="time-outline"
          size={20}
          color={theme.colors.placeholder}
        />
      </DatePickerButton>
      <DateTimePickerModal
        isVisible={visible}
        mode="time"
        locale="en_US"
        onConfirm={handleChange}
        onCancel={hanleClose}
      />
    </View>
  );
};
