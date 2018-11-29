
function draw(r) {
    var ctx = document.getElementById("graph").getContext("2d");

    ctx.clearRect(0, 0, 400, 400);

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 140, 0, Math.PI / 2, true);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(200, 200, 140, 140);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(130, 200);
    ctx.lineTo(200, 130);
    ctx.lineTo(200, 200);
    ctx.lineTo(130, 200);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 380);
    ctx.lineTo(200, 20);
    ctx.lineTo(195, 25);
    ctx.lineTo(205, 25);
    ctx.lineTo(200, 20);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 200);
    ctx.lineTo(380, 200);
    ctx.lineTo(375, 195);
    ctx.lineTo(375, 205);
    ctx.lineTo(380, 200);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(270, 195);
    ctx.lineTo(270, 205);
    ctx.moveTo(340, 195);
    ctx.lineTo(340, 205);

    ctx.moveTo(195, 130);
    ctx.lineTo(205, 130);
    ctx.moveTo(195, 60);
    ctx.lineTo(205, 60);

    ctx.moveTo(130, 195);
    ctx.lineTo(130, 205);
    ctx.moveTo(60, 195);
    ctx.lineTo(60, 205);

    ctx.moveTo(195, 270);
    ctx.lineTo(205, 270);
    ctx.moveTo(195, 340);
    ctx.lineTo(205, 340);

    ctx.font = "14px Times New Roman";
    if (r == 0) {
        ctx.fillText("R", 340, 215);
        ctx.fillText("R/2", 270, 215);

        ctx.fillText("R", 215, 60);
        ctx.fillText("R/2", 215, 130);

        ctx.fillText("-R", 60, 215);
        ctx.fillText("-R/2", 130, 215);

        ctx.fillText("-R", 215, 340);
        ctx.fillText("-R/2", 215, 275);
    } else {
        ctx.fillText(r, 340, 215);
        ctx.fillText(r / 2, 270, 215);

        ctx.fillText(r, 215, 60);
        ctx.fillText(r / 2, 215, 130);

        ctx.fillText(-r, 60, 215);
        ctx.fillText(-(r / 2), 130, 215);

        ctx.fillText(-r, 215, 340);
        ctx.fillText(-(r / 2), 215, 275);
    }

    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.font = "20px Times New Roman";
    ctx.fillText('Y', 210, 30);
    ctx.fillText('X', 370, 225);
}

function drawPoint(x, y, r) {
    var ctx = document.getElementById("graph").getContext("2d");

    if (r < 1 || r > 4) {
    }
    else {
        if (Math.abs(x / r) > 1.2 || Math.abs(y / r) > 1.2) {
            ctx.font = "14px Times New Roman";
            ctx.fillText('Some of points are out of graph', 130, 390);
        } else {
            ctx.beginPath();
            ctx.arc(Math.round(200 + ((x / r) * 140)), Math.round(200 - ((y / r) * 140)), 3, 0, Math.PI * 2);
            ctx.closePath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
        }
    }
}

function easter(canv) {
    document.getElementById("sub").disabled = true;
    document.body.style.backgroundImage = "url(\"img/creepy.png\")";
    draw(canv, 666);
    pentagramm(canv);
    dot(canv, 200, 300);
    dot(canv, 106, 235);
    dot(canv, 141, 119);
    dot(canv, 258, 119);
    dot(canv, 293, 235);
    circle(canv);
}

function dot(x, y) {
    var ctx = document.getElementById("graph").getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = "crimson";
    ctx.fillStyle = "crimson";
    ctx.fill();
    ctx.stroke();
}

function circle() {
    var ctx = document.getElementById("graph").getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.closePath();
    ctx.strokeStyle = "crimson";
    ctx.fillStyle = "crimson";
    ctx.lineWidth = 4;
    ctx.stroke();
}

function pentagramm() {
    var ctx = document.getElementById("graph").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(141, 119);
    ctx.lineTo(293, 235);
    ctx.lineTo(106, 235);
    ctx.lineTo(258, 119);
    ctx.lineTo(200, 300);
    ctx.closePath();
    ctx.strokeStyle = "crimson";
    ctx.fillStyle = "crimson";
    ctx.lineWidth = 2;
    ctx.stroke();

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function interract() {
    var canvas = document.getElementById("graph");
    var event = window.event;
    var pos = getMousePos(canvas, event);
    var e = document.getElementById('form');
    var r = e.R.value;
    var newR = r.replace(/,/g, '.');
    document.getElementById('R').value = newR;
    r = e.R.value;

    var arrr = r.split('');

    var msgr = '';

    if (isNaN(r) || r < 1 || r > 4 || r === " " || arrr[0] === '.' || r === '') {
        msgr += 'Input number between 1 and 4';
        document.getElementById('errR').style.visibility = 'visible';
        document.getElementById('errR').innerHTML = msgr;
    } else {
        var x = Math.round(((pos.x - 200) * r) / 140 * 10) / 10;
        var y = Math.round(((-pos.y + 200) * r) / 140 * 10) / 10;
        document.getElementById('trueX').value = x;
        e.Y.value = y;
    }
}
