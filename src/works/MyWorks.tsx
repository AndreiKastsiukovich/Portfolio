import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './MyWorks.module.scss'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import todoImage from '../assets/image/todoimg.jpeg'
import socialImage from '../assets/image/socialimg.jpg'


export const MyWorks = () => {

    const social = {
        backgroundImage: `url(${socialImage})`,
    }

    const todoList = {
        backgroundImage: `url(${todoImage})`,
    }

    return (
        <div className={style.myWorksBlock}>

            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>

               <Title title={'My projects'}/>

                <div className={style.works}>
                    <Work
                        style={social}
                        name={'Social network'}
                        description={'PROJECT 1'}/>
                    <Work
                        style={todoList}
                        name={'Todolist'}
                        description={'PROJECT 2'}/>
                </div>

            </div>

        </div>
    )
}