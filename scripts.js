function gcd(a, b) {
    if (b == 0) return a;
    else return gcd(b, a%b);
}

function check() {
    var data = document.getElementById('in').value;
    var els = [];
    var vs = [];
    var ac = "";
    var type = 0;
    var g = 0;
    for (var i = 0; i < data.length; i++) {
        if (type == 0 && data.charCodeAt(i) <= 57) {
            els.push(ac);
            ac = data[i];
            type = 1;
        }
        else if (type == 1 && data.charCodeAt(i) > 57) {
            vs.push(parseInt(ac));
            ac = data[i];
            g = gcd(g, vs[vs.length-1]);
            type = 0;
        }
        else ac += data[i];
    }
    if (type == 0 && ac.length > 0) els.push(ac);
    else if (type == 1 && ac.length > 0) {
        vs.push(parseInt(ac));
        g = gcd(g, vs[vs.length-1]);
    }
    var res = "";
    if (els.length != vs.length) res = "Error!";
    else {
        for (var i = 0; i < vs.length; i++) {
            res += els[i];
            var loc = vs[i]/g;
            res += loc.toString();
        }
    }
    document.getElementById('out').value = res;
}

setInterval(check, 1);