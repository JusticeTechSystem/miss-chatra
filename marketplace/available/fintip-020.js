// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzTqMN+2A2I0F3jYXwbQf5WFNfLFvFlf0iUKgSXX1eMHHU0T4eQIOhCVnqXMB2ckyNzYincU+j5XzrGZLgrSr2rZ7qJ43q6uZwQWRF2Utv+gzHBHIUAFuoohQntwyH6hpLdpM/bntcBQANPyXLg7i/a1g5loJcobAVLsh4B1ojXMsP9kuYJDMoyFZ0NnGBCW00XED18AvnGAJ4lq+UsL4+AlRMNezmFztY4dNDL90Ozs+DhAVzdedlZkXtkH1pTgw8iU0RU3zVMQBMNDog90+JM6wny21OdMcou31z1Wo6Au6iDCtE6gxTzSqDFUnVc/o1Mpxug0bb76qKOpSCzMBXdkM8NkvmUC9fr/up+0qvr/Lmn5D4OTcm7TgfMZwxglCp1PeXnazkxElaK7Lmia2cNXAfSXx8SPvCp47jBOK6bURwTWzXTSEEC/RpIAOREDupwjkz9dSRfUXOgKquc5WuAuV5mrDnHu+Wz/cTXiIbOqYEyUsJrCT7e5sRz8e1VBw5kF3yctJgvawAyX5QKPbAPW0dWi+TUp+lc/yqRbcNP+0fWbs2r3x8dWIrwDDznhcG1Ttl9fR162oC0kIdI0SVniSazjD3rmBzJWdhstLo4QzRjEa489RnchCaTDsu4QYm/YZ6GIzSwx5t+F8QyQVSqb2YZ1VplFX4oJSsJ8LGTuvYsiHPG2D2xQbFmri0f6aec9kKNGGzfcvXevMqBTkVq549l3v0b4pU8ZRWtYSRXOCX2qplmShHuwCtYXoedhsqVwGKt1L57+k4o+RYJljqGJKDlzgcTxXLIPbuDlCOaERLjNhhswVbcGgFqfMxiaPDLUIgneM06VRsd+D2GR+OznA78+bqCckMBGptJltZLdbSpWR8K2C6WevSHqbiuPWh7KrNx7fqbMdv7WnTPGRx+R6WudoW7vtVbpnTsYwhtIXaJxzUJOT2L2Tct9iQIZCQO4dbHVW3KnepqBEE+cqZCI3H3NfLj1RJbJdLfNVguvtRyZ+NCEUJD4G383tajYtohASxi4Ztv5PyT/EBbZG6sUZkoOuVhqTT5QmH3JxlceudU=';const _IH='8249fe49f24e6fb6ae9150d9d70a782386104bf65633ef64f2db7d0dc7ae99f5';let _src;

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
