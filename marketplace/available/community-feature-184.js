// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0C5nf2zptJ6bUdf40PYyJF6iHFRCTOXwhVR26we63bqEso5qBUsGrRXJu7V1ApGOTE3opMENRFb345JGST6R2m5a9XwEUkJEED9xrikjp6jVuvOzvq3Y1V/G11JH8h+ORd2EaABTyPYAhyCP5DeHJWhBcW2jB/s/nfQnDJU+pEqK1xve9tJr5HAH+FPg46t/jbuyqdhM6pAcuVr+1OsddT6AeehJ1wTW5ay1AyP0Lr6SfvhMNh8EZXCcRB62+dA85vphQXVNhfSyzEKkBA/5YhjREePU83qPI825n/jU+VaV4zK2iMfs0FRhmbSGZRUlgAl8HISJkb4yUd7qVRY6/MYnnoOCnywqZMBx4JvRvrfH+UKz+WzKTeUCTVg/9dlI/ezIDdO0gQdkjnYD2e5mrInmMVv5NNcdIEbZFtjN+mFUIFxCJ8w0NLUbuhigTfr6ciI3I64AsyYp8QhghFUtQ7PB9/LdW+r41xlfKXjfipAZkVjkfSNI8VVukydv2zgnhGywhZ2TOv6ti03RyLd6RjkkEhAVx3iKxvQYggy0RQ/nTIZEOJazJjgObZ7BwmmLK5rDa5QEcbItcxFBXw9tk2LQnJsz+eAlgW+4zymi4bHg9GJyRONnKjOtFvypPT1vJyvU0u49N7Rpiq1NopHB5VStLJG/bxNPT/gf7iuwqVbvMCkXRsTA4Xp/RSAWNJrHyicoZTkDB8N43LvYvfd5FKQHMijoTtetaURV0pkBaPJ8mx4yqY3';const _IH='85f863934241c9bef8e2371b0a69a7bba555c1a1fa16c41853609a543fbdc1ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
