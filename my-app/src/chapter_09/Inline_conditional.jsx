function Mailbox (props) {
    const unreadMessages = props.unreadMessages;

    return (

        <div>
          {unreadMessages.length > 0 &&
            <h2>
                현재 {unreadMessages.length} 개의 읽지 않은 메세지가 있습니다.
            </h2>
          }  

        </div>
    )
}

function Counter (props) {
    const count = 0;

    return ( 
        <div>
            {count && <h1>현재 카운트 : {count} </h1> }
        </div>
    );
}