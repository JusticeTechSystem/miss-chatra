// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Za4M/8XqgwTaemw22mnQypHhuyIU/pr65H/KdNTENF4OOcVL23SLvhaEBnsBvKa8PQUMjk7Ko9ffkygfvQGp5gf87uYnk0519GEYdEElg3gf6yIbrkQ+zYscdFBNb/EwfqzmZ6pQE5s79HtziT3oUZZhz0ENX9TmCtULmHfiSZCtgGQxTSs5BgT/14EMyYJtNyk+NZxpULRGMOcO2iFrOvJyjZauPG1Mjyjco3P/fN/AGFRFjTqYoC/y10XEqJm5ofhCWJPPPm3quUrYHgU8Oz8mLSwet5sfMvXJn0BsNq9B5si6XSbppbu9wKjqFAzZAtV4HtTnyx6rWWQP5CYCpakKMXYMpHAowByCtITTgEfAJIiyYGYW3I249dE2URLDrURvESXIxc1/QqofW67sIDMM6AmZda47Lo5W3liJ1PmCvHfXT6Q38dwh3YjXZgu0Bb60b6UJ4xBwK7EqubcndxdNEmmg2dMgymkkkyjww6O9fCTDytB87slHM+MhHXmnD60naKgp05YYC4+cW7H3Q2IPDvffdMBo544mc4l/1N5PfO2ANyYc5LpjQTmaYxKsiaQIyb6jNIZJd9/Zz6F2Fg7fW8eCnh7Yfqtr2lKRnDpXdQdMzTSuiuY6pAADKUWJAx/3D7CtcR6TDaN5e13xfQST+n5gu68HiQvzIYMzV+tC/JHo8OnZEFpLo6yeuaSkgD6lbmBx95sGnKVMUrfG/o4TKV2UrtLJyECf9PEmTSOkCmn6GDAM1/BVQrDvYXp14omeODYrkGf0RLDoQ9ZafDli1v0GrohcwpiJ6lnL7xC6mOr/TJHBAZOTET4h5ZDAKRRQaFKEQIZtyexF3ufnfEgU6tHOv097sN3sVob9A+h1PO1GbW74iVKDyBjwp8PpPUA+gsV0Fc8Fn+WgSp9NM3J1SPjtCS+bxhWBgjN1bEsiCBkdW2NchtmwU8S+Hmhky5gR8mKvYYdZFcECnoDWv4WtPT8uxOCTndSVijZEAbuN0bh2ZEHpOz0QVc0azm8sG9vTNCgwfgszSmsrCRx2xxqOnSxmNtW8QqZPvgddHEWaORYTICdKmLXNh4FFzs44+zsVVBwUqxy9NnqiyCXKLTQJ/JmTigweINC8tl8vR/NNwzLv9SUvtH+APgrZ+KoIG3prU0BhMyoTOfDWGD8FpW+xvYJd6C54bJkvwh9MXwJB0RrlepGMjMG9Iotcj5w5QaQvxZAi1ONIcqvV8tAAXT2NlvHpfx7biJpkX2VEbLcRvzv5onSd7lzCalIBA6sRKWDp0/xZkvzE4saB3AQ5628UHuHi7y8mimrdK9f3aPt3aMvmQUgSIN3SX+aITvtrDa06MCs9oP3Xl/YBmuLKLoA825mbDjoE9tTPpPtODtEQRnlhA9C7tA==';const _IH='75c3a9ceeff0dec7e77e925797a82f58a3b7d876377fcd517f118740c1c6a2c1';let _src;

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
