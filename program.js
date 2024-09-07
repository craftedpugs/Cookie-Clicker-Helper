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

function getUpgrade() {
    document.getElementById("upgrade0").click();

    setTimeout(getUpgrade, 250);
}


//function runs
clickCookie();
getCursor();
getGrandma();
getUpgrade();

//Still more to come...
