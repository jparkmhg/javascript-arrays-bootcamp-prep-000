var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, Element){
  return[Element,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,Element){
  chocolateBars.unshift(Element)
return chocolateBars
}