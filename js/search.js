const images = [
  "images/sokuratetsu-use-image.png",
  "images/sokuratetsu-front.jpg",
  "images/sokuratetsu-45.jpg",
  "images/sokuratetsu-back.jpg",
  "images/sokuratetsu-00.png",
  "images/sokuratetsu-memo.png",
  "images/sokuratetsu-memo-01.png",
  "images/sokuratetsu-image-01.png",
  "images/sokuratetsu-poster-front.jpg",
  "images/sokuratetsu-poster-back.jpg"
];

let cur = 0;

function updateImg(){

  document.getElementById('mainDisplay').innerHTML =
    `<img src="${images[cur]}" alt="ソクラテツ">`;

  document.querySelectorAll('.thumb-btn').forEach((b,i)=>{
    b.classList.toggle('active', i === cur);
  });
}


function prevImg(){
  cur = cur === 0 ? images.length - 1 : cur - 1;
  updateImg();
}


function nextImg(){
  cur = cur === images.length - 1 ? 0 : cur + 1;
  updateImg();
}


// サムネイル作成
const thumbs = document.getElementById('thumbs');

for(let r = 0; r < 2; r++){

  const row = document.createElement('div');
  row.className = 'thumb-row';

  for(let c = 0; c < 5; c++){

    const i = r * 5 + c;

    const b = document.createElement('button');

    b.className = 'thumb-btn' + (i === 0 ? ' active' : '');

    b.innerHTML =
      `<img class="thumb-inner" src="${images[i]}" alt="">`;

    b.onclick = ()=>{
      cur = i;
      updateImg();
    };

    row.appendChild(b);
  }

  thumbs.appendChild(row);
}


// 初期表示
updateImg();


// スクロールアニメーション
const stepImgs=document.querySelectorAll('.step-img-r,.step-img-l');

document.querySelectorAll('.step-text').forEach((el,i)=>{
  new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting&&stepImgs[i]){
        stepImgs[i].classList.add('visible');
      }
    });
  },{threshold:0.5}).observe(el);
});
