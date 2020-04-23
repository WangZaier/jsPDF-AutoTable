'use strict'

import _applyPlugin from './applyPlugin'
import { UserOptions } from './interfaces'

// export { applyPlugin } didn't export applyPlugin
// to index.d.ts for some reason
export function applyPlugin(jsPDF: any) {
  _applyPlugin(jsPDF)
}
export type autoTable = (options: Partial<UserOptions>) => void

try {
  const jsPDF = require('jspdf')
  applyPlugin(jsPDF)
} catch (error) {
  // Importing jspdf in nodejs environments does not work as of jspdf
  // 1.5.3 so we need to silence any errors to support using for example
  // the nodejs jspdf dist files with the exported applyPlugin
}
