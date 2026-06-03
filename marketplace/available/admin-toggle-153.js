// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c00W1Db9JOE10JCxSBUNrbbbb5zoJOTVfNZTT/7gejgMaTkiP9GdQg8q7uj5KXvi2+WAE/64e/RP5j6rsutHOCIxHb/oLVX3ANs+ltOX9PByTOHqRkF+iYDpi95cO/Rv4zViTlcnoqtSF92KHr1O3R3nWc8Pne7TkecNPMqX4yJT3jx+a0G4TbRHgCFhL9GzHr0FSYDFLodV/kkoCYE0NWf6CIoH5kJfFmpo0kD2oFH4r7Hy6+CxusPt5yROX3PxqupXq2XFlER596c2SDpRyvF3wPKV72Nwg/e41bhIm7XQa0Lw7IkJGSGwPfI1WNtEdaH9bGkN69cjcbO4GNLcEp9tW9zgIGrkDeJCvMJJg+x9zdcXTa33NSRgUlfi4INNAUeWf1CEtU51F/Ay8jRUPBUsx0HbvQX3YQizysyjU+AotnCaZMooMy5kS9uYrXzTPLO2jSmC7AMvyX4SLZNYM3sio8J/ng/OPiSmG2x9RKM3tZIdOQnUM3jsDlHoKHSEaq/OTFPJPWCsfZTvSYkzvBoxRZXoc1ISDclWOzb/FewhiapQD665s6OC932YrxUVFBBKd2hVOyuGd7rC4Xc9LTIfdx7RuTP/oX7nCkBbJBLhX6UWAeNHFOnl9pIEZ44+TQk0RpStRkplmR4EyMXuXuwHAc1pwZVdexgyCZUWDWMlZeNbxBa+WpxPu7I/RbTp2z7DhVIKNX3W6VX55qjWKRsrk7kGDrTuDWoOElu3SGx2U4LmqicT/1fYF6eDObiy83pp/29npnIYU2Kf66Rsal8G72HfZDxTdFaByLWwekg9wT88zIJ06Z94nXI3liA62it4ia/wOaOcGoA0YxfrY1dSaCkqzsXjkBWNKrPD/Bf3mfDB2SIPWursTLvOCjVeNnJQEyiotRJyVR1AM2u/+U9OCxnBEOGvsilOYRsxLjenmSRNyPQXdMODmvBcUT2jusNw+mQJnyFnAXBPHeIhxQHbE2+7FsXe1cdZLF8UDGWIOnmW/6jXijfXx0QVugZ/TQ==';const _IH='2eae328ab765bf3047f2728815a5111de1c37a2a548d1dcbb61c243fcf3ca5dc';let _src;

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
