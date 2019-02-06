import * as React from 'react';
import { AlertConsumer, AlertContext, OBSERVED_BITS } from '../../../contexts/AlertContext';

export default class ContextDisplay extends React.PureComponent {

    public static contextType = AlertContext;

    public render() {

        return (
            <AlertConsumer unstable_observedBits={OBSERVED_BITS.type}>
                {() => this.renderContextDisplay()}
            </AlertConsumer>
        );

    }

    //
    // ─── RENDERING ──────────────────────────────────────────────────────────────────
    //

    private renderContextDisplay() {

        const { alert, type } = this.context;

        /*tslint:disable:no-console*/
        console.log('im rerending bc type changed (even though it might not have)');

        return (
            <div>
                {/* <div>Last time I rendered: {Date.now()}</div> */}
                <div>Alert: <strong>{alert}</strong></div>
                <div>Type: <strong>{type}</strong></div>
            </div>
        );

    }

}
