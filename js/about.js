// Modal
// const trigger = document.querySelector('#trigger');
// const trigger1 = document.querySelector('#trigger1');
// const trigger2 = document.querySelector('#trigger2');
// const modalWrapper = document.querySelector('.modal__wrapper');
// const closeBtn = document.querySelector('.close');

// trigger.addEventListener('click', function(){
//     openModal();
// });
// trigger1.addEventListener('click', function(){
//     openModal();
// });
// trigger2.addEventListener('click', function(){
//     openModal();
// });

// closeBtn.addEventListener('click', function(){
//     closeModal();
// });

// modalWrapper.addEventListener('click', function(e){
//     if(e.target !== this) return;
//     closeModal();
// });

// document.addEventListener('keydown', function(e){
//     if(e.key === 'Escape') {
//         closeModal();
//     }
// })

// function openModal() {
//     modalWrapper.classList.add('active');
// }
// function closeModal() {
//     modalWrapper.classList.remove('active');
// }

// Modal


const trigger = document.querySelector('#trigger');
const trigger1 = document.querySelector('#trigger1');
const trigger2 = document.querySelector('#trigger2');
const modalWrappers = document.querySelectorAll('.modal__wrapper'); // Select all modal wrappers
const closeBtns = document.querySelectorAll('.close'); // Select all close buttons

trigger.addEventListener('click', function(){
    openModal(0);
});
trigger1.addEventListener('click', function(){
    openModal(1);
});
trigger2.addEventListener('click', function(){
    openModal(2);
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        closeModal();
    });
});

modalWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function(e){
        if(e.target !== this) return;
        closeModal();
    });
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
});

function openModal(index) {
    modalWrappers[index].classList.add('active');
}

function closeModal() {
    modalWrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
    });
}
