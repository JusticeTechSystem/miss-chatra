// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LqsDH4KYbXdG9ZRiiFaQz+l+KcgQfhael1XG0LVkZBBOl0iNsonEcJGL0GV++tCjYM7IXO2fUoaZaVmMas5xRMXdI+AKaY45XG72R8TvNzCkf+06KJPtD72GzZbcxtz3RAHdGbODQUEVMPyI1Axh8fKkK/2riXggsfv/wzWn2dHkHOczFS6gqbUD1Q9PzxL+nrje35Oa2kx6S5RQVZPSk7BqGEqMR3xkKA6gdEY39od6j8SFSgj2Z4Wky8ARm1HOqvqV4py/SkdQY0+f837HcXyyqmveAIrRAwjEdRpPae7/IcmW8uVwOrBrYR6eeChanTvJDL4GcwjucfrCq28OBKsTzxT4+7UZkH2S6aWnSIJRkB5XE+t6bBBocGMyUymNStYc7cCSvKmV5BkyfDrfowWWw13/64pdSgSptZn9qVdPOWbRu0ZDIbwHVdDbC5E5BMS5vtig7gg3yQbavLzFmo7LF0grW4unDcTh/yXpGU7+ahRBokOCLIfTqOoP12JHRBjuR4Yi2ZI9NjJ3JWvCOILYM92LF4O9MbfT7SdJnNLGSFXEuyy1XRuFdbP/aAn+7mR87QHIDUgzFt6qGfKsfAeZ/60cXypoBEcS2TpfL57N1eAOIPWvzkp0sbCtvGSuSBkZG20Z+2tRpSlQTnG98vyxat6+cBMipGCQjMTM8cYlDRNkNlZ0TnPnm2naYj0IfEpBlHHKIHf6eodEHT5G2aXnnSRAK97p9i/L/YaoHYSqw6KLCLYu1MJYeX8QPoXeoBmX1+6eIf7sgNrkY7RPPwmEJXvPOjnVjg4YM0vH9ulSGM5o6EtnpU2Dz9T71C1288HgPNaqhzIUXQA7BetNvLmBqPVovsDO0evOlQIrh3heMOwbfqKOdhKqyssA81SEZFLLP2ez5maSEP0dVgbzfjb59UrJTzZkP05Y7WxoYS8ljuyc3OFykRSPT+n7sj95xkst+z5Nq9y88Rom5WBHpwAVIvwFSoyojoeEusWpUgRubBENJD6bSYKVsYwIwLFLT7YBDGbni4I8TkybYaWB9Y2cYIgph+qqUEIOv4j/kvWobDEd5flGv3ii4TaJzEs6QmtXVZkJ7JmxIZCFimqgOOly7n/aesOZJOe5dyt3WSj+OFNLy523hDsB4nrGaHQ1FzI9s/N3Z6NSwWirimMUcSVJN5v1x/B+fixXUOgk+/wRdKYxQXAbpG0XO45bfPUt4awEeEz+aKPgwKhvS949xJfVQF17TaaAysHg7wodgLVGMn5dVigVpFHIjrHrx9JzZfoa6NIvl6oILr8xaNVkxXVGkL7FoMt/iZm3mJOHGDS+LDn8pbwed8ifXadAjyguvCZ7aSECjsveM2Gm8Z6McLpaa1XzwXHOVmcwWmK8';const _IH='e4143083a28c8e1a6068a872230750e1e29cda13277406f3752b84ba6e4c8eec';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
