import * as React from 'react';
import { IAlertContext, withAlertContext } from '../../../contexts/AlertContext';

class Home extends React.Component<IHomeProps> {

    public render() {

        const { alertContext } = this.props;

        return (
            <div>
                <div>Home</div>
                <div>
                    <div>Current alert: {alertContext.alert}</div>
                    <div>Current alert type: {alertContext.type}</div>
                </div>
            </div>
        );

    }

}

export default withAlertContext(Home);

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

export interface IHomeProps {
    readonly alertContext: IAlertContext;
}
