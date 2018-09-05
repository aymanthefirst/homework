$(function(event){
  console.log("DOM is ready");
  var element = document.getElementById('count');
  var elmt = $('#count');
  console.log(element);
  console.log(elmt);

  // var elements = getElementsByTagName('li');
  var li = $('li');
  // console.log(elements);
  console.log(li);



  // var entry = document.createElement('li');
  // entry.innerHTML = "hello";
  // document.getElementById('list').appendChild(entry);

  // var newLi = $('<li>NewItem</li>');
  $('#li').append('<li>NewItem</li>');
  $('#count').html('8');
  $('#count').css('color', 'green');

  // document.getElementById('list').style.color = blue;
    $('#list').css('color', 'blue');;

    $('#count').css('color', 'red').html('10');

// adding class = done to each element
var items = document.getElementsByTagName('li');
    for (item of items) {
      item.className += 'class1';
    }
    $('li').addClass('class2');

    // $('.but1').click(function(){
    //   alert('')
    // });

    $('.but1').on('click', function(){
      alert('');
    });

    var iamarray = ["1", "2", "3"];
    // for (variable of iamarray) {
    //   console.log(variable);
    // }

    $(iamarray).each(function(index,item){
      console.log("item: "+ item + " index: " + index);
    })


});

//
// function doSomthing(){
//   alert('');
// }
