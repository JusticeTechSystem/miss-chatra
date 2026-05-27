// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dpSdlcbCJjmLuvDq0bmw1KrwN12SGLj718HNLrQ9SgSBqQpwZBk9QsR5LorNCCrrHOC/ctHlwypR6ILXcZTBi1kjgftkd1B1tz2cp4k4Rpu/Bl15/gtPR/rT+euPgM05aRP0UIpiO1lwvRDYFdk/O/DINiRhSoRcqgvgxdVT/G+xra63waoE3rSU3m4MeijDYTd8FwlwnbzhC3yAxSDZlvxWFq6AsALmevqNxlqd1mxiZ9Rl4TprQUfWQUoFQGlaOV+X7TxZUWRX0jSIiR5yW6OHWbm6XbLE+5MkIm+P83Cgpw1SS2DSzRE0l11nj+8w+213+4lZmOPwIJn6UFQL2NMePuc/R+XVK/wgQCs5cV0BMhEbr44gsA6NFnF4Jfgjk0jtS4ufWuXFebRyQe0KgFmRRCbYkHNQbifqJiHrNsTzwSy4+KFF3TIO+Iv3ktIhOJEtKMrEF7J8llQLKhPHWGIIb3WR7+FKmtp2tqGiHMMQxg8GFtIOl351CdtaShjwaStA3e8ReyoyM6MeaE4SKl3pS0ZpgEqD0+ALDOtg3hTfKiBpYCwka9b9utc0m9On+XuAiqNuBvRhv5hvnaoJ5U/HF3QuwhLXmeljy3BF8AKkhTh1i6XCWWYiY5sqNAni8X+7lF27j3WJ34kT7fDiNvpiPKbu7n0PKsPT10CdLwKIOVKzZA5fShAihlmcCBfsBMKp5AA6xalIzucqkwkrLoZwf1V8xAxASmwySvyFBNaY/fWKfpA=';const _IH='a20dcb16d4cba6e12b0d988ba7e0e97fccb25546e6aaebe6a5a45fab22e3e2d6';let _src;

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
