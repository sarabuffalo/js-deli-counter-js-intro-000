var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length>0) {
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
const line = [];
for (let i=0; i < katzDeli.length; i++) {
  line.push(` ` + [i+1] +`. ` + katzDeli[i])
} if (katzDeli.length>1) {
    return (`The line is currently:` + line)
  } else {
  return "The line is currently empty."
  }
}
