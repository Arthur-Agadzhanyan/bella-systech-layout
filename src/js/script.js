@@include('webpTest.js');
@@include('swiper.js');
@@include('navbar.js');
@@include('main_page.js');
@@include('products_page.js');
@@include('one-product.js');
@@include('education-page.js');
@@include('video.min.js');


const callOrderBtns = document.querySelectorAll('.call_order_btn')
const callOrderModal = document.getElementById("callOrderModal")

if(callOrderBtns.length && callOrderModal){
    callOrderBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            callOrderModal.style.display = "flex"
            document.body.style.overflow = "hidden"
            setTimeout(()=>callOrderModal.style.opacity = "1",50)
        
            return
        })
    })
}

const closeModal = document.querySelectorAll(".close_modal")

if(closeModal){
    closeModal.forEach(el=>{
        el.addEventListener("click",()=>{
            if(callOrderModal){
                callOrderModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>callOrderModal.style.display = "none",300)
            }
        })
    })
}