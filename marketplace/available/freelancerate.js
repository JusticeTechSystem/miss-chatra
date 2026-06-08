// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J0p8W3YLJcvOBO3SQqOBGlDMHBoFzQcE6B+JIr46yQQTv8ATcWq2cP+QekYdPEMzPZVsdV5x6kJZKay6HdaZMefgmCezjwpqu6etBWi/FW1Aoim4LYWeqfH4fJbYOT6Upf+BussF9nY+DbQ5XvquLrbpQT7YCG7450T9bOmlvAq8RpgjZpVy7x+MHLgwOpH6yZUAKrwkIV1FcVnkjLFvFzieU1IivWS3zhSHfyU+BdrGwv8I+0dtJVW1j1Q41RTWdF1hdt9JtesBP68+3q6BLksrmDcXAacvlXN7m8e/oNTFs5TgA+JLD7rLPluQdAJCL59nVr34z3iysf46gt181MoVrA952NgEFoGbE8Tot2Q6LCX5euqI7/tlNqkzdIqt/ID3e4ru3pe0ht+kzu5/zSfjqIUNzALYEr7dWqRJlO+IPUKttpUeHeN9TOd6D4vkSNBjzyyx3x5n1ibKmrtOGRrWV97gj4Y8Eb5GFdF0i3RzN5yLkMhMVfCqRUJS6mkdEM9fP03vO2LCoosh5XJUU6He5oMSVbwCajYklJa0fjh7EfRuswlRUbJ5aEBTOmf8VYnFvhj6aHPPIuY+A5292El0J/6t3bpJAXzHhTZH29yS39nB/FwsiMN7rpolVkh2tnlsGoJ2EYTwktTCISyWnd7mz+mnxMvwGe4ch4mPNYpl2qvSVQk1xi5pwQ9FPXGEwYYR+JlpevMjnH5+lPPN4yrCdynt2kdUbFFDeJeVNuLZrhBkUSfazy86rnOYWjtaaByogG8tvmPYKtgBlkGjGz1IFPlmn7DPRzEYrStZ/0uYV2n4JfJBOCtngsL6n/zVmEy/AuJKcq+Az9aOisU6jkH6fP/WYrj19/mZJvLUUsPjQ0oG59pdv0GUk5KoBdVDRVQg4g1PVnxvH4Dt4CyV+kq8UWc+DdSXWodjwdQDiaFqFt/AlHN8haOLfYkRG5yXTTljkdsNZu3J2ZVkNOa8V4lEabXqDlFP5dMhnBYPudGxLEUwiWa/X8hFSjTewUVSuX7Zcb46SI1W6J8oIJDbDqzLO7h4XbayNHHgoIgDoj6aCi5MT0UJ3CLPZTP9SLAcQGohXO/yGJEf6av1OyZOmPWjNcyDtSPfJQ1omuaoL6aCY+5AVKkFp8R/Ba7Nc21BEHjug4hB2MQKTRhqW0R3htjQ+kIyFHZdMlmUipBIVkjiBlGqJ90fspA9mLej4KDImkARv7xYKqo=';const _IH='2433662832bbaffc5aae5bc60524c300257b48c244016a09522c271ba0c8af48';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
