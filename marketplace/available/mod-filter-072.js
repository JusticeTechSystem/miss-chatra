// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYr3L6Wa2EWiBm/qsE/Wv+pEbqdbxYQ7MI/OLupFGj8yIFdIeQlfLZgWv+Epuj27XLDjtAwQ1f2vna4YqnfyasmAqBR6VZVJRHeDzaEzAeTSEiD3FjpSKoykA3btLxv+5CzfoTVdo3eGzlYP3X+51eILr6xWdoExZUIW4fi7aIjXtFssSu4L0Awm1jg57h35EOJTRq4yv9vmwkj168Bv1KLUs8tXhqJxhTRG7FemlSDYZC3FyNUIMXrAxPVBJsviTsX1/O+temGAb18A1U0pFw4ARNme+RSo1g7jEwJaOmgx8E+hBOAYU59zfvmspBRquWkdfN//iNiyofoQn++uNJeBerCxB4PpHq7jI+h7t48i8LI31TNtS/KeJot4dO8OR05D1KgcwVtR+BAZP9RKppIGDG9gBqmYNAoE9t49bAzIb/qFsCludEZSg58WG9Kd9U8FBrUetNVjoED64vF+ig43DBPBHvsfxmkMLIi2aA3iJwHTQWVrpWK34wlVJEfdUzri56Lr9/+aa81/Hy6ukjjS7S51Bayh4QHfjnhvJWWdg4p3BcUO9NF4k1rK/Mnfadqye/jAGsG2/VJJPaII6uhGA2CfxFZLLVqfFWY7+mfAJbtZLn33cMraoLT5t1HP+8fNvBL+GSXgiGVeK3wDYAxYl4mnPgqsnWSa0lqh/8zIXb1RwCqVGRvPLKNI8J7NeypQNLZabu+y02ZqI57UsSwLEZnc4rT0wmNI96cDkAAls7LGfFubV9PrmdzPaLhYzhNFpPYFnfXgIBBluoKg/XKq7bNkB4T/5a4YaGfwBFaKTdQcn+Au1OFg3xpwCmSVysb7bXeJiYIJKoGIUcyQdjmRPkLnhLYrbErZHKgov+tQB8RW8UuZP7bJcgrF5+xVZupflzg9U8S0sA6Fc6rjFE3R3nVNPFJ8/QUtPi4U1RvM8mFrlH673VdOFZe4fABFCVcfCHw09Yanot1w5uFW7pBFiiI7qwnbcu/GvbXZrnEX3tkP5DQzmo9ytHYlV5rLaeHVwneKS6JL8Yr8d3IhRV98jCzlK1PQnMZpuJbCT1OKXjnwHBWPlga35fEARN26PuzkCw/4SIu7pYFat53Hip6DBPeqaNPVfswSmMWVMlmCA9OvsNVcYKuoZXYIEhIKnXR7EZ0c9F1wHU2HL8t324/GpunbCrvqOd0MpadyqOylmqfqdrgxBDVKYwNm6IOpZ4HJ1Ar8LDwLKxdHFxPl4Jku5x5tryEaPoTNl9P5kMWzqOs+9J0BNMmQA873mY2oPmCAFply1uSXoix5ZRuQFiEfOfG16J+CTve5JmwtvPkp2N0elBxavzQaw4KVJHOH7RxkytcO4QLyEG7lbbUyoih4C/ldOWTt7Sdjxd1z42fg==';const _IH='68b0295576674b0b33e450a418dde99cca334f008c0df88e74d8e226acdc0147';let _src;

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
