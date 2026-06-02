// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHWyuNWAp6g/MmdRU5pDlLbuNm6Hb2+8hjEgZHUg4NQDiOSyh8HAtl8bjHdxFWJZq0zYM0oSdjSh3bDQf0o0Ab3NIHCXNu+hP8xnAmsfEkVuUf3NDwQXQ1Q/PclStXiQz89zJX7p8W6vEItPVM/A/YG5aJYY9CJ+qzurNV4b9K83SYPV0MEYvEKvhgp3E5xI1X+fC+J5IwWOuFap2kIINCp7dFqxFLOIygZox4V113DVpjQv6r2mA3Koh2OPp8Ih4qINzNMwgvWqnC8m082qMhceUhdeiZMVc8jMUoxnWKRDVAWHrlVy4L/jCSleTCKeAtn6Wt7COPBgDdE/oI9wl0yt5eaWp15TQiOke80965oDVYK6AFqx6PWD6n1CojhclTHnHeZ6+fmkJPmEkOucfLvDwPQAw03xDCtBqcyz2u4TX4P4KPezX4KI7CYcYJ3v3995PY0HpNxGWm4i3qZF3h5WD4vwk0J0v+9sAxJz+2HmrfgcufoLQFQVAoEMJ+rtVF2dqyFXptExLv+sw/IE7vTEOP66kTE8k13bfkwd4kVR1zLvBHvL+XVvNJtownEomG9srTm0nh8suSipVv8VcQzrVCBABS6rn3Fmd9rWxQagmcEO9UGRw2WgCoizPRZdTjeVtZbiVOr8wO6RKhcmKL3/6hKqjhqIjLXc+YPpZHUqyFp+i/kFxnXNe1/VbB6qx4jqPv5e8h3OJkslQiYkT0HTBl8=';const _IH='b5039ab2fe42772f126f79c6460af1fbfd11de075ced95576ee38f5e4ab5d8d0';let _src;

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
