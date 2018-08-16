// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  newArray = []
  musiciansArray.forEach((musician) => {
    instrumentsArray.forEach((instrument) => {
      newArray.push(`${musician[0]} plays ${instrument[0]}`)
    })
  })
}