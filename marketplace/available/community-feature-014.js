// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sjDSZF6v4Eq4HiX+/IrfUoZOezT/rIhUe5YpYMfatxafwjiEJgNu96/2yTGgHt5ilkxbyp6w+u9POXslpsrJ9bjVRutX/ChIE5KUtPU4aSptkbaIeKLBq1BRAY4fywk47rt9kdDH6itb3nmfer7ur+VDmK/mNJVZiA5XGOz3BwADFWwFg+Ji/cu3Ck4vt6VrW03/NbCB4LmKdKspAMWho+zeqF0bxW5Nd2Cndh0ziM8ESin0DeYa4TpVwDKrbSWCUoPeeBu1f8xgaXI1Z47sb934onJhpe1YB3WGYDWNRffloZBRSNVGXA3qnx1uX6Dl74OvjrWYtsha5PYEAC4/lZup8jHeE79FT3Hoyu2pE2cNZkNNIb5PpgBc+0UKIi39Lx4NSEbRWO4gCCKCADaMcj0YL3/auKsJueXDjzk/PRf6Ju1Zo4fHITiygSJRl3nJtDKZkGHQGzRFryMDTb+VX1HZglsSHkQEe+H6pf7YmcIQT8Oa9s6Msb70JMUTyN0Si1sZspkxvN3LZtL4L9Krm2rqswUUbWHxChe8hcjDKQpgxEoCD1MiH9iD1AlG+LcdF61TSNqyIQ8Wt0VwiR9RyWHSfW5l7nPUvWjHGKwNxd/U6523vud+8e91R/wrDpnm1/6UVXQWTtcFXzjZoJhbs+bCJvtib6WDiWjlMFR4un9uDFmShS3BAbL3Ajugqc851T+LxUU8kUhy8vD7Qbl1M+2GBfCvScR9mza+oI/3Fmr+Zw==';const _IH='2919d9bc6ab139dbcf2f60e8dc75fa18bd4ce6a093cf657d1f7e8a966850124e';let _src;

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
