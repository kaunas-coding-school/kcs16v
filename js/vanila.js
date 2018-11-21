function sudeti() {
    var a = gauti('A');
    var b = gauti('B');
    // Atliekam operacijas
    rodytiAtsakyma(rez);
}
var xx = '0';
function atimti() {
    var a = gauti('A');
    var b = gauti('B');
    // Atliekam operacijas
    rodytiAtsakyma(rez);
}

function gautiAtsTeksta() {
    if (xx === 0) {
        xx = document.getElementById('rezultatas').innerHTML;
    }

    return xx;
}
/** *
 *
 * var kint = document.getElementById().value;
 *
 */