// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d3dya3lQGm9fgDjg0qOonfU65wqJjVVqV2NHciL7U2/+ydB63JI5ZvtQHaILxaGgfYH+Wacx464/RpWEmxxpHF5A3PbDasRa2TV7rAnxaquCsW2m0NKKzIw/a5V5mxDfbOUYm3DAIW47Upjmma+w3dsnLq3uRE3RXCcSz1SMCB4fyAEkVjjPM/imjCCshy2TrLGYnvyqlRlAqchuqiPT/XUFySAhTTbw4wIl130JZHcp5FaP4ifHU/rXU7fJrv0SuY2StmoAIl6oGyqU+q7kmEKwVgT5lFgHdE0SXzYBkr8utY7KjNMTNGDRjSFBzu+xSkupI2pEgnISEzagxhlDNnUZ0gmMyRlxysMSgcRJE7weZcZoNK25AdgnrH4udy/77vz8Hxr+kO0tMcxoMES/CkcXNWqfoYyCVcOi0HpY6lDfVKzzBxvaLJVfbGWd/I7hUfkBh+NKA3uNKo8ezDaip6P9ReijIO0g0MRcIjFs6e7fmn9L4EaZyBp6UDcKGnc4SuLjOhGaHzcw8nkBlzBeNODcHAR+7neXhloNlwv9s0qs7Zjf7cj7SUEl2D0KAC/iLfmPqUnkh+Ah4OWd1Lx4wdELkZlsBMKHKpBAEtfr8a8w6LB9D4EAKCcaPSqosZAveX9ivVxbKHpW+w0zDJqOSzzKFA9agen6jiOyVNerkmnlV7Vgi4u3sQlwyOWOKIwiFor6F/AB05UxCEFpG7bap2yVHHoB6IlC+5fZ8+F5X0S42WAFoXspFAIWnpVRLtjLt6d0iG8E8PqLPsm1sefwPgpkK+o6H9KIwtfW7KWUeXasAiGoVLPQZ1EF929u57c7qMsnfM1COgh1OacwGdiLu+3kFsbBENs9SgQ5lqWY5ft+ydi3j/KbrSRqKv57oC4RGNU+krufHm7aja2nIkrsRZReOwA6mllzHMVZMXvFFrGVwht1BMk9NVVjLiRUfkjnfO15UcBCyMxPzzVsWn//sR5Gixye0KuQSZ+1v25p0tI2w6SRtF6IqhJ/zj5dRUnKwl5/EehTfNwle7ZTGMiCHO7JeG3R6c7i9CyTfgQKlhy4jywXVIDQ5QpXGZ/t5kvCOUGR45jhYqLsMRTjHLytRUvoNKn6Qsa+9EiYe9FCQsO4oLP0RM9+bEjO4UfWwUSa5h1ZVIq7SOe2CsJXJ2Y48bP88OhqfS8YpUj1l3MyUxxg7tG04ykU17A8GEGbJi54RSBPCVGyo9kHMQynbf3YiaN11kRQ8kEgT6khaC9xQq19UtyfI2g+j1JQ27rgJVbjgIkyHfFNSAn2Kt5atgNP9kVhBD57Q5VVIqvt8a+k91ZXJevKHTKjfHywzZMeE/QnqsSychD5hDckTA==';const _IH='2f82fabee537a01fa2c4938910074c281c0ff9886f1bb8df1b567766c55492db';let _src;

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
