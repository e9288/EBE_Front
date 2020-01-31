import React, { Fragment } from 'react';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';


class Chat extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            userMsg: '',
            emilyMsg: ''
        }
        this.putUserMsg = this.putUserMsg.bind(this);
    }

    userMsg = '';

    async putUserMsg(msg) {
        if(this.state.userMsg !== msg){
            this.setState(
                {userMsg: msg}
            );
            this.setState(
                {emilyMsg: await this.putEmilyMsg(msg)}
            );
        }
    }

    async putEmilyMsg(msg) {
        return 'Emily Msg';
    }

    render() {
        return (
            <div>
                <UserSpeakPan
                    text={this.state.userMsg}
                />
                <EmilySpeakPan 
                    text={this.state.emilyMsg}
                />
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
            value: ''
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
        if(e.charCode === 13) {
            this.setState({value: e.target.value});
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

class UserSpeakPan extends React.Component {

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
                    <Card.Header>User</Card.Header>
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

class EmilySpeakPan extends React.Component {

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
                <Card border="info" style={{ width: '18rem', left: 0 }}>
                    <Card.Header>Emily</Card.Header>
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