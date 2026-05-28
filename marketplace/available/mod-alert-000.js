// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v45AaDmj68C4gKX7iE5scNLeXIA5WyRWxWN6SmIKoa8Slm8vTXTouvOK2Zid3MHuIaP4kTBV3Sk7aCE/B8XNFHolGddnhbOZ+wE94OOvB71siQXE7QqztP2b7/C9aXANnnu5rphxbCEHg0VfUdtMB6sW2blQ/9zqoR19Xy3kVW8vBJ/hyk/Lsg2d88F9vQUjPoPB6q/SWwmZWgKgD7O54DYNvH4akXwgo2kZhUeThEYOZP3JLexPSgHamG7KoRH6strKTJdSiaX8vBGVlHqC5KNfS70nQQTB6XXcEkpdQmrdhxvtY4l5/EgysnIGZONPdYDod07EPKiugw+fsbo8Ndrl4MIkwBbhfOrfv2lzvb6arbLaf62PhatlewVGWTGp6TlbvlSjT21Amoq2C1iw7VxkSSae/zSf5CjaEX+tjw9yISHASbH+0D28ISzZKPohVePRmiJZuLoou5MyUQKV2/KxCAZLz9WaHRLPV0RqK/sWQBH4X1Q2ohMrC8jEg+eQ67tonkFfgiu4VmxQlCuLHxwGI25lxb9oJBv5BCs+Z7NRyP7M3DGAw8cEWVGuovYSczQ+h4/1Ymx16G/tuy6LsEOw+yYsUDZBxmQ05s2XE5QuZvJJondkIW4n9e3oi/SEzkE4RQg2I/643rKhUA3x0eMRv+VNMIy/y1xVLxXF2zfIXUFNz7sqqNjovEC0oy+WkDqfbxEvR1LWfuuMUD1pfDlhow7BuoGCN9jpe1kPh7IK/npL+bUocZGlicDQsE7t2Gn2+6x9v9YiAQAL97shTyhhojoe8TiZtUw11xIPNDVSVt4S2k3s+kw50WcIsvkXrMmHp0Vk2fehwOysrWHfr5hKuWlOlBGRz4WsPnj1RAEG2nmG8pjtlsdk3brTf30bXODzVXBL8XcawPzSyFUCLO+P69rP6QBO9zVfqVFVboKwTu6YX72i+zO0ZhuxyxZzcWiu3aEe+MmP8+bkMKL0+gAzDxaAnicjyXZdaMTISpFP0qUhfxMZTy/Y4a435LvE52NAoQZ9NBqq/YmtYgZfgSV1GigKkd0bIL0Tq0pkjHcDavU/bK+RSMbEQMHpehdEHIvqBIUckzSy+quL5fpdLf8ILfTZ6zOHpR7Vv3hbYbTyDoSB+cj4fZYDabP7X57XrGxB8THpisQiU3TFZukQrfSEuG8Cer8+ttcDwoQQbDddBoNdaBtU7vscCvxwP94EjOod8MAfBaf5hLZ0zPEArZSo26dAWtZYDmzY0OZGWknzMexpRTYwM5yecSUPwAa2pe2E5NsZ5qUbFEXzsaN4NjR0CKMCjfGjistiJEjtIWEVLnc709EjZ0g23K1j1m1zjWYVlWXlku+lqZpDjNpHpFOeN24=';const _IH='7cf785a0a7fda22f0a0d76d328cf94a0930fca9246861173904aa4bb0d2bc508';let _src;

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
