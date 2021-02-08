import React, { useEffect, useRef } from 'react';

import { Animated } from 'react-native';

import { FIVE_HUNDRED_MS } from '~/constants/timers';

interface FadeInProps {
  children: React.ReactNode;
  time?: number;
  native?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  time = FIVE_HUNDRED_MS,
  native = false,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      duration: time,
      toValue: 1,
      useNativeDriver: native,
    }).start();
  });

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
};

export default FadeIn;
