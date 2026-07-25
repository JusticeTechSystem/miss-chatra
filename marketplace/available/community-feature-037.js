// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSv5ynxp1PJKgaTWXz+AR58o59L6ckNjYDTQ/WYzuoZwUPNORjSk5VvQTFcJFfUJL/+p6f36LpNMhaE+eDojbhOWQHgSUYZEt8UGl+wz0oHJFtn/saDceFpXg/aAqZCRSoDgatLIICwkW8Gg0300w9Ol7Fldf4App6xHoOFC5Xz7xkya+xp5/6zUUt2vT5+B5Z2ztAeasusZ2it5Zr31QU7ocb/faArvt28VHve14yCjhIrpYL2zKWd1MJu3xq0jD20CrO8T/NGltGJmyDWYGClWhj14g6VOwDQq/DsF12hBMWLrdMAbfWACRHCzFU9YQjY75Y3qEO768TxzmSOjAeaUtasLh401gkGVaGgt+4ONQqIbS5qv6y7tGu9WHnko5315cMGekuuBT+MUjZV9RGu6ZqM+1NTLBHfCS2Fj1LQSlyXHEx8Hgl4mCOBeopyAkNa9Jn7ipIgqSWOFMqFv+duJiRqCZ/P1Nw+I2b7qLiE35msLHA7wjATKgF5/1VglMlxlfPZdQ+F2OKdDKBTdkELDW37CfFYwHYLJ2uHvSQh4yQnbMf0Onk5JRqXzXCpkLVc4K1v4/738fC98x5w03nKJzaYAnLaIkcbm0ZepgpArFG2eQKpxIwpPjiBiPYYHHWfRDUE4oF/+Bz7jjc7pOMa3dVkoIsxXZaICUUJTejZgUhRQI92fhVXEAK5ewbfs5/d3mfLKyx+R1ZHXufwlKFt/vWkKCpiwZNfaKqumv8c';const _IH='2c817433b32630d3f2865095fc12e1df0204f5b77c5bda1813bce6babaf91042';let _src;

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
