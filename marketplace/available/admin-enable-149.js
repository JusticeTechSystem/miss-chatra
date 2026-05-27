// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XCa0dgPbutdaFF74LDHd+asyuw/BC+Jn5k//x2BU50vaFA/4hYlgsz26XmF4aTnJ5jaSqkNhGnGTIrRwp8OIt4tGKbM0aFlIbqTf1wxRwp2KMg4OUQuq85w3/kYvL/9eg7Nlq53xPyYEh4ZMxFI1QziSm7g/HE/CT9S71YxoeLtdgaQnvCIoTLLBeyHCBINV8sf8Nfqo9niGhQFhG6fBxJdaipLDeyiHU0r2nlZIOz7L51ctW2h/eAQbSwy8/9FbY/PPxaH+neTRSJ+uDrwygLCd/hiCjp8dyAr738NZnRc43akDrCN/YCLHCpNGtWYqoGNjs27P+Z82I5XY2qKCtMJRlKWImLdW8J4Wuu8tuuVGJT0NKOevDbGiXLk4KOUT7s/NoNR1CuVqckBYk++10mzle7r5oEB8QPIWrM6FKD0vBQ5wcWWwqnS5veONz7AgR4Ur7Y1xaFImONqwzCTLlLkWBWd2HMoJdhRCIVfGr+Y5LFAy3FBajlszgQ6nyapsOPbbjAmkrNWW+8JJARNsb3qOasMh3E8Eb9aHfv9c3/OIAfwI58Qn80/oryUm2kuJwrcQOqHqSi6+BDYrRMQCbC71QWL8vBDVb4E8IygE/h5frFMLGvMWzNauZphhlxKFD12hiwDCezx1axO4g0HF9SKDqCaqOerk/ER8ks4dbW4B8HGADBGlONqjmhDG/KjfkdypQF8ZPvc2ikEZB6TOPUe+PFHKSPXAOPdSmYBrR9vyHBjhD3wKWELCmyAu0EYK6XXyLpOSPr0Ava/1ng6hjBeB6F2ojFvM/vw4N6DKhzoJbv2TI6dcqLJWj53xuF75lI40dgQQR4UF2VMf91vSkuHwCtUJnqJ9RHSFDyu03wGLXdD3QOEE8PSuT+3JOuxGkySxvoeSc+HT+YkZbhuV8HBAm5tZK4CLDeZHW2upI4WMrtxTUjetrR9+8pw61fsFq2gBpCSie9S/hz/L5vwF3yREmwEFZLhAa1auyZzVrD3r39I5IyOscP9S5g4P/IQXHg==';const _IH='7c013b24f249201fdb8cd867e8a1db1089273b2dd992542b976d72e10a8f79f5';let _src;

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
