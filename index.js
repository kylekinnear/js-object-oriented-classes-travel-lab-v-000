let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let experience = year - this.startDate.getFullYear();
    return experience
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let northSouthDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let eastWestDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return northSouthDistance + eastWestDistance
  }

  estimatedTime(peak) {
    return peak == true ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
