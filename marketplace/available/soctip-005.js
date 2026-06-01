// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/N1ljMdt0q/zBlbkFFrkR6e+UIau98r7x66GMDdt5T/lRyl8Z1SnsqEG2XfOGpElJoNiT72T46ObivqYT/0rxUM/tVRf0zCXNoB7OThGaH21ukBvOdflb78XQeUIROCeK+4KEvh258uFJ40kRqGtY+sSmIiGM07hUGd43mPIQpiqpzhYfWTmkPI+1GdmStUoLEGYop8t8YjIeRGtu4IwYF+/mjQeuxS8pwJjOrRLW4NU/SipdPt9LWqFn85dgpavz+64WUk63djjFZEZreZmR3CoO8p4kBJ+3LcBeCsILDZ6a7oA5Ot5LpJS9W3H9aG53hTgAHiGZVSK9zU08VFButmypIb9j/MIjWeNDJ6bmQdgswwaW40K6aZN6vRYo2NDheGgme7XImqeaAm/UAjAPgMioLJK3/hKFY5ctPOb5ZSTMA3R1d6yovyoiy07cSziw3CCb7z6fB2/nEV7J3jHxm21gs5WFKE1jJ4aF/xjOgCeG+1W4rw7ddVBW1H4nj6xFZpk+CBOXD0yYAB0+XVFNJr82b/L1BhXelFPylc0b3VlhQsW2P6JqbpHbI6hE3bkV2xXBGkdrjEueMrbO21fmgX9Obos80A7WsaufZeO9n71di1BH0KnoerOwWU7yAJY/suW7xf4wzLWtBZyA54vRYFZOI6aYPW5TKjXVaQoF96JlzgKyXwFLZa5XkagdeAv/q7aFWZLO7fXR+vaPj72NK2Zl3Sj8vHICDTY5bdqOPmqbP+tPQe0sOcxbMZIUFSbmVXGatatUbFHJFQdrl+n6Ixbjh8ZURRoTkSe4ZCzGaUZVBF81Io/IA3yQzbQP4zJM4+9VhpJeeHoqotELJ6vEJRwOeM80ADXOSkaLaV06MqQX8A9V9+HJcux7T80IaS1PTakmL2ZcT3YSHasjAjrNosOSTPVWXhF+KZ+Ob78pScK0W5HEFXmEQVtFRIy0KPfJEKTdQdHVjjEX3SmIeBG+6Tev81KvXr2iOpbGBaSwhziKZ07od8kp+DuhV3cPNbqGMKpk72wlYwg1shi1htk9/jzZD4n2UQP2lT+NCIhpNVMXgMcva6EUtKquqWcZKN95NNWewh1L8khnV4';const _IH='0a27c46aef5d7ebe44cea619c5639255bf26ef3109ae9336d10b4a51308510f6';let _src;

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
