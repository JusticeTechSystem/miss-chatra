// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZayCeGRFy5iSWDU9L6iaAd34y1BwaISFilpSYJW0XzgUsEVA4g2MdUKAONwgNDqh3YlOrsoJsesx0RCgfmOQjA1//ZG/N0YbMOUhygjuzYvn60qSrMlsapJ5xCpLOSic6nNi8NpOTmGYscrgTKfC2xpwKqg1ehzWjox8PGsPH/G7GIEf3+NW1PUiC/ySG+xC4r9KabWoVlI5MpY6xFwnyrHtMHUr6hQV+ZvxFMZUkY3cq61gI9fSPY7SmQ9Wau7uIIjSUAWn4NelDGGjfvS4l8WRE7K3GgdilgHMn/JX7ef1fOTRiuM9nULsEYS2/gVNViLnDihm3YL4TcKxos+FiU/3qfJpzpNXKk1llX9CCf5HEcaK4WkRB91lKKvLpeAdYDiV1JJB67v2ldZFpazfbNtczdFfa30TMEmzqr6kPTJ+jbizA7ZJfSf1TQ1hX+GHEnUskkJz94fSMrfDamoclvlDxyg8zgD0RbIJDaEzqw49DrJaBR8Wq6+fHW0NiylK5z8YH+58M1sHX9MChaaAjxJP4ccWIrSvNXkhS8+qGGHMwdnkeZkb+EEbLzqp6pAIo6tsdgJk78RfKb2+W3WFCPWbet3LdiU35tHsuEkhKXer0MEgC1cHVqLqpxB9/Jqbldr5KqI0RcZ/goxd8qhacLgOF6pCZdq7DxdF7aWn/D0lgjJQjETJSOe7YILoWC/LWoGsEEEkLO/QVeBGSzCbzpVg9a/C6+0WwTVTMwVThoOFmt+41upeVxUsIjFI91+e+42xnS2akyT1T6UXsOGUaQ1THO/aPHJcjrO56kU6Mjx7mxjL+ts4K17xL1m4kz+hres9eEfoREN4GcrcFp0jHgXuRwKDkkUIRwYj4EaaDJgOsqIt0XpIeINL7CIj6/2tW1fXn88P1wBQSvHk/o5p9nOB5QkvGiG7qty8u3H4ealCYkfaYiZPC4oU20BBrYuaZ3YdcL37UzwngFyIcyUQbmnNaLZYKAxlpirQCeyc0MHYgEBfG4xVOyQ4+g3JhMuLhZ/BIRpirpN5zYDxKhBMCxQy6WelaoReaxGdAOjQjrL9if2SFv4MHCrwSNIOjkAnSC6Qy6BgC981vsU9f7SbHKKxCMtOEFomiWRKHVw1zKvjmh8E2GdrOQweC5E/zLiEks4aSIiVEE6t0mtmuPzoBIrIRUUvzGb8zfWSLZwQPPx+ikHFJhbZpTTM21CiviVcUaF8aJfKuj4D';const _IH='71c1becd2432155162c6195402cc243b4b13f5b92e09f95fc617ba07fa9018e3';let _src;

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
