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
    length = imgs.length,
    $progress = document.querySelector('.progress'),
    $btn = document.querySelectorAll('.btn');


for (let i in $btn){
	$btn[i].onclick = function(){
		let dataName = this.getAttribute('data-control')
		if(dataName === 'prev'){
			console.log('上一页');
		} else{
			console.log('下一页');
		}
	}
}