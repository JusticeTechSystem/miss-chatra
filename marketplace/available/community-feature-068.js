// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4PdXkJ4WgPOY8UzsT3MgvL1kczwiBJIeYrfhzdPNS/C1j5zzPLsy6SOY2wpzHGmFn5uYYwaKTYoV2qr+Cm/0XjbEb6pqbgQhKmHDgbG3N9LsJT9bC5E//U8V8WluSia3aRXBIJiDq8luSFON0EFi3o45sxLiHbh+WZl+wxFwpljE+LvbJWsUZnkYm/7riuhP/UqpzWYOOrfa35fdw6Lhf9ZPZmbqL6NnIvFZyhrEqEsW0v0GpBY1EUohfuYYdVntQLQCj2tTYObFRqH9kh2RE4i5ItcqWybOcmJ1T2S3MwAWaC05bbAG6H6W5sEE3JmpfY+bSd7P2Z39PDl9k7yB704vnMqLZRiRbRKehrrQJJJ9woi27T8CkkR1WbIvRj2o4in1Ox59VP6nN6StgvbMR9pJSNU/5+dVTjgPA38mK5RqNxY2tgOlPPyW0LgQSdffs7/b2uLi5ko1XtCFMu3GYfzrU3xsEMbPYlGzoihSAeGzb8OCiHIDAuszUWFFC8yJN8fttfMt/VK3LH3Tu/hVHvQTtP4yBCwpVXagU+1FfbKZKF57vznP0HgbzOHXBNCI4vAsk5oV0cAGxX2NlcBXU2ZWqZy5dzryHpHw0quxIgcQB+f/M0d5i+Gm6vxAlXiA8151vt1dedhZDDnZbCYyrmO9F18AZ3bnkb467SilcwjTGHrAB6J9y7QIDrteufZVrTvYbgbDdAI3SgqHNr1QhM6zMHvwuvhfw==';const _IH='a5fed2f2127e8460b4e2b8136c5f2c7f5aae7faf10a2002fac9cd512e304975b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
