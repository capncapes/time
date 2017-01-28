var checkTime = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var getTime = function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var meridiem = "AM";
    
    if (h >= 12) {
        h = h - 12;
        meridiem = "PM";
    }
    
    document.getElementById('meridiem').innerHTML = meridiem;
    
    if (h == 0) {
        h = 12;
    }
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        getTime()
    }, 500);
}

var getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var color = function() {
    document.body.style.backgroundColor = getRandomColor();
}

document.getElementById('button').click(color);

getTime();