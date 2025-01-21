import React from "react";

class ConfirmButton extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        isConfirmed : false,
    };

    //초기값 false를 set


    //bind 함수를 통해 이벤트를 가져옴.
    this.handleConfirm = this.handleConfirm.bind(this);
}

handleConfirm() {
    this.setState((prevState) => ({
        isConfirmed: !prevState.isConfirmed,
    }));
}

//버튼의 eventHandler 

render() {
    return (
        <button
            onClick={this.handleConfirm}  //onClick 시 위의 함수 실행
            disabled={this.state.isConfirmed}
        >
            {this.state.isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
  }
}

export default ConfirmButton;