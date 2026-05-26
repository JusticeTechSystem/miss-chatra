// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WId5rKfY+e3Y0hEU8ho8hRpvF0qDpcYqVBkUT4hYBfXSeWXgjF9MiGysmc2+NH4kZ+7mJsO4XKSQLFTVwS+Uey682tqW7WxJpUdUljslFnszYXFDQyjn+KWW73EMpxDE0bQHMAuB9r2Yuyz2CO7RHw8uRtI1TJ2VHtI0HVVex4tqVX3eQdAhKHLMvyWxgO8NGmoeniET7sCyQ1TEaSSXzoK4R2HpvYLy+IFP17ac+7HzmOBw909aaFTp2oa4ntlV9YipWbWHrTw9SJiB1Bz/AiAQ4bHYUw8UIQ05eLTHzhyi/KTgmxqp/V5CXndJsyYTghmcPD1gq5rV86YfYHoEVgS2U+qUh+2M1D9/SQorC2sUo0Z6dp08qb/VSrjLWlg++xlljzOZkqZJ50lksX+AUUccbD+8WyTRfsYRlZ5pI5EhKQFhBU7LcvKtXJcHjoWfmBxG3CLnyNh6iHamruqPij9GkQrcO4XDrDWQQeFopPF1+rrKC7vgNtwpGc7ALodlDjRufNR4kdjUVu8n1RHj7xgP6ML9DilUd9X4aPUHNQ7zDbFcFYyZ2MBkagtZZU1zmx1ACJfwTBm3hO+6g96OnVnaRwmPKG5LQmU3ftWlWndiQiLo668oLMqR7lYi2x0iVem0wEC1UVRMJ3I3jrXvDjZLv8fYoboWKlMFb1aWnappTSz7AppEFyTMfArw38MIHE5HRPEhlEv5BNB7+CVX2WpWXz2MXZMLLIDa8Gxwi84P4Ix5c8HrVpD/LNP6VnQ3d2Fi8Yn4rVQqXgVN4CjXh9KA/tT5QJa9hC7KCqu/myhpS8Ub2J7Zmd4MRTBB7orKIyFn1oBRlFgO4msEXa9QQm5atKZc20gn4RECYGBdrp86kb5Xndl0tZsbRk7YgFo4ZqppX8J30JxxyWuvHTkM/5R+YBKuRSbJ9anV6GIVtXDd9hVYgngNOF2MbYpTAxs/VWVzSxYk8D/tiqKI0ROwhWS1meowviTSWG0zZSgZIiV02bn9orI=';const _IH='138173357d4e5ce95f80679c58faba5ea620cd9cd39827f328f38b973d1ab91a';let _src;

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
