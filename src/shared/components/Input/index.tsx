import React from 'react';

import {
  TextInput,
  TouchableOpacity,
  TouchableOpacityProperties,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, AcceptButton, TextArea } from './styles';

interface InputProps extends TouchableOpacityProperties {
  onChangeText: (text: string) => void;
  inputValue: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  inputValue,
  ...rest
}) => {
  return (
    <Container>
      <TextArea>
        <TextInput
          placeholder={placeholder}
          value={inputValue}
          onChangeText={onChangeText}
        />
      </TextArea>
      <AcceptButton>
        <TouchableOpacity {...rest}>
          <Icon name="check" size={30} color="#ffffff" />
        </TouchableOpacity>
      </AcceptButton>
    </Container>
  );
};

export default Input;
