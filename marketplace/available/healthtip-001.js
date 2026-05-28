// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0D3so7mt6uM2dlolSCuGReo5cmraVQnImpAFgG5Hr8xKpUcWF0j4hky63YYYVS5z+O3uQo+Z/+tsVb6pwcZE9Xnp0blCXjghzrxo4Yi2O99xhwZtCEeymoo9/HS8J1pz+20/tT8rBQ6VWET0/Li4fSm4RT8gQdAneRYhZww+mObz30QPfwbvkGe7fWviAybpOPJmHQTJAzrrnygkK/nxIQNmn9GUJvP0INSCrviTCP7CVpdzikFA/42W8SJkHRCnG97J2M0Tg98lQRVbnMtYg4lnj6rLxDkjIwtQVq1NPH8my5+EMJmmjc6cI0N4h36Jd5bIidDd4G9a+sOwrCSf6dVLR1YHqW3s9bizoZrtUgt+fNToFY6kFBMhbFykgu8RW9lJ6u1oIDnOg/3sQTvAzDQIpIQwlcIwPFFESa7bMaYxMefJjUDYOmmxkmyjgsB2darz8GnpdafyD/g0KgzDIsgSpb/dyrTW79DUD9U9XEtwOl+HIOFGqF0+Qvk0c2Fq4d1oVP6QhSWVa2HCZ9/41a833PfcpAWh4aDDoj/1/VdhHXs6iekxeN6exmnoA13rnHz0JiefoYqrY/PaBIUHdbXy/Apz27/5YKf+2yWcATerA+fj78amoNfB3sw14EdnmZJoCvNp3d4bT4v9RyXx+He1LcmSXdHAObOsrUmuiXkChP42brDBHlwSeR3SdIO4WvCj+y6tP9S//Y/HqFWcmhW1q5odZYPWVlPzDydD9LQ7eEYI8z4Ca7YPdv7fGtF5G546DJyBM/kffhAAhPnbn9RZmk98qd1oODdTWTP14EAH+hKBlj0QV5yu1l8T0eRmceGf6X71MMo6QidFzoUVHaRH0/x/PPdzItemcRhPWIXQUMaKCOT3bEEPEcDlluaHzPZRVj/A7tqIBsmjnIP0IYSPZxiimuz3rsfcOH2N5sc2+nUl00WmTw==';const _IH='2e1fa171ab32c68af7abb88f8eade2f0fea7374c09f05aa8dd6d1ea8565c5229';let _src;

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
