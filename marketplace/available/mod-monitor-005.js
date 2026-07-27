// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5LVyZUed6crGXvZIBc5MP8uvhfAsbbBnel0SKmpTYkTMCea0OFo9bjHAj+3S4r6oexo3pArKJF/EEE93i+XlipwxtIEX36+rRaJAa3bEGplpXOqpR+J6cMjuXAgh2c1ND89A0GNABQA9pZGYOiQPHDj1NkMN4sU52SkuuUDUa+KgbvVpXGbAd9bn/OasXDNQy9sNbYCXa0ZGOpGC38xdzrInhQ3ry4jOum5p+vW7UwbxfFX5dbmlo1J7IcS3XeQfwCf2nGO+W9stpbyGy+hGNq1IqGEc87KQA7pbNPtsdAhYXJoJt2iaFAK3W3xJYciwqW3JYRe4h+U+nnNg1g/gHarK8H9k9yjnYaOjuRle++oYuEop+Q02EQWfLUiBv71qctEne1cAoJAP3WMFGWT1BYSe7hqgXRwurO4TOzFpkfAPBciJq3GrNHpcxOhNLwFyvluGWZZi5AzDxn6EMWn9JnydJCOr/zMKfWdfhEMtYWZThZNaEoEtA0qyGQ1DL7b4cGY6+toVNzeZX5mMwarLCXj2liTvat787GGnArqxhozOqiPE+N7imqRVP0fvrI3IszZzU9eVdl1bSlquJKFAR7qWWv5LQZxccH6aSKnSFqoJuHxM8Larl7R48fs4hqyZiszXtzlkJXNQG0uTzxNCGgGuCnurvnD6OTEAOMnwHV7d0VDRVl9mvnlFJmmZ/0myablAsgdLJl7Q/G5bgfT3o04poRPnDU14bT4OmF1hlzbZ3T21st8lVZBELlLhgv7Hfm56YrVOOQibUu3t2Yl+AmHOz96TWKc+r4h2MwFg3rUnqsZLHIdJHt9QOPpZtKaMB6pnz73VvDFy+XoymR2JzGmSq9sLpswHRJIj5CzpFdxg+WlKBpnwSwIuTbfBqYj1w5HZoDtrv4MgZdHPA62FnaGBAyIxc63GKUP8qAQIc2U5fiHei0GZQzZZf7oW4MkedPJ8ekTIWs5oqecPe07/LQR8Ey1fBUc4qg9WSvImx0ntXlrXA+2IoiA+9kiKNmqNdyRIUDxD/P5dJSsPp+WvcSe/p14CMjwyaycSk/iDvIIXVqWl2zWkvigykwuQIR9TjRqBesIdSH6F36OA/aKb66F1ZyUpriZOPXtjuFVQrRpFyebCXow1qEnUhaz7P/bAELYYQjRRifFt0/AqOJvKmZV8dMxEvPaBndIDgGqE0vqL+oGxezy4RRc0ztTU4YsIq/no0QtBeOTZ9NKdNVhop3VqfwOO0wTu0YSXFMfgnL1lTYS/rn1TWwTkzqFEVzBYWUqzcRJWwKP0vSwNL/Yf12z8HSoQNjxFFlQaTffZzbqdLx6FNTt1Eot6hctuwcgWe0AyZtU8iDIPmhM9Qj3V4weH5DcKlBEhszcJ6W5r2XrS1GCwJC9NG';const _IH='a92a65a7f0563ad3c7c73c92bc8b16a047e4c3ad8b8aaf7094e9d6901ff317f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
