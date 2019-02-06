import { Alert as AntAlert } from 'antd';
import * as React from 'react';
import { AlertProvider, AlertType } from '../../../contexts/AlertContext';
import styles from './Alert.module.scss';

const initialState: IAlertState = {
  alert: undefined,
  type: 'warning'
};

export default class Alert extends React.Component<{}, IAlertState> {

  public state: IAlertState = initialState;

  constructor(props) {

    super(props);

    this.handleAlertUpdate = this.handleAlertUpdate.bind(this);

  }

  public render() {

    const { alert, type } = this.state;

    const providerValue = {
      alert,
      type,
      onAlertUpdate: this.handleAlertUpdate
    };

    return (
      <AlertProvider value={providerValue}>
        {this.renderContent()}
        {/* children will be most of the app */}
        {this.props.children}
      </AlertProvider>
    );

  }

  //
  // ─── RENDERING ──────────────────────────────────────────────────────────────────
  //

  private renderContent() {

    const { alert, type } = this.state;

    if (!alert) {

      return null;

    }

    return <AntAlert banner closable message={alert} onClose={() => this.handleDismiss()} type={type} />;

  }

  //
  // ─── EVENT METHODS ──────────────────────────────────────────────────────────────
  //

  private handleDismiss() {

    this.setState(initialState);

  }

  private handleAlertUpdate(alert: string, type: AlertType) {

    this.setState({ alert, type });

  }

}

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

export interface IAlertState {
  readonly alert?: string;
  readonly type: AlertType;
}
