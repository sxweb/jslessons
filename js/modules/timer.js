function addZero(target){
    if(target < 10){
        target = `0${target}`;
    }
    return target;
}

function timer(){

//timer
    const deadLine = '2021-07-01T10:18:22';
    console.log(new Date());


    function displayTimer(days, hours, minutes, seconds){
        document.querySelector('#days').innerHTML = days;
        document.querySelector('#hours').innerHTML = hours;
        document.querySelector('#minutes').innerHTML = minutes;
        document.querySelector('#seconds').innerHTML = seconds;
    }

    function getRemainingTime(deadline){
        return Date.parse(deadLine) - Date.parse(new Date());
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
            if(getRemainingTime(deadLine) >= 0){
                const values = calculateTimerValues(getRemainingTime(deadLine));
                displayTimer(values.days, values.hours, values.minutes, values.seconds);
            }else{
                clearInterval(intervalId);
            }
        },1000);
    }
    if(getRemainingTime(deadLine) > 0){
        const values = calculateTimerValues(getRemainingTime(deadLine));
        displayTimer(values.days, values.hours, values.minutes, values.seconds);
        startTimer();
    }else{
        displayTimer('00','00','00','00');
    }

}

export default timer;
export {addZero};