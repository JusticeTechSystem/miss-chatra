// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEfnkGqVGr6waz45lF8699AHcO41sDskXo+qW9f107On6RFKW7BrnPXuFaUFhT4uzU0UXT1PRh1T4lqgFJJeYAr9v0Du0k9jIV0lIIFRrcRVUXwvVsDyJCjV32oM1zXbPgtHH1hiD8Nl0iAleIVlm8wb4ooubB6pHNEUReNtjKGhVXhGNgHmJ8ZP6w/LUpIAhQn5QAciw6Zn6iWFqWkVXbgkCt5GgwqZjyYSigjlA29UKETdZGEQAkT3Rh+BhKOxE2erVbc+ErJ7cPKXNXOI/jGEd+4alD7WyLmNO+oEOLl0oegRnUkesxfiws3WOIBQmBsBsXlnWhcCQ0rJiG5lZ0smM3BOZ/UcWOm7aukBZPnbcl+Expzgr86YifVkQLpdRZR5Al5gW3dvRgigJkuAmVVS5d3ySfNk2go/ZMT57IiDYSPefu7eW2L2FKlz8jv0qNE4o4PEU6FXFwPbC8p71yKlT2DV8lxS0QSUxJLJEqK6o8Cd4sMXRqORd7NBrKZjr73Hd7mOSUmdVem19zL8DYR/+enGQtHd7rSenP6ColM1TDI/6RIy/Ty/ZrdSu97y+NPo0djGyMgadH4X40Ji/tFQ1NubBqzvJrZg20J6ZKAILcDpWJ4pER70JEfoQzhJ/AtrDFS8rbWUg301Zgh/jIoZ8CuHeCZpPAKG+exupM2uPjQ9MIzuI+hXRUjN3dYcR3P7ANRPBNhsHYhPx7DowTxCtx5znyUKhWg64oFl/dfcqXalQSkzMn1eE=';const _IH='c44fa4f608f0378bab7c749af5488e24a7dbffd677e7d3352c04da36e2b2c8b7';let _src;

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
