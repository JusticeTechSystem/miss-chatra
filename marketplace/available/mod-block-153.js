// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jCe/ROAtl9kmo+ZLs7buXcHO/Ug79GpFg1qNoPBepOB0IZMWnWO8woOKhN+Wv81MB3vAhmgkiHbrwAvaqs5fcDvMPZwIZG5qbCEZEHEDNIZ7vTJwsCW+qjuHKv7ThITjgz40D18CY+TvBS1OSag16wsmBODqYnAAJ66QcqHYe5iJJuLUDBpU5lNvbYmECYdjae8M2d24ZgMRgtl0QROEZAoJu3y56Od94Ya4Gp+SzPGWGoj4TKm0RzfoKJ8Cky0uHXDiJ/3UF8YYEsjVkqMGa9dRVSEzKT25CRW9+lNCfi4/tvY9iLboZW0XlRj+m8f7eXtlh7enbgsCBfEaogC69mu6MQu5g4zweWCsxD5+i6BtoriVjxGcpVk54i9pTcxztmntPpAT/0qQnlgvMbZZzE0nVTcq2eTY0XHsiBH62Ceh0gtYFbLq0MUB864+ze47KPPenhfIYQFVHJe/YgdKSdGom7u0RX6Xa/h1w+iZAuhLhffueUwmZTSKUh9UVXFabLcG5j/J/2eDYN/tf5Sr2uBpOybMrsK848O2Vjt0oOwEC2kBm/QeAaWMlNFo3BmxEZLkcFuDY3kRBiDKU8D/bHs/iN1CxuqRpOaNmfrjBtIKaUgzE3US46iaYbjJW8JoEVDkvrdXL8Y2qegErlwQYzVlKH7GvciClxxQnQ3qERkBYDgW8RFsuojGa+EcP7YRdsLnSP3uMc3NLSIUiBGwDc0wP2QhJ7Gy/tkWXW+7/du7dknPflZvjPQu1iWiKWJoXG9mqoRtWBRKT3hD6GxRQKYmM+/14zgqhG9UVtNE+6OnBxwO0kzVZshL+e1VWjPXlEJMJM5upxy2eaY3TsDSMu4vmJTvSV5l6P2C4WkdZwsfSdYjJhDFGrR9a3nZmdNGwff7YpE5k+MCoBt0Lxs7/g/4RhID8ux0aN3KJbT7UByNvLkZCopGuLIqKpCDlZ8PshvKXqS87DWn/fRkqao2b1pswjcStb2nuuEIHmcGJZGm6DlX9kJI5XuiPNyKYUZcdZGhbg1gGR/XubmIo9Z+rvW0+cYAhHFL7M+mDeJzcT3zq8aMHpksPAHoGzGV8jIdj/ty+mM9Wo21nRariZQWSEt2EI/oNWKsrDohd3RGp0/yGV4MA0KNzlGtKNgq4FSaQu0RATR1QKXOdy9MQaeVKonpMygTb+evafQrvYqLv6jpDOJJ/D7bkT+i8+hCUd81CmPH7IeBLmwBqLTgF43UMjIkOKIjrjwcrJyGA6oQTcKtS36I1iLtu7HASEXyjucOp/sdveNrKz0P4Rw7WxIEH98QJQKI/OtZn3WIyGRyjOQMTEjkaEaQ0vBNRDnuXwBAVmAzoi/YDb45ANK8rLdyd/dZzRulV+4+JdVlOt/f';const _IH='92458dd3ef825480d46e77a968af64cd86d41b762f559d5fd9fde969856b3aaf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
