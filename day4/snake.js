(function () {

    /* initialize variables */
    var lastCode;
    var interval;
    var rows = 10;
    var cols = 10;
    var posX = 0;
    var posY = 0;

    $(document).on('DOMContentLoaded', loaded);
    $(window).on('keydown', keyDown);

    function loaded() {
        movePixel();
        $('#score').text(100);
    }

    function keyDown(e) {

        if (interval && lastCode != e.keyCode) clearInterval(interval);

        if (lastCode != e.keyCode) {
            interval = setInterval(function () {
                keyAction(e);
            }, 500);
        }

        lastCode = e.keyCode;
    }

    function keyAction(e) {
        switch (e.keyCode) {
            case 37: posX -= 1; break;
            case 38: posY -= 1; break;
            case 39: posX += 1; break;
            case 40: posY += 1; break;
        }

        posY = posY > rows ? 0 : posY < 0 ? rows - 1 : posY;
        posX = posX > cols ? 0 : posX < 0 ? cols - 1 : posX;

        movePixel();
    }

    function movePixel() {
        matrix = initMatrix(rows, cols, posX, posY);
        drawMatrix(rows, cols, matrix);
    }

    function drawMatrix(rows, cols, matrix) {
        var stage = $('#stage').html('');
        for (var r = 0; r < rows; r += 1) {
            var row = $('<div class="row"></div>').appendTo(stage);
            for (var c = 0; c < cols; c += 1) {
                var col = $('<div class="col"></div>').appendTo(row);
                if (matrix[r][c] == true) {
                    col.addClass('black');
                }
            }
        }
    }

    function initMatrix(rows, cols, posX, posY) {
        var matrix = [];
        for (var r = 0; r < rows; r++) {
            var row = [];
            for (var c = 0; c < cols; c++) {
                row.push((r == posY && c == posX) ? true : false);
            }
            matrix.push(row);
        }
        return matrix;
    }

})()