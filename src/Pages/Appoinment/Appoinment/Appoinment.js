import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinHeader from '../AppoinHeader/AppoinHeader';
import AvelableAppoin from '../AvelableAppoin/AvelableAppoin';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinHeader date={date} setDate={setDate}></AppoinHeader>
            <AvelableAppoin date={date}></AvelableAppoin>
        </div>
    );
};

export default Appoinment;