import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from './Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  type?: 'primary' | 'light';
  children: any;
}

export const Button: FC<ButtonProps> = ({children, onPress, type, style}) => {
  const color = type === 'primary' ? Colors.light : Colors.dark;
  const backgroundColor =
    type === 'primary' ? Colors.primary : Colors.secondary;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      {...{onPress}}>
      <Text style={{color}}>{children}</Text>
    </TouchableOpacity>
  );
};

interface ArrowButtonProps {
  children: any;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  children,
  onPress,
  type,
  style,
}) => {
  const color = type === 'primary' ? Colors.light : 'grey';
  const backgroundColor = type === 'primary' ? Colors.light : Colors.light;
  return (
    <TouchableOpacity
      style={[styles.arrowButton, {backgroundColor}, style]}
      {...{onPress}}>
      <Text style={{color, fontWeight: '500'}}>{children}</Text>
      <AntDesign name="down" size={15}></AntDesign>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  arrowButton: {
    height: 60,
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderBlockColor: 'grey',
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
  },
});
