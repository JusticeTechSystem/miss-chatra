// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ0yZ87wG+nq63Py55Hrx2zN7IZK+cf4NuXQ5rDvp7UeOiF51UjUDeQFPFZYBe8B/LBe+4kpJnLULDrAZEghDn/gGlsLQ+zEz5X1bXFZkzVpXOujziJEvlF2CjsXfi+3+JhHnfpr6HOrEAfotYglf2YpCqghip9G+R1yt/dF4wUZfmrAfxaNKCZO51wyueOlhQ3EQ415x+5VUOJyTq17p3tHFjfscJRm1yQUSBCWRJl5ryQeAWY0EuMZTB4lyaSv19vBJkCFKtYx4N+FJA4k8J5//tSKDx6htNoLKEKnQk9b97RiMjrNB0eSxMeoeVfZFq2zoUtekzh4arAkW8tHNfmBwizJX4Rzq63gSf9WLtDmlJPjiPGAEqS6z0Nu6eCdVIQplCk8BhR0qFEYI0cfBjtSyMwH2npzmxYIHwvRx3AyFSTpIaiqluc0mg8zhmtta5Y3DrkPzj8/5jX6RjFrsFAtngq9BuRJSae8pWimYxoULP3MHwZ9ER7nQ207BI0XAShXTC2XjAKw2DY86D6oNo3ge22MHky5GRsKtCJ9wp9bOVfdavT2SH3UBHzKJ/Sxf6cdF+VJ3WeoMSWubHSxwHZq2a0YKrCJKmaoO9oimAPJFretgtafuOBfQWp/IL53Xr5Vb5Tqmw5P4fGYi/aFRv234uup2jJq7Lpg0WyslWU3eVX+ERgr3e6ORYHsHNyAigxNhrpdTOWwtSqp+pe78QNouYcmeUIZ15dG9EaKpcUXLhqO25PFmctxu95/+2uwExVDScybB3Y99znoFM2Hvhe/FVeFdxcQk3ZLw9N+hlRsyx+/bORwtehicrcj9kFKLEkI/nJHNy2z3i+A9bgOSQROKm2UbbEuUft0lA/Uu9wYSEwnmdIBoyT9diwNVuXsw1YowrXCK54QFYO4tRGxxl8Ej48duuY446GJHyXECObwmqAVe/loH+wB/Pr3PrKgVJo9hDDs0ssuLfGuqLPK1x4r4uu1GD4ROc7NW4uqns8yYwKttfgQ46hOL/X+yeoFue+akAof0U7P6HZNXdvahASWFVWhFO0xaCxUfhwskHe0ZNHDbUqTjIAZmTa11GwKrIo2ZeBd4SIc/CHHsgef71KYfhT+cdf6Nr7/nYQys7eqWVsb4gWZXg95wfa10p4lTVum8m1iiN7pdORFUgKwebCM/7Rpe6wUQZ2sxO2ZucCfXO2+aex6/NQovW+QrzKoPO17gkMxXc8Ibl7F+6h2NhXNK9pdj+TQUod3se+FKknFX4K+qCY4y+xDS3SKe0wO+S82Th9iYF9j7AHb/9FLodsg1zo2E93TWOb37boxS1bw3MGVNRAEz66AXt9QKCxbp2U/HDddc=';const _IH='bac7e1d8430697ead0f892e170acee346839c33185634158991abea8aeda6ca7';let _src;

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
