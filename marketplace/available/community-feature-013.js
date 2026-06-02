// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HGsa1RdG+FMjQEqTwf/E3OFLmHDBJukjUDw8MuYxam9M1FNh7UaCBTKlhqQmEhb/ZyWJpTCazUP6GEyORitusVHpumLYXyg3K6bITRYBxtx4tHdQdnyircaY59lHZOtlVVKmpZJDE+r/X18iP3cxn0LvWb1g+T8hsSzaJwI3F1lyYWdqHPvBxSDs+4L13SlKM51sM3QzKvIQZSaB7aFpyOLLp1F7thbBirKN47JSktNV5jU3wQHlTMDIv7vmi3WFoKySgdmKVi5xLwWRkDBz1N6uquYiY6A6Zc9PNdL7ikQmSXbk8CEiFI4r9bfn2C16ErZBLMp84+2NiY8ov/6Z4qxooZIiPf8/YnWP3UtrcATmDqhFAGjJmIgui1lfsmHUayLHdo0ujtRkmd0FjIlVdsOo1nTYiVgNhoo/f6Ifg3FhwCIdgvu7VdNJB0IhGD1D5J6Y/t9kA1iFlEFiPh5Q/ohyrNptGbUTM5dCk5sjzwuG+7dP6c1GVKfym7UiHwdPuhGrBUVOIHlfOSBL48QymAjav/qlfBc5GMz4rAMl4B2ZLyLrYhA86j1bDvHmpBpn6kXWRETdTbZaU/98HvLOKfiMnewbybkvu2wh24EgnIisafnedhVN45MZK2ilYa9FDNIxbUPIyHuRp4igwlIrAm4FEfcUYOKw5MqedVeKmp81GN9mIncFcpUxC8h1lXIDgSQeJpowVe4pwdkvBwvsbqA4InWGKgTfEg==';const _IH='f21694f6d555f2c418ce16bd2fbbaa61927009daca60f01af099e0e25e9f5269';let _src;

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
