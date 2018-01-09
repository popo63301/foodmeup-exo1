# Quick overview

In this exercise, I assumed that gram could be not the basis of units and I tried
to figure out a rule of thumb for all conversion.

# Chain of inheritance:

Let's describe the inheritance of a unit:

A -> B -> C (the unit A inherit from B which itself inherits from C)

For example, we could write the chain of inheritance of "LOT DE 8 PCE" like this:

LOT DE 8 PCE -> pce -> g

# Description of the algorithm:

If I assumed that gram is the basis of inheritance for all units, I'll convert
a unit A to g then g to D if my goal was to convert A to D.

![Image](https://image.ibb.co/ngMoE6/Drawing.png)


However, if g could be not the basis of units, then I'll have to convert my unit using an other unit.
Let's describe the inheritance of A and E:

A -> B -> C -> g

E -> Z -> B -> Y

The algorithm proceeds thus:

1 - We start from the target unit (here E)

2 - We'll loop through the chain of ineritance of E and we'll check if the unit corresponds to one of those
among the chain of inheritance of A (here, we'll stop at B, because B is the first unit that matches a unit
in the other chain of inheritance)

3 - We have found the near common unit which we will use to convert A to E (first, A ->B then B->E)

![Image](https://image.ibb.co/i9PiE6/Drawing_2.png)

# Example:

convertUnit(kg, g) => 1000

convertUnit(lotde3pce, pce) => 3

convertUnit(lotde8pce, lotde4pce) => 2

convertUnit(pce, kg) => 0.003
