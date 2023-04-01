import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './MyWorks.module.css'
import {Work} from "./work/Work";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>

            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>

                <h2 className={style.title}>My works</h2>

                <div className={style.works}>

                    <Work name={'SAMURAY WAY'} description={'PROJECT 1'}/>
                    <Work name={'TODOLIST'} description={'PROJECT 2'}/>

                </div>

            </div>

        </div>
    )
}