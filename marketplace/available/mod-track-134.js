// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xeoQTRekQvfo8MBOEC5bqcYabKtmzI4iJk2i4ungn1BEHsGF/wR5n2sdL4m6lbCMRUxQQ6xSh3fbZ7ol4QpqIYsKAS5KpIJ+R/gIGLhPW/thq0xSvFS5QOa/mO8vXS7eG8xHApIG3rDZjNYekUVM9ONi+0LUmfjW12aOtWLZVM4ld+0ea9uk0p54ae7cKA0tYVe4CmdzHigIB2kfoKQy47EJ7ocmuSAXBE43cFgSXxVbgw/gPkRWwyb9bN0Bl8N7EFZo2dqJ+rT4AN1TkVXMO+RMpLK0uMIFH1WF6B3Wl2136rMhVw89/Hy1wxSlA4E72Ys0DGSFrlgjeVDLUYvtENZWtlWZEC9t0PZDXqZEpTDWWU06RUhgaddmgyhHBzxNKwOfw+DRkkxUU9kvOvAdPIaf9D7NKSU65/O44Dt6nT5pSY/B0oC86Ugs5z3iyDNftpgqr1Ra2eVkRbPZVd8Cd0+k2GN58Gmh7z3UcU4qg2uF+Ht0eEEAc/GBkP+szKBoiiAWOpL4UoxNwgJJILceE3KweSyHS3RN0wHd+qH1dlpeG5NAEz935vUTGrHVgc66IBbaQUu0XbsGMWJYe0tRLfJlMqBPgfri8dEpeRk3kc14xXHKqcohBg7w9khtYd/H6JWrBpFNUwiokKjmly7YU1TS7fSQshcOxRsNVMdJKZVvli0a67+GwqD4MxLiNOEV6DDRiPDoQgj6BUVZQyNoxgxU8oJBd3SXPHAyumn1HfzJrTF+e8nUG3UWO/hG9oGstwFvE4P6q/p0nok3dYxRN8dOkQMEYCJduS80srWf4lDcXyhXFpK+z7xk8WtiJWj5yBongJ/7mTCVow1UZhgYUeVH1M7mevPOesvH8G2e49e6+hW1uPM+EqGrn7iiB+9v3s3PR4CaTUjjHvtvn4zaPuPCUtocof83jEFOKgQMPDFnvigxlz4BJ35W90G5hOgyEV19s2qNM/d/8q7GA/HcarKTlnreqUHfUdl7QfI8epYlqHgTuuLZB+sTFEejD7PQRt8jDLw5yxy51NBOHycyd5TG94aX6Bi7fICv4/pz2qyKK+fgmLuOtFoamurCi93YgFaVpkxnBXprIslX9rqKenK0pWCZdqWUhZ3ayG6LCmzKBTqvsXbpWi2bnkVhZOjBWuZtpUuCuHzeUY5CSAhc3vJn+BU1Rae0gx/yt3Sj0lDo8TSr1Lr4umAWCPgHRxw+Llma8gLLHtuK4GwX1DXZZQweVgsRfXyr6xx2BxX6wzZGRnkolp5gONmvk/xu3hZSfNVL4vC1r3fcr8g52BT9JyWcbfF/SApAuoB2zzrdmDz7h5oQb17KEPcTHmFBVYAvfAQq3dlmAbmtQzpowdSqybuBpGy4UNIB4nR/9VXr';const _IH='1ca85414262cff0c0564ac8ba41ba39855db886d2df35fad2ca99dca0b839083';let _src;

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
