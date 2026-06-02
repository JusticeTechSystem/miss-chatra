// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q9+2dYnbSE5LFjYKF+td/evq9V3wD5mQb9FBZJRgvOO8RG0edTGVwmVHUXUa+S6uCOCW/gFNLq1dQ46k0a4JQkkLU7MGKARkq4ahn1B4uI1rDIfxPcBcfZpOyAyNSzCq8WET718u3PkvLjByEWqjIeMoV1nMgiN4coWVZjpVV+aAnsFp9OzBYIObSGJDOmrJTf4sAQerYmmBt8k5gwCqRT22lblcOSFGqiTUjxH8uhpC1Selux7qLAjbtEJxcqa4AGqVZ9HpAaHFqXhw7Y3eXvZ9yrLto/ApM4u6hgRV3AD6DxMFPABS3Oev73haTXMJzpNfQDxkBNusJGyAUpWoscW4cKvcCjZMQsn959b8BbBnsS/MwnxgS57KOaSDTcSdjKQZZsRuVyF/56XKPNOFP8ekHotDU/1McfpjZXkAa+ddz6Bl7AM77PIM+G8rxYfD9HanSaaS4PbwY6NN5B1Qi7Ver0+/ISJ9hXYQBHOJqNbFxGcmJ9J6jeme2LB8lpdalCKhHMkemGj8Gz70FCGMTG0ocSyCUWzc8d1BCpqTUePRCS10/z25B9Os/tcvEMdFCH++luJnRtE35pmpagcZEpX9eObDBfHwKLvKdqbAkrJqkvooO9rIBL/ADZW7eTtihHuyiZ4fJZIzhfEL06GBU9T2ohlmpalT4yZWCD40ry2IV631v1fHYPs7ckzeVQCfLZKtW1lAsqajRYk5tEobeodVD2OuqAO4gwvCAc6pUSRoJ753jGjXmEjNRAB8G5Bj9iyIPKlGpC6uDxZ0a6a8HAGE6ZIK2B352pCMD084BlykkEgqM7Wqa1JiFKtXM1s9wkjwgOFmubjgvlHIjhlePd4evawqbph7uI9M5+v8oz2Dezf8DCMTHEnsy4Lh7a4S1tOJ5zGW531waB4TKH1UhDt4qJVCzSZ6eypYvoc9SumpSRe7Utkb9UCUrmgfPs/707G8z/pXNbbKiyjdTkfthMX1sqTc6pHx8CKEKD6x0g==';const _IH='c14a83e3e5b0a14bbaf59a4e96a1e830bf4ebf998fd028bf8e12bfbfc51b2990';let _src;

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
