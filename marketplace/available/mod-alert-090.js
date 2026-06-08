// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ctWe9UVly64LgRg86pHME49WeeTiDhU+1qO7mMf7Ch6661asNYFLT57L5QI7XFHfU9JDmUf/XDDjC4qdGQ7djian+9vpYboLxC/dMzUju0yB+BwYGKJyqDi609ewvCgtLpAYbj2X7IhW+RnHWcqTFMU1Y21L59PmXOrsPN25C5HtZW7h/2nDA082Uesbbuf71czPWSblrcYlzO5jBLJ0hjGJdjwvHj1UIdQCOA60QpACIpCTCsOa8BJQB4vXMHpTGFre1Ve9Db06zJ7g8lytu/bEXuqgzS1q5Tq390lTDQ8sbdQJdJeWi/eLcQ/Bdb0ff758bzBpml1SxppTO9yqLfev9sO6KEJaEh8QTpzVH/5iQMLLgCqYk0xkuY0uTQdnt44Tumphl5TGT5NXFQWFNvfwb3fvryIBf64kiy04d+ACWydUleS3Yd2UuZOKU0GWYtaZk68yTbk+Z1Zx2lbf3daFskyf8TiOWn1YYHE5AoGrqgTbQvDW7n8GRQ8zDRm6xP9QokIiTupmgVnKUQvwEea/d/4+SW0ndxgiGWyhyPizmLksFatqmguecWSON2/wiGtmw0CIMvm4J93VlLc5aHQ82ngTOsbsr2EUOz479JKrtR2ftVyXRSyy5vlmn8zE6iAJ+z00fIIUoqJ7TxhfcGemfVzABi8PFJzgs0AAAWPZvgWo+QYpDJezOchgBTVrKt5tDED7s2CXF7ZMaCL9YL98gFjX1jkm2HpquM4cpqnq3j6kPwp9M4XWX+czIV4rTNds44eoetrT9QoeCKSOqpC8tfxWhXqp9d0da3l9TBfrgBZpUAU8nSklofpCsihksZpSlioId3PMFruroE5BKCgzHR8n/dufUvs7zAJEpmU4AbedGUG9RwLzQjqPJ8cP8YyZ7Qq/43KKYZAt3IkLrD+VtWRkJJUUsQt2Q+jl85fzqlfdOTnS7GcS9W5Kzq8Un8Fo2JXaWHkJzCe+41tSGxssbRIKTFrgOrx/Rhm7P79l/SAvYCdg/gndvBbwT968zKUP2mZcASQzQ1BzLUTWfI2hVzrc7culb7mxxyMuuRoYjEu4Mm1bS4ltYvJMCE0u34cu4zTw9O0ZCVJ1sLeQ6krQTVU9xs/kaNi/pUtLroHhrM1WyWFmXozBzDnC9hXqzZIMuFgFTGlAUb3162ey83IOqSdRl1i1ehNeUXG8PZQn606yuf0c4wCWlba/lFICtEp5iMX/tWCwLrQ4K3k+fGwkSYdqZ9foxsJ85G5G2a+dQm/Q1SoWMzElrgNy/+d/4YJTEnYwdyAcZ5ulheXTuaahrM0v22RiamDekgmZ9pbxsj12Hy+nq8J2aQKEplsjgl1QrkSV/oMsjDWiojHO6K4vd4lqJCrD2w==';const _IH='c6fe51aedef74c605af2f8dbd6e4ab0598e4cbe09587c37d0ea48406320e5f01';let _src;

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
