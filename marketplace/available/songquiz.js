// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1vkqy5dNW++1DPjR0tmZke8Vhm0jxqkED+Zq70t7mrR66HiaDwywGY813MvO7FCn0Lh9Evw9aI6SbRIMF/2kPMCmpMzjPpaFjuJ2M7GlKtNEwJ+L7b+gwV3+QWX2MdSQk8udXdlru6Bywjx6218nVrR4RzCN83DaWrPw6sNR+NnTfzViJg3VK9KBAiOXoq8rjsSaOnhwJIRRv7V18GatxX5kA8gk3PXXFRQNeQuquWSyJsMhNCjonP6Ixw810LiYO3D4aRJSzObRsIko7uHJo8rrSIAh08Bs1y9fdwTW0j6gMjlfvZfntfE04rbmRSPpB6CMuvSKq/qWGhneEljiGg09PmnaxTqhGizC1L7BTJ1NNzj0MnrnbAGnSl+U1oQgKyCFC+oJ+rHAP454ICXVvPx3nAJ+AI23FU3ivL6rbFXHM8iahcxF9u4acdJISoHBeOWeSTlZoVhDjvdU9PwLeJHsBhVk1xoDUNmpfzF2zQKoUA0VyCz6HOEm48wiDNl8nBh199sC9fmiwCpO7pcjd1pf9WU+gz26wf+R7pU8TBKzLRIjnORiSSYbQfCAfxIkQR67aaZ4w8gAmdqrfbt2s44LjluCSHaiPVItW2H9OfRXMgbluTRZNONUwkiwkFCavBYwpgur1xD+rU/EzVa3cNACeY0vokA1yJp2K9dCd6BENlORaL5+Rmg3nBQaQclY2eGQJaCgIxHW7AZkFPuiCd94pDkiGoChOwwZDuuKxGQr6ylMdX574EeJdhOIhjTM6b7NcJ7nts43oSYmI+OzhBXP+7tQhsytG133PPWrrF5JYVWEx/TKxCBuhBzNx8VYhsXA09VWI1395tPzrsoQ6Xwt8iPuztcFZLrVbgAl58B1FTmuCnK2fRd3w+1+hndhZ7TjJHL9qXqhoxRXh8mSI6AJ77fEobzKcvz+XdvKDSl+ZLQ77s0iGm9PPigO6YFibdMx85Cy+x/RQ99B3Zh8dFTNxvowpFAkWnKfey94W9XiDZ/xcguvIlQ725ID4CRgsSe/3kSBJWCzH8nmWbg0f9uf1Plq23oLvd6RjkyUC0TP/3Xp51xBQl5xzPq7I55M5EoffeJyekNazoS0N57U2Do9z1taH9qFRoBp2GIUS6S771dHPKn/XAb6hSUNMkCKP7aIo5ulpoJoCN/89vKYfuHN8wrdytIEPHrR4WLiLkqxdOq5EBMhAt6/NfjpxDLyaQ=';const _IH='9139bbf661703dbd2dde5a3f1b911a515c66a35019d36458cae199bfb0e688d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
