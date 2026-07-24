// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGpnPBBL0/jFqdkTM/Ml2nj37et2hF5cViAoDy3qfblDKUfFcZFxdAuT6bgl0+6ISxx34YDVb8m45R07w+1/7Wwz6FERUiUSWjxg9cZJUCVuGP1nbOJYng4S3pfO5uI1kuNajYwu8Cfn2kpAYlc3+Fp6iUgEPJ1ZJx3M1A+9v5cUYdxaZM3sFbhFc3G3OSsQUNAU3OLrMDzrxwcmv8UIHJfdp8POBh4qmh3+q9elxI4Ws2sTJzlSfMTJ8I4pId+ElcGeK7u11G18wkDfc2qY6iyufcOHvy+i2nPhskAtCQ0Lq7RmkF7nu9B1YtEWmyOlBkONEwQ6+PQTe27qzq3UYEsamoYKPR/h0oPX3fJb70QqfxwaZQpH/9Qe/Rit+IiL8JtehzrPctJaA9mlHSJMMv1TVUqRplg/vygw6ifpop8yONqMbd8DRGH8qlFyC9OGcxfZnFwPBi1PxqhzFQ+fjslLwgpmR36YTUzNS0QqpeICIO8vGwjkDQWF9MA/4qeTSbtgWv5CmZwrZ5E8FVSXKq+Z5PQvA0/ojGJU+3VSWI2LvW8TZj1HjUMV6Iizafc3X3u72yelOzNnh9/6BSg20hk+gwEiYupMlEjLaxIp70uxICvXi8nbxFg6CEg/s2pF7/Y39incMZzfI/EO+CaS6uASH3PBVGBD53BWnFxzu5jWhtvgLo7sKzxbFIu13kGTkZSCl3FpNwRcBmyemFQZx0oqZwsLD7X3pOt72KFLtRrzc1n39yb+vatTl+fcGZRMo7TFVXz3HRwHpqmY8XyAzLwp2a/f9Pcnwd8Qnc8ouTy4CgNzwEcS+r1MmEt5sQ8YJGh0aMKgKylc81gvqJja1mcoWKcccPIxb+7tr+a6lQDvK1WLPXH5kyh05eXsn7e1YZUpUA0ZUb+CQ8pXJk5s9GG61vghMVXDrtzB7MPzwZ7iRcN09ap9ZcKM2ikNwkZLLv3/y9EhIoQygtb5bz2inrm8277fNhqFBD0gXD5OJD9xJYCLpOQe9zXtzFKM21tZgWoTODW0mG/Q==';const _IH='3bfd32ab668710e53eb3d10d6122f18b5f33373f0e16045897c4501516220a4e';let _src;

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
