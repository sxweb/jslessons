function addZero(target){
    if(target < 10){
        target = `0${target}`;
    }
    return target;
}

function timer(deadline, daysId, hoursId, minutesId, secondsId){

    function displayTimer(days, hours, minutes, seconds){
        document.querySelector(daysId).innerHTML = days;
        document.querySelector(hoursId).innerHTML = hours;
        document.querySelector(minutesId).innerHTML = minutes;
        document.querySelector(secondsId).innerHTML = seconds;
    }

    function getRemainingTime(deadline){
        return Date.parse(deadline) - Date.parse(new Date());
    }


    function calculateTimerValues(miliseconds){
        const days = addZero(Math.floor(miliseconds / (1000*60*60*24))) ;
        const hours = addZero(Math.floor((miliseconds % (1000*60*60*24))/(1000*60*60)));
        const minutes = addZero(Math.floor((miliseconds % (1000*60*60*24))%(1000*60*60)/(1000*60)));
        const seconds = addZero(Math.floor((miliseconds % (1000*60*60*24))%(1000*60*60)%(1000*60)/1000));
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function startTimer(){
        const intervalId = setInterval(()=>{
            if(getRemainingTime(deadline) >= 0){
                const values = calculateTimerValues(getRemainingTime(deadline));
                displayTimer(values.days, values.hours, values.minutes, values.seconds);
            }else{
                clearInterval(intervalId);
            }
        },1000);
    }
    if(getRemainingTime(deadline) > 0){
        const values = calculateTimerValues(getRemainingTime(deadline));
        displayTimer(values.days, values.hours, values.minutes, values.seconds);
        startTimer();
    }else{
        displayTimer('00','00','00','00');
    }

}

export default timer;
export {addZero};