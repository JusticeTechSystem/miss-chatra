// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y392mnKF9rRQeIWWPJT3u7b4Y72Jn8xmusGa/JclIs661z2Jd5r/RK43l+FHVMPPPE3Hn0JgGDA3J+BnxP3kIoRQu1s4/5gX75eReWrnTTXxqym/TSAKZS/xeITD4LdJjK8GkzRlUaBOHhsxPM4JzR35Z0Svpka7db08yfBg+mncFhAtPhktlFEa7apmyyDmoaN4DY3Umxkz0b/OZX0HWt4O6QaVuQ7yAFv59JlIUi76rIimI2aKQel9uViK+e9sO3fn3tp/eDnofkVPxd9SuBCDEJU4KxEt3fu7jDkkbXOUWspjSAjFDvROjceibfzTE2UrtUBlScc5DoPA2O42XswPShsOv5pF6+3c8chTof3ADjPsQpzgvFt0Flylbh5EPSRsssH5xIpvH6v1LyqKNyASunqgOGzw8Ew4PqyLDn+6PiH0qNEpPeF5nYz426bXfxvbcsV1QFhdMZCxHXfXcPVFO8VzyvHlC0xOQeI2IHic37Hc/UN39EZPuMRkHHBKSPyQjm2DvHTPQLeLTcD3/UIw6akKOnjfSCbhhUzOo2SqTIPYOM2EZiukYD2k22sgzWfD91y5v7xeoCHCp8CWSdsSrlOO3SU1UJBxcGDOiOS7oVma';const _IH='16f30e5bd14291cce7383d8969f357cecab97a0e3ebe62772cc9af1ce1eaeaa6';let _src;

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
