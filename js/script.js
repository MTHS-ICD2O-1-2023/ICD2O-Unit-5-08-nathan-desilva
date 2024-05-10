// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"


function myButtonClicked() {

  // input
  const numberA = parseInt(document.getElementById('number-a').value)
  const numberB = parseInt(document.getElementById('number-b').value)
  let remainder = numberA
  let output = 0

  // process

  while (remainder >= numberB) {
    remainder -= numberB
    output++
  }
  if (remainder > 0) {
    document.getElementById('answer').innerHTML = numberA + " ÷ " + numberB + " = " + output + " with a remainder of " + remainder + "."
  } else {
    document.getElementById('answer').innerHTML = numberA + " ÷ " + numberB + " = " + output + "."
  }
}
