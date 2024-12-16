function userStatus(props) {
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? 'Login' : 'unLoggedIn'}</b> 상태입니다.
        </div>
    )
}