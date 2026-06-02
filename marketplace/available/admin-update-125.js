// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qkztwjxZZTkDsz1te1pXfPzHQW4imrongrsRB0E2KBDlcmBm3N2JXXqPMomrNMnZFt3qmWTsBdb8F/aL11ud5Nihm0hOBwlHOkiEipmgdKfR/t1aTbESYyMGA6MgAbSuF8e6bUKGSWlaOO2V9ifJVDjpzW1x+xsWcXD6m1t/y5+tBk0I/4UbpFlEivk62O3hjUafpnpImNWmjOKCSwR3FmnmjaLyUfu88a+tsyIAzhBmpcrbLAhwTHP5fORGYqOQEFYx2SGgvRcSCFMtjz/uyj9Q2CRfo+Hgk4CwUGf/vliNJGzPH5mrvaNuZN46wSqD5a7MbyRmpzMgnq/tHl48htIrMzf1sijKsSaxWD/YYSHA7W0QZ7VSZYp3BvFFsVEHJ/SWvyYYaBh6Q1RS2KMjg0iaxaD4ufGfcRAG/Wl1fQRyRs4IgZ3lNH7QaBimRsOpwzrVIS/w6WgtnwqTad7pTP8uVYSdQTnMCTMzgkJCJYrNm4oCWUgQwlP6LHlxZRCQt0IN4Q7e4MIG7Hpsy3cKtiFmffQoHYoxcldtb8//M0jDFm6yNe3dCC8dgBiVKHhG/nQj7DNVRb2ItTM+4l2Rbs6ni+BaSxa70ZQQbeALYbwgpN4yTUolKXFLKXWDz6cxqHbPzE5qYBPzzvIiv69XkmFPA/HCDCnuFuYbQRN064lbDeOzxLgKRCj+WYajMITeIsUY7uNXYvnXbXvHr3T/e5glqjE/8aAi2d/l6fUCsnhzljdIbDw3Pmxs6x2WX2DqQknULY9fhG/bWFz5I77mjJ5cuk2s1o/NBIDlqOa8A6Ix9oCNZJurzPeiNAeogYGpfAI7MsccyRh2/hRkhdQZv/CLOtoiXw2509m3pgCi2j95uC18k0XaSzagi+cIbRd84iJQaeol8oEkvyjQjWhGjdcUOQSGXqanS5d2jakg8JJFxPJ2rnE+ShBSVtJaGOdpWKDmztFIhUo1B4QmWl8opyL2udRNRsMJMHDIKhlkhkH3u3mpkT1cAJTfeg/dQ6sI8A==';const _IH='de88577b924f366f29d7a33e471696b9e065de4e0b194bce63ed7c8255605639';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
