// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQs9NcvpDhlgMZCoG92s7euh5QMkym1XiCH8+E/+Ti/JZT/VuPOM29LaPpMqPntlKW4+fehZLzGk5U9cLLqyyaFYWQ8WTY0ZOPGHTbvwPV7KNRj4GlGaFZm4n9Has3IJoKlLy9QyNoetwVdHM1a2X7aBfHKK1gqRkOsNRty0vHpqNnmf/+6G6GnG2RbD4I86hrLX7SpCH0xfT9ShXLC/mFIT9GR6H6kVseQxnA8EF4KM2luAPoHiX2KWNh9M4e/3zz1zvTtSgloDuB39FCciCYygVQRXkzUu6RNyX+X2c9j6p5dJYCGS8NpWO6L2FKzqLYyKBj+6titksRE0lAx+cV1DohX8IBSpLOGS9dtGI1LUEvwqNFslv7dhzLRuJsJq9wbi2BS++6Co2kDYjdKsikhxfx9xEy5++UqgTCVGyies4XAMMcbT0ohjfrR8HpXJhB9jpOf9fTj4BE9QcqCx3gEoxRh7xgxn4nSnA03Tqmf28rZRNGjWHfUa/F1lbK6gQnxVdIqeVv6xJp9XK9jQLrJbM5m1zSUgluQH2Uw9UaTllh/KlktfSWZgNokOg1UdEwM7Jb0u48EdtKQ4Mb2qe5cx84PZEGsG38B3MQt9XDsUJV3q33Xp++FXrZSv76cO4IOjkm9eNouPlPQAW9I/5CdvTOqBcT5c5/uEbzpEXh9qBnYDOrrbHR8XjhXK+/K72LSpu19+mApCYEWZX4s1N9YmzqfS7ya6PSKXqeLNkcpyZbjXNpoOtwfxEeGhn1I3URteeB7HZsZv57QkqnTXGnCbqLpMqGItwbb0O2dTbz1PL1cZh2gTPQAccbmN/e8sTBR7PdHam/kUUkgSgQGzEOtbNDsJI8oXoSCDV8aJsjF/mMD6RrT0oHwdyaB68cv2RhuscpOtGCa016m0mjXUj+EmRTiBPAfPGtK3gpQTuJfzMQ006iBDbIFU4QHR0IFALN+hM2HA1vskEG+BvgNvGu5/Cl0HbS907dqWTDcOa65aN1ZQNFV2Rw4KZXSsB8ht7t+x5jg';const _IH='2ec48bca9141dc98d5e320cb0fd3618e74ae01212796a127054a5807b9b132b6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
