const educationPageVebinarsBtn = document.getElementById('education_page-vebinars_btn')
const educationPageArticlesBtn = document.getElementById('education_page-articles_btn')

const educationPageVebinarsList = document.getElementById('education_page-vebinars_list')
const educationPageArticlesList = document.getElementById('education_page-articles_list')
const activeClass = 'tab_buttons__item-active'
const listHiddenClass = 'list_hidden'

if(educationPageVebinarsBtn && educationPageArticlesBtn){
    educationPageVebinarsBtn.addEventListener('click',(e)=>{
        educationPageVebinarsBtn.classList.add(activeClass)
    
        educationPageArticlesBtn.classList.remove(activeClass)
    
        educationPageVebinarsList.classList.remove(listHiddenClass)
    
        educationPageArticlesList.classList.add(listHiddenClass)
    })
    
    educationPageArticlesBtn.addEventListener('click',(e)=>{
        educationPageArticlesBtn.classList.add(activeClass)
    
        educationPageVebinarsBtn.classList.remove(activeClass)
    
        educationPageArticlesList.classList.remove(listHiddenClass)
    
        educationPageVebinarsList.classList.add(listHiddenClass)
    })
}