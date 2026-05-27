// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VX3Y0D2lCW6jk/uH2O+17r/bbWwRSEYD1byf/FQs17mVkjRzekSOmHg05J3ySNKzBZFYy7LhMJbb2ZXrFBrUziy/JxeSNrN1hZ0h+eW9KXz1JxW0k9iz5xcqDkHud6kK7rOhJwLFCNTD+00SkpOg0MGRzs/bQ6AbigtD9xb2Tz4S6Q7JYcUHuogutt5G02IGjvUA9/yFQKvYYjk0POaMEo0qHhm+s+neGmNrVTYvyXpj+ynD2N1P0CTwo4MODG7uy9Fg8eaMzzbU2UtaAqlAhx6ODlWx9AZtuDcARUNAfL25XBa4G1MVGQZIEWy9DF0XydXROrG8EsX+f8EL5958a8paoBvLxX66u3ZwRP0D+0S4eN+FK+FN1ecRBY5HMlabvWBXFMw2Z+PeCe/puXDehtCzEOkJHXjwdexh6Xw3w4sas+MGyuM2wtsn8Uysc4GFspEcv+DJEGLNWHxrpzJ5xIjyjl0CX2ICTGQCj0G75INhtvFeAYeRGUWyAN04MReUMZ2DWISat2/kmCIXKzhoq7vQWhboEyp4bz/Vgy8xlJqioyTefrFRJo+u9AlYpRYDZuB/W7yMr/3q94UiKew7UYQ8Ch1RF8KW/xGLTXQa17KEdqxdUJYTJHjzUDGsNBLU26i6fHayruWbfuJmPo5VagLW2KRq7ZChQ2uRr4VyBvjSZ2Vx4ylOJYGgVFAKQpE4oCBSyV4czJSo7xWsXPIECbjq/XvwjsBaTACyhfBHL0cl2x7yiAka7fro+avj4hpUkYMjM1PdDj246t11F1cophwQnKAyXYWu+8gGLUyvf0oRH+Jj5d3pTYho3sILFRcSKaAtTFo6RWE88PsnNOCLnqOSpJ39oJu/wSmLWn+WXqsm+VfK3Ez6B4nY4VIu2sPwQIR65LEEDamr6xN34ySJznw+vXrYyWNiO75WdSLcMD2IyfvbSQPRqIqAiLy9beHh8ASuIy9aawwFu+1ZNCrn3ACa6tumod33rDRk1IU9CLFE4Sq0GvLZ+YZFKTQIAG2O0zM/zL7uhUqHSlkhRKdWjRhYB6kjS2Ec66eR9TvzNQyMSUlm50mFoUCf2bgq7s2jfAHWU4gXNI4rTBOIzjm/R7BhtogwtCuYdmvR/7QDS81hp5bqXfkekMYy+6/kih8QGRd6GEwRAx5mTb53P1ErLCflbPtbI0GInkZEqR3LelRy+TS+4ySADrtLpSC/zgs3ETCHSQciwdEnOzqEj431xS0jV98DEB7LRlCMjKR5MFozDqkAtgedUV/INPD/a5acc8I+MLrmn5qch7g8INbypvcv1f4xiwJ5BY0hjlerTGjc77srWCt+t+nfZhD9qYyLYVQ+togsbZZx1VXfrNRNqZD5uQC7YIB54g==';const _IH='4beeeb68a14df4e39148b91fbff0c8add988fa8e960837a5850eabbcaeafdf84';let _src;

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
