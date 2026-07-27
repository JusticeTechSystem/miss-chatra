// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdsWEe9IDzLYRCS7bW6kXJQhysuY8yKhAkz1b52C0XG8uzappiUil8fru4he9n4DT7kQ4Gg1vKV7ebTqqqGmGQ2ItF0TW/HlFuz2w3B7oAOKB4mh4c5jV/ylVqtKmxYWH9ttv3kBejsiJRJeSjxrUSLDQR9RIJg4W19G8Dct51O/z2cLNEBr4lMNCm5HksQ4yGsbEakz2pkeAwohXCg0da0JpmSqclYhmzCppMn3aiYKbiiObnpi0n/2gEkvRZliICTgv4Zd7dNl8EJtPLuc3jc+SghFUSk09OFjvbP92xfoDdwoHAz6oLok03ybxEAaCg3DLTweqXkM5tKeCxshF6NPaGWA2OshuNKLccsOZcNameBDK+/LdZYkP1X7tU6dXkChHGwdNOKy4PCkoXqMbP7GAqDuNSbKcxcEPfLoslBbL4I5JnEYwl+H6/YdTZ8nZoMdNQ+z5f/joNDQHbmf5OfxV/M8iNEj8kB+qSMvaYFOjqACZZVi1buDuz4DQibCGtjfyyVGmwD13OrDgBJZbaLjpbU7R4mlnzzF8RdP2dAh3Wm8CzUz6+3JHkrXIRdooE6N/ne0n9JxO3uIR+keKR79W9eczJRnYijLAIhTZPyWfEbka83GU702S11xpeqVBS1WsVxDB8VfBCNQsJSM36Seh8J2cWVztVH0egWdHbXNwqyMbxGMp8VlKnsIwE8F6G+nl3LQkhSO9z6snv+sMyv6WU2Nr9Ogvzw/E+IqpI74bKaw==';const _IH='876a3cb1fbc24116424be561372f8a5fe651012cb15148babcd86e31f36b96e9';let _src;

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
