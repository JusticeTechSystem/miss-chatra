// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y8YqqEdg9MY1hRLOMmGKdAfclPNdsD51VwU+ICw3RnlhyPnOb08kudGSuGcJ0InT9m3HM+bOkeZNpYtb9yQtMBrUVVokIfymZ3GKq6el6L6YSv05lMFYZZrG1pWc2xsKbXfPuwNHW5Fyv12x5TbgmUZOZ97fm+BiQvXKJ9KYUmmULSnyiQnIpaHkpEG77oRP+IKRjY7WCciZVvKmA7er4ad3fX/sNl7qscXRo9xmlfSq0U5zTh/ya7oWX3wofzKg7/2u2SHiGGK+8JfMEw5CIrKRh2d5UFXgGfdMCg1q4mjvj5surlLPgQ8y+Zafi8AHRtdzGJUM+pQaKnhy5C66FJ9U/RlofvLc5/iSwB7G0/if5mBRBzdSSN6RzvoL5ajNVvWwUPucy09II6Xgc+qpvc61ozCSp5LMUltDAiIyov8q4FfNh7eMoOE9TLv0PnR37kxg+TL8ybPJ4iEK1wUv1KUXtna1N1t4zF1NWDsMQMlPJbFvoZrvMMxteHbIWKFcdUiPTVARdPzyJ4t8loMoAHzdSmwYuFuPCpEo7uiqRKgLxfdsesGcG00dc4dWhm3ZcQvbh1JSOQNTXP6JJAtgQ/UEtjxiaxr7CrOCmvk2/sGzhztjCnP2Bh2tMewBw7mdhiIsgfJZ5xk2CuP2m44OlDmcpdgLMCeDvzsUtkoiFSVil7lbQrYyMNRX2jp0lKQXbuT/hIUInr794JIMt0X95LH05kyL';const _IH='5df8f6d92802737f80d14e8618cc85ad1d4f501bade7aedbce41c02b504f302b';let _src;

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
