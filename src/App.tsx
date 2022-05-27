import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './App.css';
import s from './ButtonWindow.module.css';
import {ModalWindow} from './components/ModalWindow/ModalWindow';
import {MyCalendar} from './components/MyCalendar';


function App() {

    let todayStr = new Date().toISOString().replace(/T.*$/, '');

    const events = [
        {start: '2022-05-16T13:30:00', end: '2022-05-16T15:00:00', title: 'microfon',},
        {start: '2022-05-15T12:30:00', end: '2022-05-15T14:00:00', title: 'some event 2'},
        {start: '2022-05-29T12:30:00', end: '2022-05-29T14:00:00', title: 'some event 3'},
    ];

    const [modalWindow, setModalWindow] = useState(false);
    const someMethod = () => {
        setModalWindow(true);
    };
    let date = new Date();
    const getWeekDay = (date: Date) => {
        let days = [0, 1, 2, 3, 4, 5, 6];
        return days[date.getDay()];
    };

    return (
        <div className="App">
            <FullCalendar
                editable={false}
                selectable={false}
                selectMirror={true}
                dayMaxEvents={true}
                slotLabelClassNames={'slotLabel'}
                allDayClassNames={''}
                dayCellClassNames={''}
                dayHeaderClassNames={'f'}
                eventClassNames={'f'}
                moreLinkClassNames={'f'}
                nowIndicatorClassNames={'f'}
                viewClassNames={''}
                weekNumberClassNames={'f'}
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                /*dateClick={someMethod}*/
                selectOverlap={true}
                slotLabelFormat={[{hour: '2-digit', hour12: false, minute: '2-digit'},]}
                slotMinTime={'05:00:00'}
                allDaySlot={false}
                firstDay={getWeekDay(date)}
                nowIndicator={true}
                events={events}
                /*eventContent={renderEventContent}*/
                eventClick={someMethod}
            />
            <ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow} events={events}/>
            <MyCalendar/>
        </div>
    );
}

function renderEventContent(props: any) {
    return (
        <div>
            <span>{props.event.title}</span>
        </div>
    );
}

export default App;
