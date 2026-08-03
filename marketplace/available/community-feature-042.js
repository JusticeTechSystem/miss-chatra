// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsGESB8NzShGnz2jmQhn+JdSG9upTaBZYrQ9a0I65nx8y76CeHYB9BrLNdD5Qt5EUvym7TzAiX+5AZLhhzoy3pYrTcZB145R2meQ01mNx/cgxj1MaCli623tVMcFVZxBCo3IkRDnepf7FLRPapYs4NHXQfRNx3Jkhwfo4P6bLYaOSWrrE6i9mcmiNbXROc6a2uGVH2CqaFLX8TPXdX0Z5/xLzYiEagiV0B42EA6WzrLWpECEG7MmUhKCziMjk75gjyrTFJQJWLPMhsZv4Y3NQX0H4JP9Z8OMybcXraBFAX9NbxuX8x8IflSvO/F659XugE3L+dTO1R0Sohj6d0zVJqfvKjkMSUZ2BUDSusgQWkCz468vg8/s8Od02IvlIRgZJK7ym8npm74wGnOhbbjwZm9+4YjmR6pfumMaOWjvL79unYfO+Oja3ddjh5ULwHpVR7AHu1tB3Epbb6RzcJIKu2ltS77lk3rgYAo/uXTOdHTiWzMpMjMB4YcFNzk7zdtWZZ5jQ7BbsP7Uf1uT9UZZucD6P+RBDMjBn4gr9/9HV5Pdwrb/ybPcqCbqPfGqWJP2seKeqW5XPFNEZ4rTXIUBg4PsVNV6kXOYStc5BYt5V+sVDAJVi7BfMezCoeIdZ2MXJc1tu7lJ8Ni53GuyY2S3tWjP/aGjphVjKUCEHRS4d/oDXqED3O5G2OefvLAUI7CzYsNU1fuYBEYs1OluixkEw5Yj67RLCT1fHPP00=';const _IH='f94e392e6d69b14fe66f009bf3c1f804398395381ab660932126a8797cf78319';let _src;

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
