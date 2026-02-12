/* PUZZLE 01 */
var clicks_01 = 0;
var correct_01 = 0;

function wrong01Fun() {
  clicks_01 += 1;
  document.getElementById("clicks_01").innerHTML = clicks_01;
};

function correct01Fun() {
  clicks_01 += 1;
  correct_01 += 1;
  document.getElementById("clicks_01").innerHTML = clicks_01;
  document.getElementById("correct_01").innerHTML = correct_01;
};

function submit01Fun() {
  if (correct_01 >= 3) {
    submit_01 = "Yes! Theme is words that end with -smith. Click 'Next Puzzle'";
  } else {
    submit_01 = "Nope. Try again cutie";
  }
  document.getElementById("submit_01").innerHTML = submit_01;
};

function reset01Fun(){
  clicks_01 = 0;
  correct_01 = 0;
  submit_01 = "*Waiting Patiently*";
  document.getElementById("submit_01").innerHTML = submit_01;
  document.getElementById("clicks_01").innerHTML = clicks_01;
  document.getElementById("correct_01").innerHTML = correct_01;
}

/* PUZZLE 02 */
var clicks_02 = 0;
var correct_02 = 0;

function wrong02Fun() {
  clicks_02 += 1;
  document.getElementById("clicks_02").innerHTML = clicks_02;
};

function correct02Fun() {
  clicks_02 += 1;
  correct_02 += 1;
  document.getElementById("clicks_02").innerHTML = clicks_02;
  document.getElementById("correct_02").innerHTML = correct_02;
};

function submit02Fun() {
  if (correct_02 >= 3) {
    submit_02 = "Yes! Theme is onomatopoeic words. Click 'Next Puzzle'";
  } else {
    submit_02 = "Nope. Try again soon-to-be-Doctor";
  }
  document.getElementById("submit_02").innerHTML = submit_02;
};

function reset02Fun(){
  clicks_02 = 0;
  correct_02 = 0;
  submit_02 = "*Waiting Patiently*";
  document.getElementById("submit_02").innerHTML = submit_02;
  document.getElementById("clicks_02").innerHTML = clicks_02;
  document.getElementById("correct_02").innerHTML = correct_02;
}

/* PUZZLE 03 */
var clicks_03 = 0;
var correct_03 = 0;

function wrong03Fun() {
  clicks_03 += 1;
  document.getElementById("clicks_03").innerHTML = clicks_03;
};

function correct03Fun() {
  clicks_03 += 1;
  correct_03 += 1;
  document.getElementById("clicks_03").innerHTML = clicks_03;
  document.getElementById("correct_03").innerHTML = correct_03;
};

function submit03Fun() {
  if (correct_03 >= 3) {
    submit_03 = "Yes! Theme is President Snow. Click 'Next'";
  } else {
    submit_03 = "Nope. Try again soon-to-be-Doctor";
  }
  document.getElementById("submit_03").innerHTML = submit_03;
};

function reset03Fun(){
  clicks_03 = 0;
  correct_03 = 0;
  submit_03 = "*Waiting Patiently*";
  document.getElementById("submit_03").innerHTML = submit_03;
  document.getElementById("clicks_03").innerHTML = clicks_03;
  document.getElementById("correct_03").innerHTML = correct_03;
}