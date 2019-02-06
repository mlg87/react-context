import * as React from 'react';
import { AlertButton } from '../..';

export default class Trips extends React.Component {

    public render() {

        return (
            <div>
                <div>Trips</div>
                <AlertButton
                    alertMessage="Yo what's good? Coming at you from the /trips"
                    body="Good Times"
                    type="info"
                />
            </div>
        );

    }

}
