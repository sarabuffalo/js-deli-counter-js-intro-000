var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
    return "Welcome, ${name}. You are number ${katzDeli.length} in line."
}

function nowServing(katzDeli) {
  if (katzDeli.length>0) {
    return "Currently serving ${katzDeli.shift()}."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
var line = [];
for (let i=0, 1=katzDeli.length; i<1; i++) {
  line.push("${i+1}. ${katzDeli[1]}")
  if (katzDeli.length>1) {
    return "The line is currently: ${katzDeli.shift()}. ${name}"
  } else {
  return "The line is currently empty."
  }
}
