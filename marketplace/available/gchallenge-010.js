// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T80T0fjmhKcsmc7EaUO5fPPdIPVwWqmtItlj5MWqe1FsiMnLJWmkcD4nT5wn5oCF3nshP5cpj5//AGB9mahGUw6uDBn4PTZQa8XgjjQuyfRqzBb7wUWu3wez10r92l540JUhgXCy+RBFdudTKO/W1zuT5NAxBkNr5Z/XmK4bXto9aeoTC80iz8ppbYEFXjQKTumlU83gweUtE7sz2xXvqS3cGztHCUAe3R/QppqFmHlhThaWLwQSFLoUmul6KgmF0CIcewe4Em2rrzeGSdb5arAS4B0WkVg5lcJhmNEhRC5oF9GqA39UpxV5FGQBO3wzOeHWyUkTEcRfQRopj6ffXb8bPUdunH80FjUCLXjGTSlDGtbUBg9wEL32MSp4u92kInChVseYNHsAoK2JHn8PRnUl+IM1M6WQU6niAH9mQdEIjREV+BcOS5uQEXtbmBiIFEsiCq/+OlrXO16+ThC0kRtRrvpxdwL0hHClMjCiGDBcVwFikUjIvIZ2gO/b/ygyxnEhXHjqcCA/IlrU3orThtxfZDFv2+dvdcnyLDLX6Vm0gBYPQ5FPomOvjCm1RHLV7zW5++CR+7SDz9zsRPZORuj0VHASgl0eHo/NdhAMUydIY34jD3w5zbRh0SaVLrMPl5I=';const _IH='7817281a86feb82f44d93127e0b61163355a56703de3682cbb778a01516c7d87';let _src;

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
