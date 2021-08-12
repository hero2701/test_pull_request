var button = document.querySelector("#no");
var count  = 0;
var random = (min,max) => {
    return Math.floor(Math.random() * (max-min)) + min;
}

button.addEventListener('click' , () => {
   
    count =1 ;
    const html = `<div class="thongbao">
    <div class="count" >
        <h3>Cậu còn có ${count} lần chọn. Nghĩ kỹ nào</h3>
    </div>
    <div class="btn-ok">
        <button class="ok" id='ok'>Ok</button>
    </div>

</div>`;
    document.querySelector('.motife').insertAdjacentHTML('afterbegin',html);
    document.querySelector('.model-body').style.opacity='0.5';
    document.querySelector('.container').style.display='none';
    document.querySelector('.thongbao').style.opacity='1';
    if(count == 1){
        document.querySelector('#ok').addEventListener('click', () => {
            document.querySelector('.thongbao').style.display='none';
            document.querySelector('.model-body').style.opacity='1';
           
            document.querySelector('.container').style.display='flex';
        })
        count ++;
    }
    if(count == 2){
        button.addEventListener('mousemove', () => {
            var x = random(1,200);
            var y = random(1,200);
            var z = random(1,200);
            var h = random(1,200);
            button.style.position='absolute';
            button.style.top = x+'px';
            button.style.left = y+'px';
            button.style.bottom = z+'px';
            button.style.right = h+'px';
            console.log(button);
        })
       
    }
    console.log(count);
})

 document.querySelector('#yes').addEventListener('click',()=> {
    document.getElementById("nameCr").innerHTML ='';
     const html = `
     <div class="model-2">
         <div class="model-title">
             <h1>Tôi biết là cậu thích tôi mà</h1>
         </div>
         <div class="body-model-2">
             <iframe  width="560" height="315" src="https://www.youtube.com/embed/S1Tq2LazfXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
     </div>` 

     document.querySelector('.model').insertAdjacentHTML('beforeend',html);
 })

 document.querySelector('.btn-click').addEventListener('click',()=>{
    document.querySelector('.model').style.display='flex';
 })

 document.querySelector('.close').addEventListener('click', () => {
     alert('cậu không thoát khỏi tôi được đâu');
 })




