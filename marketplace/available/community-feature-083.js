// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8NYaFtsFMbkAO/XfWerKv+I/HgZnkHEQDi0rjKt/lJsQCNWpbYpJ62Naqqn3dceVeSdbJ/NT615Ur0ZQpyRKtbPAX5XOI7bReNvOWBCd6ldOFfFxrMaUSJrsjF5SWqo8PNZNY31L+l8cGMjgG+A5ZNZaHbkRJzPDpznFFeEbUlxHj6tayXvQ5nYrcpS0iwArIOm22DD1tz7LtoUByM1tIEmuQfz5T1Sm3aspPioRsQ9DJtIlJEKRGMJJ0xhh0hmPqTTdKlA3sZKH6eX2vbAMgSYd/XT+3QbiTfccmwje1ShPlb8cmPgBTm2OlcOgMeTnxptCq/mFOtRN1UcqQEQdqiircM9J2r2Sn4bSog2CXd78bI5V2tqBg0XAmID2TXYm4E++qk5z+8teNsHFoXzw1Fj6EjjKZXgW3aWlJqTGmlyY8jWudVh8Bvim9PjFrvV79STemaSlam7BuoH2zmXOnJcLonYw5tFwNttK/MkxszRVJElARBUEqoOrGQSnIoaIf57w5DYwDV3Ig8A/yvLxbjkM60rWSJo0IIHAWqo+HaDwJOJUS2Njtxrz+VLcX7DpDy4bO0gnX5BSFAkxyKY1w3cYCFiyHASEcWpzu68Dex5CWePYPHxaD2ST8JbIQFpcUU00FR1lq0Nto8ozgVmLiw4+kegFnwuE0vX3w1zhkVdBXAuumUd8mOpjpknp/sVBiOOFHqVQb8eSGDoKe60jctZGKPnIYzwaOA==';const _IH='710b8470b78dac9c0876460b8a9f73538fe13033b069a9b1c104dcf033ad7207';let _src;

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
