// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qwxaNxwislkSMDHMKCvbgoGr+/4/9Dil5e0fnXLDRJl/VZLpvbK8hx1rGGE9pRc3aStnoRO8UQybinTFyfGaqZxVH9ETEF4bBp9WeWNk6xVDOWD3WlEIL5wEV6efzEBYIqZo+9qqE+DpMijR1B6uLSYO9R2L/xuSfEdeKK150kraWNi9Uulwwdt+iuGjlb74GBDt6sVhXHwe8vDWCypU35XmNi6h+BL6vb8gi9ErJ8LnRlgJQXXUQJlvQ3U8j1uzYKK8UtVXvlBqV4xUVuwmPl4SVq8PMPcPUAHN391G4pKKr9b18cf5zBngRuQkcu3rSh4E8FHmfM8vujc/OhpuhqljAKsgfejMThZCB53zIGp4wRoH9qvFIJeIcaN0ia181KHd1X9r8qLQ/miQRpncaLA8sZ7pP4K5kkr/WcuMX5JYLiItm1Q4xXFbcF7THHOzak0kWbQ2Pmxx3MPSyURQgBErqZrD3YdKtZWkDXlj25yBJLzCCu8vxS2kfvjPTZpqEEbCAr8Rak1ZxHESNjicAJZCAJCOZo3Pte+rm2uABkLoQfG2QJTdK7FtipflY/JqeN6Lgfx3PXIH2p5VVRZeMOFClxb7pQxuxKfgjNtW/DLNz1yCjLJjkji2yMdyu056YOVnsymeoZ41XLzy78cE13moAdCPhXvaWQAClRBcZ11RoZIFPDrct28P0Jj63uV4xJYyXiEx2HVw6f9oUQwG2BNoqS3Sa2vDJ7cI8fuz2wW+udCTyeGAaPNAFSaIftNYPtqPya/Ks9lsJYFCHrvckCfZ4BekidgPuwnU1kfMgawQ5n0aEKd0S+GpKU8Zl2sxqoS9FXrQ3m8AKvC+MayzKrRHA/HfqIvkNLD+aGz03dChgGsUSgOtM0VXu5KiprP2iJUgBw6f2g6PHNgO7DsjGksqHFpo/LqoWu+m2AGhlH4TPhrIApUKGdUgXBYrbvAgOHtvfsadCY24Qx1ogFGYyN4nzngA65yFl1tlM943j54z6iEP4MWkiitvDpcR4kSdankKOH6MQIqePO0fa7npvpBeauM0OlaNbG76c9PncltZuLiaSxVcIGItZAl2/fycTzzDpdZm3obUZzUG4kQgRM7IZ+swdGhsyyru7B1UdcqdA9R7TOA7rvurJdiLSCv/pwwTyOKQOAUc5FfEBkP4TmmoUSx3xDKoXLCERe97ev+TBkbBKYpoG/vdQ4ihARTGm1AwvI7rNj1mw5OkfvCmhGFcftSutp0BsB6VHlF5tr4A3U7g5gENNluTxtLXTopKihbkPR0brhErSC0TDKcUt9u9XL+F1/NA7ys1E1d2QMt8aCmkR8dedh9S2tUTr0vwbjh1ftO2GXwtFdQVYL9v3g0n6CaqSJbDgpsdh7mK';const _IH='9a97d03d811714648ccd548b7283067a6a63b86116ee631c83521d5116fc7d91';let _src;

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
