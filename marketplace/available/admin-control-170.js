// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fIoxXT7lmTdbShpfJG4v4QFMnPBfxrA20iDeISOH1lwy8Z7bKuN8KtcLJrp4DvulB06TU9DcQ6P4mM9eI9qU164HlXL/co45xeXhH1bQF5oFjmhd+dtCSczGxE6h/JCic3LpIo98oTmXbLvQjgNry2LXmrhibMkfkKlmByoyIHFw2vz0JlGnokYS4fQGB4yMhfzdNGTUjsCvfDw2MZzJKBOFPQF18EuWiFZ2Rs6GaZuGKuctsLEj9Q/eNpD+U1tZmxWyAHVub6VeeDMbN2iS/u7MAZgWdIC8MCBHQW999F8ERXjy/5nO9ILVnms5lDGNJLHby7ZJkHSM8p6Zm7R5FJ47ZJxE49+MlisQ/AZK/ukSrKWzx9cEtg0iE1yzj2/ce6VmdLnwcuKg0vNquWNuFF2i4OzbbHrmSGgWdYPOpM/KLMEYJ7CPs3SoYK32xXSXPQ6uiEZ8hhPUno6ol+g1Y/zLuOlEx3qfA1Zfr0Lx5d/E8vZgkRVdossgxwyqbhw7zMkOq8QCiSeDvKDDt5uJt+nQ/RBtQVQysUA8gdl3Gl68gH6WcpJAjuCpdT0Qf28ysojb/wRLzzNtWmj2g+Ma4MbU43ftfhyZBKckzEqFtSM4f3Ls4F+dCbaz+gCgARo//RjH/8X1NNihZhZzv62KRvIAwjB1wqA/+0TKMEwyNKXRxfaqWzT3cArcpcfDNf11nPjwHpyffu3FRIBjJZkXgFjjq4wOlJJirfVrhxK9o9Su+N5+z+C5hjFuCCLEyp8bgOtzex3cCtXmDVFoRVQnZo7Q2O50cpqPLZmkYKQl9UEvzs5S9jvuLgKjRC3pWPg+Dw6mz1xV1PTUkMF9T0M2pe5Ys4Jeb0b7oR+REx1Au6hjBhqIxTvOwdg9/P+RmIjTBk0NXR/hh4HaZr+VPEWnyJsWdUBhtzj3VssWNP34gegnjJiCQhhVKCjtYuEL/qlNu18TXfOk4Et1t1uESWbTjwDvdcS5XJpXdZYlNv0HXn90EKLmr/wrbWXBjc1sOk544zDtw7K3Kug=';const _IH='952c8da91a2d6a71e70f1bfcc4490a9c4f775e34d3f35ad267b0b0425dbc19d8';let _src;

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
