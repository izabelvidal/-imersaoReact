import React from 'react';

function ButtonLink(props){
    //props é um objet0
    //props = className: o que alguém passa, href: "/"
    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;