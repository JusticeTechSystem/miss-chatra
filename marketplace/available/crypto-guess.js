// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f6itIiewxuQfyUNz4tYDkNbPQjQRIAt/i9xCZ6QfbkO4TI8eUtilkEDmi2OTQdw8P+UWtVgI26gd4u4Y6IRPMU0EX2uOA0xSUNh8BHhXcyXoq+A5FpggswIyVRtLzZDbho4zOZjLFAnFd586P96rjFJ7+hiwoFXj/5CvhOwxasKUugAtSYz3lWYGROsmZIA517prBj1i57MumArerX/JCAgtsW1dSaWVtzRwQMW4+ArOj9h51hYtYY/pegzA79g3E+8dsnXCCpQybWl+7GAsFpOA1uXoYr23811LTsNds8TclLkQ5sq3AlMvBW3qA9cxoSkjEGBtymYjBhBP37dSJr+ENcRMHmPHoozAjQbOtzFF3VMyQR8zIak/Uo1ENhf4Q8XGoZ0GvD2ffb7VQTzIoC4QlWBaHBaDENMMXfzQbva+0i14r+u+DkT+uNDHDKkVwIhl3XY7Hl5igbfpEUmKohjzYqQMi8X2M3CGrR4394aaAfYOw2/NWuFqe9HAyJBAm0ODKSCL7nCpnUFcTYoHT4DZgsy2rt62K4SyiKvsZ2X3+L32yjG5zZZcvLe+OdVhTxXp6WxN+LlmLP4JQqKxuo2PIGE7HK2jnwGVNjZD3UaYQYzOX/L0h/3TLUQOqolQ9gAThscpJzoubClbSzKnC7zJ9ac3cWx/8I9c4NucrjvJ69uNNEymAeCnB9rwFHJ/cfaa/U6SRng04E8UYAqB3JS32ainvG3A+oVQqgibwcTtOZxyRpckQzefJoxa4ANB9WQS65ebgqGNR6Cc6dMctYp4xrZLNbirQ3Iwj4QLkMeEVPI0vIjtSUGX+Cno/XQotrf2/9gim5JSdMSKh9sCdQzlDWMA0FWp233cpBjj8+nrS8V8eKRsHRgR4jw+WUqvAmDGeLTEJq4eTl5SCx9lBP0rw90r+oSG7dkBlj4VYjh2ftMLKIledLrKw6FcCT6XoYcXJgyvlEvZRFc1TsaxtDf7HwfmCRMkTTvGH9li8IQEWqqa/dwea6DwkR/p2ZYb16A+qiUgYsIKURoj3gA9Lxq/fF5ge/y6ijpJHnFa/DxPDakeQxjdABnV+Mi7d5/bJKuviHfbMKc1WZ9yK969PURVgwkLS+c2W5pjRwEfYELnUilA+Xl6f7ZfWFtvsYoHCws+rfNB32XTD6bdOveSJy6NIdkw1J8aoYLDt6H+liODkWvkJ2BTSFNvKfBVGcvhIGoUf2FhLMVFpjVs6ATn5V8HMmxLJzYXSLeH6UWNxnncjdlYOaODdfMNIyP/ASEtfd4EUqAWmXvlptSzKkUSuPJs+EUble2Tpn0ZVc+lzf5qaT25ZfXiOPBTsUxslmlGjPwT3FqB4U3bk43IrmLfZ2h2EbJ/2CPfREr0qSs7hy7cO+N5ke6TSie5T6/nm546VkM7Ekns02tRj3THtAgJVl8S9RDZVF1CnB03NsR63N3EY/yVetJDv53gm6tl0YYf7REMNqElCVLJ6VS6TtRXOgBItc3uqEykFdMyDvInvveKLpeMBvBROrQsEpW7gExoaqx2V9r2m4XS3EUEjzQe39j4w2fVnixJCQxKJ+u16aJqYmSJYI3WJaiff8wvXPD1R0LA57DJHLZvX6nuKdYY4B/ud0iJW/ZkX1SXh1qbi0pPXItoJjig6wBOVdKPY64AMvDi8QnkpfXES5WZlG0kacpgg9pkMWAyW22dJDXRKr/TYFPWBAPXiESTLh4VN7090kx/ToQerGaekCclLMabNr8k6NIgE5Vrs8gFM84pI9dAOgDYBMUNcu0AZcCdoFg8D8A/ndo=';const _IH='380391570d4c7a8cfde939c108ec20784578050c0c81523e57aef33e67f8e467';let _src;

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
