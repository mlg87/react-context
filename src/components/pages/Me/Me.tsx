import * as React from 'react';
import { AlertButton } from '../../index';

export default class Me extends React.Component {

    public render() {

        return (
            <div>
                <div>Me</div>
                <AlertButton alertMessage="Salutations, from /me!" body="Press Me" type="success" />
            </div>
        );

    }

}
