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

const callAcceptedForm = document.querySelectorAll('.call_accepted_form')
const orderAcceptedModal = document.getElementById("orderAcceptedModal")


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

if(callAcceptedForm && orderAcceptedModal){
    callAcceptedForm.forEach((btn)=>{
        btn.addEventListener('submit',(e)=>{
            e.preventDefault();

            if(callOrderModal){
                callOrderModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>callOrderModal.style.display = "none",300)
            }

            orderAcceptedModal.style.display = "flex"
            document.body.style.overflow = "hidden"
            setTimeout(()=>orderAcceptedModal.style.opacity = "1",50)
        
            return
        })
    })
}

// CLOSE MODALS
const closeModal = document.querySelectorAll(".close_modal")

if(closeModal){
    closeModal.forEach(el=>{
        el.addEventListener("click",()=>{
            if(callOrderModal){
                callOrderModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>callOrderModal.style.display = "none",300)
            }
            if(orderAcceptedModal){
                orderAcceptedModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>orderAcceptedModal.style.display = "none",300)
            }
        })
    })
}