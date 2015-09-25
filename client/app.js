var myData = [
  ['Sunny', 250, 'http://www.clickerzoneuk.co.uk/cz/wp-content/uploads/2010/10/PuppySmall.jpg'],
  ['Samson', 200, 'https://upload.wikimedia.org/wikipedia/commons/6/64/The_Puppy.jpg'],
  ['Toby', 220, 'http://nexus-wallpaper.com/wp-content/uploads/2013/06/cute-puppy-dog-eyes.jpg'],
  ['Gale', 300, 'http://www.drodd.com/images12/puppy-pictures340.jpg'],
  ['Favor', 500, 'http://adogsplanet.com/wp-content/uploads/2015/07/pomeranian.jpg'],
  ['Comet', 350, 'https://s-media-cache-ak0.pinimg.com/originals/c5/6e/f4/c56ef4d3c4faa14cad3da6f8243f12ab.jpg'],
  ['Lucy', 550, 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Fm_shiba_inu_puppy.jpg'],
  ['Stewart', 550, 'http://vignette2.wikia.nocookie.net/prettylittleliars/images/2/2f/Cute-golden-retriever-puppy-and-flowers-photo.jpg/revision/latest?cb=20140517212752'],
  ['Sleepy', 450, 'http://my10online.com/wp-content/uploads/2011/09/cute_puppy-5312.jpg'],
  ['Babe', 450, 'http://www.flintonline.com/images/classifieds/English%20Bulldog%20Puppies%20For%20Sale.jpg']
];

var total = 0;

for (var i = 0; i < myData.length; i++) {
  // $('#puppy-list').append('<li>hello</li>');
  $('#sub-container').append('<img src="'+ myData[i][2] +'" name="'+ myData[i][0]+'" price="'+ myData[i][1] +'">');
  $('')
  console.log('hello');
};

$('img').on('click', function() {
  var num = Number($(this).attr('price'));
  total+= num;
  $('#puppy-list').append('<li>' + $(this).attr('name') + ' $'+$(this).attr('price')+'</li>');
  $('#bill').html('Total: $' + total);
})