// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0d3Yli62v0acZwLHmT/FlPpQaMw4+VqdihDfrhsB1cgAVIUJgt5LiIbDCYEekWdDlyalUt1wckUP1mFo07IZf9/5w5ukbMCmy7WcQXBDJBcJtAwK4E2XOrnpV1l0vrjCJ8FksRkjsXlD5OQpIZjYC/V/Q+61iYPPdPcw1ndFmkFe6x1aaGQdm+SJB9yTGAPuRoa6UHRTT/FzOYwua+Nn45FjBjShVs6q79EGFpQj0lhK3f3ECf3fsmqjKmIX2JPnYVACTKbRIhhDQb9XQr+c+7VCKI5EaBhK6LiHUgfoct+wRGmDC/PWOsrl/HpoJvqI9aKi11nb0ovW7czLKeschETrxk5pO5VJNlCAMkKnpxEKqnKqqmxelz1JhXpQO+MbX2O8VlCY/eTgpPNyy0cOCMV8TD6S6L+DLSdTKKP4h0530vYU14Q85EKuSCYgIwwb/2l1NfkHASaoGyVI+Vvwe9qmTQsa6/ENPlhO6TCmwQb9jE37X5yRJL5vllZSTpkD2JqRXMd7xIF9QSLb/cA47Vgb+FFzS56WFi5r9QMjwyj0RBWTvvEiSftTNJ9k56J2cad8Rkpd16vvBm6iiRkFiV+0S8kGNz5aVcHSAVTPj22yz8RaLYxbxyuM3h0DFJ/uBfFj1PWMCDPuhMaSlkc6MuYKup1jQ9yJKUrjXp5OP2aA6OnaG/appn5F1FXsoJG2stX240bMBXwXYt2MygOa+rO6iK0IQ6LApb/E1GwuBUHU9LSer9ujSnSwaFs/TNX+8iJ6uLIJlSP7U49Y7M6mEJ47gLNs9Nj0PiebKDn3BqIsYU5EwympWaPLAit7xOP1aUke/dh5BQWD4SKqbhGmaSHCbUz9FJnCNQW1pPsoiJRY8qT6EvRV/k0sBYvradk089FZt+sI+sB9G7TxBm2Bu1lt9rk0AJp2UNKmKGz649Lz37IaiYN+V+hPGlkAiomf4xGy3atPv3fH2OwpFcaWFci/2JasBWA9dKOvQWnjgUON2Xs7065p8ismdTtuYPcLv0rfTQ06B/kHwqX22x5pO2WtSiKzJE1pmmgIvmRYZLJ5ZXnolX+LCkAJZ+PWkl93ByTIF5hjQJFuI77hxFtf52xiHQBbVa+JIpIu7z1ktx5LVRE1mXE1B6S4LKJOgEaZ6TIeDTN/TEM6IQ9MRcn+hGE/ocAPKAETWPOUj8aXHFjtyhvRARyGJIQLc4godWy697dmVIMV5muVV84yoEwQk8vvx4TOsMzSSiv0uAGoJJJttgtHxDEVAWFcs10XDT+dqD4bu5lxMj3VwCAFGeTagpMWF2LZw/nNSWoiqhOXSebUXCNqEdQjfB5Ftt1gK1p+Jp1pkI9qlgjVpTIS5PJD0oGKgAbHcruTUFu1KPg4yFz2Qw8tQ43E+Q==';const _IH='1a34d85564583775a4bd3742288eb049e9c1803ef1cea2a5f08d225fca0e71b8';let _src;

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
