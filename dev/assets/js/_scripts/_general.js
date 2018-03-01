$(document).ready(function() {

    //
    // Variables
    // --------------------------------------------------

  // Notes variables
  var notes = {
    "1C": new Howl({
        urls: [ "assets/midia/261-C.mp3" ]
    }),
    "1Cs": new Howl({
        urls: [ "assets/midia/277-C-sharp.mp3" ]
    }),
    "1D": new Howl({
        urls: [ "assets/midia/293-D.mp3" ]
    }),
    "1Ds": new Howl({
        urls: [ "assets/midia/311-D-sharp.mp3" ]
    }),
    "1E": new Howl({
        urls: [ "assets/midia/329-E.mp3" ]
    }),
    "1F": new Howl({
        urls: [ "assets/midia/349-F.mp3" ]
    }),
    "1Fs": new Howl({
        urls: [ "assets/midia/369F-sharp.mp3" ]
    }),
    "1G": new Howl({
        urls: [ "assets/midia/391-G.mp3" ]
    }),
    "1Gs": new Howl({
        urls: [ "assets/midia/415-G-sharp.mp3" ]
    }),
    "2A": new Howl({
        urls: [ "assets/midia/440-A.mp3" ]
    }),
    "2As": new Howl({
        urls: [ "assets/midia/466-A-sharp.mp3" ]
    }),
    "2B": new Howl({
        urls: [ "assets/midia/495-B.mp3" ]
    }),
    "2C": new Howl({
        urls: [ "assets/midia/523-C.mp3" ]
    }),
    "2Cs": new Howl({
        urls: [ "assets/midia/545-C-sharp.mp3" ]
    }),
    "2D": new Howl({
        urls: [ "assets/midia/587-D.mp3" ]
    }),
    "2Ds": new Howl({
        urls: [ "assets/midia/622-D-sharp.mp3" ]
    }),
    "2E": new Howl({
        urls: [ "assets/midia/659-E.mp3" ]
    }),
    "2F": new Howl({
        urls: [ "assets/midia/698-F.mp3" ]
    }),
    "2Fs": new Howl({
        urls: [ "assets/midia/698-F-sharp.mp3" ]
    }),
    "2G": new Howl({
        urls: [ "assets/midia/783-G.mp3" ]
    }),
    "2Gs": new Howl({
        urls: [ "assets/midia/830-G-sharp.mp3" ]
    }),
    "3A": new Howl({
        urls: [ "assets/midia/880-A.mp3" ]
    }),
    "3As": new Howl({
        urls: [ "assets/midia/932-A-sharp.mp3" ]
    }),
    "3B": new Howl({
        urls: [ "assets/midia/987-B.mp3" ]
    })
};

    // Lock event for play
    var lockEvent = {};

    //
    // Events
    // --------------------------------------------------

    // Disable Select
    // --------------------------------------------------
    $('.piano').bind('selectstart dragstart', function(ev) {
      ev.preventDefault();
      return false;
  });

    // Piano Play Keyboard
    // --------------------------------------------------
    $(window).bind('keydown keyup', function(ev) {
        var keyNo = ev.which;
        var $key = $('[data-key="'+keyNo+'"]');
        var note = $key.attr('data-note');
        if(note){
            if (ev.type == 'keydown') {
                if (!lockEvent[keyNo]) {
                    notes[note].play();
                    lockEvent[keyNo] = true;
                    $key.addClass('active');
                    $key.parent().addClass('active');
                }
            }
            else if (ev.type == 'keyup') {
                lockEvent[keyNo] = false;
                $key.removeClass('active');
                $key.parent().removeClass('active');
            }
        }
    });

    // Piano Play Click
  // --------------------------------------------------
  $('.key > span').mousedown(function(){
        // Save note
        var me = $(this);
        var noteClick = me.attr('data-note');
        // Play sound
        notes[noteClick].play();
    });

  /* Choose chords with radios */

  $(".chords input[type='radio']").on('click touch mousedown', function(){
    $(".chords input").removeAttr('checked');
    $(".piano li").removeClass("active");
    $(".piano li span").removeClass("active");

    var note = $('.chords #noteSelector input:checked').val();
    var chord = $('.chords #typeSelector input:checked').val();
    var completeChord = note+chord;
    var note1 =parseInt(note);
    var note2 =0;
    var note3 =0;
    var note4 = null;


    switch (chord) {

        case "Nma" : // ex: C
        note2 = note1+4;
        note3 = note1+7;
        note4 = null;
        break;

        case "NPlus" : //ex: C+
        note2 = note1+4;
        note3 = note1+8;
        note4 = null;
        break;

        case "Nm" : //ex: Cm
        note2 = note1+3;
        note3 = note1+7;
        note4 = null;
        break;

        case "Ndim" : //ex: Cdim
        note2 = note1+3;
        note3 = note1+6;
        note4 = null;
        break;

        case "Nsus" : //ex: Csus
        note2 = note1+5;
        note3 = note1+7;
        note4 = null;
        break;

        case "N4" : //ex: C4
        note2 = note1+4;
        note3 = note1+5;
        note4 = note1+7;
        break;

        case "N6" : //ex: C6
        note2 = note1+4;
        note3 = note1+7;
        note4 = note1+9;
        break;

         case "Nma7" : //ex: Cma7
         note2 = note1+4;
         note3 = note1+7;
            note4 = note1+11; // or note-1
            break;

          case "Nm7" : //ex: Cm7
          note2 = note1+3;
          note3 = note1+7;
            note4 = note1+10; // or note-2
            break;

        case "N7" : //ex: C7
        note2 = note1+4;
        note3 = note1+7;
            note4 = note1+10; // or note-2
            break;

        case "NmSharp5" : //ex: Cm(#5)
        note2 = note1+3;
        note3 = note1+8;
        note4 = null;
        break;

        case "N5" : //ex: C5
        note2 = note1+7;
        note3 = null;
        note4 = null;
        break;

        case "N2" : //ex: C2
        note2 = note1+2;
        note3 = note1+4;
        note4 = note1+7;
        break;

         case "Nm2" : //ex: Cm2
         note2 = note1+2;
         note3 = note1+3;
         note4 = note1+7;
         break;

        case "Nm4" : //ex: Cm4
        note2 = note1+3;
        note3 = note1+5;
        note4 = note1+7;
        break;

        case "Nm6" : //ex: Cm6
        note2 = note1+3;
        note3 = note1+7;
        note4 = note1+9;
        break;

        case "Nmma7" : //ex: Cm(ma7)
        note2 = note1+3;
        note3 = note1+7;
            note4 = note1+11; // or note-1
            break;

        case "N7sus" : //ex: C7sus
        note2 = note1+5;
        note3 = note1+7;
            note4 = note1+10; // or note-2
            break;

        case "Nma7b5" : //ex: Cma7(b5)
        note2 = note1+4;
        note3 = note1+6;
            note4 = note1+11; // or note-1
            break;

         case "Nma7Sharp5" : //ex: Cma7(#5)
         note2 = note1+4;
         note3 = note1+8;
            note4 = note1+11; // or note-1
            break;

         case "Nm7b5" : //ex: Cm7(b5)
         note2 = note1+3;
         note3 = note1+6;
            note4 = note1+10; // or note-2
            break;

        case "Ndim7" : //ex: Cdim7
        note2 = note1+3;
        note3 = note1+6;
            note4 = note1+9; // or note-3
            break;

        case "N7b5" : //ex: C7(b5)
        note2 = note1+4;
        note3 = note1+6;
            note4 = note1+10; // or note-2
            break;

        case "N7Sharp5" : //ex: C7(#5)
        note2 = note1+4;
        note3 = note1+8;
            note4 = note1+10; // or note-2
            break;


            default:
            console.log("No chord selected");
        }

        $("[data-number='"+note1+"']").addClass("active");
        $("[data-number='"+note1+"']").parent("li").addClass("active");
        $("[data-number='"+note2+"']").addClass("active");
        $("[data-number='"+note2+"']").parent("li").addClass("active");
        $("[data-number='"+note3+"']").addClass("active");
        $("[data-number='"+note3+"']").parent("li").addClass("active");

        if( !(note3 === null)  ) {
            $("[data-number='"+note3+"']").addClass("active");
            $("[data-number='"+note3+"']").parent("li").addClass("active");
        }

        if( !(note4 === null)  ) {
            $("[data-number='"+note4+"']").addClass("active");
            $("[data-number='"+note4+"']").parent("li").addClass("active");
        }

        var noteSelected = $('.chords #noteSelector input:checked ~label').text();
        var chordSelected =  $('.chords #typeSelector input:checked ~label').text();

        if (chordSelected != null && noteSelected != null) {
            $("#selectedChord").text(noteSelected+ " "+chordSelected);
        }





        var dataNote1 = "";
        var dataNote2 = "";
        var dataNote3 = "";
        var dataNote4 = "";

    // Si la note de base est définie, alors on peut jouer la note 1
    // Cas de l'utilisateur qui sélectionne d'abord le type d'accord et ensuite la note
    if( note != null) {
        dataNote1 = $("[data-number='"+note1+"']").data("note");
        notes[dataNote1].play();
    }

    // Si la note de base et les autres sont définies, alors on peut jouer l'accord
    if( (note != null) && (note2 != 0) && (note3 != 0) && (note4 != 0) ) {
        dataNote2 = $("[data-number='"+note2+"']").data("note");
        dataNote3 = $("[data-number='"+note3+"']").data("note");
        dataNote4 = $("[data-number='"+note4+"']").data("note");
        notes[dataNote2].play();

        if( !(note3 === null)  ) {
            notes[dataNote3].play();
        }

        if( !(note4 === null)  ) {
            notes[dataNote4].play();
        }

    }
});

$("#clean").click(function(){
    $("[data-note]").removeClass("active");
    $("[data-note]").parent("li").removeClass("active");
    $(".chords input").prop('checked', false);
    $("#selectedChord").text("---");
});

});
