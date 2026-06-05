// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GEM9fTciCLtzXerCr5KgXoFYlBnjZIwL5MJ+m5y9vtLiB4Q2GLellAhoH6LOmvn8obWMFvevSdN2N6j2UhcChK3EpkuPl2kTOXXVS5otzOu07RFffRGX3PNghULx4lXT1EEpYq8srAAi2nlg6hf2bBfmgS42/ejQFJz5E5DDhIorOSTAO8aiyk+djESylBpP5GaHRH/qhkTjX0HBlGu4i1OcPsGkViUkMA63Hh20s8B6PglHwj99+q45M3UyKxuXPEFRWmNTRu5N8Ogu7JAZdQRdio1kSNahjfZc9RsWLBzB8fW4G+lVDO/0bjCADXqg/reNhxTBp5SuV8H+xz6/ZqIb0VOowflFExgQO/D8/+wceChN1azCwTam6Xgp2TjZoY64r1WXn682hCNnKJwcjfx0WZCPGDdRQRsVIya0m3FmHqCxxBPifcOzGNLnkS0e6p+1ZyKKTcjoLbUaDpnNjRA+OKx5EJafvoOyqkVraXcNXKKOxw0C1J3wfuNYSiPGbK4arBscYzLMQR0zAPKW8GX/wavnNgcap2PIlC8qkSy40QKsLZrelMyRLgzUXhZRbZq5ziJAAnrE+KTqE61L+xYN4sxxjsfpBIo6XOnKRfl1RDQh0yVkrTnLhHUK4D74tldc/6u08q3BeqponyhNi/lOP53TmJNfT8UZv5se8T8XAySlE8ROYHpFqJjp6WCQBbmSY9T2GZO0WDgmgyGyX/Dzz2wAMNNgOc2sJIVYpXYRr8S89fCuw/Lf3Ga+Pu+fU9hqSiAa5Nzu9XnXHWnrmTLNngyPWr95dOlbdCdkR8SER0WARqhFssbuwP91o3mpTV7SOmn+ahW6/u856mjpvf7EK1XRh8hd5GLsPh6qrEffIQStLuduabmSU67vji6r0PJKDHaDDQxq5oTIIX+Vklx1Mw10aeU23nA/sKZ2umZQF5DOuc97+Xl2Y5EGKy4wxFVKpdZtAL4VBpRebIicjLCJR/fIw4sIRL/oHqRdkk0qH8L7Ecj1FUq2Y0Pnz1gCMl398N6XlU4Uqs37vFiw6/XZ6bz6lcNeXWHsSjaNFsjbsb+3OQO51eIlt8rbMXAehaA7BRN1z5x8MOO1fIqv0Tuq1iKSd1mEwFoYOM04JwW846lhRgXDpPbppghaV6oXl5jTb/VlpRBEpkGXPjJWW1E/3gjwkJf3LdTBK/wH/BYE4S1dXfHs5S50XuRSZKCRp5NUYoXqrJ33sBJO/Rk6Xr0FKN/e+aEdg3Gf9H7+1agWJ+sw8zENZB6RWhrOrZ+QNGFVU50D0iM0eh8KlGX4i2vz/KPhWvXAHby/BIPzVwtryk5/u/CEQmzHJwyZ13F56RyFD+MaqyrhZ4oTOfgdOqULnw8qlNbTB+lZcNnuKxgsDt4vnigGCeUbGicFcCHUIEhVn9yTDrd9pW+BFuuLqIWxiidXih70IV207Cb4exgHtKXBblexUQ==';const _IH='63b3dc6f4f51eda8a1c395daeecfa9801670598eb4d8e4e3710772e34921aef7';let _src;

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
