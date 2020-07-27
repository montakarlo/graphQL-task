import React from 'react';
import './Pageheader.sass'


export default (props) => (
    <header className={props.className}>
      <span>{props.text}</span>
    </header>
)

