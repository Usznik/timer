window.addEventListener('load',calculateTime)
function calculateTime()
{
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var apm  = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var sec = date.getSeconds();
    
    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute: minute;
    sec = sec < 10 ? '0' + sec:sec;
    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('apm').innerHTML = apm;
    document.getElementById('sec').innerHTML = sec;
    
    setTimeout(calculateTime,200); //loop functions

}