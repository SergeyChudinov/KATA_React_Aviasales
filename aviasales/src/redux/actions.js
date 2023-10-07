import { CHEAP, FAST, OPTIMAL, ALL, NO_TRANSFERS, ONE_TRANSFER, TWO_TRANSFERS, THREE_TRANSFERS } from './types'

export const showCheap = () => {
  return {
    type: CHEAP,
  }
}

export function showFast() {
  return {
    type: FAST,
  }
}

export function showOptimal() {
  return {
    type: OPTIMAL,
  }
}

export function setAllTransfers() {
  return {
    type: ALL,
  }
}

export function setNoTransfers() {
  return {
    type: NO_TRANSFERS,
  }
}

export function setOneTransfer() {
  return {
    type: ONE_TRANSFER,
  }
}

export function setTwoTransfers() {
  return {
    type: TWO_TRANSFERS,
  }
}

export function setThreeTransfers() {
  return {
    type: THREE_TRANSFERS,
  }
}
