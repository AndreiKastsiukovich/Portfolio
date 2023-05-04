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
                    <p>I'm frontend developer with
                        experience in creating SPA using
                        React, Redux, TypeScript.
                        Knowledge in user interface,
                        testing, and debugging processes. I
                        improving my skills in this direction
                        and plan to expand them with new
                        technologies, such as Angular.
                        Open to your suggestions.</p>
                </div>
                <div className={style.photo}>
                    PHOTO
                </div>

            </div>

        </div>
    )
}