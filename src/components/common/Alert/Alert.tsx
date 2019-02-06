import { Alert as AntAlert } from 'antd';
import * as React from 'react';
import { AlertProvider, AlertType } from '../../../contexts/AlertContext';
import styles from './Alert.module.scss';

export default class Alert extends React.Component<{}, IAlertState> {

  constructor(props) {

    super(props);

    this.handleAlertUpdate = this.handleAlertUpdate.bind(this);
    this.state = {
      alert: undefined,
      type: 'warning',
      onAlertUpdate: this.handleAlertUpdate
    };

  }

  public render() {

    return (
      <AlertProvider value={this.state}>
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

    this.setState({ alert: undefined, type: 'warning' });

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
  readonly onAlertUpdate: (alert: string, type: AlertType) => void;
  readonly type: AlertType;
}
