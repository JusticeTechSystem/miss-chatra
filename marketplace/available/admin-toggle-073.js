// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSf8sCts/NkCZtmTiXCwO/OfMUdTQXobEh/JLC4dkd7DoYuzLD4klg+dQh+IweJkMwJs2QzvfiKJXSjbZXjdkT1ZVaCbvsFxRQq3C4RgRsWUScpAPJKBxp7YJsjNwnShELNPbYptrQVQU07d0hXDmU4wFXUOvO3IuNt3nXU6nCgWE0QV39rZh4eXMmcGUgtqbhqJi/N27PZdbHmHanK80/rhibGWIpYSmjT1lZMuzxs+J7quzGlsSHDeWYm3gSrRZsXUu9qFIfXxDmoEhvnfIfI9ptXfZwRWaK/k0UbPW2Ki2GaZGu/41WovhfH1OoD5wjifj1Z9r6b6IiBc8yBPFm7a4mzrC5LRou+S5RmcG5QOXoE0oS7YRSB+dmmNBSxlWCNe4BQw6I51rBvyN1Nd60B5pre17Gz/nQ8MYUjAnyHV5qB1fY6lP0sDaLrFjZ3n/6uI8FnEqaJJQ28LMWMqZQnXhoVejB1RJzkUz7LOT4thuBGAMZUIu13SCTBRUFgLZBt3NZZWJNMD9sb0dUkjwpyfxgSqOpvXTe1FcdX7hn15bEu97peKfWP2obkN6OMGdRKb2k5M32xaoSUFbXHxby2OG8j2z/JjfBL+0+guy3ucC7XVJRApcXLWYP15Nf3kfDt3AQ6/GRRrXvOq28+dnlXqldxhFD0fQKS9vSPYQaviFQhy6+gUb1yM/KjWUQUyAk3rRsHlf3M++8dqwlDxQ8xJGXTdeG9PwnJBvB9JXLH8SxWZZCxJEH5Ijm7pi4N0ST7/rgGOhNR4sv5i5XkR3dfUCTGZ9h2BFxLAkjp3hK8hRtKTtC5tRqtF0CcsDEhlcvb67c5cdTxjj9YJsrIohTeh5KQ+6vHGZUrEtA2sYIRlNL/LSAymW3pj7htmTR6iwFkogtiHrddVW6dfjgYIRBWksaoiCdRegrtgsSx5/vft1jO60fm0gwhMYxupM5u4+tddCiZ62CoLA9dR+y7r5e0PMUjJngt9NJjuylOicnrcoM/U5N7IH4GL+Jd';const _IH='88e59f0e02c35cb0a1248b7c17779344f1d468c6ac2a7d7b0a92b5629d067752';let _src;

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
