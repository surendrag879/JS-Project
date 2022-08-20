function calc(param) {
    var n1 = parseInt(document.getElementById("Text1").value);
    var n2 = parseInt(document.getElementById("Text2").value);
    // let oper = param;
    if (param == '+') {
        document.getElementById('result1').value = n1 + n2;
    }
    if (param == '-') {
        document.getElementById('result1').value = n1 - n2;
    }
    if (param == '*') {
        document.getElementById('result1').value = n1 * n2;
    }
    if (param === '/') {
        document.getElementById('result1').value = n1 / n2;
    }
    if (param === '%') {
        document.getElementById('result1').value = n1 % n2;
    }
}