import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.css'
import {Icon} from "./Links/Icon";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <h2 className={style.title}> Andrew Gulliwer</h2>

                <div className={style.links}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>

                <h3 className={style.bottomTitle}>2023 All rights reserved</h3>

            </div>

        </div>
    );
};
