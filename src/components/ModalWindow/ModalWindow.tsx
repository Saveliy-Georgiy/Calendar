import React from 'react';
import s from './ModalWindow.module.css';
import events from 'node:events';

type EventsType = {
    start: string
    end: string
    title: string
}

type ButtonWindowPropsType = {
    events: Array<EventsType>
    modalWindow: boolean
    setModalWindow: (isActivate: boolean) => void

}

export const ModalWindow = (props: ButtonWindowPropsType) => {

const {
    modalWindow,
    setModalWindow,
    events,
} = props

 /*   const activateModalWindow = () => {
        setModalWindow(true);
    };*/



    const deactivateModalWindow = () => {
        setModalWindow(false);
    };

    const display = modalWindow ? s.displayBlock : s.displayNone;

    return (
        <div>
          {/*  <button className={styles.btnSubmit} onClick={activateModalWindow}>{props.name}</button>*/}
            <div className={s.modalBackground + ' ' + display}>
                <div className={s.modalWindow}>
                    <h3>Здравствуйте!</h3>
                    <p>Вы успешно отправили заявку.</p>
                    <button onClick={deactivateModalWindow}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};
