import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import chair3 from '../Assets/images/chair3.jpeg';

const TopNav = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginRight: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <AntDesign name="arrowleft" size={25} color="#000" />
      </TouchableOpacity>
      <AntDesign name="shoppingcart" size={25} color="#000" />
    </View>
  );
};

const ProfileSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
      }}>
      <Text style={{color: Colors.dark, fontWeight: 'normal', fontSize: 20}}>
        Rakesh B
      </Text>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://fastly.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY',
        }}></Image>
    </View>
  );
};

const Names = [
  {
    id: 1,
    name: 'Product',
  },
  {
    id: 2,
    name: 'Furniture',
  },
  {
    id: 3,
    name: 'Shop',
  },
];

const Tabs = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 20,
        }}>
        {Names.map((name, index) => (
          <Text
            key={index}
            style={[
              {
                color: index === 0 ? '#000' : 'grey',
                fontSize: 15,
                fontWeight: '500',
              },
            ]}>
            {name.name}
          </Text>
        ))}
      </View>
      <View
        style={{
          width: 90,
          height: 3,
          marginTop: 8,
          marginLeft: 22,
          backgroundColor: '#000',
        }}></View>
      <View
        style={{
          width: 350,
          height: 1,
          marginBottom: 8,
          alignSelf: 'center',
          backgroundColor: 'grey',
        }}></View>
    </>
  );
};

const car = chair3;

const cardData = [
  {
    id: 1,
    text: 'Chair',
    image: require('../Assets/images/chair2.jpg'),
    desc: '10 product',
  },
  {
    id: 2,
    text: 'Bed',
    image: require('../Assets/images/bed.jpeg'),
    desc: '3 product',
  },
  {
    id: 3,
    text: 'Table',
    image: require('../Assets/images/table.jpg'),
    desc: '5 product',
  },
  {
    id: 4,
    text: 'Desk',
    image: require('../Assets/images/desk.jpeg'),
    desc: '8 product',
  },
  {
    id: 5,
    text: 'Office Chair',
    image: require('../Assets/images/office.jpeg'),
    desc: '12 product',
  },
  {
    id: 6,
    text: 'Sofa',
    image: require('../Assets/images/sofa.jpeg'),
    desc: '17 product',
  },
  {
    id: 7,
    text: 'chair',
    image: require('../Assets/images/chair3.jpeg'),
    desc: '5 product',
  },
  {
    id: 7,
    text: 'chair',
    image: require('../Assets/images/chair7.jpeg'),
    desc: '5 product',
  },
  {
    id: 6,
    text: 'Sofa',
    image: require('../Assets/images/sofa.jpeg'),
    desc: '17 product',
  },
  {
    id: 7,
    text: 'chair',
    image: require('../Assets/images/chair3.jpeg'),
    desc: '5 product',
  },
  {
    id: 7,
    text: 'chair',
    image: require('../Assets/images/chair7.jpeg'),
    desc: '5 product',
  },
  // {
  //   id: 8,
  //   text: 'chair',
  //   image: require('../Assets/images/chair2.jpg'),
  //   desc: '10 product',
  // },
  // {
  //   id: 9,
  //   text: 'chair',
  //   image: require('../Assets/images/chair2.jpg'),
  //   desc: '10 product',
  // },
];

const Card = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={data.image} />
          <Text style={styles.cardText}>{data.text}</Text>
          <Text>{data.desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Cards = () => {
  const navigation = useNavigation();
  const handleClick = (index: any) => {
    navigation.navigate('Product');
  };
  return (
    <View style={styles.container}>
      {cardData.map((data, index) => (
        <Card key={index} data={data} onPress={handleClick} />
      ))}
    </View>
  );
};

export default function ProductList() {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <TopNav />
      <ProfileSection />
      <Tabs />
      <ScrollView scrollEnabled>
        <Cards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  cardimage: {
    marginBottom: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 20,
  },
  card: {
    height: 150,
    backgroundColor: '#f9f9f9',
    elevation: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    marginBottom: 5,
  },
});
