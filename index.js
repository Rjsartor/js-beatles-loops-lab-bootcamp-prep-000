// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
 let newArray = []
  musiciansArray.forEach((musician) => {
    instrumentsArray.forEach((instrument) => {
      newArray.push(`${musician} plays ${instrument}`)
    })
  })
  return newArray
}