// JS原生实现无序图片预加载

let imgs = [
    'images/img1.jpg',
    'images/img2.jpeg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/timg.jpg',
    'images/timg2.jpg',
    'images/360wallpaper.jpg'
]

let index = 0,
    count = 0,
    len = imgs.length,
    $progress = document.querySelector('.progress'),
    $btn = document.querySelectorAll('.btn'),
    ImgId = document.getElementById('img');


for (let i in $btn) {
    $btn[i].onclick = function() {
        let dataName = this.getAttribute('data-control')
        if (dataName === 'prev') { // 上一页
            index = Math.max(0, --index);
        } else {
            index = Math.min(len - 1, ++index)
        }

        document.title = (index + 1) + '/' + len;
        ImgId.setAttribute('src', imgs[index]);
    }
}