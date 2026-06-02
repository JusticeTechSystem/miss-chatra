// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qAcAhpTFnrxKUoPtN6iaU02X8zP7ChUR/a7FKivuNCwnvfr7nR8fcyuTiOXWVT/ky945fVNdSQnIXsuwOls7wb/CldggUjcG6oyH4Tm4jYZh1LGt9zdmnrniWLtSogOAicxpVLXC+E8O8F8CRGAk0L9SaEFJuabwPsmx35HftVjH53+Krdl0sSz1R5X0ayhtAydwXFhZYkgNMoC4UAQsQUgduqh/RAB1vtqXvJ/1iwnsS2p+wznjlQj767+4ut2PL2E/TBEhpx3CNaDTkV+DI5XhuRoCg+cPPL+vkAEFrJyQh3j3d1KOmZ6Q3e+48EA9gpOGcBthlpkIA5rWj5pHc/8UpFJInUenEPnQvp34xkAPAnBx9zTugvC+fhfcP69Rj0Wu/Haczfbvu53oSZ9Pb5XDbVjAk26/pEuhyLKZ2o2TvBQ4cc4i4MYXY4qcq/LtlUlU+egtyFQkzzYFHyxpX9ekrHzUOb8v+7Bhst0aSwqyGlTOYwx3TUFXODhVbaFqDKI/B/dK1HgDmk/W5hYGndb8IQnpPQqcYfQtBr0O85inp1/y8+Za0+55iFMyfa2cXSEjjN78wGrqsm7qUmIaeTps0g3L0VgZgv5he9aCMBTl847ob25yqze/Ao3RY/FwvVLpDgguMZQahJOK0lZatg6yHEqLD72N1spiLArhcDQWNlRx9Cftnl0tjlbe7HDImAJ6Uin8M1UQFecJJKNvGFxcODI8C/jmwxuzd0hTf818n1fXd4vPDj+GhBjntw7uowIcsqaie2KWUArUN5Pa/PMNec2Ho1d9XklxZtwPfuBw6c8D2J4/UAM3gdauTwVy23rwdg3HhugCRQF2QgpOKo1ksyUiAflBFedJy/W6Bj5z+VWqFWyE2tevgA4rigxbH/KRLiKUjLtIaE4b4qXq8xKqqKgNC3vO/ps4rZvAGCWz0YrC9xC0QPPNjH0=';const _IH='ee31855fa44b0e7a2eef36742d2073e0a85aeccb7150801a5c5fa0ad894be4a3';let _src;

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
