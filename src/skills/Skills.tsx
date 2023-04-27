import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title title={'My skills'}/>

                <div className={style.skills}>
                    <Skill title={'JS'} description={'I am Java Script developer'}/>
                    <Skill title={'REDUX'} description={'I am Redux developer'}/>
                    <Skill title={'REACT'} description={'I am React developer'}/>
                    <Skill title={'HTML/CSS'} description={'I am HTML/CSS developer'}/>
                </div>

            </div>

        </div>
    )
}