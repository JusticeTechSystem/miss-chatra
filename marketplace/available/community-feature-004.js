// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LYJqhB2riFaCXFvk8/zJkTvPNKEm/gJqlQ+uteBaJ7s1dx4bMRhgDbJvfDO3HSdGj9VWMrhkE0FCTSag0BBaUMzqWOrZdPCgYf796I7BBthE/5NmpqrFijV3Ai90rpl/UMZBjU1ewSuzHCbm+vQlSH59c1wWGEIOEP3sGhSd+oLFwUl2q6xE/H1uX0DwrBaCzMuu787ZqFwNyF4e2MyjY2F2J5UlMfYDIITM+ODjE7VHqacLWm6FLNen1ikJ5Q24JYfrLeCv14mACevzmRLLwfkt+M/dT0dt0oN97ZkcgSoJa8hXg/BWtQTL60RjWERa/LsIBO1UNpWMnp1WKtPeWTQAorxf02zmhjdKZ8pHkQ7evdCKGZL3oQF6GzOevX1q/iUUN6g3xWB7c5zXyVthDVgm/NCLUuGcndC+II5bPxQAMWK1T+OE7HEHWWhw+Ky4Pv32HQvOmVIKV3PWx6remCwg2+93t59c5ZNd5qW01IMzHyJ3nhUkcETtH9iE9ph57i9UZ+u3t56Qo31dbn+vOoJ1eBD/n5K6krg9yc0auoCC9NGeNnSGPy5UKh2Op423TNe+yykvOTgc85oALy0X950SCiC9gACMdi5J+k1lLFkuFBZZSNmxhrTWrrPmgxDEnCqz/fL0eO0zoIqaj9GTG/VOoKKIERB8zK1N35SUHYGg1NMsA4jUSqiquiv03ywxck/NhYsWsC6KzXwTLrAdvQRhJeEthBLw3Gq6YCyr';const _IH='ae3fa61c66a77eb662294a1b0861af9492c6705da8cf129b3368dd9ccd5de39a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
