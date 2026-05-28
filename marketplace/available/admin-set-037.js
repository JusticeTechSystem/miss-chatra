// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/gN+3Rz0ja6H6cwBGFcuoCVF9V3p1bLOe2i7ObP3Y/iM849lm/XbGU7mC1DVenrVr5ASelkcfb6cGfV6yz9qiLkxpA1YulryyFChyW0/QrbHHhw/xL+vfRt5RSA8Cu97pUATrs354cTFzCcmEnxyjuXB+clRvVvAK4A5Y2GdCJZNmt9L7QS5jd2df2s9C7mW0VpRiFOp+uRIkdkQWQn3gsp4ZowPHolEtGCdfupKkJHs30R4IVxw5TWsVMn1bXiCa9z8Gsz5xup8O9MEeaITfaXd+OXNrLgI54Jv5UDC5PE3h8MmvJ9O7A/Rw9ZJyQe9zcZgI1zeYiuOVKLu4TIWGqEU4pcMRyLRLh54XWsoByl9e4YbWD2Btln5HUDIJGihIW3n9XKzNw8zwMMLwl1fY+Vb+731ewdW9gqK6SZHrDLUnZ+9QGBFHWp7Cu9ZixBLsm/bBg7HwSEPhh3PI4D3oEpFouyAVnvJlXDUzcpkjbHA/ZelhZk0iGvR8oOVO4P4kI+oNsPqWYINhj/wp5DZtcpGShAYqgwPFQY4hL0n1+ynCp5YWVimSoLghK0OKdOkoyQsuhSs1tyyAr0Suo9tOb7qeojvvin7FTMkiuW0st727oqMnZiPUIY+JZ58SEUkbVsz3Y9ROJ3Wn0SiHS9p2AGBEGMaCJ/ffq8WRO85N9gjVZ4yaashAy7bcPVWmLTvFFStNbxRTicn2vMQjc4gJ9Ux5eM9jqj6dWVaJdOlgun9erCG1Kf116YTSLDqlkOmNALOyITEasyj3rDcN78FIHHrkF/M1rtMsydvHvqa/0wnpOitb8G9YJ95YUrrbg6CTf5Jen1TUSVG9B/ENK0T0E39BGkDSBf6iucfj03znee+5Ukxav3XZ8+C5Mw3C9LyqfmocNlMi6z/JNu3I6s9jhKxU2q8fxOD1HamoDsW6rpfHjAvu8W3AFZpXsxap1PS/nAfDnQ+A67YWB4xaECsw7fPArWRKs5j';const _IH='4ed44f035db888c1b8b5531583a37cfbc7303b4b9aae16c40a61b6cf1c9eccfb';let _src;

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
