import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './MyWorks.module.css'
import {Work} from "./work/Work";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>

            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>

                <div className={style.title}>
                    <h2>My projects</h2>
                </div>

                <div className={style.works}>
                    <Work name={'Social network'} description={'PROJECT 1'}/>
                    <Work name={'Todolist'} description={'PROJECT 2'}/>
                </div>

            </div>

        </div>
    )
}