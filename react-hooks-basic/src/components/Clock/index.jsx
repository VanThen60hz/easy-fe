import React, { useEffect, useState } from 'react';

Clock.propTypes = {
    
};

function Clock() {
    const [timeString, setTimeString] = useState('');

    const formatDate = (date) => {

        const hours = `${date.getHours()}`.slice(-2);
        const minutes = `${date.getMinutes()}`.slice(-2);
        const seconds = `${date.getSeconds()}`.slice(-2);

        return `${hours} : ${minutes} : ${seconds}`

    }

    useEffect(() => {
        const clockInterval = setInterval(()=>{
            const now = new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString)
        }, 1000)

        return () => {
            console.log("Clock clean up");
            clearInterval(clockInterval)
        }
    }, [])

    return (
        <>
        <p style={{fontSize: "42px"}}>{timeString}</p>
        </>
    );
}

export default Clock;