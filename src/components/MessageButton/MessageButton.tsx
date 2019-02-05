import * as React from 'react';
import { MessageConsumer, MessageContext } from '../../contexts/MessageContext';

export default class MessageButton extends React.Component<IMessageButtonProps> {

    public static contextType = MessageContext;

    public render() {

        return (
            <MessageConsumer>
                {context => this.renderButton(context)}
            </MessageConsumer>
        );

    }

    //
    // ─── RENDERING ──────────────────────────────────────────────────────────────────
    //

    private renderButton(context) {

        /* tslint:disable:no-console */
        console.log('context', context);

        const { content, messageContent } = this.props;
        const { onMessageUpdate } = this.context;

        return <button onClick={() => onMessageUpdate(messageContent)}>{content}</button>;

    }

}

//
// ─── INTERFACES ─────────────────────────────────────────────────────────────────
//

export interface IMessageButtonProps {
    readonly content: string;
    readonly messageContent: string;
}
