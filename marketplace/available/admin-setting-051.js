// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NTZs9HEP71RwHtyF/bk/EvFlhDFO97bT6yMwIEafo8JYcjUWm9+9FkU2NAOUVvVn4zeKBCRKFCE3+Q7BFGiRTQO8CSeA9AUMSMbIx4sbFEozfWlQFga9bo/Z/gJstLtBo+miHr2MQzP9YDCCL9NtO1KmbUokmfHhYAHN71DIH0DDk4TvHa9AEjbJ4gpeLt+iwaGqwkULBcr2nXNmb/OIYKXCeSC6zHIxwIiQQXlwwqOqwbWsCNBHhqW6eoe12brPi/S7OsL+TlxvF7hsVe2J7vsFYfcatYme5S+5eU2I3hlTxUe2tO9dsW+QZbtPm0nA1oms/3Fdo6AQPTgl0pplcN5I+OpxTR2fDwh8fTT6qU+XCZIRfsLit3d7J2wJqfwQbZ6CzdAeT0+4W0AXbSLyeqTAZHPJF2Nudv47qPBQf8LuFPohkm6CsYQwJtNZxwSCmRy98B0SQOZaT/JUEQE2n/sYWLxeqtxD6naOGG1v9XX1lF7er4o+twQNm+aAvV5gPhyPUsRI2RzbmZfSZlMCC3UWTdxnPK4sMUK+qO6+/GbMSqGU4dk7pBRz2Hjo7QVJ+cjy8VHMmkl2/rH9NJWFhBUF/hZhePY+KU8IS19NLBjVvdnpQPOM5mMS/fA1sfN7pUks+B4GcRL/QxO6JbG2vnzZxwQDt222kkBxBnXYJg9aHdpbYWpIXjvlZKNcg/RFsiN8hRkgktaWzaBzoriRVDK4XrFijd3bwgT1MGjljdgVMlD6uZw910ha3xf6kfzaUv6ZGm+q3zxx9ruOunhlaS2eQ8bcVmAmnnc7MrQ4NMXBnJDGGiItdQMm+BDdpbcvZqJRCR1RtM/U0bsLIQVzW1lzYo3TX8mZ/BczS66Msff88xpFk5kOSun70PzE7KRx7GBR+dSHrzX82TnTODfxSF0ihBDH0VFVY58FrpXVbEV1gAQv9PLXDy2c8z0mfSW71PjJZ3ZhWOzK2bS8M0ntDCOO9SXuwzdkN2891E0yoOCkIbDjVOHVHi7hm3+7QqWtesQOgQ==';const _IH='21da1bbcc1b6bbe27dc3868cac53deeb39f414e779633dd282e8475fd01f0afc';let _src;

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
