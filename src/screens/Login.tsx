import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../utils/Button';
import {Input} from '../utils/Input';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', top: 80}}>
        <Text style={{fontSize: 30, color: '#000', fontWeight: '700'}}>
          Login
        </Text>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 80,
            justifyContent: 'center',
          }}>
          <Input
            placeholder="Phone"
            keyboardType="numeric"
            value={phone}
            onChangeText={e => setPhone(e)}></Input>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry></Input>
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
            onPress={() => navigation.navigate('ProductList')}>
            Login
          </Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>Not a member?</Text>
          </View>
          <View style={{marginLeft: 5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Register</Text>
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
