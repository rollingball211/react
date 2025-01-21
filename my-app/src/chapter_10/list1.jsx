// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );


// ReactDom.render( 
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );


function NumberList(props) {
    const { numbers } = props;
    const listItems = numbers.map((number) => 
    <li>{number}</li>
);


    return (
        <ul>{listItems}</ul>
    );
}

ReactDom.render(
    <NumberList number= {numbers}/>,
    document.getElementById('root')
);

