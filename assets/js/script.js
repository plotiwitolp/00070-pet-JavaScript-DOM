let firstNum = document.getElementById('first-num');
let secondNum = document.getElementById('second-num');
let ratio = document.getElementById('ratio');
const btns = document.querySelectorAll('.test__btn');
const result = document.querySelector('.test__result');
const testRight = document.querySelector('.test__right');

const dataArrsToBtns = [2, 4, 5, 6];

for (i = 0; i < btns.length; i++) {
  btns[i].setAttribute('data', dataArrsToBtns[i]);
}

for (i = 0; i < btns.length; i++) {
  //
  btns[i].onclick = function () {
    let data = this.getAttribute('data');
    //
    checkBtn(this);
    let fNum = firstNum.value;
    let sNum = secondNum.value;
    let rNum = ratio.value;
    result.innerHTML = (+fNum + +sNum) * +rNum * +data;
  };
}

let buff;
function checkBtn(thisEl) {
  if (buff !== thisEl) {
    buff = '';
  } else {
    buff = thisEl;
  }

  console.log(thisEl);
  console.log(buff);
}
