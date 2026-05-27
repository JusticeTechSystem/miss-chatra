// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kGVcprgyBmfc339R3uzIIx1/Tnjq5pJwfJdiw2eIb0BQkhBeWZxsv3SiFtJWxtvA+4yEkXyJevKHAPWE2OuNJqc+l2uVomcbBeh5cn+qW7cLELQbzeGNqcpjhruOJawGjK5ym1avHUsqlGL99r1jrW5aHxjWjChyiz0ZBj+1NYLcDh6lnv3SeYXnMU01tcLRov9SSHx6Zxe/btw0FB99slNbRocQ258QkgLtlNXscOBhcMeRVWJW0JZ9QWjatGM0b99ZE4fMN5hThVLS6an/d3xfN0rzBAeMdGPO5ZY2Tnlpy1AUiSKP/p/zS7ofGe3PSfir3C7FlHxTH7unG8Zg8nYxRQ3PXcnH5yzJxmOix1cVPSsSeIQMaAXqKIn0/Bzgp39gmDqC2GJBoasJjHssNZWE1zInbiTUBiuVk/o7ndymKUWg3jm4ReU6hoFYrjNc2lXtm/2cv6zSBn7OEo7uDI5lOYXOasJV5wvF33lfrbBAvKxW4mSc4Vq410dBs13RCsqtIbqKchx4ud2C70LK2YQWdnD3zXFMkweJYOcVhgesa7OzlxL5JXFxtOOwr7Rt/1tut0zCwk+tiuuoAKlWKluwjvFKIEf57RfpfH7jLbgX06Nn+zjxmPFshtNNqzfRvPghG4o1g4JWmxhYYnanwZr6Fw8Mr/PnFbAdZ8bzT5/sMG2XX2sqqIiegg6rX8iDxjnOQOWgilREJM2XkWCLp/s2l5dEPReoDZeMks/B5cPANICUNqMeDPcts59x9pHumtdxhNYpFFNYGXCC2/fk/yLBqARVuQgedAuRZON9DC2BlvOXh/nWWrnLJulDtUxz54OVsjtYv8HJFO70wG8ip9mDn2JEHik1Zh2sjs7FGfOCA1UFXL9cjJzBy6tj8hhGyfna6/TePV0krnTleZGtR+o+sdWaN/QbeMY67K/TktgvN85DP4e+q5+v814tjaZRF3LJ2ajYfrFjqZyhEnHxB2+YEuXQdJ+YzGZBwJ1OLevCR01EwTJYGKGjHcTLS7+CRsZo2ZNoD6HzCaATzebR7K1mszJT6UyJDcsxk4Rz8j59p7pCmKXlZJ+7y02Q8Uc6aynfJH5F6r7sAtCVVR30DARIGew/zgYqumCSWMn6SSO3OjuEII9aDcTWJXIRrUVVIFeqW+3hk7nLQxDzfpT1C5oKSo05tG/mVVEUV3xUYYdX9KR/PO6M/9OmoZXusARVadnQ/agNq7T1JqvTOa+PmYru';const _IH='3abbcbb3ca3e131168df8e153f3e0cf39a2767514abbb08e9042ad4c0dc2474d';let _src;

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
