import React, { FC } from 'react';

type hType = {
  text: string;
  className: string;
}

const H2:FC<hType> = ({text, className}) => {
  return (
    <h2 className={` text-Black ${className}`}>{text}</h2>
  )
}

export default H2;
