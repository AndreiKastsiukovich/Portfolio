import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    name:string,
    description:string
}

export const Work = (props:WorkPropsType) => {
    return (
        <div className={style.work}>

            <div className={style.image}>
                <a href="">
                    <h2>Watch</h2>
                </a>
            </div>

            <h4>{props.name}</h4>

            <span>{props.description}</span>

        </div>
    );
};

