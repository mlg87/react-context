import { Button } from 'antd';
import * as React from 'react';
import { AlertConsumer, AlertContext, AlertType } from '../../../contexts/AlertContext';

export default class MessageButton extends React.Component<IAlertButtonProps> {

    public static contextType = AlertContext;

    public render() {

        return (
            <AlertConsumer>
                {() => this.renderButton()}
            </AlertConsumer>
        );

    }

    //
    // ─── RENDERING ──────────────────────────────────────────────────────────────────
    //

    private renderButton() {

        const { alertMessage, body, type } = this.props;
        const { onAlertUpdate } = this.context;

        return <Button onClick={() => onAlertUpdate(alertMessage, type)} type="primary">{body}</Button>;

    }

}

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

export interface IAlertButtonProps {
    readonly alertMessage: string;
    readonly body: string;
    readonly type: AlertType;
}
