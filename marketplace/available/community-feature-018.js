// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWD1/xBTKWgJgGT5khdA1NCmyOO8NB3wFT/KEeiFQYhAJdI9/ojECEbZj7y+2jG532X3OBQHMnFtOy48MldH+IqGokifVwxOTkM3tITBpUoXG/aX6mJXCbW0SIzAObpT9th23qKwlJHMZ+dx58bSKUoNf5ECZlKm0PBNn5Db8sBAIan0WQ4a5sautv7G4GPwtED7rivqbPtMED3KJEXRwrOFEdbFi1VFvSSaNZQES5ntJzpBdThAJx7Xrzeprq1bK/1nHJHzQcUL0BikLfKzUBoo6dQ+gmH82UNNr7KvFq46JTaEQ7T+ZmjAej59x2D2tW575Dh4bY8dqevENzw52HLWdc4JCtzONQsYB3yJypyHk/tKKG7xSHdc6q0aicdKSUEhc6l8xuTiTWuUwXfr7TSgqgXqkG3qtYW2IfxyjZG0IGrEg8D9+uuptmXm3m5epRb+y4hKjBwg+JHmVVDFxbMD8VcMz05us+UedUfez21rDxEiYN4h1Jd4eqTkGMyA6P1DUasYdAx3JfM08t5d8V6KMD2yhmeIpBukO5E22k8ZLJw4Q1GeauIHOykzDzbj2dJ8+kxtApp00g22KtoTESEB9Acw2N4OiCkOz/4YJS+6DyiaNYfz3ANYHz5v4eU5AO09CiYqPfXjAtIBIVKT9RF8pHQt6AbR52uixg1KvVcem2y3wo60WscwatsQnm+If2W/5gU9TPto/0toZ9y2Fk/5DDqDk7e4Ui';const _IH='0f21d24ea2bffab18be81eaea35fed3dcb26d2d8f43c5e58561feeb8a44d76ad';let _src;

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
