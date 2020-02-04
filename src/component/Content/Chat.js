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
                    msgs: [
                        
                    ]
                }
            )
        }
        this.putUserMsg = this.putUserMsg.bind(this);
    }

    userMsg = '';

    putUserMsg = (msg) => {
        const { data } = this.state;
        const msgs = [...data.get('msgs')];
        let userMsg = { id: ++this.id, user: 'user', text: msg};
        msgs.push(userMsg);
        if(msg !== null && msg !== '' && this.userMsg !== msg){
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

    async putEmilyMsg(msg) {
        return 'Emily Msg';
    }

    render() {
        const { data } = this.state;
        
        return (
            <div>
                {[...data.get('msgs')].map((msg, i) => {
                        return (
                            <ChatPane
                                user={msg.user}
                                text={msg.text}
                                key={i}
                            />
                        );
                    }
                )}
                
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
    }
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