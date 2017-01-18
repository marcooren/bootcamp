(function() {

    /* initialize variables */
    var lastCode;
    var interval;
    var rows = 10;
    var cols = 10;
    //   var posX = 0;
    //   var posY = 0;
    var snake = {
        posX: 0,
        posY: 0,
        // myButton: 0,
        moveTo: function(x, y) {
            this.posX = x;
            this.posY = y;
        },
        move_by_button_press: function(button) {

            switch (button) {
                case 37:
                    //   posX -= 1;
                    this.moveTo(snake.posX - 1, snake.posY);
                    break;
                case 38:
                    //     posY -= 1;
                    this.moveTo(snake.posX, snake.posY - 1);
                    break;
                case 39:
                    //   posX += 1;
                    this.moveTo(snake.posX + 1, snake.posY);
                    break;
                case 40:
                    //   posY += 1;
                    this.moveTo(snake.posX, snake.posY + 1);
                    break;
            }
            this.posY = this.posY > rows ? 0 : this.posY < 0 ? rows - 1 : this.posY;
            this.posX = this.posX > cols ? 0 : this.posX < 0 ? cols - 1 : this.posX;


        }
    };
    var snake2 = {
        posX: 6,
        posY: 6,
        // myButton: 0,
        moveTo: function(x, y) {
            this.posX = x;
            this.posY = y;
        },
        move_by_button_press: function(button) {

            switch (button) {
                case 37:
                    //   posX -= 1;
                    this.moveTo(snake.posX - 1, snake.posY);
                    break;
                case 38:
                    //     posY -= 1;
                    this.moveTo(snake.posX, snake.posY - 1);
                    break;
                case 39:
                    //   posX += 1;
                    this.moveTo(snake.posX + 1, snake.posY);
                    break;
                case 40:
                    //   posY += 1;
                    this.moveTo(snake.posX, snake.posY + 1);
                    break;
            }
            this.posY = this.posY > rows ? 0 : this.posY < 0 ? rows - 1 : this.posY;
            this.posX = this.posX > cols ? 0 : this.posX < 0 ? cols - 1 : this.posX;


        }
    };
    var players = [snake, snake2];

    $(document).on('DOMContentLoaded', loaded);
    $(window).on('keydown', keyDown);

    function loaded() {
        movePixel();
        $('#score').text(100);
    }

    function keyDown(e) {

        if (interval && lastCode != e.keyCode) clearInterval(interval);

        if (lastCode != e.keyCode) {
            interval = setInterval(function() {
                keyAction(e);
            }, 100);
        }

        lastCode = e.keyCode;
    }

    function keyAction(e) {
        snake.move_by_button_press(e.keyCode);
        //****************************************************************** */
        /*       switch (e.keyCode) {

                   case 37:
                       //   posX -= 1;
                       snake.moveTo(snake.posX - 1, snake.posY);
                       break;
                   case 38:
                       //     posY -= 1;
                       snake.moveTo(snake.posX, snake.posY - 1);
                       break;
                   case 39:
                       //   posX += 1;
                       snake.moveTo(snake.posX + 1, snake.posY);
                       break;
                   case 40:
                       //   posY += 1;
                       snake.moveTo(snake.posX, snake.posY + 1);
                       break;

                 
               }*/
        //************************************************************************* */


        movePixel();
    }

    function movePixel() {
        matrix = initMatrix(rows, cols, snake.posX, snake.posY, snake2.posX, snake2.posY);
        //    matrix = initMatrix(rows, cols, snake2.posX, snake2.posY);
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

    function initMatrix(rows, cols, posX, posY, posX2, posY2) {
        var matrix = [];
        for (var r = 0; r < rows; r++) {
            var row = [];
            for (var c = 0; c < cols; c++) {

                row.push((r == posY && c == posX) || (r == posY2 && c == posX2) ? true : false);
            }
            matrix.push(row);
        }
        return matrix;
    }

})()