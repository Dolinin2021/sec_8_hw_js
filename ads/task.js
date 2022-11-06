const rotatorCase = document.querySelectorAll('.rotator__case');
const array = Array.from(rotatorCase);
const length = array.length;
let index = 0;

setInterval(() => {
    index = index + 1; 
    if(array[index - 1]) {
        array[index - 1].classList.remove('rotator__case_active');
    }
    if (index == length) {
        index = 0;
    }
    if (array[index].classList.contains('rotator__case_active')) {
        array[index].classList.remove('rotator__case_active');
    } else {
        array[index].classList.add('rotator__case_active');
    }
}, 1000);
