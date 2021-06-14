
function getX(x){
    if (x >= 10) return;
    console.log(x)
    return getX(x + 1)
}

getX(0)