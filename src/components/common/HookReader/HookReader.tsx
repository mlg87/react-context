import * as React from 'react';
// import { useContext } from 'react';
import { AlertContext } from '../../../contexts/AlertContext';

export default function HookReader(props) {

    const alertContext = React.useContext(AlertContext);

    return (
        <div>
            <div>I use react hooks (not a class)</div>
            {alertContext &&
                <div>
                    <div>Alert: <strong>{alertContext.alert}</strong></div>
                    <div>Type: <strong>{alertContext.type}</strong></div>
                </div>
            }
        </div>
    );

}
