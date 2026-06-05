// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AIihKRZ6pZUgyGndjYVNHZNhT+QNLh6tUOAqd+orTt/kQvE7//RB91pMLehuXZuCwrfl5f+IKLDGppTT8JBA60rJne/vYKM84nPjQD9VcrNr1EyGQJzeWyudxNBtD+xhv3PsNbs2M8EWQ0d2W3QzUTpKDNbY/8agjunefalDePDmTpLW8kvYYsEtT2J8KIMg4hMz893TRf7SH1XW/L7uvhj5ebD/0zDQ06dYVKCTBebhdJqVQNz3V7aZz5oobDNXkObEZWGsjLD28mf989bGeDZJyOEsbKk/8pfblgscKuGWBmdvrmuRomItCIgzpX8DRIY64mzWH4QSNlcKYTLGHbktMWBWiOVRf4R2fWnKMvPwHRHz4HUQHN/DaxraL2WxH+bj5eX3gkENDpAaxr46aFlC5yKMgF5C6kXtf3EonQsFMGnUU+OkOvcho0kJzQjVrCE9XVr5VGp3aSSP8itN2P0QzoIXlmQdMMiHuMhyrCcY1jDSDeNzBBY6Homfv2gxG0wjYuCV1ZonAkqxlnlK1MdVCfOQla8+zjaXzcNgYK8xtGIMrwTcqMQ6sN8WOTYoCxFykZ1qhX3OPTqEV4Un+Ynf6l/t3n59VUWUKQsut15WlmBxtuOjP6HvGCL8R2DdOmypzMl84knxEvcJwRghKfJMSsVyKLYF1uznfQyBUJqyJuUHEpDCF84HBIWA0Opy52xq+tB06ENhwc8qp1ky37dAk8cxovd6FrekGiJdGdZ1fGXa1/j7wzqDlwnkeSg/8Sy+ir6DA7JO3EvqJaHpASwHRUBYW3zffAgf9+7DCzf7sT2AxTCH0CP8qGxZUdanIgyBpb+E/eTwba/AySK9i+k+DuPbS/IFkJu6kmQJM3R0L+sXA9IjHJErOBhqATYISzE/v0Z/3pqYl6tm9yllBRRJXBpfxiGu1dgxLicdAcXyKXH60QR/urV5CSqdaz8obYPExQu3y2Nw2V9qDCTYwYQFNAcqYXCwGj3z0lHuUCqZfpz6DYQkf0b+if38ueSpP0AbfCYJAsMsdV/DCBHVtqK493oW51ID6qddy+O/qycjpvgM1k+ee5QtAwqbLgbr/Qw1SLbmpPyiulysux0wqmStGTPSjlDt1Tf9pevO90/Ynw4nqOafJrEvsgiT9adxA1SNktsl2kghaUw6aHptYUGMlM01sKtjE02Lnc9T7C47AzZVCZXttP3GNtTB/KQY/Weuf5NWhrxycRYQ02uZy+ZEXjNdm1gPxe/UM7fqX9xOUenrR45G/EWxdmgLYPELWReSnZ4jUpjjNme2RzhMLYNKIhoq9E6xriwyaLpIwB0K+S2pVyQrNCREcMlA4fiZJMoHBsHAop8qf6ByLOF0Rmdy6feWDmaWq80uNClA';const _IH='36a2e62dc7f1d8bb85396c4110fe8a67502269eb39ce6a69f191843263a65703';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
