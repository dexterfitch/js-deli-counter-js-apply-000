function takeANumber (line, newCustomer) {
  line.push(newCustomer)
  return "Welcome, " + newCustomer + ". You are number " + line.length + " in line."
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var nextInLine = line[0]
    line.shift()
    return "Currently serving " + nextInLine + "."
  } 
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineList = ""
    for (var i = 0; i < line.length; i++) {
      lineList = lineList + (i + 1) + ". " + line[i]
      if (line.length != i + 1) {
        lineList = lineList + ", ";
      }
    }
    return "The line is currently: " + lineList
  }
}