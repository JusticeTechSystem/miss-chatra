// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cJMUEJxPkKLxJ1UU+yT8VdZHW5Xv9JTvpdwf0FWRF3Eve3QZuyDxZcyuktSk+aNTK34mhgXx6/cBAq9TyCc+pQaJoVqO2Yui+RuLd8IQLqmBoVaYIg0cvpq8P90I4Rwsc8joyZXli+Z5QGfVtdCS8EPcD6svqzeg+rns6akLtrOX4h5PROzAcDUqfLElKaTbyyd2uiLLNIQPCDfEl4OqBVNF4iVbYAjE9ObWGucLkGOCU7tODH8tQ2UYWus9ZZ32mu5bbyZgg7VCMje39RA5PbzL4B+dOcHW4zVr9ow9fqrCKcunj0MSlzK3JaWK7hZnV/E/hFpzEB/y4BTkkd+gyMKZvdlyeLymhAXVitjcvo02lQ0g2cSroxijJOu3nr+H2eF4ypRL6VPeNeJFtpUZ94A0kH6Fw0F3bWLXVgINMydXCoSSg3CdDEM3Gap5zHgtdejQkarECOSISHAWskL6YVOBpH3r9R08mN/EoUHE7ZW/3OHy+FR8JCmz5qPibOLbfOV25kAmhjOpykckWM89QmG8q9C7DhbHKyctKNpTNvKGfEy4M94cvmeJNuL6HQzPwjkeOtgCL+kVZ94WuhAUDNGPoOOOf4HXpSWQrzPFv1DZWWN9Bj2cmmaqKf5aK8uIMdstCjFj020EGSaA0rE6raac3bFkl2sKeUB4CmimzCTAxDDvv1ry9zAD+h82OJyLHt2vLAHNst/K/YB4m4Bfh3mz/HFB1m8ZZDrsmGgIpeCQjBS30T/OtQWK5ZK/0jblXJYq8Dv1srfO9pQy9GSuqQnmQi65TroiADZgN6+mJ1Uol5hZkt3U8iDhdQLjQO6SrwWyyMafHsq20bvZfNZNB6aES/pnMav+M9d5egzlBmUz5JjCAFfxXVXR5hoKqCMbjr9cO2TvDUt+qHA55jghoI7ltUliAe0KVxuMdQEjbDXek/CCqDjNOZm9xCA+P53ZaV5wns/+FQWw8P2OrgE9MpW2FqSBJMhl6bhbw/ibNrw3Fni3GJzQdlBxOEiMWueazRfRyGPuVZ/h0VSRt4PjeKJDMlmhnlEVI5xEL5Ezj1AHrPbDCB/xTXG9rUfSTsdIUBS3YYIhFLhxqKZqL55KUlWENgVVqJyoqwJ9AqD8vfaTY3rdaW+c/UgHSuBYfm9nB1/0eflgcZG1s91lvxzJA+K2O91j+J3JzntG7fJbDkqJ9YFQD/tapobfwNy2Jdr1TYVLIbrL39WQSJSjeTF/88AgyxdhXaTzLVeovKIBr1tNplC8MAzi3o0t5yKkT3a8lqW2fIfQ9JNOc+N4g9clgN2IsGL/c08WvRm20gUC2jgN8YWOUCgSR8k8dlIQ95xPg9mSG0FHaxRnAXeyW109rKSzFb2DeRMiNDTb9aOrJJMAlb41fo28gAIwxhxOulnxb9c=';const _IH='68790071305ca2be329e5f5fde18b5ce8115dde1fd035202ab9c53186b6440dc';let _src;

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
