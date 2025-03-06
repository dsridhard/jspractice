function reverseStrg(strg) {
    let restrg = ""
    console.log("Tesing" + strg.length)
    for (let i = strg.length - 1; i >= 0; i--) {
      restrg += strg[i]
    }
    return restrg
  }
  
  console.log(reverseStrg("HELLO"))
  