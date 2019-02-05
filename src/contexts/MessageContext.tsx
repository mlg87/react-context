import * as React from 'react';

// this is a little hack to get ts to shut up. most of the time youll be creating a context
// that doesnt have a default value
export const MessageContext = React.createContext<IMessageContext | null>(null);
export interface IMessageContext {
  readonly message?: string;
  readonly onMessageUpdate: (message: string) => void;
}

export const MessageProvider = MessageContext.Provider;
export const MessageConsumer = MessageContext.Consumer;
