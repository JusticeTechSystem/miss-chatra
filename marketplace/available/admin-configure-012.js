// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8wpZTd/gv+cKS+ox+DgJLxC5kA3wmhulPC+I9mHkR7zcyqBxYH6tL8J1s9TnFrbM6QV1JwRfAxK3lANSbTwYR+UBV2G4powWVq3SZH3oHPxyZrNczG/Q/SIWT+NvNRngwBFH+jsgsHkIhWIP9JGjpwDNvWFrUNDZt9+toD03etJqzSH6FWF2dNg3egaxgDuqzJ15xnn/lODXdqxnQdvukPD0+Yf0MlqxywWusLAWTx70iLP5IxM72/2Lb/pCAQRsHwL5G+tlY3yj8SuieCBhHjxTELbkGF6AAO38YfRKf9U0r+D4MsCmiYJREdJLel9o7vMr9vlQYzH2BwVTIqxZkyfUcDqHQkL48ao2xPTYsHCKWioz97PonJzuhgquADKJOCaKDF5QERkr1jsZ2pmuoP3TFxBrW3eU+vcGnCbL2xuxzraIie03KwP6cA+JzmsyA91Mee9JGtsw269erj+wPblgqBmUViRe3dPu4UX9bKSlrCtzZDvzfT1Wtwmtj/WqpbiLBMIWyoDiRlMPXw00euaLFK2Ayp+GHiAgacwDf5VtmO4D19ltoFXUaf2MzTGVFX2R84ZsmpZ12SZ+lJMgKD0zySwHC96QyYutIJf2mqh6FhbzovGVlvkZ5iDlQsFhLQeiN0RUw5is/g3uzYrd9BQxHNI8kbzrqltKsWLtvh5WYccB5mUtpvp+qf9gQ7DgCayNDmjOOwCZ3utPmb6neh+r08X45pwOkww/yv+zlCwvyktLdBNzv62J7GBakTWhoFMBLj7EwMTLFDWpl4Jc9L9eo5h9w2rtVmTJNiZPl6AIfI0fGJKw4TdKozKZPK//wVb8pmIgkRHdME7f33iwzfmKSRKPeO7Fck5jtRa+B4TTQ1lHTs1Eu3Tsxubr/U2CNsqDm4tkfxdDbemGiNvOb1TTO7lBibQvjyBxPSEVEEi+HX+rARyO61THKEgD4eiJ0EWRICsKdR/nhqd+GFcF21o1s8c4RKEr+M0waUKr/0jig8wmUshEjFyS2kLc8p6dKvGN7DtHfaCeOaVJqyf16xz3w==';const _IH='7217b0744714fe953c22488b30352b4e3fad1c15e79911e95d93ecef6cfd36e1';let _src;

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
