import React from "react";
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Andrew Gulliver</h1>
                    <p>React/Frontend developer</p>
                </div>

                <div className={style.photo}>

                </div>

            </div>

        </div>
    )
}