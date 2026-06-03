// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3JH/alPy+ZPkC2IAIzFcBn2MNocwd72LPYrpFfTVa9LYG5cnrd+LPh7tssYjbfOS6kn//NpqcQ4NLPtltZSTB5cU4ZjAbhi5TCt2F0XGUf9ZKjNXRmyBKk0+t3V3QGH7NDh3vYan+VsVM8A72kg0gb7LyIOiyNTn6tuZpQTUUz5PV0CAbhlhDuRBkdXuKaUsylQwIAMzNnYFv5NsptFNAOUoex4oIkv3BZa/6Wb/yU/s7mLbqDsmjdZ7D+3kxOQplKmbM9gsf6Cbdj0g/kOSYi7cBlKgV7TrwMDzEp1g2xJC+P6bXXoZpi/aj+KUJtK44e6wBDBci75z00wQWrwwuuBjmVSmELcfDsE8J40OU/wUz2ExxhZaIhyBM/VaLyoh+AUlwsLdtMu1lPEcEO9Bd+BTR+Vif1f2hjeX/5btKN/ecF0tL4KVyE2WWjEHeyuhr0HAHHUKs+CMxFxLleWf2MuqXqI8QpDTy2JGrx1uWL0noRRtt4E38Ro+nXUJn1TbrGtZTLXcD1vm6B+MhGHik19OqrRuVNvejExRHTZDv99Vl3Fxh2fX5vWRkcS1VYiv9Dvg/4AkJijPtzyDMBcy+G77JZLy+S6ph7VAmG/pvFD+VRMeTGEXHrDcHoPalTurD7pofYjnn0ZuUKtGwT38NyW7rp4NwixnR8s+2JmPB4I7NtEF0il07m8P6UJ8xhfVDBhyAncMZYuCDRnnrt8XBaK+jfqtaNFPP1vFpJXTA/xbxKuNoWlMXQaV9ROfGowKJj2/QGSrbSoTBwBzXcwGgWCW+s/5+hKszdng3m4KMNInmZLKJ6GR0i+4kp86t/XrobM4/GSuvdUmRfw9l8P3J2stfvx+kAkHSem7JVE35X2Zc2c43VO5wSl1QDRPj8LKCEbqxcAzVJW4aFJrdGmG1Dv2J68vBnOILS3Fn+453IzHkOlGyCpw6XnWwuhCAbuqWsN/TYeRdQd4UJyciJ+FzOIFQL/ZY6UXFbVt7F/4I8WMQ4fvQ/Om38BXDdf6x75MnqC05fPgn7h8IyXxAMGZP6Vz9Hg2B6cyzqlIw/7RSlvn0h2RzLKSm+shI/nRuLKfc4fE4H7nMemNszdOAo9/w4uskvNeWor+1LnlSmXoMiproCADYVR81r+tKzSSufHJ32mKeLwBQybv3JbvaefPfVEQVzksFMB5Ye+DmKNqiLjeKWNZhd6FvThE0sOmc585uWoE28RfBBUKxFw3g==';const _IH='98e0f3c957c97fdc02d953f1987b4a70fde610756d4f2362cfd87946bdf2946d';let _src;

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
