import React from 'react';

class Intro extends React.Component {
    render() {
        return (
            <div>
                <h2>Echo By Emily.</h2>
                1. 처음 들어온 단어 'A'에 대해 의미를 묻는다.<br />
                2. 답변을 단어에 대한 value로 저장한다.<br />
                3. 'A'라는 단어가 들어오면, value를 답변으로 뱉는다.
            </div>            
        );
    }
}

export default Intro;