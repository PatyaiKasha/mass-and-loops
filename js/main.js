$(document).ready(function() {
    //ARRAYS
    //task1
    $('#task1-btn').on('click', function(event) {
        event.preventDefault();
        var out = '';
        for (var i = 4; i <= 400; i++) {
            out += i + '; ';
        }
        $('.task1__out').html(out);
    });
    //task2
    $('#task2-btn').on('click', function(event) {
        event.preventDefault();
        var out = '';
        for (var i = 4; i <= 13; i = i + 3) {
            out += i + '; ';
        }
        $('.task2__out').html(out);
    });
    //task3
    $('#task3-btn').on('click', function(event) {
        event.preventDefault();
        var out = '';
        for (var i = 654; i >= 0; i--) {
            out += i + '; ';
        }
        $('.task3__out').html(out);
    });
    //task4
    $('#task4-btn').on('click', function(event) {
        event.preventDefault();
        var out = '';
        for (var i = 1983; i <= 2017; i++) {
            out += i + '; ';
        }
        $('.task4__out').html(out);
    });
    //task5
    $('#task5-btn').on('click', function(event) {
        event.preventDefault();
        var out = '';
        for (var i = -4; i <= 100; i = i + 2) {
            out += i + '; ';
        }
        $('.task5__out').html(out);
    });
    // ==================================
    //CYCLES
    //mass1
    $('#mass1-btn').on('click', function(event) {
        event.preventDefault();

        var mass1 = [3, 6, 1, 13, 88, 43];

        console.log('mass[0] = ' + mass1[0]);
        console.log('mass[3] = ' + mass1[3]);
    });
    //mass2
    $('#mass2-btn').on('click', function(event) {
        event.preventDefault();

        var mass2 = ['Hi', "hello", 34, "prima"];
        var lastElem = mass2.length;

        console.log('mass[0] = ' + mass2[0]);
        console.log('mass[last-elem] = ' + mass2[lastElem - 1]);
    });
    //mass3
    $('#mass3-btn').on('click', function(event) {
        event.preventDefault();

        var mass3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        console.log('mass[length] = ' + mass3.length);
    });
    //mass4
    $('#mass4-btn').on('click', function(event) {
        event.preventDefault();

        var mass4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        mass4[3] = 'new element';

        console.log('mass = ' + mass4);
    });
    //mass5
    $('#mass5-btn').on('click', function(event) {
        event.preventDefault();

        var mass5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        mass5[2] = 22;
        mass5[4] = 44;

        console.log('mass = ' + mass5);
    });
    //mass6
    $('#mass6-btn').on('click', function(event) {
        event.preventDefault();

        var mass6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        mass6[10] = 100;

        console.log('mass = ' + mass6);
    });
    //mass7
    $('#mass7-btn').on('click', function(event) {
        event.preventDefault();

        var mass7 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        mass7[12] = 200;

        console.log('mass = ' + mass7);
        console.log('mass = ' + mass7[11]);
    });
    //mass8
    $('#mass8-btn').on('click', function(event) {
        event.preventDefault();

        var mass8 = [31, 24, 35, 47, 12];

        console.log('arr = ' + mass8[3]);
        console.log('arr = ' + mass8[60]);
    });
    //mass9
    $('#mass9-btn').on('click', function(event) {
        event.preventDefault();

        var mass9 = [31, 24, 35, 47, 12];

        for (var f = 1; f <= 7; f = f + 3) {

            console.log('arr = ' + mass9[f]);
        }
    });
    //mass10
    $('#mass10-btn').on('click', function(event) {
        event.preventDefault();

        var mass10 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        for (var i = 1; i <= 5; i++) {

            console.log('arr = ' + mass10[i]);
        }
    });
    //mass11
    $('#mass11-btn').on('click', function(event) {
        event.preventDefault();
        var mass11 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

        var in11 = $('#in11').val();
        console.log('arr[' + in11 + '] = ' + mass11[in11]);

    });
    //mass12
    $('#mass12-btn').on('click', function(event) {
        event.preventDefault();
        var mass12 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
        var out = '';
        for (var i = 0; i < mass12.length; i++) {
            out += mass12[i] + ' ';
        }

        $('.mass12__out').html(out);
    });
    //mass13
    $('#mass13-btn').on('click', function(event) {
        event.preventDefault();
        var mass13 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
        var out = '';
        for (var i = mass13.length - 1; i >= 0; i--) {
            out += mass13[i] + ' ';
        }
        $('.mass13__out').html(out);
    });
    // ==================================
    //INNER CYCLES
    //task 14
    $('#mass14-btn').on('click', function(event) {
        event.preventDefault();
        var mass14 = [2, 3, [4, 5]];
        console.log('mass14 = ' + mass14);
        console.log('mass14[0] = ' + mass14[0]);
        console.log('mass14[1] = ' + mass14[1]);
        console.log('mass14[2] = ' + mass14[2]);
    });
    //task 15
    $('#mass15-btn').on('click', function(event) {
        event.preventDefault();
        var mass15 = [2, 3, [4, 5]];
        console.log('mass15[2][0] = ' + mass15[2][0]);
        console.log('mass15[2][1] = ' + mass15[2][1]);
    });
    //task 16
    $('#mass16-btn').on('click', function(event) {
        event.preventDefault();
        var mass16 = [2, 3, [4, 5]];
        console.log('mass16[2][length] = ' + mass16[2].length);
    });
    //task 17
    $('#mass17-btn').on('click', function(event) {
        event.preventDefault();
        var mass17 = [2, [3, 4, 5],
            [6, 7, 8]
        ];
        console.log('mass17[1][1] = ' + mass17[1][1]);
        console.log('mass17[2][2] = ' + mass17[2][2]);
    });
    //task 18
    $('#mass18-btn').on('click', function(event) {
        event.preventDefault();
        var mass18 = [2, [3, 4, 5],
            [6, 7, 8]
        ];
        console.log('mass18[2] = ' + mass18[2]);
        console.log('mass18[0] = ' + mass18[0]);
    });
    //task 19
    $('#mass19-btn').on('click', function(event) {
        event.preventDefault();
        var mass20 = [
            ['hi', 3, 'beta'],
            ['foo', 'jam', 'tritto']
        ];
        console.log('mass19[2] = ' + mass19[2]);
        console.log('mass19[2] = ' + mass19[2]);
    });
    //task 20
    $('#mass20-btn').on('click', function(event) {
        event.preventDefault();
        var mass20 = [
            ['hi', 3, 'beta'],
            ['foo', 'jam', 'tritto']
        ];
        console.log('mass20[1][0] = ' + mass20[1][0]);
        console.log('mass20[0][2] = ' + mass20[0][2]);
    });
}); //jQuery END