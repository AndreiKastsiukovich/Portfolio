import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <Title title={'My contacts'}/>

                    <form className={style.form}>
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <textarea/>
                        <button type='submit' className={style.sendButton}>Send form</button>
                    </form>

            </div>

        </div>
    );
};

