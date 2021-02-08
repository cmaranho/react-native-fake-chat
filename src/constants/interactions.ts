import { differenceInWeeks } from 'date-fns';
import { Action } from 'redux';

import { user } from '~/shared/store/models/user/actions';

interface Interactions {
  label: string;
  break?: boolean;
  placeHolder?: string;
  validate?: RegExp;
  response?: (res: string | number) => string;
  alert?: string;
  dispatch?: (res: string | number) => Action;
}

const interactions: Interactions[] = [
  { label: 'Olá, Bem vinda! 🤩' },
  { label: 'Pra gente continuar precisamos de algumas informações, tudo bem?' },
  {
    label:
      'Essas informaçoes serão pra calcular a data prevista do nascimento; a semana atual de gestação; e o peso ideal até o fim da gestação. 😇 \b Então, vamos lá? 🙌. ',
  },
  {
    alert: 'Ops, valor inválido. a data tem que ser dia/mês/ano ',
    break: true,
    dispatch: (res: string | number): Action => {
      const [day, month, year] = `${res}`.split('/');
      return user({
        currentWeek: differenceInWeeks(
          new Date(),
          new Date(Number(year), Number(month) - 1, Number(day)),
        ),
        initialDate: new Date(Number(year), Number(month) - 1, Number(day)),
      });
    },
    label: 'Me diz, Qual foi o primeiro dia da sua última menstruação? 🤔',
    placeHolder: '01/01/2020',
    response: (res: string | number): string => {
      const [day, month, year] = `${res}`.split('/');
      const week = differenceInWeeks(
        new Date(),
        new Date(Number(year), Number(month) - 1, Number(day)),
      );

      return `Ótimo, você está com ${week} semanas desde o primeiro dia da sua última menstruação 🤰.`;
    },
    validate: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
  },
  {
    alert: 'Ops, insira o valor correto. Ex: 65.563 ',
    break: true,
    dispatch: (res: string | number): Action => {
      return user({
        preGestationalWeight: Number(res),
      });
    },
    label: 'E qual era o seu peso antes da gestação? 😌',
    placeHolder: 'ex: 67.00',
    validate: /(^[0-9]{0,3})\.[0-9]{0,3}/i,
  },
  {
    alert: 'Ops, insira o valor em centimetros. Ex: 167 ',
    break: true,
    dispatch: (res: string | number): Action => {
      return user({
        height: Number(res),
      });
    },
    placeHolder: 'ex: 167 (valor em cm)',
    label: 'Ótimo! agora, precisamos que você informe sua altura. 💁‍♀️',
    validate: /^[1-2][0-9][0-9]{0,1}$/i,
  },
  {
    label:
      'Obrigado! Essas informações estarão salvas e voce poderá altera-las quando quiser',
  },
  {
    label: 'aproveite o app, até mais! 😍',
  },
];

export default interactions;
