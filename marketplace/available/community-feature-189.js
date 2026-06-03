// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWLGfTtPJ1SO2upB6ygfoWlIFQavRvArPzRrRHTytkKFLtc71FlWe5tTKED3X4AwUn8RKmym12HNMEe/QuLld6ezxJRlIqAQy20YbkuLVg6P6cky7kwySlAQLHBy5n0oCvROHoDdGHj9sILKWigJ8Lp+Ais+DevgytWwEal8ue5gGDHl3SQ1XvUbqLo6jw/WXELmX0vJl1sDJADwNg1yGsorb7r3CKDuYC2NX9BRE4kIJz74nHP0e7SyWOJAcqyLor4StEVVOVgZknuT4d2i6UxlAHMXUy4GWc12WUTfEmpOFbydd6Sm7P9R6JEXSDIpDhzXQ5Ev3lS+mqCK7T8Fofgan4R385ZnfniKLGaPC50vHExplssW3t0ui4hfbZejSqKYB7f0dycFw7UuZGghupY4xaCi5lnJ5I8hkQdxLCxyRVSbqyUTjzsntgzrzPvFgw6ZR2GlS6hXLdMCaCMX+KegtqOEkR0MS3PDwC4d1kVvZR1iKVn3PckGW7NFiq+wE5nXtsb7wf8gLzbdLVBu9UOz3X6p5CBXCS1q8jA4Ch7nFtSEtnC26ygzJvj7kJNaZOPf9TOVd9PhztcVs5FTX/QfH7I7I6Fpk09aMl/xSV5t+OiNhZNk88RpcA7MOIU67klKEzmgxHS5YMHcxQJTfIXhSgWnMHBBGAFYtWfxQes7P7ZsBxSnJxMXQuzyS3I+4Gf9SdI39t6MgOjlpczUZT/DIJJ63XIWotdLE4+nesunvtD9yRM=';const _IH='f5ebd7133b9a06cf332af382eafe65118f98e25d5e105f898d6f62b0ce0256b0';let _src;

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
