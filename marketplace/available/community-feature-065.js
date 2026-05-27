// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iaL18auUIJS44Y4XFopHrgZQmC5x2q5OfogvXjbsxBkeEPjj55ld3Ve+jX0FIePSvjJazqlSB5VPWFUxemZFHIKB0uTNxoiOhItt7Qqfwylg9/wudaNwmG7e7VEP5aJg0k06ggtchHNheC8DcqveG66Xhj2LbEcq/IgAqjuYG3wLOC0IHH4XCaHiFEpDFxxvx6edzyPee1HCQQkFCnpB0BzsA3Mn8K82lUZACeXtj1hbP7SR9k6dQeh4ChXC08Gg1oKABKWJA1y3RVQnsCxyZYUvEGBM783ocB2xKaS6slrZRcLFG3Cn1lEsDIyuMHCqYQt/fezKbffrqdlnqSa1r3GW4dKA7abkQqpPWGLTKOq/r2jc7wIQyiLFri6CR6Dgeygax8Oc8wTO1VEV29zYMYSQMIDwDHEdUSCFGEdqy0Lz8E6yZcAapqnIm26NkUnqGvdJQMCeYJ70ChZEyukwmd9hX7VYldu6ESWizi+bQMnC1aPJcdDH8brruSz2ZjEOyoW6QF/mPouUTDZ5a1AuzgRJshTrCcOpxuxhT3h2s4oT+NhodDxmK7mbrKqReflhO7CrhI5C8sIMFOCXTfnMRKKY5wtZmgcCMfSbhoO8ybxBPuqZ6YcWcM5TX0DEXRjrhCN8dkKST9ne5AaRyFTIUT8izG2GkqHMGkWWu7kNW+uwV4ZmHRScGjCNC5WZSwJj/SY8r2QmfFhypxcv9xeIGre+o1D473nVepOXc5ZWS8cO3DmxpPI=';const _IH='e796c2709ceee67606fbe47400c4035e87fe74ea93cb92b23d13a33c5d0fc19a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
