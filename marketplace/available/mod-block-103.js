// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OporROCc4QZF3XM0iRSjo4zhnqpYs6gRh7EUE/p/G955xpKFli0J70RNSx6qO5na9GKszxfGf8G26Hsmy7GTjUYSwLWxwmQAhVISR8CNJ8mlVuxKQ+N5yAEt6PuAD5OamKaZt/uov73ujVy+nC13iYG3iR5XjPu51PCoEdKaHCTVUKPAr3StdfGOEYxMVqs5S4R2CFC9elprk6Mog7287kEEDF/ZFHkzi2hhek0gjFlTnVm3I5pIwSZsrHBurDtaZhK3Vczw23ZZ8AyIF9dlqQXgJX0i6L7wZAqBoItpT/sV0QHXNGV12EhToHlMnwICO7Bx6HRXO6pKRcdqxu6pfpIjgK4pxinGzT0vzCNVJH6oumm5KlZR0lIAM74OI2BKI9AEN6i4CONAUO9IoF7ACd0av/mWwOkgYX6zYj997K61IfYLd1mRAAFOE76wIyktNiJ8RDP97CUWdakK3dbjcAfcz4wbiIsEDSCKCfSFds+w3g2dJ40vT4TMXkpNe9QH/5Nr6gEi5MiH4WMJDh/gY2775WHqxB5UDPWiZVgL/vcVqqsaZhAuzkrbHAu8uMpnB0OfzNaR9n6h67easBoPWc6E8ODlJS16CcUmFskYkl5PwNhi3RZW1FTWFBfCwM803oIbcXaNMNfaINezanQ3SmmIjSTxr0fAAgQcWuLP7mz57UJIh9HiXRzA5o2usezSb25FTVf6ZZJs4XunoEjbGzEp0nuGNr8pIiVCT35wUzE/DAOvoM+hVgLCUiLTKnddHyW4p24iA1MJ6X1tMGyfKky52oJ285A2J6rPjHNcU0XKJo1h5QG21Q6ZI3Yf7VHOcIf9bNO7vFL+OcxAWldETtCA7TDjUyfs7BTTbeQ85KAdfBkizpM9Z82y01VUjNGhCjgaE0p61EohbwZs7C5I4fbdX0tfBD0Y/bOZFp7tIP3fsf8ZBd7+NQ00NEvZ7ikSJwK3O9nw8ezJCoJrEijo0f0sy7I0lyKe88MKzHS7NQe6gEi1H0mBOYDWL8qPrXPLTCXcwIaHMwxbCz1gw0IHCFfZ8apFGosIsIsa6dMnZFfzuYxbg4/d0Vzmv8lF5m0xriYpSCJnQVSQiM5qwjaO69ZX/r0kFNH1MupJ4lmP4/8VOZ8cd92XkYIgZRyKOS4pU/etf8nUg2yHBy/IzLZTRpJZERxRP0MS6Io/h9XBasmfVkmNrTxPmreiuyFcKHrUWrF13bG9hvsPuLa9U4drrp0o/YDFAq+dEVlfvhzeJcjNyqgE7JphMNfRyTH+fshZNPxFVNZtPAyGzvE9XJrFJk/EV6K4LrGA9fSIflPSGPfN5PVcuIFxIFQk44Wva2lJUDqGZIc32GGQnOJwGhC+PupAnNmkFY9ROZwTDiPR';const _IH='bec4bf8cca5f2ff0c76f085c25f426b6ffe3d9a7761a88d1585a30d21a8d522f';let _src;

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
