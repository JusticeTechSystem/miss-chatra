// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fmJsi5Eznrsrv7QTYfZrW4TW1MQRjuqsO/gF65WuhPC2cbqodIHSRA4CTtyWJ/dfhiXrLibfuBYmM1FrJlbbMgcKdnQ5jYZLALO7F7a0aDMwNpXs8yFiUvM41FVHvsPzid8dmqtRA/uiPs9RkSsUVYPjypa4RKXkcoVeE7LZVTUKr89s0i9xVhN7ek7EU9v6uvEpSJCefpu5vWhUbhuBVz/iviwisWYOF2LXmtRFnhXLeU7yPhCDj9Qy8JyoWpfKJZoC1gTC6wsG52LjS3TENUrMfDMv3OeEeaG1h9twHHrvK+QXyzKn8XVA+Gtuwabh6edHe2+6NBcutW3IW4wC6Tvy10Vy6E5LONiruWKEVSOU4ZIUfybhwMmwm9glftZDHCPMibJD5FiY4g0Z3bUlt0B+eaPkmCq7E+fxRihJm6fJX39ErnFvzeOxADZxBnrf9/ye1rcAsAbYrpJJTfyTwBUBifU1FnU=';const _IH='61e70e38836be0c44df4854aa52a5c4a6ebc9b2b3d6c0608616c79b1c69c965e';let _src;

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
