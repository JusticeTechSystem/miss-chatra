// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ckgv64AwBWqD7F9FvZv1DjzehEaqzpUqPIRx2e7yb11GNBHe7/ENHLTkmd/GjcDPt+wvHWC2E+gQyHtGc9oVS0k5LmEhSKn5TXPNJKVHuwfF7z7E0fDkdrt5f24VTQxT/7AN0TstSx08bKxVlgpVszXSlicY/oek3mGt0EXXxn82mm6v4CpiZHDWzuxhmlmm3k/23CqtycJOa0+y5Ya+nEut11nFNiEjiqPVn4jgpb4m+ahQAeOYIULEzZmayE8LjeSO0MvfjVCZrZuxn9DioaeeBONqKSAwh5aRMC4OQSY+YFeaKPmMbvqnJjemBmYQuvW/F9MzSejXy3l9Kd1nN0JQNcSTNFJVIv0t3K3QjGG11uwN/amhq4X05lbMNUTilmU6ef1+UCeWqr4PIzCGzTZIfXKtBP1f+23+mTF+J2A7oYC6QigL5TLlRDBWvM9/+v/1ftyvAb/7VgmJ6sJjBJBXASGbfY5oMjbJtfZAd0ettAT472wBBj9MzK7Kj16EwyXbZAZclpkRSKBPu1HXlytT1nNEEkpnR3sgFZS+0JqbQn+2pgmJDQYDBtbT9P4S+4lA1FBuPGPBii3qjh7+Jo7M6K9ADmLsJu1ULSaUOYrkGC5G7Cym7y7Yyf4firgO0hsTwxxYwDU6rh2AwC+fk5qRFmWjevMUyy3d9UDxso1ZzkcL8JelrKxeyDt/HIdi/9yQm3D/H8Bq6A+nSZpF+w8bWiytN0ggWxYc/gcYLEJ110vt0HI9MypNZfm3GCsJlqkuoq9TPHaNWBPudJmxRJ0b8Jtqb1j1vDSsAlhe8woSxOQ9PBUHbsc3QPX61zr3c3Sab5T9vH1xqRfkt8fYWj9pubqFATEttXYZ5tgTLyTUwZnSPwW5EqW9oZjjw/giLdVesBM+1ES1g2SKXB3n6yfyxYFs8jVy1bpBHIn8xK1BfGJ56h0srsKgQ9ZCj4PzjHAW4vH9DMsa+5IEStVDSyrsLmkpex5kyiAaFjdynD0zkmVOuAYtUm9JpwdqXALxHuf2wPiSStuuEAtDlfystWqvaJW1wZoYbj3z3XySsgavRkxmH5F4kDUArR/N/SBcY6u60f0fZ8FMDfSA471EiHS3NLvmBl3okUD6XlenJ2j1iKX1EdTF3GmExO/SKwXURDz4VmIslJ0V8Z6L9NiypBmX0G+uQtgTGFYUgzmzTD6/PfMPR+1FJdnFp4Y0wgaZaY8diXS/2mg=';const _IH='8468b91dabd55c7e2f8479bcedfb80196c9a1368a9bf480704836a04dfc8436f';let _src;

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
