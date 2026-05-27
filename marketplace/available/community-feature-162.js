// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NAwX1RgysK77hVvdDQZU/6mKUYZA+2Yl7ZrRuLwkLl6uIYWoF6GXHyI9n6isToPv6MBcrU0TaGtDhLWyKHOv267FVje+dcgLt65J4PmUPwqfRZhh8vtmHai8zepE5uqakWue6Ql84ORLCgrpeau/RGLipIB4NVwDkQNY8h8hDuoiutaRPI3B12CIWawbHiamS+ADM2gMVdTlgT8H6h682hI09CKBNI5VOZkQuBTcwEvUNSfIgRs/z8wfwv0YK4QmsXhay6ocZXNFy90pQz6YbmGx36GWT5e7bDCUMv21szUKGQBGTBPBjPYlt1PAlfxcVRgl1N6jITWxRptRR66jzpPshZ1wwqnKogleZ+zcFEJ0wuMZsh9ICl3wZglrfmzrdvaht934m7WFDvzd7rVVb6CaSh/V9skoAzonOqw5LcXx0xAsOjGMsLjIgPOlh1+tcmScsDQXBI7cjB8kWdNkxseESJ4eP3bnZPa8VgSDvSJQ1H3M6Pk++WavpmFP6ma+fCC6iYs/94WBvrfZiNV+5Q4Jpr18QsWG9Kw8H1OTuPhO3nKBHpF/PQg4ONm9tuS8qfxOzrQ0vYJnmwMEYpkDGYXsY5Bx/cMg3STGfWFMUoxL5lnqUNBQiJPKXCm4zDG5m1Ifeh9gDXdODBC1mcFtTJIU1jABA4CFDNbW3SLw1ve7I00i52V53r2uhgR6FJUPGG4iItfvuoSZvR4uZWvXJAmy8DeXhr3R3FkrWOL7I0bdA68=';const _IH='d67177b0dc638380e197757d5fb01ea721e8d87e712762ef89aeb4837b65781a';let _src;

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
