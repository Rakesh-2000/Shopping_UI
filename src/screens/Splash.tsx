import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button} from '../utils/Button';
import {useNavigation} from '@react-navigation/native';

const TopText = () => {
  return (
    <View style={{top: 30}}>
      <Text style={styles.TextArea}>
        Your Home.
        <Text style={styles.innertext}> Modern</Text>
      </Text>
      <Text style={{textAlign: 'center'}}>Enjoy the experience</Text>
    </View>
  );
};

const imageData = [
  {id: '1', imageUrl: require('../Assets/images/chair.jpg')},
  {id: '2', imageUrl: require('../Assets/images/chair2.jpg')},
  {id: '3', imageUrl: require('../Assets/images/chair.jpg')},
  {id: '4', imageUrl: require('../Assets/images/chair2.jpg')},
];

const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  const renderItem = ({item}) => (
    <View style={{alignSelf: 'center', borderRadius: 10}}>
      <Image
        style={{
          width: 300,
          height: 400,
          borderRadius: 20,
        }}
        source={item.imageUrl}
      />
    </View>
  );

  return (
    <>
      <View style={{marginTop: 80, borderRadius: 10, alignItems: 'center'}}>
        <Carousel
          data={imageData}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
          loop
          autoplay
          autoplayInterval={3000}
          onSnapToItem={onSnapToItem}
        />
        <Pagination
          dotsLength={imageData.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 3,
            backgroundColor: '#000',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </>
  );
};

const login = () => {
  console.log('pressed button');
};

export default function Splash() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <TopText />
        <Product />
        <View style={styles.Buttons}>
          <Button type="primary" onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
          <Button type="light" onPress={() => navigation.navigate('Register')}>
            Register
          </Button>
        </View>
        <Text style={{textAlign: 'center', marginTop: 10}}>
          Terms and Conditions
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextArea: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
  },
  innertext: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  constiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    alignItems: 'center',
  },
});
