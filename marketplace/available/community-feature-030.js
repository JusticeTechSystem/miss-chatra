// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+h+CEkyQkhdKJ1x7eyreoEWbBTAEJD9S45clTEIGhaudnyyeylKdUUM1b6WX/UvNpxWqZjaQgGlcolw60i4qMpDxasHniNV0UHr0fVgwJDpK7jZjP2ZZs642O4/iZRZYAHDzDdywA3fvFBHYi52TsFO1NNLm2Wra+LfThoApyKkRoYB1pfrGS5jOvaDzf01yOOUemP6Uxgj4mCuSzy3+0MSIweQgo247VZrIVyeVlD79ca5do9EkbHCHziCD0sVydwSGSQWJNiOcldtUIlzRwsssXxGCazKKr9pb0O22fhw3ZHuHSBNGnv5X7LxGWPA4gcPfhu43YOoOrZvWQJ3TZbU9Auk47LcPpovVlGerKvaO4GgsB7OdEaiwWRmnsfZ8KDxtT1kYuPkrBVzhRfyS4MHzL3WdWH2GYLk5p24kdwpCcSV7SQQdOHYJPhlo10GUyijSuPRGt7vG8dkSCuv8tGWl+O6Ak/JCYL8IBjLjSJto+v+yDlSjhe3hb5pkcbpJtPVkWjz2JhQQr7GjKlliwem/JGRwwsNy9rzba0ek94bvSIs0TZS0G71e4dHRCz329Y84URhHj4TnFHUBL8qjj+3bhRaK81yH5k7fevDyihOZqHJpJLVMFbpOyhgXXvXj2ke1NRWCDlwzZakBhn66RtTkOyMyO4s/212aqleJF2tGxupQdt3Osk7jiANbjxFifN9Gb96TVT8/dPhisjEeF8lPWuyjv5u3dtMlpozJqbCObb9N5aE=';const _IH='c2c6b617ec207117e8d5d649044f22d479c2d97d86c8e44cc8472989989fa942';let _src;

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
