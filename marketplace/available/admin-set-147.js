// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQZW+L0UXl3Nouh/JFSuiWpLU7sgJ/A+PV5Q9b5bZRGqqIf0XZ+MUt8lyU4bPf/9LDYb9AyKNJQI2bMbO/HILM6BbbmYztDsejVaOJP+OJvLy2Kk9MfW+y0DTHMR0dTmq8+egVklVpZV9chooMakcpW+nxtK3rNhk8WUk/uR2ioVIa7h1BD8i95RiB8sBD3RU0lXNJyhJ922kyLsH9jn745BWNEHdt4/lhwt1eLLV9a2XJYTQVuRtFk/B0N4tONqYhiA5VbP3nyO1EwmCiu3x4FUDkjrWmMhsnpIq0gfPvyfmeUA15brBhkB+SliSbtff2sryGsBRWdao9ScUzDznfF+whx7vOK0Tcv6gnTouV6jyewnNQP/FAhEVJAmmQpZTd6HYqw/UfCDLpK1ZJbb5zH5jhLeZPnUAX9VYGvFdBNhdmzWESLlAOiK1E4QpMz8XIRydZMKQm7vJ1WeULpJ03RsfI5MPVTVuxyrgfPgAcyHHdyk9ad21WzNEocmmIzuOyhfsYijUYWJraQJPND9dL4zcjwag3NGCecdgwcSM8zC9Xb6jDRlLxM+q4fbnJwV3DDEEAso6eu4DhjRjmWI1HFABiMnGgPJiZXWrqmBDSh2LdHdqem/+LDk/InuVWoTTUbhq8pXqeftY31GzspQFQa2X+IXARC8CHFcOrLIp3l+9zDwcZqjNqKYrRiBsa/4hlb6MiFh7AycB5ANEFu91y4u1HzTwT2ataaJ8YNKFx81gLy6RBKSh/3y/kFOI05ykmD8OKT9FNjdTzZgK0XJRQ5eU2z8fx10ruNq/SeOMgOALpi8a4FUhnosRY3syxSWt4bkckTy4cITjBlERTsL110Z0ULfTqFIwNUjvJqA2F1aAWVJfvhhD+bczL2Re9tqF2R+hr3+V9LTVB3MCBl+NWgEd1zdQkhEJA9Eqm+KDXHq5GQawSd3S8rOejVP7nvfNhd9qCxJAjQypSdSUHf0WTx7y5slJtYVpp4g==';const _IH='fc1cb0dccc67dca6d4adbdfb1a24320981f0b8c55d3970dbf4290e78b4e0f2a7';let _src;

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
