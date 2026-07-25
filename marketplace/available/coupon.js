// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhtEcWy6J3ttRHbDJR/VqVSkp3tgoiDAgDVJh/81xJkwygCJf1QzHxwfrhfUn54QMLn8/vOzFDfx3zGDtb7WkQGoqA4yRGJWg0F7Mai6gR7b8HNMOao6VRAP/OtHBo7Ndx4atFMDC0cFqoRp6ViXMOJmydHB0wz0Zrl3rUFWtTC7lIZmNCZK9o+LEl/9pGfmXP/BnKIaQqqgX3QARSrdnN641I3xZn+oyqcTOj2mPgEGXdy2yAR9zhdbdNKx4YAvgJCHlOCDAyhV8C/9MgNUByp00wZe7OuGM0f3iJPSicUBWl5ZpmWlnUCIFztsGRfNaJyGhukiktDxjuJ7VdlI8boA4cWxjeXA4gBN80tw+w/QyTgs4VM1hxYDEjbuuCqD9aCS0pfaJ+jsubk8gDm4qfRNb6RiMQ9XVkDEHWD7XCnO+/+kw8NKmfqd01ys5YnoUwF/eW/0v6bL4nDRuyOZaWYwf/83WH1H3eAUrJcIYPbY0qlKaYZVrBAe0ZDtAJdyzpzrnGnyYGKQu4N+lXlKPs3VH+K4wLjrGJ2qVHX63nmHC8iEzSqa6hYQ0A9MTZACURQQ/JUiM4rVjQg0IOtyNj8rVgzuMWECT8svImqgZ23YFECaJaX3F80/SSoSaU2TpvSXjiS4UKxMnaJc8BzIAqlEu0hgmbqKv2bitNBPCqDhb/JbggvXnyKyyToD+IOUt/fKn6xVFm5RvaZGOENymLOlbr3bDWqHJufwY4E6fdJw64aHVwlRH+0zx9Jwq4l1uWEZtuNQfA4J1nzMow315AQZzdwRLvEukMVbdyYKXBkpqz2swUFu3bYwn+mdSuwzWN2X5DWEoM+vzHJ52DZ6tVP6dipwoMhL3s1OOPitn2vt3dGy1WGOBbQwt1BVZsAdAJEMOOoDWCVfyHK7KM/ix6v3YM6armzoH79Nqf+2+GlaWgUgMIciqwa1QKdWrKq1byhtPv+6tiY9Sva+E3SY9CQTELaqxOikbp/Xl7+Sd3e4n0ZVYRYWETFKJ5DB8c5/YVr64j9lLSEQ0/eSTET2+MlyqJLF2/JQbDXmeQBpykT29tW90K0DFR1M21QSL33KzZ/K2JRgu3TEfTDjx+GYZQsewTJ2wrRaUtcPJHSTjRHSePHJ2QD+UpRJpgCZ6lSnjqxQ5GGwrs5rAVhQyqH3dssZnTCFzYQGasOcJRhx98BxCoGNf1KsM5qCQ=';const _IH='44bda6df99a71c2b3d0985a1089533fd682b5f5c6f656c924e0bd62528fe30e5';let _src;

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
