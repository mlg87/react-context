import * as React from 'react';
import { MessageProvider } from '../../contexts/MessageContext';
import styles from './Message.module.scss';

export default class Message extends React.Component<{}, IMessageState> {

  public state: IMessageState = {
    message: undefined
  };

  constructor(props) {

    super(props);

    this.handleMessageUpdate = this.handleMessageUpdate.bind(this);

  }

  public render() {

    const { message } = this.state;

    const providerValue = {
      message,
      onMessageUpdate: this.handleMessageUpdate
    };

    /* tslint:disable:no-console */
    console.log('providerValue', providerValue);

    return (
      <MessageProvider value={providerValue}>
        {this.renderContent()}
      </MessageProvider>
    );

  }

  //
  // ─── RENDERING ──────────────────────────────────────────────────────────────────
  //

  private renderContent() {

    const { message } = this.state;

    if (!message) {

      return null;

    }

    return (
      <div className={styles.container}>
        <span>{message}</span>
        <button onClick={() => this.handleDismiss()}>Dismiss</button>
      </div>
    );

  }

  //
  // ─── EVENT METHODS ──────────────────────────────────────────────────────────────
  //

  private handleDismiss() {

    this.setState({ message: undefined });

  }

  private handleMessageUpdate(message: string) {

    this.setState({ message });

  }

}

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

export interface IMessageState {
  readonly message?: string;
}
