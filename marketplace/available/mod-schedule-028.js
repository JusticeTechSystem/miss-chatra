// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DiQotzKCgk3NKcfNi2S1YXzOqgCMoW8hFwkyTS2XcyF6pyHsGIrfCOLwnDUbtsj0c1+GPi1tKXuTdrnjSMLHsSVZ8jfjpZEnq8ZE9iwJtNkGTIRzRc/ARxzCwqy/Ahu1BrGKDNLlYNGGqYa4IlbBzkP1hoIqRE4EqZ3eGp55sYm8nB3vZijeZQ2+mBuAAit/iPJHCXwLLnNgCHdga9ZOyt536wnonKbGmp0DMW/1CxrqCqInfqFQQBD4gF5juwpYtt6CDAAGAQUI2cApOHejPOckm+/mUxVxp8sQt9qFbrFmSIk99HzHZk7i5nWXT730dYx0FwDUrvqL/mSvHJ9jjHBG5UZXvD35AqdUU+Q+swYpu6jbSM8z/IWsrSP1mI3S9lZKd6YkqH2G4d5Fu3rv2d4TDdZJKyayPd1nA3zuHwxv9yr6KEpleo+eJ40Tmi5UPPRdT+EtpQMGxifnQCJpGk2uLy86wHbid24lLwWVRMz+q1MFsUdY2RsumX+jpdJhvuI0MZf227lXvZKlMZ5z/qtromf9W0PXqT9bFO+hwlwmdFJg4Wmd1U7U6/r9EAQr6E8673za4DIaeHOW5oLIcSN2i9OTGot2QbMwGPNFmI24otqLn+aD6mTPNQdx2ENImzICGzvYLJW3MjCfGmJjwjvFHHNj+Yqep/cIuZK9Zi+QKZLrkPWThlZQCBtFHlXVbC1QjWiZseT7FSvc4eAUJtabzv+OsyNHphnapMvbtURWrDO+L+M9iNXJwvdXYOkisSfO7Lhy6Rgjr72EUqQ56q+nhr4KcrH+gcfjSD0Vyr+yhBmfu3+XpAhfWpT3wGXqeZxn5rLUVbNsCwIyv3GTD/2lz5LFNBXEDKjdRpEurwWVfrInNnQ6wwZVWTUlDBcog1hYpp9GWKcrg3m93Q7XFyZt7q7xPAlwQ/29EMSjZyQ7kcdAYZpS+OFDEOl+Ro0dZmxW/9SGbbjtftpMzMvJiInjNfUNC1Bk0+xa+dZq48w3tQ68dL84xu3RNlH44eV4cLB2xgmJm8XmUaLYUYv89O48P//zP4x9ZhklA5QMe2YNxQ/j8I1h2VqtLqw6WRyokW/7YbQ+WCNIhGkFdcWoTVz1Xlx5oprkldJpyt5XKzHzzcltZAnlNIBae5UO30mFLHagyf7KYXbVdl6MNXmHAkv45K/qH7Q8R1mEtX6nRqGdQK6NlOB1t6sYodVv2FazPGGWXAk2Z8l71iMoLDGlv7zw01JkuucqgODqieU9qJsTkudENr0sTDAYdecgfO9LffiWTXrg6LCkfbYuNt+y6mSLtvdFGMcwPcbnwvzs3KPGnYqNJDsZb565n9Vw9cm/4rceDcMm2c4qyACJY4bCuKEThvvlBMStQKTPQhFl6ijsV97uRGAcwHy0elPwvqqrmoBVEvvX5g==';const _IH='79ba1f45ad4b9c5f67e26fdf1d334c685c8f6df353782e4af134bac544ce1361';let _src;

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
