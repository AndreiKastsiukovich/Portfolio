import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {


    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title title={'My skills'}/>

                <div className={style.skills}>
                    <Skill title={'React'} description={''}/>
                    <Skill title={'Redux'} description={''}/>
                    <Skill title={'TypeScript'} description={''}/>
                    <Skill title={'JavaScript'} description={''}/>
                    <Skill title={'Axios'} description={''}/>
                    <Skill title={'Material-UI'} description={''}/>
                    <Skill title={'Storybook'} description={''}/>
                    <Skill title={'Unit-test'} description={''}/>
                    <Skill title={'GIT'} description={''}/>
                    <Skill title={'HTML / CSS'} description={''}/>
                </div>

            </div>

        </div>
    )
}