import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../utils/Button';
import {Input} from '../utils/Input';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', top: 80}}>
        <Text style={{fontSize: 30, color: '#000', fontWeight: '700'}}>
          Register
        </Text>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 80,
            justifyContent: 'center',
          }}>
          <Input placeholder="Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Phone"></Input>
          <Input placeholder="Password"></Input>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70,
          }}>
          <Button
            type="primary"
            style={{justifyContent: 'center'}}
            onPress={() => navigation.navigate('Login')}>
            Register
          </Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>Already a member?</Text>
          </View>
          <View style={{marginLeft: 5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
