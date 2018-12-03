function draw(r) {
    var ctx = document.getElementById("graph").getContext("2d");
    ctx.clearRect(0, 0, 400, 400);

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 140, 0, Math.PI * 3 / 2, true);
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
    if (r === 0 || r !== r) {
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

function drawPoint(x, y, r, ent) {
    var ctx = document.getElementById("graph").getContext("2d");

    if (r < 1 || r > 5) {
    }
    else {
        if (Math.abs(x / r) > 1.3 || Math.abs(y / r) > 1.3) {
            ctx.font = "14px Times New Roman";
            ctx.fillText('Some of points are out of graph', 130, 390);
        } else {
            ctx.beginPath();
            ctx.arc(Math.round(200 + ((x / r) * 140)), Math.round(200 - ((y / r) * 140)), 3, 0, Math.PI * 2);
            ctx.closePath();
            if (ent === 'Попал' ) {
                ctx.strokeStyle = "#f4fca1";
                ctx.fillStyle = "#f4fca1";
                ctx.fill();
                ctx.stroke();
            }
            else {
                ctx.strokeStyle = "#d260f2";
                ctx.fillStyle = "#d260f2";
                ctx.fill();
                ctx.stroke();
            }

        }
    }
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
    var r = Math.round(document.getElementById("pointForm:valueR").value);

    var x = Math.round(((pos.x - 200) * r) * 10 / 140) / 10;
    var y = Math.round(((-pos.y + 200) * r) * 10 / 140) / 10;
    document.getElementById("pointForm:valueX").value = x;
    document.getElementById("pointForm:truevalueY").value = y;
    switch (r) {
        case 1:
            document.getElementById("pointForm:r1").click();
            break;
        case 2:
            document.getElementById("pointForm:r2").click();
            break;
        case 3:
            document.getElementById("pointForm:r3").click();
            break;
        case 4:
            document.getElementById("pointForm:r4").click();
            break;
        case 5:
            document.getElementById("pointForm:r5").click();
            break;
        default:
            document.getElementById("pointForm:r5").click();
    }

}

function drawAllPoints() {
    var r = Math.round(document.getElementById("pointForm:valueR").value);
    var x, y, ent;
    var counter = 0;
    var table = document.getElementById('pointTab');
    draw(r);
    if (!(table === null)) {
        table.querySelectorAll('td').forEach(function (e) {
            switch (counter) {
                case 0:
                    x = e.innerHTML;
                    break;
                case 1:
                    y = e.innerHTML;
                    break;
                case 2:
                    break;
                case 3:
                    ent = e.innerText;
                    drawPoint(x, y, r, ent);
                    counter -= 4;
                    break;
            }
            counter++;
        });
    }
}