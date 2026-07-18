// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUiItl8BPPZ6f0Ds0DtBXfhnUupdNXQAZjm43a4xL4oUP14nrAf/EnBLvs7pTohqs1DjwiFirxtRP4tR4Wvl5ipFbq7yNsmuTpL/RcttCKtimusklBe8K8IgVyJ9M3iLVRY0fnPPiENbOie11FAJ2t7cQYTA8pDuKnkxLGjXO+aArlsY7rEurWlIVFE6Px+aj5nCgrDucHgvFl4IwSXKS2QMQwTq7lSFRZ0S1g+5qiCBorxmVHpmXqOZSm6tR/eYF9DO4newE+IGGz6dCHIHA45RyKsoZrUSM137Soy1aCw9H7luRI5ltbDsgmstlvihMfFMelYnqVovf+RlXsoZe5ybscKl8WE+XwxCdaZ9KyKbqjJ2NKdmtk0CY4W/dVnB52LlhHFTlWizvCsefm4ca0xmsQXw6p05DIAylH9vLAZgYKUAZH37zT0KU072SKTXzUsPsN5MwCHvJBgpx7p9Vb8ATpi5g8SrqAZcLX14TQwlIhySA6aTT6aBrS8XzJZxX9mhRlqJwHf6EzqfuL2c5eVKCVyyb8TE5hPNgrkB3cpGjh0GWdzjV8I7zx8ar5qf69b8VLHwJtlrJmPSzrBqyiOzUtMVv9D4mD+aX7YjejNU67aLr/FUYwjMo2JvyfX+06OYhOLcde60anB7LA1Uv5NfrRjKiXPPgQZV3pR/GnhTm5msYKqxgIgJbUhYcp3xkO7BZAxO9yUROhT92Yn6EuzhtldQ==';const _IH='e23cfd340bb972691545479e9f4333bd8c24c9f6ae429bedcf69a86566ac6e77';let _src;

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
