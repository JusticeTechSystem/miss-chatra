// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5GJX9GiFi04pgOQuDQlVtrDyfxUJjYAz/VaTQBCVjTIz2NFiPogq29ESE3MRWL0//4zL4k0Nu9cLI7VvLuPwAI33Re/59mYjEX59cYNqKPwURUCTQw/RNWTqUTjzrOWyHmX31bqrWkDl2fqWKOmlIyTVazHhiNB17GMhVofmLnSHIFsEWWr2tp6C8fEhrf0PEUnrOtrUnj5RDQrHMWi/ByG9mpBkVL8xRqg5o5vFhMxAujqTcwBHg40kmjOAONTI4Ly63WZg4jDqM30rvvLk/xibdW3EAhECY8gFE7JkJYq11MmBm0d4mu7TLArjmXljruy2b9bY9K+xmGPIeERr6KvTecKPMMMWcKLKDcf9BhPpOR5DbAu57tQ/sK9vmXOcUQOKReG4oXNa6mM8VWC9QRI6B8JbDo/FfMiI50x59seixB31xxzzD3bBjkdsUrOMS3Fhx+YIACNGg+XHS3JDBq3MpBFs6qVNGSUZFO1A5alaN8rsjg+Oy9rWSRMkKw5XQa4DAYOAhQmrU81JbbRLkilqNno00r993k202wlpjDXWZ3Ojfl7YjtafCkBLPXmPHnC+5g/o0dMhqUI5XZgyVjNbEiQ7B7CQtk8Mwjz8FSaX1zJBWBGzu3UN6Q3CROjO3ySpsafL4wzGFWGZ4a92ycifHNmj123pQoa8RvW07SYlB4pUZkRl+W9e92iQIqNB4smbYIJyoqSygyIQu0epQJUhCkkk6T3ZSItMpN4';const _IH='3d43cf4909597bd503263f91eea4654e0f667597b91f8e0200442d8315d00cad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
