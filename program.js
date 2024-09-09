//functions
function clickCookie() {
    document.getElementById("bigCookie").click();

    setTimeout(clickCookie, 250);                        
}

function getCursor() {
    document.getElementById("productName0").click();

    setTimeout(getCursor, 250);
}

function getGrandma() {
    document.getElementById("productName1").click();

    setTimeout(getGrandma, 250);
}

function getFarm() {
    document.getElementById("productName2").click();

    setTimeout(getFarm, 250);
}

function getUpgrade() {
    document.getElementById("upgrade0").click();

    setTimeout(getUpgrade, 250);
}


//function runs
clickCookie();
getCursor();
getGrandma();
getFarm();
getUpgrade();

//Still more to come...
