// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuw+isFwwieiJK5FxFBasQGqn7mPDjyMOAJgcYmx4QgUAHHgDdHwLhnwcD7shnPx9SIz9puzrFkE6Mv0vV5dbOyeqZ/suEv8GWlxqut3g5uKG4ImsmtrJvCyVbjM+xD4hlK9Ay/ZI9m9VKYrkNDwtoDiFLYhjVrrHsSaAG13Az09stR0UhYxWfF6MK9FCleeIk3MABbVVDLpwOtFrES1naMyuHYZ48UZU3wS1VEuqHGazOJ7EnS8I0vm5BMWHn8qcmhBoak/fvzAa2vu1Q/3m4H2ufk/59J8BtLYSTtpJcnk2tjk2+/vsP/6NjrqtLoqMM9kVckxHg3QfZNXPWLQCV5yPDkVxQuZV8DpOWz7f47HLd3P/cMPLOsNECzNrcW88Idov6JcDclMm9z0gExS1UOTUDVlnUCimnjN+DV4R9kCfmRls7KfkHRxXuO+D97c/mbIpo5tidvcZy+iCdkt1PLnCDnTVppbP8Z4IjxYRnoC0jEKqzjOGyULf/+/liUniqDekfO5h6ekOo6SemQNgdrMn1h54DQYUzzVqY0/DWKzpSTh+QUNlpDuV2Hw7dHbxXx9CfrOd27o6TOTuvaSfwHFGg8yzDOe99xp6G5Tl2zReVKqU4t6eSU8rz1ZZz80UGi+UUhKYrmA4YIL1X6FVnAcsBNFDi8TaVuJbSTf5Xa3ImHvE+H/v/Rc7jvlIjp9hP3cW7gMfCvg6TuRW1tm2ocMPQyMTZ+3lyqgPM0vim/f7xCDdPh+HxjRNJWhkVAmTxzIX8QBnnTdypJ4MdEppkTQWJtKIQO/e7/HXJz6EJaQgo/pUNbiSQd/gjYMP3ZdXV9zFqG4aA2yOsFiXV+2kD9Cru+Cchocp6Gc5agTFB29Wb+kXM7OgIobjVNY7dzFYOrDZn1/SMbPr1WQjXFkIqLf2H76O/etxELGbIBTGFqm3ykp6l7o1MeKNp4zrAuQmxbZyFPW3cXUgVAtVVClJAp14fSeaJQXVcFhMS4r60';const _IH='a358a3d38db33ddaa972cfba7b59cceae96933dff05e5373199d88254e8fc984';let _src;

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
