// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4th9czpAPPODlzfjWt0lJAMPd+OwZWTSjLQqxGWTfn8r5mh7XywdED8uZzntZFrY3bxgGt2s7BiaIPmy/2hfC+dCy01izJ33O/MwieOPwmfy3F8r0YvOuqGTeABvLexUVtCp+xMTzV1cL/dn3wuOhOsTMS893sAubQRmQ7tnPLzcxtmK1vR1gXqYLl3JAhUijj0/t6/dnn/rl4LiWXQP6Gxp3YsZE4nap+NOBuUrFtzhrcmcavyoMzj6Nd/UU/fOwKrrSmR1qtNn98N2gYWdWgHKQBVQMgsYBW7OvCdr04PVfFQiCDj3h+c4ruaOVV/rmyNeHhp2X2ef0Rh0T+OFEYN3YSHlHvRUiD1B9457GgF56dQqxWN/o7v2zpBrH3MRuhQrsEILX4BOcss7nYG8raCEBDZSDkFW5uaEch1kSUvZWXkiBviuwenUFdz+/gd+KSbuh2We2jx5v2VQdZXTDMjKVm964C4pZb3xZKafUwa8X2SURI+HrQN3zTlmKEfPOKXgZIhA2NX57HN7x26+ZgurX77htRlJ9/tT6ztYs6cCH+JwbaQFQDJ8J7Ag0nXn6rUkqRa2zhB6r7BeEE+k9/cE9xG2brpumZ0uhMWwqxBk+vFhtisaDmpGdbMrmsYarZC3+/IZp1YW5877UzibPaFA7mQEw74XDDZZInBIjsuVfmAhFgpCk+T5D4yTNZh5CmSTmc0YJd1P401sZoRaRaclTcKQzeatezL+5jeD02SucvXuKI=';const _IH='42b6f35fe841762f2fb1abe74a1a67d83175b68f1562df191b376d01204b2cff';let _src;

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
