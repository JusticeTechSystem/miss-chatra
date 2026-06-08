// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='llNXtpMGvxhnpar9bF95U7g9W3QmIsnt9Jpb0yzCAyVBpZra9cwB6Y/xge9CAJlxTvmve3NJI0fArEckpYnSsWl25jEJlF/TUT1/7JsYBVrzkrHigmhqZXXfUCwOgDJmCMp+1p58RJfeyPSPYIMJrWZXToxcEohelp7u3lno2Ct8GdYMSDMbbg9tdsOcW31cnzFTGos5OozMmkgJKtrgaCjtc9E7c3o2RdpJNLtPaQo5gxVjUkFfi53JjptIfioYSWUAKAuozXbGhWHzlqv+01UjPr+Cgnlp7RRTeP8zt4t1eqDTFWcD6iTQZT3hAmWNouukKFz8ZLs0qB/wpFU3YwyfdwFxs8wCDz+zoWOqWs0UIz766Q9reX0N2agk6BCl6A6vDCsh1Em8rRTl06yvHDAzvcZQk7u3jk9VHfox+/y21Qtm2CB1ZEyXNZRB75FzoB0ILi5IBPbag6QJmq1aN9M33HPgKsEDUOrRU6FtTYIsj34dY2cHaZ4eJR/UGGrYHwkY4SPInYZAHUgpoyqFJ2hvB+UuK7Otyog327B77lVQ+yIza6AJnkBFTQ/76q/ObGxI/qqtlzlamUxm+Zlm5fC3EEACbDrbsNPzrrhkQCeNpNcbDJQJam0/dTsyfsLXxSh84frTZ+5/q2ZnFl8j2rViiLZkWTMAIDGnnJuRzz9Zk3ewoqQe8kqZoVBPAnUFxlS/HHwKfQD87O4ORHngmqXW72Gh6fXZh/RyHiJ0cfVMkw5M6OlfWasFVTFgN7qau0C4/WwvCMzVIIS53vbYd8OM5x2j93HUPOLMjO9oWREDm78o9qAWh3/mnhSLmrfCpUdAwAetK3vtS4REqLOG1LepR+9xkTGaiG7WUW5O6yPdtmZHyWKm6nJ9KkUSPtWagCS5/BrW8DPsDNDvyp5cn+SEpIvffx4qLUeCwbCNJhXsME4OXFM7ra5Mt1ZAZLLuvKGeD2YxJqmMLm3m3azSg0iB4cu3ZFuUhhUdO8HfnvMyCxwn7+pQ0vxGmEuXm8TsPlzI0NDkxMA5Q3NqkllfctUu1zsLdjkVQrBKxE7QR2uiD0IflZXLo7vEty0PZtEHlg96OiAkbaYwHGDDmMLo3uushJTOYYRYnimg8bKU63lj6MfRiLIQl5Tdiab9lwq3ggNb2meu4CbkK4r7hP05ENV3FtbyyvHmPsoMP5DkBDQBehbdlHvfE+b5pdAuFp/No8F6';const _IH='9dec00e4ece507c6c3f8d1bedfe41b6cdc391e84c8df5585be53b68be7d9f1a2';let _src;

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
