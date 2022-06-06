/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const iconColor = 'white';
const iconColor_2 = 'grey';
const duration_1 = 300;
const duration_2 = 650;

export const LockScreen = () => {
  const opacity_1 = useRef(new Animated.Value(0)).current;
  const opacity_2 = useRef(new Animated.Value(0)).current;
  const opacity_3 = useRef(new Animated.Value(0)).current;
  const opacity_4 = useRef(new Animated.Value(0)).current;
  const [items, setItems] = useState(0);

  useEffect(() => {
    animate_4_in();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate_1_out = () => {
    Animated.timing(opacity_1, {
      toValue: 0,
      duration: duration_2,
      useNativeDriver: true,
    }).start();
  };
  const animate_1_in = () => {
    Animated.timing(opacity_1, {
      toValue: 1,
      duration: duration_1,
      useNativeDriver: true,
    }).start(({}) => {
      animate_4_in();
      animate_1_out();
    });
  };
  const animate_2_out = () => {
    Animated.timing(opacity_2, {
      toValue: 0,
      duration: duration_2,
      useNativeDriver: true,
    }).start();
  };
  const animate_2_in = () => {
    Animated.timing(opacity_2, {
      toValue: 1,
      duration: duration_1,
      useNativeDriver: true,
    }).start(({}) => {
      animate_1_in();
      animate_2_out();
    });
  };

  const animate_3_out = () => {
    Animated.timing(opacity_3, {
      toValue: 0,
      duration: duration_2,
      useNativeDriver: true,
    }).start();
  };
  const animate_3_in = () => {
    Animated.timing(opacity_3, {
      toValue: 1,
      duration: duration_1,
      useNativeDriver: true,
    }).start(({}) => {
      animate_2_in();
      animate_3_out();
    });
  };

  const animate_4_out = () => {
    Animated.timing(opacity_4, {
      toValue: 0,
      duration: duration_2,
      useNativeDriver: true,
    }).start();
  };
  const animate_4_in = () => {
    Animated.timing(opacity_4, {
      toValue: 1,
      duration: duration_1,
      useNativeDriver: true,
    }).start(({}) => {
      animate_3_in();
      animate_4_out();
    });
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg',
      }}
      resizeMode={'stretch'}
      style={Styles.screen}>
      <View style={Styles.section_1}>
        <View style={Styles.container_1}>
          <Text style={Styles.text_1}>
            We're picking up <Text style={Styles.nums}>{items}</Text> items
          </Text>
        </View>
      </View>
      <View style={Styles.section_2}>
        <></>
        <View style={Styles.container_2}>
          <TouchableOpacity
            onPress={() => {
              // eslint-disable-next-line @typescript-eslint/no-shadow
              setItems(items => items + 1);
            }}>
            <Icon name="plus" size={18} color={iconColor} />
          </TouchableOpacity>
          <Icon name="suitcase" size={20} color={iconColor} />
          <TouchableOpacity
            onPress={() => {
              // eslint-disable-next-line @typescript-eslint/no-shadow
              setItems(items => items - 1);
            }}>
            <Icon name="minus" size={18} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.section_3}>
        <Animated.View style={[Styles.arrow_1, {opacity: opacity_1}]}>
          <Icon name="chevron-up" size={30} color={iconColor_2} />
        </Animated.View>
        <Animated.View style={[Styles.arrow_2, {opacity: opacity_2}]}>
          <Icon name="chevron-up" size={35} color={iconColor_2} />
        </Animated.View>
        <Animated.View style={[Styles.arrow_3, {opacity: opacity_3}]}>
          <Icon name="chevron-up" size={40} color={iconColor_2} />
        </Animated.View>
        <Animated.View style={[Styles.arrow_4, {opacity: opacity_4}]}>
          <Icon name="chevron-up" size={45} color={iconColor_2} />
        </Animated.View>
      </View>
      <View style={Styles.section_4}>
        <TouchableOpacity>
          <Text style={Styles.text_2}>Swipe to skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  nums: {
    fontSize: 20,
  },
  screen: {
    flex: 1,
  },
  section_1: {
    flex: 0.25,

    justifyContent: 'center',
    alignItems: 'center',
  },
  section_2: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingLeft: '10%',
  },
  section_3: {
    flex: 0.45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  section_4: {
    flex: 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container_1: {
    width: '70%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970',
    borderRadius: 25,
  },
  text_1: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#6495ED',
    borderRadius: 20,
  },
  text_2: {
    color: 'white',
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#191970',
    borderRadius: 15,
  },
  container_2: {
    flexDirection: 'row',
    backgroundColor: '#6495ED',
    height: 80,
    borderRadius: 20,
    width: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrow_1: {
    transform: [{rotate: '35deg'}],
    marginLeft: 280,
  },
  arrow_2: {
    transform: [{rotate: '30deg'}],
    marginLeft: 190,
  },
  arrow_3: {
    transform: [{rotate: '25deg'}],
    marginLeft: 110,
  },
  arrow_4: {
    transform: [{rotate: '20deg'}],
    marginLeft: 35,
  },
});
