// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuD8keoDxyPwchtO4AErzOKcEGovoMwGyaoPsWr1zNxLZr4uOds5AkivPSc2/Rvw+KgXu/U80C6DFoSHigKYv8xWTOzoXjWPK/K4aZJH9oYe/Qt1sqPCjK/6uB/WKBU0VHUAt9TrlBMXTm+cSvtzaaghxD2D/t+uR/cNQV+3bttobMBUDRHwOgAUHPvJwBa5GDCEiybUFg1bnYTdBhBbHlnYdqngO1+M2x523kRSzxbNx6d63CHnLe86aT+yi7OOZSc3oIL7sTZVyCV44bycPvS8fK7ND8Av7PiAKE7T8KOSQjvqMnQf+XckNbFnvjXlgT87xpuy5pBe5ZuuAauwdVOL0oFJN/IEPQfskN31MgKmjTFj25CPLdCZhf9bcCPrGUfphY7nETTzKko+gsg2Rgdrias2V+PbgTabVTRsZhmseGZZkWqH50Q54vemF7BzJn0F4o/UzBPDklw5V+mOCkS26250C9HUDacjxt2pgiGKk0k5LZdYmwDAZ0x17BlRYyqwwMhr/2vJ1QhwgQnn4gogJOx0Cu/OTh11HuAWKYwLnqk/dv6YEFmtZogY2Or0uCADkDK4KeNvAj7vjRGSLvqFSOmOlmqco1pTHm3LDRuqedq8Ot2yc227ecVIQv1l7HVtT7zlhxV90HK3Wbxl3pZ2Xj1Go+tc81JP0HnUihqhYUqCFrA8t7tInh7feK3ULAM1fxShWQqBlQKpiQmRI5lT7aw2Yrjqp0Wrg1jdotyKwgxgbRJzP2XL4=';const _IH='e77b51d9cf0b759ad5773f0c75db6d0c7df28dc3fb3d4c04036f2ec2d41affe1';let _src;

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
