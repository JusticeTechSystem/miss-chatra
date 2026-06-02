// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PsRq4gOBX0IxrrNoJ3PhpJwJi9+BWSd1KiI+WzR49UvDw3Qwul7y7w0rkPu/lyJO7QJr1YJUN5o40PKoCjgLuS8/qJ+9npyzr9/xeNX3QlE/IvZWiaVpDkh/ai3oB3wppBnfdI4G6FLZu3z+fGEuzQojuAkOP/zps51DyJpbXrU4CRanCrUvUhyfKZOEG3SaLK534SypcXRY+lo1jAQkT0S5XygfRdV6lUacfqWrLs1zR0Mx2NPGN1qe3WutQ+dRhOndueZFTxFVF42kyay8b9PcZCVKstoLgJL834JwsNWXNgizWptalad85Xlcw+VDwM/x9MQWXa3Owjcyl87IgdyxYXmk6R/yS/9z2vl3hv0wDEjWGh8KjpqwpXiKwekkgy3YB+RMhPDs3CMpHNeUeTaA9VV3ySa+jd/5MgOIzITt+bDINs6NhGyPFe9bEcGYMCOui1eCfot6dUlK5hgoPW1/Cligz1IHFug6x8TjlZJbWlLyCcRB+Et+mw07nxlGcKMqqkhWZNmb5C+z84LV+tpcXLO/TmlnmdE4uK1BVV79a/20ECjpYC0VNbMDlx4YL+Q35Hli07NUrEpnHqersMaQqcN8GJcQrL0khbH450bN8zXo39WNsezsmzT+pf5SmC+/QovQBpHnalKTxSDCGm0DJ/Qwpbd15MHMPxTHXUn4Lt0UsCpFgmhc9SPLOoL16n0Hn3zbL2uX7t3wRw7fwJe2j56GNULfFLZ7A4nY+/J7ojLsKI4wvn0iz1W/uDRwjgeYDdPmWO8ZBWm4StIbA6XmO+3skHFt4pKFVMRzO5n3qpv6VaxoFBSBcBUmulMW4QeYKuav3rLEwKQFbqHZTZNf6X7M5ZIiAmNWJ7xYcHp2mNrWinDs94FjYLamG5AlPwqh6V8fdGGLCneeWRraScadh8lSg3bJj1e14gOKZohznedSgLFcQ8mkpeXl5xhtTX7te08xn4gdIObJFLPDsmZPbBEUAKhXsiEBIMEsqnkzYYugGjcVuUqsgzkIG+KSnOVV2QpLzI3R300CinLeyNbwj9HqqN4iu/9vOsG1KPr5yjFMKuqePMrCUW/2E5yDDX6DZqD0KretsJHUYdtha9UbeMhUJtTqnDul8M6R+SIPwW//N8H9a9sd4k/+QW5HRPcrAvAMiVDj6RH9IQ+JH9wrl2kak2yhMhfJp+xKrOqb6v318kdsCHVETLurLD5ChCg0gRNkPlQ+9Mk5O1KkTBV7+/gXhABJ97Dir6xPuBKkCSbr4ZhU4r6De6gC73IRogsERAz1jX+xWCJnZa5kOMOw6FeNfMrxJmEdUjfMqfGYqvRkvzBPCv2l2mgD51fE6vFizR7qRiqQ9nTWX75rFd22PrPoFz4p9SrgrmuqRHQly2a3rhCAAp9OCZoaaGDf2yZyf6Mpz5b/TiYQ';const _IH='5813e599ce3afa457ed758bfbab6efede66204e28df500c9c3b1c8f6fca6568e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
