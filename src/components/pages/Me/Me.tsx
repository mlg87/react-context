import * as React from 'react';
import { AlertButton, ContextDisplay } from '../../index';

export default class Me extends React.PureComponent {

    public render() {

        return (
            <div>
                <div>Me</div>
                <AlertButton alertMessage="Salutations, from /me!" body="Press Me" type="success" />
                <ContextDisplay />
            </div>
        );

    }

}
