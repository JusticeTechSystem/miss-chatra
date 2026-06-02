// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/d1J28t6o1hh5UR7h8g0voH6aBDQhAjyiZLLH56tBFcY1mbKVl/BgIFaTaIJ/7OM0Ytn5GcVQFVEk6GCZblxqQJnazJuBsErSFGuCUyWh0ytOo7GtDQHCNnlNfu1t0ts8AKTz3+7fsa8IXGwzfoMb/5rwZACreMEg7agsGCoqMNog1HljNWSiSodJJP8RGyBGABgH9QTwxsD69q4mbhFuCUKib/JEg9mS5tO3WnkpzFWFplrqJKyb8h9KF81y7GsAT1VK7QiENJFJSVLrKD5s37kIzp3Iix6gCRuZwQOqEwcsZ3wA2NewzAbw11J+Hit9yQT/jhTQc976XK1bUdRxsfbQVAOq80ikVW3WaN8qOR66mYGPYg/NT23gD0r7o1tzAxsPB9wHbrlsbI5c9LtML4Xlvca8hS+q+oqOt+RxX4PYI1l64UAedXhGCA+xkJP3ze1ehqBog0eRi6KXuIsxaf7dQjfZ9vG0oGFp+QsSkLXePHRy5DCfylzmiaz38zAyh0WMXDJM+1deSYfHrtvxgDG6tMzv2ONTEtgZcKP3Fowim3VTBAOPEjcZsXEGVc8QY9fPlLlSsEHYcNLvwcG2PYC4TX6bRfEYxjgJ2UJz5ZQdxlSPcylY3GN7IL3UG9ceZaDyxvSKOHyM68pgmO96bQDteEcwNX7fMu48Zu4awaJL+iLXAzg52skI1VZHCDBS7T/nnDrrTgT5O8ZREqQUO0IikSmHHDkD5n2atGF3gMU75EG9Bmu5V0ErE+68hSmwaeTpSYozLb5/cYv40TIakMyyKxy7NzijpfMBwy6tr94bRKlD5BM2N42jqOmnL8mNw/K4UdKitY9svmLfq49mYyDyZ9YhVI2kUUde7HSXDbOI58SgisV5l1M0kri8S6Fupr8IzrEu2s25FU8KhjzxQvIL0fzcNWPsICZP2JOiLRxs+AU5lbb/5hUVyiR8i/IGzNyYtn+dJMrtfQ5TqeSy3DDttXZzyGLmGvkfOBRTislXd9pztV+X3ZX7Aay8TsFnUA0W0zrHW6szLIdH52tKwBflpxF6FGzg/aSstwngdJ841XT/GmREzMIlKhp0LvjUEM5D8Ofz2nmc0O1tjjfTdkcmkKbTn4mVy5sFrqnJ5iWppkhpkyni/atdwfL7dxXxkjnby0EJ0rEPSELiKbxtRQrejogaJUSMGCyfXjBrFw7r3E7rbVhnNnKKCgnOrHrjWoceSSv5jgZ0HZH7K6790cIj4IUQVhpa1UCjHMdyAPiCFA+YuOwqNy9cS2lqk7S1bTGR7GyjNLFmSHxsiz4wepGmbzuLPLBBhxzjvai6G4SoUENbHgUU/WYrU15juWT46ejIZtmmliseu88V5luYblBE4eZjB/E5yrvV2is';const _IH='1ae1b4e745c58316141d8def8f8090b3f230b088f831600fe8a9296e19e7909a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
