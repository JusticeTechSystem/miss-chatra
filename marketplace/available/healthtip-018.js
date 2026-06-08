// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h58biFeAsgR+hcBnrkwPYLTDSVs9SVpw32LeIWrLses96OOZ5YUmwEpqQ22EBWD6OuYUCX4g1HBWdDW+LRjqZYJypjXkuG4qdsaFMBzfAtQ495pInS4hSTAac11Zuocr9QWtsnpTPEAseY0vz7s0Lw3lOVpKiaCLQlNLfv0Cui2XX9fNwHCRY9QaIuQzfBhl4itBQOWVCs4I2OQkqz2C2PJnZz0m6frjWSH9rKUkXEOUoI2vPN51IeKhKyazt4JmtlmBEPBUhAkrv/XFAndAYQW2cAtEs2Wq0OOMu9adSMWZwm81uHdgmvZarSIVhHvHfmM+YrMKVZsMMXSpe7qpuwD863ZwhcEG/VKBxBHAyA82RcJZEhWaZQOl11uRadBSGDhXGDwrXtwZLTfGn1oh16qlesEpF3lLNZ2iIOnKn0hVgnaVzIYqdirb1EViCsr2QxJxCkUttxgIYdMTWPb7wCf0GB0hjDnfHRrofDjwxr4XqF3YJ9boEsRNMbYO1fo2TbehrzfxcZi1tYPwhcnFZ8RWL/XZ9YO8la3mQd6D7OvA2NIqWrgHQYnZYWPo77SDE4K6YBeoYWHlwOn+S0PWTYPxf3jcIEU0yArcABfWW/xXAUlatYMvW9VlbdjWCDeReYE8OVWclDg07jgcCD4Yty05G1YIplkVg0bO3kiN8lpBP0/yXChBc+G/VAjd3nq6ONGgTcwoQAK6IS8rsuWz+Mk69xvWt9JSKFr8ii3gZ6p/BgtDys2Dq/kF3SRkIimv3T/Be96ne95R2Bwg5q8b+o9kX2vgzwBka7n75ws0JERdXNCQVyqqGr4pj17adqMdaB3gTpw/3VEEDhJxOjL1BLnCWMbFwzdCplcO0DvosEwL0MpV48RQnhOhWmU2GGK9O6unROdvah5kHZuI7FfisokifB1SfMGjOuluaC5aFOybHiNYF8VDxvfqXXE=';const _IH='2458d89563a3767afad285ef0247d71337d57dd6df88c39a3cd31d9c8a2a7245';let _src;

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
