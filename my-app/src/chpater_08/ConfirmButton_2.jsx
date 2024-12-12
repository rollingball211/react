import React from "react";

class ConfirmButton2 extends React.Component {
    constructor(props){
    super(props);
    
    this.state = {
        isConfirmed : false,
    };

   
}
//Class fields syntax: 
//ArrowFunction 사용
handleConfirm = () => {
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

export default ConfirmButton2;