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
                    <Skill title={'JS'} description={'JS DEVELOPER'}/>
                    <Skill title={'CSS'} description={'CSS DEVELOPER'}/>
                    <Skill title={'REACT'} description={'REACT DEVELOPER'}/>
                </div>

            </div>

        </div>
    )
}