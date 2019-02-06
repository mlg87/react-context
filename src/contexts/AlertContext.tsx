import * as React from 'react';

// this is a little hack to get ts to shut up. most of the time youll be creating a context
// that doesnt have a default value
export const AlertContext = React.createContext<IAlertContext | null>(null);
export interface IAlertContext {
  readonly alert?: string;
  readonly type: AlertType;
  readonly onAlertUpdate: (alert: string, type: AlertType) => void;
}

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export const AlertProvider = AlertContext.Provider;
export const AlertConsumer = AlertContext.Consumer;
