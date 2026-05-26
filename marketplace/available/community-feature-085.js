// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IDi7hvaYJ6p7881EMgRFKgnfhRfYNmGJHuZfSgSeJfEk1m1JPfqsBLD2a5YMXAvHVHz5h4UqVQmRl5v3CcVGqqCFkTmdYw6Gz++Xwqds7a4IBTaZ3618VqCrrH7/L1IiGBoSfsOhgMEll6SHrUerncPevR0MsFsNxb0OJj+8fZlieIiQSzbBCcCKvribDVws7Dv8+ketLIO9ui+02efS/2CvOOjaouZLsYYnpd9ZwJNc5uqvpCN3OltG2Bxop2cxTkeff7GbUPE/0vl6nYZ68pt+xSS+vjgqgeF9OkgjrPUjOX0uU7/1xDtCkUCF+nCVPNEgIBzNjtkiebaj005Ir5g05MoZ8kHf/XOB45LArItGyxzdJ/bXdy3JO9YetzN3YMj8ACuXDg8R/1dYKdeYV1yEZpSuJkcwx6E35a25mFGlBUqQp+PFSzgfVBP6zzoSAUetzbT0i3Y6tHDu6z8LmFYcz7NqkcDQQcqoREOr+Gm+ZjdZwSclGUh2MV7kmFElTQVy2+riq7zF7u4amtBfjeSanqqfzXiZN/d1UZqvQWJjNO8LOwhzKyLdIPLi8XZl30M72o4JgPwHwlCNXWh/kENucaruzI8GGC/+1U+2p/4YU9D0+iDCglnLT2MUSthm7oHoDoi+Tw1e2Hs0lQlXD4H/CBdTP3QtSU/dQlYym2SWkUKOptr56HoZEBchSpfn2T6iiqJ60iPiIlFDvxjTVjNDaYVKVs/RdafHauI4Bus1mhv0lJg=';const _IH='b3b689b4c7fa3c34b2bf42c27235a0d76e1af138849d26b47e525d530a9b2fa3';let _src;

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
