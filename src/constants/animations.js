import {Animated, Easing} from 'react-native';

export const config = {
  delay: 500,
  duration: 500,
  easing: Easing.elastic(1),
  toValue: 1,
  useNativeDriver: true,
};

export const listItemStyle = value => ({
  opacity: value,
  transform: [
    {
      translateX: value.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
      }),
    },
  ],
});

export const animationConstants = {
  staggerInList: 50,
  staggerAnimation: 100,
};

export const animationSequence = array => {
  const sequence = array.map((_, index) =>
    Animated.timing(array[index], config),
  );

  return Animated.stagger(animationConstants.staggerInList, sequence);
};
