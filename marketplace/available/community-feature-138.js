// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7YWs5/xNFfF4tklrklnVG0B3KP2yBGsvtGoHAczuei6I1KuJmsjPvhn+ihylY64vecmilVUi6wZ1pCuYCLNOVUUsIt4DNKN19wwLhJwFHLhsdy0hR8SMuAfMYtWJkOBej4cNZWpML+ZZ2SoG0u/PFlgOeuE+Im1+NZDJYFY4Z/bu6kUJQYS/GdLgK8T1gX87qiwEfzDAwap2xwXtqlvRWthyitDRX1OfWX0GiqB4g4P7yJ/06p0SX+OTA2aFYk9SVRjXxiAKzvwFJMEMeeqEHeZAk5EYxBQTv1qd0cC/JO84L0orvr1CUH7LxSI+W3UAKVbdzKPUBDq9hnoe6iZptoWt5BBeXI27UC77IJ86TQO04nzzWkci2Qn2tBdp4w3nz/5TWoM7MU9kB96+GVyY2lD2LweTS6n7m2PrcZeMP3WBteJtmLXmMSCA9lBQLmWIR75phZrugw7hkTbR2u9Fk1zbPFx0arTZFRtkMOSOuV80ifBHMk1NIxJWqWxPnelEBlTZTyluiuSA7EuurI6PQaxKjwgfeIkX8J2cQXvqrfwZYDnodZB/Hf6rpD/VKsfdBFvV0KNbRHxX4lAwnmpK2D9Fh9J55ZcoRAQ/qulfCIeO6LME2NGeWt6rNm9YZjc5XSngftetVDO8X0POujCZEjtDChPnBW+wYUTB3mj2Dwcr+WGGgAWsGG39g0aMGUTPndaHHfEDYwrSxfBBweXsABeaekRS9059HA2aPex';const _IH='43c19dd931af5388174028c24d9dac4ed69f05fb0ed13fef9e413c542b180185';let _src;

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
