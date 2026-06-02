// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a5bs9iPQBXNm4y1P6vHAC1lk/o12YCE1WHDHMHW+Qiz/OMX9sKsEdN/fyGn7dizgJBVK6kUbKCMRinbTSsMcS6+nfdH4BaslGGpLJ3w6bFjaGam5BFN+FgWeoRZpGa1+hoezGuhj5oO7ohXDmW+dujhc6ItKnVmV4pi7Z+omxpvERfy+3PKcJeYCxsvMFIWSxua6LeFJlnSUVLxkH4wh9EzuRYaegmcaslJQlIkvVsJnBVLvCFdChk2W09ewhG9+xHt+8gJmGEcdQbqnXnHou6zguo9n2xSdG7AOc4NVkX+bJD3cPo/aP2MbnxaaRWWzPDw90ah2CkbQOk2oKGQ1xugX13YnQ6Tt50JxK9Y+cUBZcItbEAKdXv9SBSTY025GKENcYVsMA5jiULVkHwbEFV093Z3UNiY72YDYQPA7NvAzMBlE5I0QziJg4HxLJJfTEs7Bna5NR9KW6yhvGS5Nfj5CJqwgTUOzNtWj2SLdzOtAjJwagGIG4x1QSa3aS2gjR8FukNiSnRy5Mw91zW5TJ2pHqKeymyNtL4C+r0mA1xVURy6yoa+gUCimwMmKDGW5ICtAwJjHaDw2FuGYgOAkwbLslUADXcZsY1mXXOetdmYd+6anrdQLa0mwdMiQsku38X5QecQ6HgTH4nCSksmWKfgxnWZE2x0T6dc+ydwJ9Cu/+J8/Y0LtJVgy6ejgJvc4jPtisRO69V3xMY5RCfQDJzevUAztmdoAMoJgc0EzjkMiy0k2tG4geajjyF+e+kprwOZekowBw1TLGkqjDbZ5Ccj0jzlF9KokEymqH/Ti4XJKm+sMJE8jiAXjSLS4MnBeWETCvK1Sq2lzLpc8ETOTmzgd8/fJORLIFYLT45jdrlKIY1hjIHsnQRLJsCt79M495Cc43R7Fw+5MYFpluOIJrMfSIh9GBwW8gB0MS/P3/qk8QOSUoivA3dP1CEY3+ZtkMZ3fxwuMhe49jWdtRh7dP7Ib63+z7ZEmQU3inQeJewTaF1mxNFc=';const _IH='0e46495df3a3e8e6f849a87c0823dc4e7ad28c3880ac997d528049f58973e13d';let _src;

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
