/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useRef } from 'react';

import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { fromString } from 'uuidv4';

import ChatBalloonSystem from './components/ChatBalloonSystem';
import ChatBalloonUser from './components/ChatBalloonUser';
import { Container } from './styles';
import interactions from '../constants/interactions';
import Input from '~/shared/components/Input';
import Screen from '~/shared/components/Screen';
import randomId from '~/utils/randomId';

interface Response {
  regex?: RegExp;
  alert?: string;
  dispatch?: (res: string | number) => Action;
  response?: (res: string | number) => string;
}

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef<ScrollView>(null);
  const [confirmInput, inputChange] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, onChangeText] = useState<string>('');
  const [chat, addBalloonsToChat] = useState<JSX.Element[]>([]);
  const [counterChat, setCounterChat] = useState<number>(-1);
  const [placeHolder, setPleceHolder] = useState<string | undefined>('');
  const [response, setResponse] = useState<Response | undefined>(undefined);

  const pushBalloon = (element: JSX.Element) => {
    addBalloonsToChat((previous) => [...previous, element]);
  };

  const responseActions = (text: string): void => {
    if (!response?.regex?.test(text)) {
      pushBalloon(
        <ChatBalloonSystem
          key={fromString(`${response?.alert}-${randomId()}`)}
          text={response?.alert}
        />,
      );
      return;
    }
    if (response.dispatch) {
      dispatch(response.dispatch(text));
    }

    if (response?.response) {
      pushBalloon(
        <ChatBalloonSystem
          key={fromString(`${response?.response(text)}-${randomId()}`)}
          text={response?.response(text)}
        />,
      );
    }

    setShowInput(false);
    inputChange(!confirmInput);
  };

  const inputHandle = () => {
    const text = inputValue;
    pushBalloon(
      <ChatBalloonUser key={fromString(`${text}-${randomId()}`)} text={text} />,
    );
    responseActions(text);
    onChangeText('');
  };

  const interactionsFactory = (count: number): JSX.Element[] => {
    const systemBalloons: JSX.Element[] = [];
    let counter: number = count;
    for (
      let interaction = ++counter;
      interaction < interactions.length;
      interaction++
    ) {
      systemBalloons.push(
        <ChatBalloonSystem
          key={fromString(interactions[interaction].label)}
          text={interactions[interaction].label}
        />,
      );

      setPleceHolder(interactions[interaction].placeHolder);
      setResponse({
        alert: interactions[interaction].alert,
        dispatch: interactions[interaction].dispatch,
        regex: interactions[interaction].validate,
        response: interactions[interaction].response,
      });

      if (interactions[interaction].break) {
        counter = interaction;
        break;
      }
    }

    setCounterChat(counter);
    return systemBalloons;
  };

  const systemBallons = (interactionsBallons: JSX.Element[]): void => {
    let counter = 0;
    const addLinearly = () => {
      setTimeout(function () {
        pushBalloon(interactionsBallons[counter++]);
        if (counter === interactionsBallons.length) {
          setShowInput(true);
        }
        if (counter < interactionsBallons.length) {
          addLinearly();
        }
      }, 1800);
    };
    addLinearly();
  };

  const interactionFake = () => {
    const count = counterChat;
    const interactionsBallons = interactionsFactory(count);
    systemBallons(interactionsBallons);
  };

  useEffect(() => {
    scrollRef?.current?.scrollToEnd({ animated: false });
  }, [chat, showInput]);

  useEffect(() => {
    interactionFake();
  }, [confirmInput]);

  return (
    <Screen>
      <Container>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          {chat}
        </ScrollView>
      </Container>

      {showInput && (
        <Input
          placeholder={placeHolder}
          inputValue={inputValue}
          onChangeText={(text) => onChangeText(text)}
          onPress={() => inputHandle()}
        />
      )}
    </Screen>
  );
};

export default Chat;
