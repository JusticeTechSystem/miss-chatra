// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdHGgqOGC5+m7U6HZdhU2OyPjudL41OZFLqjVAOOUy81JLsTb7w493oMzDo1d3EO94JUZdGBSvRR3pjxn0ibTYhYJag78wrCQ/bPReYutN4YavaiSywxZJRx+zfpVnX6dCqge7Xk4Af2G3gw9RdKLFAFq2QFeazLJnyT29R4XN0tg7CXh+Y4WQBRaBjJ5O/K2lxpL/N3g+vdqkk4BtVQ7J8YEB9BGDhg8lRdqrOrxXkCG/eeW6MwQVTBHnhGu10j9AuAtFoEnKIjaO2PN+DesASm0aJ7A6FW58RzGmN1pvnQudfUHWjMym2iuqgmLdpl+AB5QcFRy3x9PJHZnfOOGooU8ENyNY/SHMjUt1bJGRNUSLP7fWbifaUKViSaZwfRUlUMH0jwsVHYLs6uJVKZdCcXtA/JFuJOshxo1m9h1hmjWbey5MiibhNgV1pi3jVpLSQ38CoHVWZmsfcnU9uGzpzdxsqRBk58OigmxVlqp0kOJ/Nx5Bkz+Y9xSoeFL+ar0g4XMwacAtDake1kqVFHzE2FY2yGzTiNIEEQqKullhhAH17KejKkxvpwwmNMtNQwL3DaaA5uSFOrUGX9VPp8pZ6BcST/AeVLc4LXzZGVO9FtGDxXGV7y4H6T594NYsf4pz6BcXvgvSMQY406pavNJRSCdecBcNZMm9kLFVUmFwAReCJ5j0SYsgZzUYybqLa9Z8uNDLgM8gqHo+H4C7CPtmE0W/8z4ylPry';const _IH='562ef68bc62fd62d284208a33a459ade1ae68ac3325959a8709321354f324dc8';let _src;

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
