function renderTime(){
    //Date
    var mydate = new Date();
    var year = mydate.getFullYear();
        if (year < 1000)
        {
            year += 1900;
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var d_array = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    var m_array = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');


    //Time 
    var curr_t = new Date();
    var h = curr_t.getHours();   
    var m = curr_t.getMinutes();  
    var s = curr_t.getSeconds();
        if (h == 24)
        {
            h = 0;
        }
        else if (h > 12)
        {
            h = h - 0;
        }
        if(h < 10)
        {
            h = "0" + h;
        }
        if(m < 10)
        {
            m = "0" + m;
        }
        if(s < 10)
        {
            s = "0" + s;
        }

        var myClock = document.getElementById("time");
        myClock.textContent = "" +d_array[day]+ " " +daym+ " " +m_array[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" +d_array[day]+ " " +daym+ " " +m_array[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

        setTimeout("renderTime()", 1000);
}
renderTime();
