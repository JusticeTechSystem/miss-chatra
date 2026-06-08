// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IphxeWuSHsaCmIlBKiPLJ3rwlbvhsuK4z4+NpjZqR3BI9GEF7/a6lbqQn+1ox1/6jGO8xjpP+yN1Lyd4/4VkzndT+H08xRFiSEXhODRa3KqWCm4aOqk9W4JGtf4CawSCF+EbEvwFXzao/Lm8cofU7kkt3x9lR4cZZlTasdWDZwQc7eK7AyduHikbwTNS8la5YGrbezZkcKp+i0G7SfcsaYGHV++p8IKXCY6t9wiQucYpZeQ34Bh2rIwswkkwI0eRuE2Y7UGDvP2YyWsk4laopv2AbwJs8SDvUjUBSfUeF9UQf7OINob9ZiD6e5ZolwbOo7DD5RsSP1o2GupnP9lKssm6Uknf9bc8BL4QRU12DZjx+/+Um7tXaDRbgK9zgPQShXLDyR7sujJRUzFGjQL1TMNVT0FK8GrCHUJ9y8ObtkJ0qvhKdYMQAQ3J7XVRlahS1X9XfzSWEL0W64bmF9Zn0j0W6d2/z1vOLFssnJF29Z9oFtN4KyuZQ08jbonS8Eap5h5ap50d4/9KTSJy0f72xyPgRmOAMR6TFR75o7PpqrS9FfPAji9rkZKsXSIh+deYLoZ8VCIGcAYYoAkwsUuenRrh9rFqFiXjSoX4P0x1m+Ejz7D6ssRO/9cKNHETxiZXcFVDHoQMPTsXcIfxUp+EbGcFbbrgC6L84mhFrVbsA67O+wjZBw3kkN3vB2OiXz0lbUG3wzRzelHz3ohB/E3SleVENksIYqJrNT4gPM4=';const _IH='5a768cc6895f0d87c69be022d8e9b2e4ea9dba925d3ed8ec3f262246e346d36b';let _src;

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
