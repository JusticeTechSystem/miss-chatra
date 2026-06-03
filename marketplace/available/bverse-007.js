// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='697AuwVIe+Q1a9wceqDhvKyMBrFYorURabgzU+h7qFE345NWUCHI/E34YG73B0AQQfVFw+f6sdLX4bZCpuWqKi6XtQBjioMSKQgZDrDPOgphXwS5LJ3W/CK2ria56Tr+Z6sZ7jvPAi+zeZQNcfl8J2QmnGmADkwYMRpMocUGNSywyU5XAJ+k9gA5SynIoLtqGmMm2y8mhYxcaPuOp56c1I7onEtsya7TyATRsQTmfFvNyas/vU4yXwOGzFOw8izvUQInn+VH+6jowdlpKppB04XLkWHCmKbGaFDv195gOFoOXrFYQ5ShOpuSQrR4yIGq31ExF9R1RDu84q7Tgl2weF3/Urma2GBXKzYKeiHHiNXQa7dm50JxXEsHaZlop9HWc9OzKfgCTPg0+EsgVPeXuS6fAErzMKzLThNg0m11uy4h81p7b4pGd/M74kEztZ/NhN9DzXmepx4/jZjPO9+rj1NFjF/7kgwSYlrDeZS5Vp7k5uhMfOaTCl5g+ewlAHwdeo+XAHG5uxoeY9W7Z/pMvffTOpX20hqmOMuxHHJzrUU/xvD43lrlWz7CeoRTmkNDZHV4XizqvUEAazlfd/gMwFqyvaWDvrYbLzWaqWdQ70ErD6LTPuWLtnl6dmFcAMmbWi1KUzSrGvEw7Mmca2UbdMRPhyWpMoDX';const _IH='e279aadca3e4ca0c66dd8970bc46f382f95137f457082cbede2e04c0abd36f0c';let _src;

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
