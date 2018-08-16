// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
 let newArray = []
  musiciansArray.forEach((musician) => {
    instrumentsArray.forEach((instrument) => {
      newArray.push(`${musician[0]} plays ${instrument[0]}`)
    })
  })
  return newArray
}