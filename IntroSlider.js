import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native'; 

const slides = [
  {
    key: 1,
    title: 'Scan, Pay & Enjoy!',
    text: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
    image: require('../BaiTap8.3/Images/Mask Group.png'),
    backgroundColor: '#FFEFEF',
  },
];

export default function Slider() {
  const [showRealApp, setShowRealApp] = useState(false);
  const navigation = useNavigation(); 

  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.replace('Home');
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Skip</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Done</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      renderDoneButton={_renderDoneButton}
      showSkipButton={true}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
