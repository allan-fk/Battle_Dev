function longWrd(str) {
    var str = str.split(' ').sort((a, b) => { 
        return b.length - a.length;
    }).splice(0,1);
    return(str[0]);
}