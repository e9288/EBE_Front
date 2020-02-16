import React, { Fragment } from 'react';
import { InputGroup, FormControl, Button, Card, Toast } from 'react-bootstrap';
import { List, Map } from 'immutable';
import './Chat.css';
import Scrollbar from '../Element/Scrollbar';

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: Map(
                {
                    msgs: [

                    ]
                }
            )
        }
        this.putUserMsg = this.putUserMsg.bind(this);
    }

    componentDidMount() {

    }

    id = 0;
    userMsg = '';
    emilyMsg = '';
    messagesEnd;

    putUserMsg = (msg) => {
        const { data } = this.state;
        const msgs = [...data.get('msgs')];
        let userMsg = { id: ++this.id, user: 'user', text: msg };
        let answerList = Map({
            aaa: 'answer A',
            bbb: 'answer B',
            ccc: 'answer C'
        });

        let text = answerList.get(msg) != undefined ?
            answerList.get(msg) : '잘 모르는 말이에요.';
        let emilyMsg = { id: ++this.id, user: 'emily', text: text };
        msgs.push(userMsg);
        msgs.push(emilyMsg);
        if (msg !== null && msg !== '' && this.userMsg !== msg) {
            this.setState(
                {
                    data: Map(
                        {
                            msgs: msgs
                        }
                    )
                }
            );
        }
        this.userMsg = msg;

    }

    render() {
        const { data } = this.state;
        const { msgs } = [...data.get('msgs')];

        return (

            <div className="chatPane">
                <Scrollbar>

                    {/* {
                        msgs.map((msg) => {
                            return (
                                <ChatPane
                                    user={msg.user}
                                    text={msg.text}
                                    key={msg.id}
                                />
                            );
                        })
                    } */}

                    {
                        [...data.get('msgs')].map((msg) => {
                            console.log([...data.get('msgs')].length === msg.id);

                            return (
                                <ChatPane
                                    user={msg.user}
                                    text={msg.text}
                                    key={msg.id}
                                />
                            );
                        })
                    }
                </Scrollbar>

                <TextInput
                    putUserMsg={this.putUserMsg}
                />
            </div>
        );
    }
}


// class TextArea extends React.Component {
//     render() {
//         return (
//             <Fragment>
//                 <InputGroup>
//                     <FormControl className="chatArea" as="textarea" aria-label="With textarea" size='lg' readOnly='true' style={{ height:  }} />
//                 </InputGroup>
//             </Fragment>
//         );
//     }
// }

class TextInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: Map({
                value: ''
            })
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidUpdate() {
        const { data } = this.state;
        console.log('componentDidMount ' + data.get('value'));
        this.props.putUserMsg(data.get('value'));
    }

    handleKeyPress = (e) => {
        const { data } = this.state;
        if (e.charCode === 13) {
            this.setState({
                data: data.set('value', e.target.value)
            });
            e.target.value = '';
        }
    }

    render() {
        return (
            <Fragment>
                <InputGroup className="mb-3">
                    <FormControl ref={this.textInput}
                        placeholder="entry any value..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onKeyPress={this.handleKeyPress}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Enter</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Fragment>
        );
    }
}

class ChatPane extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user == 'user') {
            return (
                <Fragment>

                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">{this.props.user}</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>{this.props.text}</Toast.Body>
                    </Toast>
                </Fragment>
            );
        }
        else if (this.props.user == 'emily') {
            return (
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    style={{
                        position: 'relative',
                        minHeight: '100px',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}
                    >
                        <Toast ref={this.chatRef}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">{this.props.user}</strong>
                                <small>just now</small>
                            </Toast.Header>
                            <Toast.Body>{this.props.text}</Toast.Body>
                        </Toast>
                    </div>
                </div>
            );
        }
    }
}

export default Chat;







