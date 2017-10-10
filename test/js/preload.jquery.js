var imgs = [
    'images/img1.jpg',
    'images/img2.jpeg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/timg.jpg',
    'images/timg2.jpg',
    'images/360wallpaper.jpg'
];

var index = 0,
    len = imgs.length,
    count = 0,
    $progress = $('.progress');

$.each(imgs, function(i, src) {
    var imgObj = new Image();
    $(imgObj).on('load error', function() {
        $progress.html(Math.round((count + 1) / len * 100) + '%');
        if (count >= len - 1) {
            $('.loading').hide();
            document.title = '1/' + len;
        }
        count++;
    })
    imgObj.src = src;
})

$('.btn').on('click', function() {
    if ($(this).data('control') === 'prev') { // 上一张
        index = Math.max(0, --index);
    } else { //	下一张
        index = Math.min(len - 1, ++index);
    }
    document.title = (index + 1) + '/' + len;
    $('#img').attr('src', imgs[index]);
})
