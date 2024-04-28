function cos() {
  cal.display.value = Math.cos(cal.display.value);
}

function sin() {
  cal.display.value = Math.sin(cal.display.value);
}

function tan() {
  cal.display.value = Math.tan(cal.display.value);
}

function sqrt() {
  cal.display.value = Math.sqrt(cal.display.value);
}

function log() {
  cal.display.value = Math.log(cal.display.value);
}

function exp() {
  cal.display.value = Math.exp(cal.display.value);
}

function del() {
  display.value = display.value.substring(0, display.value.length - 1)
}
function ran(){
  cal.display.value = Math.random(cal.display.value)
}
function change() {
  if(display.value.substring(0, 1) == "-")
    display.value = display.value.substring(1, display.value.length)
  else
    display.value = "-" + display.value
}
function square() {
  cal.display.value = eval(cal.display.value) * eval(cal.display.value)
}
function per() {
  val = display.value;
  display.value = display.value + "%";
}
function max(){
  cal.display.value = Math.max(cal.display.value)
}
function min(){
  cal.display.value = Math.min(cal.display.value)
}
function asin(){
  cal.display.value = Math.asin(cal.display.value)
}
function abs(){
  cal.display.value = Math.abs(cal.display.value)
}
function pow(){
  cal.display.value = Math.pow(cal.display.value)
}
