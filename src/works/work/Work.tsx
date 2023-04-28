import React from 'react';
import style from './Work.module.scss'

type WorkPropsType = {
    style:object
    name:string,
    description:string
}

export const Work = (props:WorkPropsType) => {
    return (
        <div className={style.work}>

            <div className={style.image} style={props.style}>
                <a className={style.link} href="">Watch project</a>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.title}>{props.name}</h3>
                <span className={style.description}>{props.description}</span>
            </div>


        </div>
    );
};

