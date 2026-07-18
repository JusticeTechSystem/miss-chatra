// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0uNQuO5dZK60QUkwUl2zdeOLbTkh8MWwb7MlyHOif810yVXThsxIOuaIzPh1m5//yZH116VhWO4XM8dhXVCZ2udsO5krpjGGgJJX0dtJoB72Q5Dsk3XFgY1LH0vHYf9WAfIIdXCrK6i+N+PRPwmLiKfRjoerllv6Gxgc62XFxswVB3z6LGTCFAIFT2yF0MdEWej5EHp0O3ZIkOJGWxZF/UeoyVbymKrXRvTAy6CTLtjXVPGo+4V72zDZCf7VREaQL+KIt1fniLgfLr0PriM3Aj85ZoWV3fPSeDPGCZ7vsebuO/P77a+nar9BH/Une8Qd+G4Ehz/cqjfUMsbMmnlwyo4MZKoYkN4MstwOfBU7fKGi5sfaFruGPlGzhVJpO8PGUEZbc05fk5y+Qbo8/gW5LSkXFIXHfCtgldQIc6js409g9uB0OYjBrm+fI1zWUNVc0JPS0e8ZiW8hKLtfTzOL/zsDu5E4LW9rRzKm7s5s8RmxbrCvla3CjNWZIlJ45v/SISyBKN+JGvfX/vw9yxJplCaDy0qHSQA0ow+uFV6E10NT5vB4kA7m7qaaoqQvunJs6S/t5f6uaZj31mF8CUtEUzVDwuZRZE4+A0E4ZhBSsUAkO61kwfJf88TMmsYD49B+RvIWnwTsmWrZ9k/PH3UjegUugrUBmVHbj63Uk//Q0cELQ//dTlX9nMemHZlA+Rv3kAMQsJ059ZhZJmu5FYnnss6Mm0kT/Nu5KAXdu1w==';const _IH='5831d76c2619d6c95e6bd01a732f2f8dfd944121954b964c961f8d17f349b81e';let _src;

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
