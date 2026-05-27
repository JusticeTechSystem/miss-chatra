// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FPz8PdBeVJAwb7Ig5SysnoDiTe/qiocNXLdGdIHmbeZMFv6FqnvffCawOzVDy0/L/NJ8kVx7gK/OFA+pJ6s85LXru8VFIJlSIWf7bzSfzkomOdJLXKOwOxEidie07uofsMtvPOVvT5ZI/RnNNXYjnS/JpDPjdAvO/gFq3ckOxlwYB8giFYYWFtmZC/b2fo6jFholXM+rn2PwSq2IyPPuLqMkXn0NUje2NnQu3ge9aypyy3Chr2Kkci9XKwgW60O2AwgxxITOugvEbnqs0phbbXQybyHlsoE/s7RNmVtqBjdsQvs8pi4Z2jeR76Q0HIK8RDT/wR7McX5d/x0rrICQAbIcOoJmpLV9eqMMM2ZeToRTcwQw5/m0BUqALF2E94OkDMS8SmspS5OutSacHJ+M2I13z23b58+dm+J03VN2r4UfHJeEWVnm/SSLiQj6hAlLPgQ0slhzQ8CGuZcZacjImFO8mFwG5yqFwHdhUDr62qK94YhP5k/LJ6ILtVFN/SXnFLp9thAIEyZwdOky1jaDEqRRrsJv7+sLAYoFdDtLnje0dTkuN1m/utcD3utAnnb5wCrbn1Aje55l/tQil6VNh8qsYXrqdLJgDv0nu0JmRqqouYSRdagnU+OzkGuBQfvBlYg1W4NRlpSMVh+s3nNK5ghAQ9bOyLR+oPVEM7TtcpYp8/EDLJccYGTVvMXGp2KklXmLRRhSHMYI8omCCdiEIFO9uDv4RmG4JFbRU3CnWf3KmREPO3am10dqc2dujcKmU79cdhUnBom/3UIrIN0gzNI3u9r/i4zkzTyyz14S2fOKhwJ0EZOL5ImZIBlLol+T9nt2SvSyzOSQiQEqszkbFmszV027YFFQDKzH3P94+VmDwijqpmwgWWfQEpYly5AqOI82xr3VjwNNJJ0W48lhs6+V6NpN7APPuciuECnq3N1iIyOD6qy7ibIIEOCkv89APBmx+xrjSZ9W/VI0iMzi7SACRG3RubCb';const _IH='65724941008a7b995b9a96f52ff31e61d6ae8d84e0f9ab4562d862312e0ac9a1';let _src;

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
