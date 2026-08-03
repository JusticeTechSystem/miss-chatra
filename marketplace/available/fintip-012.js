// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/qzK8q878RP50FaOrcBHgqN2yA2gNw8dd45YSewTXugqQZVRTRUTT6NsVrtLrltJqEgUFRHd4iVSphuYg+BjJ0R7eG3y6diKJDeKejG+7ZV0HeQYGfgN+aQjrIZCPmlGKdWj5Puzc+ijyzAfrQw8DA9U6udEWH3Kqart04kS5xxFSZ7WnW3ziYLhyaItmPzIT46FXANBumUhw/rKJyMwzqx3UjnRYdZHqVXUi9JLrh6S8lSbswt20F2hSuT3vhFMELShBNq0ihMeY8Eyy43ThWqJAwg5uY8SI5E5SbIXJbcAMZRwe/GeUzBxymAJsoso7Hu9k7IfMDPumQBq4zwU/bfBtuaZf8xEOjcZSTxkHxycCe94XQF08IAuyo5LevjYEVqLajsbxBYSY+VP2p/5CMVOzPEJgJi2MI/Y7UjqA6uYWYiQn0gUb9+zdTXDhQAUIKTgcrRgZrdDzMSNuJ8b2Z2f9sKlEcLXtHhygXIBA34xPKM3227BmN8tbC+hOQaCPXWjq3wkAJZbUopPKe/otXBhfzaANTFjPLVltw7pHgQU0eIN6eI+J9Mx/SYg4g3em70XlG2MrrVtPlroWQ8sJdXzhsZqwc/wiEGcR+z0oh3jeUVg/pqeA0+E4vz0BQ2sPbNDnq8E2AGSXB44XfO9YZWPk07OShi2D16EQZq/QviGtfPcIId2qqgU7RDUt4Qfab7IG9FsbewN94jjOx+IrXJUGwNe0GgBDPWnhz5uHvINmNXkhFEtZffEXnIgXmk9tuSKi4egnpwwhpeM+Uy5wxvVo+97eGrl8yurjAyI3RXyLGJffaxak2CfAupLM8p+DayF1IKD5iuVv2DO4FzpGx94pA5LiAxm3TBSZGS1uAuQfuUIWnujOo2oaNU8qcomLe6YrMigC22ZyT9oKRb9P8XparLoMkKCZTX5yKbgI8cOQQod4ctLijZYGcWAUU67tJ4aDKQdUd9h9f7NaQ09OdBqTAYkckmOynoHfTQ9aL4A5L4ZAHIEPkaASNShz91EpmbTtOwBInJ4yntm2MXek7DfF/R/21l0exIt6DmFOYw==';const _IH='9e27de0c42f35a7eac33c6b57d783a7023c88c1169e55439c51fd9a50e176fc8';let _src;

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
