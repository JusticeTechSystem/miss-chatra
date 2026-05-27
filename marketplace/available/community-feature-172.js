// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l1cDCI3aVGV/coLaF16OacIgP3d1G/MFXMuX4Rb9B+56SJPVPWqbz+YYv1lyeW5ikLE8t/F7/ntDTw7rVMs2ISr0+EijwwxYAxxyYNH656BTMXdrHexJmw5K0Hkn8v8XNmlZsoMwN9UVLetohsqB6IRefyvUuaEP/LqzAo6qnxcCczROMfOp8LDm9X+02ihtlk3oxjGNofeezUx08NC1YCauiTJw239s4CP/pluZRD9po4onlVRKMX+3KwH5memzeBjNy72XZ2JRCKYYjzBhJoqiInf/qKQ7N93Wm3tA+jCaOQJ/ZbGd48GiHrng+rsdAmBVlO+Jr3bZkN3bBV9bBrrl0vLakgzv3Hf2EZ+r+keXx/vaVFHa5ZVtf8iHXlBH3C2xtl9g7t0VUwOLrwpPH7m+uRPdd2DN3dSEvNd03F1bLFZH4cOHjGoVj+ijg1boMHiKti2o7RdzqMX3rFm9iR89VBpqVBzfS4/7ByIrQ7N/jzWpYttTjg2AQCXooTKTHHxYqSE/UNR5VXwWJ77b946/vIYJyIU233QSzW3uPQ5ye+cCJhwIDh5x7Kb4/V65cIMdGSW5QVgakgebStGAGOeNQlxckdrUpeA36SJpyQ9OuoHjJwvIyHHfDpMPX4oPRNXOigoMgrw8Z0L/wj1wG6S4nAseGeVsuTBagkYiC6sL+5tBcUoSXd0R3V2MQ1skMCheq2UOVd2LAlBU0X/xlSIexWwBKAftUMYvirvdzePp6ug=';const _IH='6c29a72cc8a42e31eff187bb2d28eb68f75895314bb66489aa5754a95d633cea';let _src;

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
