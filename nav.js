const hamb = document.querySelector('.ham')
const hamb2 = document.querySelector('.ham2')
const addm = document.querySelector('.wrapper')


hamb.addEventListener('click', () => {

    addm.classList.toggle('open')
    hamb.classList.toggle('change')
})

hamb2.addEventListener('click', () => {
    hamb2.classList.toggle('change')
})

