// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rW114oiZqicWzyhgSXlvn60RE4YlDJksLPbm8GYXT6PGQJcN8pDNUJxLGnRSVv2H5vgnWy9+Bkal3tk9M16kRpK6PiwaE23dcWeob8t9/p31cH/s8YhRbG2jATGlNRsbhYTdZq4qm/JX8rrs89lnB/OTV/nsRBBalllLV6fRnWYBr5xiBpOa4ekQI9JJjR/lBhniUNiZX3caKs0h6sDkUGlHaf/vK+fTH1RBElp+TZrntmoPPofLwxE4jlagDmzmrHwQCwfLW4EwJ0SH8xcelXT/HIbUe6jVUnAkEGGtLTVVYIqUyWGxbl79jAVsyr/k2dFxJ1XwmBsoo4/ew9V0R/xQFxyRXY25eUtVMRSqUTm/B+T7eFqEASDN4F8fmonUfVrTA/4POBWNAZHZv4wC+Y6Wt833SO5s0OrbdljxzzH159QOA8CjvvMlJg6K/JbaVpUds9OLGxTE8Hsqlz2bAySLaOVeYE3mbSZGb6lN0JcgmZ+VSiiFzfJKhrEvPjK+Rqn0Wr8vTklS6tB3a371bBAD7LR7/V1JsEJQ8F+zTC5rGC1lRDCpXlH9t9yMcflRDtPKFjSAonLRPtwZ+Tn80bNKjWnZXm7WMt1b673zNscCT9G84FL1sqyZssP9L8/rjpqzTNaT+fLRW1WUqMHtvdxANB+8xgMKssgfmCG/RJ/9RrKvxxpdNHVXjwjw0cIe7YE8Hi78L6VpzEwLIHJc6vGMFQ42aWroPQEYd1bSpxP/6xiyRWtlk6bXLr2+aIgvBINN/lOhcQD3DL6WZbzRIGN+/Uc8e4kK0RuTXhqRGQQEvuO3OiT02BYiOrYfhTG1SxjTWg4wr/lXynvDsJIg1tNB1JK70uUlyXps+SbCL8FUwO0NUbsn3Mvtof+jAFBK38m0uk+OraJLxXFcm+pT6D2hKZN6XJBbYrtCgdOEqEN+0cMwErHaLSKrtrP7VWknniWhjf4kybEYLtvaP6caHab0t3MglOyyC0lnkpXFF4zVlaD0caFs9go/';const _IH='10861b25d8a21c790f690eadfe6fcd7b93fd19fd7a9480acfbc80826b7cb0ea4';let _src;

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
