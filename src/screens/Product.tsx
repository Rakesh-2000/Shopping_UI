import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ArrowButton, Button} from '../utils/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TopPart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../Assets/images/chair.jpg')}
        style={styles.image}></Image>
      <View
        style={{
          position: 'absolute',
          // display: 'flex',
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'space-between',
        }}>
        <AntDesign
          onPress={() => navigation.navigate('ProductList')}
          name="arrowleft"
          size={25}
          color="#000"
          style={{marginRight: 280}}
        />
        <View>
          <AntDesign name="shoppingcart" size={25} color="#000" />
          <View
            style={{
              position: 'absolute',
              height: 17,
              width: 17,
              backgroundColor: 'red',
              left: 20,
              bottom: 20,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 10}}>5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const TwoButtons = () => {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ArrowButton>White</ArrowButton>
        <ArrowButton>Wood</ArrowButton>
      </View>
    </>
  );
};

const Description = () => {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{margin: 20, fontWeight: '500', color: '#000', fontSize: 15}}>
          CasualMini Chair
        </Text>
        <Text
          style={{margin: 20, fontWeight: '600', color: '#000', fontSize: 20}}>
          $200.00
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.SpecifText}>Specification</Text>
        <Text style={styles.SpecifText}>+</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.SpecifText}>Specification</Text>
        <Text style={styles.SpecifText}>+</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.SpecifText}>Specification</Text>
        <Text style={styles.SpecifText}>+</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Button style={styles.buttonOptions}>
          <Text style={{color: 'grey'}}>Interior</Text>
        </Button>
        <Button style={styles.buttonOptions}>
          <Text style={{color: 'grey'}}>27 m</Text>
        </Button>
        <Button style={styles.buttonOptions}>
          <Text style={{color: 'grey'}}>Ideas</Text>
        </Button>
      </View>
    </>
  );
};

const Product = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TopPart />
      <TwoButtons />
      <ScrollView>
        <Description />
      </ScrollView>
      <View
        style={{width: '100%', height: 0.5, backgroundColor: 'grey'}}></View>
      <Button
        type="primary"
        style={{
          borderRadius: 100,
          width: '35%',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Add To
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: windowHeight * 0.5, // 50% of the screen height
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'relative',
  },
  colorBox: {
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
    height: 20,
    width: 20,
  },
  SpecifText: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontWeight: '500',
    color: 'grey',
    fontSize: 15,
  },
  buttonOptions: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 0.5,
    width: '20%',
    height: 30,
    marginHorizontal: 5,
    borderColor: 'grey',
  },
});

export default Product;
