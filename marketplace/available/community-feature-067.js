// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7dmT8++gQT7Tgtr53is78iVwyX0qAmEcM5stATilz3DQPdXigkpB4SgrzWfj3n7McPEglOFzVoliXvrnh0nnvRZtwrQT6/dAZ1bJ7Nz/STZHrnmlYFtwx8OVjVE+4SZF+vd+LaPmIk1+r6dAoO/AugpLpr02MLbBMzMpy5EQYl02AeC56nHvhplS2zEJtO/R6iSNPLrUMiJ2+8thKSvcr73XxKVlzAdvdhhsyDSxSNEbJRh3pc6cnNhncb8NrwcrE7ZwWn8rqfV4h7/kYRrPS4cdLFQdFkWF1wyP+1zAGg6DHoRkTWBFYH9HeBpN05FKO9uMq5jlzbdjGM7+KPFbIZkWwqDsYThSdqBYyWb3ryXJ6DPk+fp+/xCvBGI+FZ7GlaWeThzLfGqgtUT+Ye8Bdzy112F/WiD4qbmpObrRd84ti9cfdwMCOH6aDQ1bySF8C8DoFRhgtZjKNfVj55etcoE88oUVNKu5MuD/Bbudg5BOK3ZaQklnT6LdPM69eAjs4npGzUBWZSiBCiFHC9BAo2CDv2lkxZCXUfYlAF5qpMHllMM8AEFpIXSf5Q2rollFzV1WeUlqBImEcCZCJBk2P6th6GG8RJ7afgWREhDgYdY7svAk2+SHNyWpshT4FYFRkbImzx01IPVt/nlrrs0uHBVftjcHNp5HyLUySGzMX/CD4E2o2jcaNT2ZNFRT2oVbwfDQWryEuC6gfpJIOALe9XZ+KiIpu3SVaFXrX3KVXQ==';const _IH='0832e4ba02886dcad739d99447a4141dfe068ae2e65e1fe330c722981431342e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
