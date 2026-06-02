// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xKCBnUnvm826CEL+1hxB/qgw0zk5o/LOlY50H6SE/YxFi5HV2pfNRtjqhvAATG6Fn6YXj7BEP9oDhcHGRnV6CHg6on6EFy+HwmCVKYMyD7KCkk04qbL4nGZenU23RLd74WUG1ko2Bymy42Jp0UWL+MnHxx6X5avhXbrrGr/8cBuBHhelhyTyCfQtzFEd6gBIEQsHeveN/qptpZcR4Vy320PhEs5WNYqycMxw2UQI64nTz/C6Z3sAUp0r6Ew3d+WsYxP/0moV8kqLJouLJxljt1IMgbclOrqUgPRhEvRJ4C36rAS9mAAcs5xwUSQBhx+jV5k4oTjw++ZR7x3glL/8uBKTwogNhYfmVxHRoflmBNDEmrigoAqwdB99UBicZOlHbPtINf4xPeuqWawE2IHmDvX36fi4bP1vqGsOxF6FyCcUY0+CPCtB84NBd57zqYzKq7enzWkkrPAnoygJUJ6/deU7XfXNEMj5sKo3IV2jBiEUtQTRBMfOOUBVlIVMbvZ0NdCZfq0fklp4SR7/yeJBhcf3pbeB26HaABNEQ07MUZKASkHHHeU4AuzNgctqz2MLRVJBS+roD16FBhPqDh+UJTvetoIMXE7YSd5LtcA6N96sLoXxSU6irx5mZRYgUV+Y89dv+th0NhElnTik8nX4ixjP6jriuHNXsO0TZm3+IUGoS3QNxWgfiB7RNCVU7xzo+deLsfXTIu3QvANFc+ANHuAGgoL+ajFAxj3XSK6/pGe4QVkXMzAOenQO';const _IH='9eb8a95a5751ae47e811e7051a2267fab6298de536cbbaa0511cc38a4cdfc02a';let _src;

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
