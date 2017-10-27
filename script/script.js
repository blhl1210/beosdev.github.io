var isInv = false;
var isRad = true;
var ans = 0;
const pi = 3.14159265358979;
const e = 2.71828182845904523536;
var brackets = 0;
var checked = ['(','asin(','acos(','atan(','sin(','cos(','tan(','ln(','sqrt(','log('];
function set(num) {
    var exp = document.getElementById("display");
    if (checked.indexOf(num) !== -1) {
        if (brackets < 0) brackets = 0;
        brackets++;
    }
    if (num === ')')
        brackets--;
    if (brackets>=0) {
        if (exp.value === '0')
            exp.value = num;
        else {
            exp.value += num;
        }
    }

}

function changeMode() {

    var displayMode = document.getElementById("displayMode");
    if (isRad === true) {
        //do st here
        displayMode.innerHTML = "Mode: Reg";
        isRad = false;
    }
    else {
        //do st here
        displayMode.innerHTML = "Mode: Rad";
        isRad = true;
    }
}

function INV() {
    var sin = document.getElementById("btnSin");
    var cos = document.getElementById("btnCos");
    var tan = document.getElementById("btnTan");
    if (isInv === false) {
        sin.value = "asin";
        cos.value = "acos";
        tan.value = "atan";
        sin.setAttribute("onclick", "set('asin(')");
        cos.setAttribute("onclick", "set('acos(')");
        tan.setAttribute("onclick", "set('atan(')");
        isInv = true;
    }
    else {
        sin.value = "sin";
        cos.value = "cos";
        tan.value = "tan";
        sin.setAttribute("onclick", "set('sin(')");
        cos.setAttribute("onclick", "set('cos(')");
        tan.setAttribute("onclick", "set('tan(')");
        isInv = false;
    }
}

/*
function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));

}

function acosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));

}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}*/
function calculate() {
    if (brackets !== 0) return 0;
    var AnsExp = document.getElementById("displayAns");
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    AnsExp.value = Exp.value + "=";
    var result = math.eval(Exp1);
    Exp.value = result;
    ans = result;
}

function ce() {
    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);
    document.getElementById("display").value = a;
}

function ac() {
    brackets = 0;
    ans = 0;
    var elem = document.getElementById("display").value = "0";
    document.getElementById("displayAns").value = "";
}