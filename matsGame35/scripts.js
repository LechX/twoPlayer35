/**
 * Created by lechkaiel on 1/9/17.
 */
$(function() {

    var $score = $('#score');
    var dynamicTurn = 0;
    var currentState;


    // change this from an html onclick to a jQuery .on('click') which uses the innerHTML of this to determine amount
    function addScore(num) {

        currentState[0].sum += num;
        currentState[0].currentTurn++;

        $.ajax({

            type: 'PUT',
            url: "http://rest.learncode.academy/api/game/1",
            data: currentState,

            success: function() {
                console.log('successfully updated server!');
            }

        });


    }


    function turn(numericTurn) {
        if (numericTurn % 2 != 0) {
            $('.adders').attr('display', 'block');
            $('#turn').html('YOUR TURN');

            $('adders').on('click', function() {



            });



        } else {
            $('#turn').html('WAIT FOR OPPONENT TO PLAY');
            $('.adders').attr('display', 'none');
        }
    }


    // loop over this continuously while game is not over?
    $.ajax({

        type: 'GET',
        url: 'http://rest.learncode.academy/api/game/1',

        success: function(data) {
            currentState = data;
            dynamicTurn = data[0].currentTurn;


            $score.html(data[0].sum);
            turn(data[0].currentTurn);

            console.log(data);
        }
    });

});

// change score

// change turn

// buttons to select number choice

// check win function

// button to reset game, including resetting server and reloading page