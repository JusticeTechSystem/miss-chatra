// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wslk66pJFvtpKFZxylLaIld7e1oQFMPDx4307lhOZdspLTTCFDJjiHBK8l15HYkB8t8qwdBvIIotQC8yGH7NxplGOBnNGfGVL+36rt9mhd60y4jMKmGlCXFrtiky+qnMgBpg7nZ4nD/gXbAEfonHq8pRt9eMx9O5u6XGZk85TgGBpdomJ0eVSBSHP5StkJD+ugZ1cAtBF+kCes9+fAS5OH9FUQMQeq+cVkNYXvTOmMf9hq5yf/XmpJLVcYq5hJHPEj6O2O0iZnT3RNv0Wqu2YR0hdYvfDmsW68LsQi8nQCvYhu5CtlgbPJKoAxqvcU57pNdPhXMaaocieZGK3QRfkJK4d40pKrxzDaSpUmS1oslEnt6u6alP1StQmtq8hLAEt5Y/fScyTxOPBVMTl3n3xQsNyFtP/jnIiyeEVr5WaKaU+crKEYOY3Sn9L52CofaVozONm/kyr9qhuLzb1JwtSEls5xn9a/N3wO8IrJQn8HE4TuQ9pw/pQ7AQ+sZzbD/gHZ00346NGNknOInHR/a8wQdKat13363gXu1UtZ3nDISttCmfpXDk+5psG2/e8QmgXmiLAh5v8FdtumhsJR6sokG7LjYExsVLbOV+IcsS5XroYxBj0G8w4tV9HiaIWlgq5J64mm2kRRN+BYJLiLHo8JfbFY0kiQKkgaSYHCwDTPoCH5M3m+1viJ7XeByzLW2RtmJEVZtj4Vx0F4WuWGToqO26liDnX4Gcu84dQUgXXhRV6No+2g3Kyc2I6ax1EkbK/iWwtAy4z/znHlI05EESdJoJ4UwOHjWGisaNd6r+5wqQZ3yVKkzjvZwNj5Ojdoa1fgDhqb6vAqSYLLvVpbGMCn/5dtfujMoJGDNsmyYMmaZTcq5P8jp62UcOw7zosV47aWA1ZGCFnutT3ZZ2XuCN+tSyc+uQV1k1Wrf9+UN+XZt7OAKDXmaff+ICw2PtBCOKzYGUQgmMJVlUnuJ9TxpoP3HHpL6Jlhodldpzn7aV/5VrOAt/F02jEVt3krbdZuhgx6y/eKG0aWwcIOo8P/Z4VD8DVLzLHQ==';const _IH='b8109356c85d76e085aa596e276d8c73401df84f50fc3d345da9407c9b950e52';let _src;

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
