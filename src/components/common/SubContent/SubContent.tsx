import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { AlertButton } from '../../index';

export default class SubContent extends React.Component {

    public render() {

        return (
            <div>
                <div>SubContent</div>
                <AlertButton alertMessage="We don't like no stinking /settings!" body="What do I do?" type="error" />
            </div>
        );

    }

}
