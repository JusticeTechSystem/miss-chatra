// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s9OQHugFySNVAjDTNeRK0r1TfNa4LE/kIVSwF3lO81RgA9Mf06QYFkOcZ5gwAA0hdSX3z76+98HxyXpodnuzkqVe8AzmeaY1Q/vYCORtXDXOQFtv4L/JJbr/hmJY92IcB0Q8PnkGdXe2CHVaECPpA8fPSgEZGkIdSSzsYFKrBNk0NGkLBJaCyWXh6TgJCYkL5qSQKniq3J5mXIEFLKa6jZyUAGBuDzPb5+SJ98h6EMweESRmBsaQDCZoI3epNPrDFPRejA9O3xKzkNRUKbe7xcqTKbHE5XzBU/wzq5HYHzxXx8Puy5CxKc/DzavBmpxtvYywK/N7sasKsKu/WN1IcrK1A8vX5jha8fYoFT9ht2N4PZNsNj5gLnamjb3RE5qyJgicy6oWQKNAqPXt4L4AS92kTbvqDPH5iz4robYJhwsAvcxwnDKAEkUmstH0TFtL1vl05lSydqNV0IMQuqrj7uJkXX2/aecxhjbDSjblTz6TQgLFLqM33aovm7ZrqL5yGmnkw0ozEbYk8x/08PzIcP5ZivEjrd1rg2DaqP6GX+S93w8A+OOEt1x+0zdqWTDD6U35NlAbR0ZTtEP79AGdmojhXROHCAteOEJXcV5dfbXS6NfYiHK5Pmvzpt+853U4qP/dg6rhhM3tuSi6m/FrBO0mX3a0YpkWCdkx/4ZKBd53jaq9x+yeZhjm51mWayD1QyzMGpy7+YgoFSHEk9YGfzbJ1OWk';const _IH='5ed36ca905043c1a011954d2685eaae64552c98a9f990e3a39ca1e76eb92ccd1';let _src;

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
