// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0uIXKrlN6ioOUeDDOuIcjg0ffytpPX3aQOHT3FGA9I9qseNFzEtUYFF8z153un7EtD0TOlmaApft7G6lF8c8U/qYWr+4CpI2AGE2zoTjTrbuCcpAqL/H+nIq8RTgGx1jazORN1Bm/MrWD+ruaxehwNhFpO083T4kVf40A34NiIqEi5m+M7Zef89W+lxXX/8xM364UNsi1Ecf8CIMVZnuZISTXCwaMB0QKJNm0MJCZLJ+WzYYcVR6uQf6ble0xKA0bl+eDgX0tIoPQNSFqEYuXVSrFAYclpHrtSfzKVPzYzu6LbkK/j8BgpeaiMIFSZNomRhnPFxigDTTemjQIigFUKH9ZVNnf0V5daEqRdapHY1UdMIhRUJLD+/zVPbIR7nWNEz4WtSu0Y2nA3tcod+T708Udtf8zoWR1Xm78ZTKseiDGMl9t4EChuEXMDzHXLBo0jInTpiVlj8B4IcZ5+c5h46DioYKcwYTvHELHFjncSPkCAEw7nuCCraf2OmlND9jh5OmzGBBvQ9NpFuzHPjSRKDZ3D7NJxHp8gjDI3ck0wSkLANkACUIedOG0hiF2e5zHrkfPZn176pMBK6VL/D08qOwUaw0lRJ82Ptmt194uTN17imLjg5EFqhhM5eRz4GuIxWv73c47tzSBO75lRgQO2sKWoglj5ptPpLKyKs6f88DpA+I6ES8PkUYQL1kDUvZPbZKa/aaxO4xbtCGwRk5KmKxqdVdCHyC8rbJrLeliw==';const _IH='2e19db5c23dfc882fb2bb7d1da04c08c1cf005942a21c65804327aa93f68b13f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
