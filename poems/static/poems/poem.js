
$(document).ready(function () {

  const $verses = $( ".verse" )

  function swap(a, b) {
    var verse_chosen_text = a.text();
    var verse_chosen_id = a.attr("id");
    var other_verse_text = b.text();
    var other_verse_id = b.attr("id");
    a.text(other_verse_text).attr("id", other_verse_id);
    b.text(verse_chosen_text).attr("id", verse_chosen_id);
  }

  $( '#reload' ).click( function() {
      location.reload();
  });

  $verses.click( function() {
      $( this ).attr("contenteditable", true);
      $( this ).blur( function() {
          $( this ).attr("contenteditable", false);
      });
  });

  $( ".bi-arrow-down-short" ).click( function() {
    var verse_chosen = $(this).parent().next().children();
    var verse_index = $verses.index(verse_chosen);
    var verse_next = $verses.eq(verse_index + 1);
    swap(verse_chosen, verse_next);
  });

  $( ".bi-arrow-up-short" ).click( function() {
    var verse_chosen = $(this).parent().next().children();
    var verse_index = $verses.index(verse_chosen);
    var verse_prev = $verses.eq(verse_index - 1);
    swap(verse_chosen, verse_prev);
  });

  $(".oi").click( function () {
    var $verse_to_change = $(this).parent().prev().children();

    $.ajax({
      url: '/change_verse/',
      data: `id=${$verse_to_change.attr("id")}&verse_text=${$verse_to_change.text()}`,
      dataType: "json",
      success: function(data){
        if ( data.not_valid ) {
          $verse_to_change.css("color", "red")
        } else {
          $verse_to_change.attr("id", data.id).text(data.verse_text);
        };
      }
    });
  });

  verses$verses

});
