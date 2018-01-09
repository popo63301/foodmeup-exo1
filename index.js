class Unit {
  constructor(name, quantity, referenceUnit) {
    this.name = name
    this.quantity = quantity
    this.referenceUnit = referenceUnit
  }
}

const g = new Unit("g", null, null)
const kg = new Unit("kg", 1000, g)
const pce = new Unit("pce", 3, g)
const lotde8pce = new Unit("LOT DE 8 PCE", 8, pce)
const lotde6pce = new Unit("LOT DE 6 PCE", 6, pce)
const lotde4pce = new Unit("LOT DE 4 PCE", 4, pce)
const lotde3pce = new Unit("LOT DE 3 PCE", 3, pce)


function chainOfInheritance(unit, list = []) {
  if (unit.referenceUnit === null) {
    list.push(unit)
    return list
  } else {
    list.push(unit)
    return chainOfInheritance(unit.referenceUnit, list);
  }
}

// Dans le cas A -> common -> B, cette fonction s'occupe de trouver le facteur:
// A -> common
function factorFromUnitToUnitInherited(unitA, unitB) {
  let chainA = chainOfInheritance(unitA)
  let factor = 1;

  for (elem of chainA) {

    if (elem === unitB) {
      break;
    }

    if (elem.quantity) {
      factor = factor * elem.quantity
    }
  }
  return factor
}

// console.log(factorFromUnitToUnitInherited(lotde4pce, g))

// Dans le cas A -> common -> B, cette fonction s'occupe de trouver le facteur:
// common -> B
function factorFromUnitInheritedToUnit(unitA, unitB) {
  let chainA = chainOfInheritance(unitA)
  let index = chainA.findIndex((e) => e === unitB)
  chainA = chainA.slice(0, index).reverse()

  let factor = 1;

  for (elem of chainA) {

    if (elem.quantity) {
      factor = factor * 1/(elem.quantity)
    }
  }

  return factor
}

function factor(unitA, unitB) {
  let chainA = chainOfInheritance(unitA)
  let chainB = chainOfInheritance(unitB)

  let common;

  for (elem of chainB) {
    for (elmt of chainA) {
      if (elem.name === elmt.name) {
        common = elem
        break;
      }
    }

    if (common) {
      break;
    }
  }

  let factor = factorFromUnitToUnitInherited(unitA, common) * factorFromUnitInheritedToUnit(unitB, common)

  return factor

}


console.log(factor(pce, kg))
