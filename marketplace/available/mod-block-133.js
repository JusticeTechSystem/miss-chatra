// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='27p6Jw5lRGM6uSP3PkuaVJsDIFw+mwA19D/LBAm5jwGLBxdhPzYBiIVLDsSHbOqi/9wF5UlfAru3O+kHsrGP1nY4S76w+WPpadQjOuIt0DYxFIJAFoSKZia1LrblmMyBomYp52HEZ7kh/EhVtGdVow7cNCihZA7j5k12sPUocp2K3ZZcwZtKUJD0EM9epvjcGH6F6hCcqGuZ8RuTvggRDr66kNqx9tquOmNwvMOQupF14N5qxvX4j5rCDOviBZtsiAG0mnlfySWECLtCTxgUYOEt5Ts/b5XQwr9v9cqupF+k1vZedU8WkAfTtJALMzH1JaJHM0Z63lQGAWUIIJurhB+Xz+OLu2VTEXIq0R6zLHfLUv8UnvvWeVw3ijXtP2hfVdrWvgyzwac5Xz0ekAyk7+o0J9qBWkBGEQxROj2zuAsEOpncjnPOkZQXSG2TTKvpUjAWByzN3+yQLbdKX+bdJSel5++lpVX0DSZlQmgRq+VblVej9N5nEHnyYD//Tm8b5iFbPtZpC3jGnZOBk0SPDrJ71x1RPOHGo7f8arei9dBFiA4V1YAK2WKjU/Pof2vmRwloHvnkiordHGQGfLRS96brm6VqIqXYeeAbaRpV9GGzBICibQp4NYHktgrMH2j5p1/S9+4sLhg//GV4FcsqARNuNp7vfzG8R/ULITSTFUqkBYeMrKv0MXkXsLfEoRnDwNfmsFXE6aHcSbKAO/tPbXbVzWfBl0qWq4FkeAReq64je+3qSrp+hqIc5WqJrvi06lr2ugjCVQNIoF4c790ivAu0r1eSdGfII14NY7EusPDcarvuUjN4G2dRxKMEEjz0MYO0mzOzjGkUf6vb1OpHVkFhGranjAQyWP1Z0ggEvbkFt2VVw/FC5nPgaoxoL+64R114lyAmK759WUie8MlubIfGPXY14dnoePZMCWUmRRwu0HVT9+9Tu7/bgg4/fnIOMeSYD3P/sl2FGKPHM6FpBLfgAuJP9bTMvyrZbgRhwrxFCBhVn8PyU2jw3G0SxQCtWA4YDxedt994Y5NXWcaBSEuHQcU8ZUQ1QDPrGk6slrLBYHoIdqbXe0OISLQ+isiiGAvnY5XJ6kArC++nLQM2iGyKwM2OnRNSBSia4M1yDj856l7SB3pCZYrr1S14H7dE1N4OAtU11y1o3yYghaigOYPJybbVSYx+U7A05L4nrLJNArNKFNnHYv5c58iwEZ5d+2T2LjmQjcAGuepn6MulyOZa2zl08cH5uW8Z51PNZJ0rKPoGjpHrBsfUSKAN2uFrhp/NUnzp55/c93H/ZD3pqlboaKEP9UDprfCogPvmUUzh34bgod5JA4bFUpZ7AF5ygGtCDAPfWYenvRlDYqiZ9iJLAlftN5ke69arjcUP';const _IH='6bc4efa8352c7e7eab9cb46ae20850331a28cadd7c3e86db59d81acec46b86e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
