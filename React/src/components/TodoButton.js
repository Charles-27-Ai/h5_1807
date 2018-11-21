import React from 'react';

let TodoButton =  props => {
    console.log('form:',props.form)
    let {className,children,handlerClick} = props;
    return <button className={className} onClick={handlerClick}>{children}</button>
}

export default TodoButton;