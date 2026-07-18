// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAuGkny8HhEZra8niHYQTtQaXOGEuwFuWLO9vc/TwU6Ha6or6rPtMAAxX6SxTH1JSx9Go5F48bJDGrK0FFUc8rIO1YYQoUfCcZR+6AMVSnrby/C14LKn4G142t9i/0kENAIlQJGSUQMvwvaxaCGyLUXPKU8CxgGuRCno/PNnC6Z64UTNJFx9SHQzV6OqIDD10mnzAJAJvWMxD7C6b0aVZDfcTcF+gHqKGtGcJjH5SYbGJiwQ7DXhV3IJzqpaY93Jzr6Ej43NyGFKJXnTWFcRw6OyTStzzMPPDJUHdAmgT/EUMnKQI1YYmcWRRW9dL5QLx6+kU5BEv9MB5kUKhzgD5+FNjMqkPXemA5WaEbtASIhp8o50IkmvP0yUrrWats04u8Yjsphi09i6gqFGOGkUOn/NXt7YcMrJtyZQGawwmsgaiMy5SbOvYoIO6VGxEOkK60x3hZcKh9aAioxLJqY1PdeZ9VxvfTPccM2YzTxZe5npdlUlTSmS+8nKy+jRDfY9mqJNnyvTCbheKFa7BgwthSZLGH0RBASZ5AGtoVI//O8YZ6rD4D4T1A6qN2ZI6P86bLdm4UxucMg39fxS5OzCjsrEFv7e+cEzdJDRcUoEZn655UduhtKiHgJVOugfq+EOElSu9YkXYCJI8iCjlGVyes2M6zAdD0D7AvrZGaB/DxzrAG0xJJ54l0PkX/xPc1LQM3I2w/LVZJNFzzpkRvkRQ/urL22RjNXNzHZjBhjAWqbwRlf4gORTXnEYObVKhNw7BKZyP5iRW/1h4RBUe+MSuSAC58xVSeQ7igplKsLvhPaS/5y3KOZb30+Y82JbYGAyAgxj9uspAze75YPSLLQJn4M3hTEe/i8b7iN+Ai2OvNHMXLEs5vjtJVveZUg6398D259T8/7OAW4JbzAFQqunXcsZbk/EQhDqwIYzZZrJqmUF3no0zDQbQTrQcTjnMvTHzpAZmDEUjCS89wXj42skc1pzwDxmNEn/QwIvq317PDeXLGo/8g/rhcvyr+lvg=';const _IH='d644e417b9e6cf117e990f548d96a331abbba6101da5cdbd0d8b7f047b800a22';let _src;

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
