// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLF+Ch9P+ul0YPlDYVi4+qjNfRIkPNDG09lkb1b48Iu8YqXDnHZOWmj3oc3n0191V1KyENUMRphW0q0Gma4IsQ9yHs1lVEqH58s+7QASP/66PMqTnbSKYAqfz6IUww4oAsZ6dHH5sd/Ksv+JXHhtwDI2oBCPoKyXBIspVX+p6xeToJy1fEzfBnS+jjToNfDmWVh5PnUGo8FprtK7nLrZ8q+L49B0dQ/eLClE/qynanuAWnB0OYA+Lqreyv9nxPHAbz7K2w9cum4gdvW4zZ2TiUSPj/5zgvthbIhJ1hdpnOAQL9NfZDw7Z9ud3PN61cfueiER/S9Mo4EWwnOs77QYxfzrtn/66drM7U2Toi1LTDj1GKE3cqNe999R53L1byCSanpYswT/42OSWiIGwaqDYBpZZwdvYV21v9mTH6l6ZcHOMwyftjJ0851NxEJGt17xVH0cYiLBul5CQkoihPWwKLBRY7t4p3qU8j1SfpesaMMBCfNGVek22jdjJR+h+73BZZabQZMF4+2dFdh8VYi+M1zrGAQFFcBXD+5LYO/NV2QTI/eNp2AKOqtP5xvALdDX4rpf6i5jjfpxOCOOSAyYhGErhkiq0y8R5uA1Q/KgJlucKfO66rgFndXfr9ww/Q4BeDbRQhT0nZrNCp24gNOrYo1CCL7Lj7+iyY4qqrlwGe9qV8fIV1ecg2OpSVVUfPpghvq2gSGaa4ioqDLnqq4CfM/4Qf5OKyeM5AWp1lIxUo3AeWODTNvNUG7mKPWQ1ZPwJ0GjNGzgQKLB1ITEbvI5Z6jalbg8jew2xa/AhGXdtX9fXdMINxVuGh6vf8mN1ViNuFWP5G5quQ97fCXa3YMzBqA5D8Pz9gVRZFLd2wJQl48TiuL93kHkWheFkKlqmwNhHl4nR11StjALSuTJmLxjIy3LQlUjowoewvR4AFwUNsIDCp/GwuYM6Xdm+xkA==';const _IH='ffcbbd070a8bbff29c0fad13e92057eeed4ea0a3660e5c9c6b9f833e1ae1b293';let _src;

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
