// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AsrAL1AVUZMUq2fPVeb6gHLM8TlZwUx2F6JEql1IcymEaOHXMFuyRpRtRD05B+G3q6xAwWVV4DaaaZYla/8PyBqBdpDirBq9Ri36oUS508YK1Z9cKuZYqIP5fM/wGTOte3zoR6u1JIAr+Vuim/NvYLgnocSGqmP6gScN7henioq1ERh8gwsxPtg9Ds+pMUGU5al8W9fmW/av8kJRc27Teqib0uKx7kEoVH5/q4bkJeAbmDBDLRo+/eEnWUCaju0v8GBJL7Xh/FaItZ1cy0Z+jh9M9LdIjxszidc8RMqegL9Y+7Sa1iruD7YhCtV9hbauTxBOY6P5kCUptyHHTETdcPWeDxkIA08EC0inBphnGKnR4iyfkBT5VCb0sCRADo+7r+UZ+D/sEu9yZnA8XWRHvEop3cQBhRh/L1tyRHHrW0SMj9MTzhKLYlYCgaxMMJifHqro5k2S/Gl68ykxcDQzcefJ3tWo4VTt+8Z9tFXZC4letsLR93i54NDdvy1YgeZj6aJq0ESQY+f9ZhclOmcHh0bC3YToC9QzXMsfbXMvLYIA5X2mIc/RlZ6WfTwB9+8zFU/gO7vHgQcknYGWs8Tmg9VFkyKUz35+OfyzZzWf59YSJJEZFN3BiF6/b2NFdQu1UXBlWkBaWyHMEEeQ/BtC5QFaB0sCg3rFjnM8mimIBJeHC9VJwzeWY/4UF7xrQYnyVw==';const _IH='00e052d516902e0985cda8938c5bec9f238c015c8a615a2801bb520b560c2e40';let _src;

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
