import React, { Fragment } from 'react';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { List, Map  } from 'immutable';

class Chat extends React.Component {
    id = 0;
    constructor(props) {
        super(props);

        this.state = {
            data: Map(
                {
                    msgs: List([
                        Map({
                            id: 0,
                            user: 'user0',
                            text: 'text0'
                        })
                    ])
                }
            )
        }
        this.putUserMsg = this.putUserMsg.bind(this);
    }

    userMsg = '';

    async putUserMsg(msg) {
        const { data } = this.state;
        const msgs = data.get('msgs');
        alert(msgs);
        this.setState({
            msgs: msgs.push({
                id: this.id++,
                user: 'user',
                text: msg
            })
        });
    }

    async putEmilyMsg(msg) {
        return 'Emily Msg';
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {data.get('msgs').map((msg, i) => {
                        return (
                            <ChatPane  
                                user={msg.user}
                                text={msg.text}
                                key={i}
                            />
                        );
                    }
                )}
                
                {/* <ChatPane
                    user={this.state[0].user}
                    text={this.state[0].text}
                /> */}
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
        this.putUserMsg();
    }

    putUserMsg = () => {
        this.props.putUserMsg(this.state.value);
    }

    handleKeyPress = (e) => {
        const { data } = this.state;
        if(e.charCode === 13) {
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
                    <FormControl
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
        this.text = props.text;
        this.valGbnCd = props.valGbnCd;
    }
    text = '';
    valGbnCd = '';
    render() {
        return (
            <Fragment>
                <Card border="primary" style={{ width: '18rem', right: 0, }}>
                    <Card.Header>{this.props.user}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default Chat;