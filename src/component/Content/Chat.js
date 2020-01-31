import React, { Fragment } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
class Chat extends React.Component {
    render() {
        return (
            <div>
                <TextArea />
                <TextInput />
            </div>
        );
    }
}


class TextArea extends React.Component {
    render() {
        return (
            <Fragment>
                <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" size='lg' readOnly='true' />
                </InputGroup>
            </Fragment>
        );
    }
}

class TextInput extends React.Component {
    render() {
        return (
            <Fragment>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="entry any value..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Enter</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Fragment>
        );
    }
}
export default Chat;