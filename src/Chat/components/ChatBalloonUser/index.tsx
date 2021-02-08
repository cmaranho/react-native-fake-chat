import React from 'react';

import { View } from 'react-native';

import { Balloons, TextBallon, BallonContainer } from './styles';
import FadeIn from '~/shared/animations/fadeIn';

interface ChatBalloonSystemProps {
  text?: string;
}

const ChatBalloonSystem: React.FC<ChatBalloonSystemProps> = ({ text = '' }) => {
  return (
    <FadeIn time={200}>
      <View>
        <BallonContainer>
          <Balloons>
            <TextBallon>{text}</TextBallon>
          </Balloons>
        </BallonContainer>
      </View>
    </FadeIn>
  );
};

export default ChatBalloonSystem;
