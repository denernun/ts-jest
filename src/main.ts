// T é um objeto que pode ser qualquer coisa
// que deve ter uma propriedade string e o tipo unknown
// K é uma chave de T, ou seja, uma propriedade de T
// o retorno é uma propriedade de T

function getValueFromObject<T extends Record<string, unknown>, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'John',
  age: 30,
};

console.log(getValueFromObject(obj, 'name'));

// UnknownMetada recebe um objeto que pode ser qualquer coisa
// desde que seja um objeto com uma propriedade string e o tipo unknown
// quando definir o tipo da interface, esse objecto sera recebido pela
// propriedade metaData

export enum EventCode {
  CONFIRMED = 'CONFIRMED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface Event<Metadata extends object = Record<string, unknown>> {
  id: string;
  code: EventCode;
  metaData: Metadata;
}

// essa informação vai para o metaData da interface Event
// ou seja, é a informação pertinente ao evento
export interface ConfirmedMetadata {
  orderId: string;
}

// esse code vai para o code da interface Event
export interface ConfirmedEvent extends Event<ConfirmedMetadata> {
  code: EventCode.CONFIRMED;
}

const confirmedEvent: ConfirmedEvent = {
  id: '1',
  code: EventCode.CONFIRMED,
  metaData: {
    orderId: '1',
  },
};
console.log(confirmedEvent.code);

// Tupla


