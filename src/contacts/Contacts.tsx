import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <h2 className={style.title}> Contacts </h2>

                    <form className={style.form}>
                        <input type={"text"} className={style.input}/>
                        <input type={"text"} className={style.input}/>
                        <textarea className={style.textarea}/>
                    </form>

                <div className={style.send}>
                    <a href="">
                        <h2>Send</h2>
                    </a>
                </div>


            </div>

        </div>
    );
};

