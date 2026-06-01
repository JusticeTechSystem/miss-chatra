// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/AfNFt5fLeyuG7O1GZ6XNV8sr6YWv+hjx++AuX7/MDuAJ9FxxyIS377JC6QB4gQKGqYYQzhHkHonuVeJNu+YAySwGMNQi8ssILKUrcsRv4Y4myNN+669369GrwtIo70u17C5O/6zEiFepWLx+lPTRiXv3IqQZwHE1zh1JsytcusgLFXKKj6ubbyIejU+ukofEpS1nqwwVBfMJ19r0YWeIY5ujfojj3/ImTeYudxF+DsPsJ8OL/J+dr/mjk2OUqq9Mivpt7Y8aQnigwHe4SM/bI2+fdY9L4pyR4yf1F/HrY2dNGzAcSasQLuuVhwdpSVoTcQ/5eJdwpSEG1yqlVD7K4HWGACYMEM34SFEtewNeOMeKISd+0aeDr96z1RmIq1qFIUsIUusWmB1DfucgfQfbdfuDx7dJna4igqvEa+kaffkj0pdA/V1cQP1sq3YhryELtk21Fzqhav1e7GDcQpghaO925hxCWXp5sj9kRlgOYm9cW7kOp1dW86NyFWZqjzvYInxI2UnYhH7q6spi4PShHjPnhdqKDoAuQdEAC/6xR1WAQRsebpOMG9WVROu6B9tWH0FojRRe5AjWwvoO3kxjbK4T+NOxa59/iTNQqyJoiIJzwCOb11VaGEHb9jI3vy3oShsno17elcvffgvm6GysgN3QaI4y1p1q0/ZUxfr/dNoqWq95AZGan5VdEyVxFzOggLCoQJIOXwrDVM+ma4nTOML87u/7Zp6WxRdmQq3r6wUGarnJ9uSCjDkABk/3ej4pV+N3QNy8T/B3CS2lFgwbC4Zqr2emOdO0mg867ZpeihFXwtYj2mm3ON2FGRc8neCWBFiSae62UubVt3jk6e+ToBVOMhIXvBgE+QT9AwgdLCDRK2DqEezSbmk+dr6MGkNX+A1wdV+OEefMs6hY9eqOe3dEBfYNmNHhCypsBgWwxl/aV5QzLvJon8piYuIwh+OTesxoKO+7byZdUDV2wUsba6n89D0AkSiGX7dVr4Fd8r1PK5pNG99Sq0CWUx9EFyV5T4OnvufdMM13FVRj4Yg/2fs21/MpNFhO/vb406A+G0d5MAOLFRchYu0q8Ib7g07dUfJhRHDOJctvg+Pe1u4kTOhs83bCk1GY+awucHKj/2Xg+QW764v5ieg2F5g7leqBf1vkq4tWKkDks2Zy3CQHiFt4H0J5MTs+07ZXW6WYNm9tvYoMrAtCLqlc0BC1sh4qMqx1Lv3bY+Dv5Jav6kTBJSSXVky1dkpVVxdVUVqfgJWUOYelJY+OP3NVDvJAivaY7C17/QyF/xzvRrsip8iu3yHX83xrKn+whCvn7BMfiLveozOA3YaT6CqS4Bic5g/3vS6hxlKVtK3TRbMLzKuJ8w6JMkxSvkOOe0iQLrmTTUsmoQ1Pm8/SHUgqFOqC7T+RMo';const _IH='90ef8567644282228a45433be64d589235db03455b484ea13acfe49b7e5b02c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
