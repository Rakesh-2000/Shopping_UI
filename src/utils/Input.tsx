import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {Colors} from './Colors';

export interface Inset {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  horizontal?: number | string;
  vertical?: number | string;
}

interface InputProps {
  margin?: Inset;
  placeholder?: string;
  value?: string;
  onChangeText?: (str: string) => void;
  inputRef?: React.LegacyRef<TextInput>;
  style?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  keyboardType?: number | string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  value,
  inputRef,
  margin,
  style,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View
      style={{
        height: 50,
        width: '80%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}>
      <TextInput
        placeholderTextColor={Colors.primary}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[style, {color: '#000'}]}></TextInput>
    </View>
  );
};
