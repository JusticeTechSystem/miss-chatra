// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdytOTak5UOK1Yy5aOyoMkJir/cevpnikMVnrmQqSHQfG2ogsLqZ3FcaZvg7gX7qdnLxoUbAju4ZPmLAfvplp27/aAaH7xqAQiohcgLjCYCqYa9SJ15huuNXdS5IKOhbW5u8vwal8ry+zZfFwnNgZQC1G1D4Eqhi+auXG1PyHVkhbQzUFPZ7L5lSyPNdDjjxsVL9dpJOOPhH2PCdo1NZgywDEOtAzLjMIeXwHMH4TMokzFD5GDb1dpJLDomMfbCuOXMAVfbrqiL9nnXvOhnrKNIN14bdcWVX5CIBlt49ELuvch+pkfYvmed5VaN+Pom7ONB91xMjIEScIpyMmvo++J73Qqr/mUZCl6844yKGdt/Bg4gADLVJFm9zFPNLAWyLyXId8qNkPOKf32SLIl3/vkMXzeA25lYB/LMwCT/RRSm3Tq3EMeHSq4V8tQDGn5uRUWH9bjfYY9kYvPdOM30NbxzBizM8FOy8RhUwFNE9UpS/Uoix1NY42s13QzcRb+0v6zvloSB8OGhrAs29AxwCoi3JHiXDuERWaSFHqdc4NTmrJA4e4uFc4YX+2ajrpuKl4WENbCjeZSYipZp52zCmF6f+2S3TTagCrz7kfbKhSBe0Yzzc2tcq48ZhcyermUB20FsTmufSQNw6dn+XaX+VHbM15vqxgRkSqu69FG5PMwqmLJmFCNKEA3N/G07utu+anQ/yWJ9Ya8ckDbll94yLo+Nh6d0jOdbXyrUAlD96zJhb6iYpIDU=';const _IH='c3dd9799965178ca1641cf3bce0bf26f477c6b0ab78a1a3faa71b46cfb388c2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
