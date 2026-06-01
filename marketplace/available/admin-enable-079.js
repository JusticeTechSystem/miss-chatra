// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7WUxXncIP9mw01tfAKgr7faxTj2xbPi+Oe2aywrOTtOeZe6kRbN8dMTPdyN4Qf4wDZ1FtA+ACDMc9GVhEyA08mjdsUExeQ7Iu/dp8v2LcKU3UYOYr9bJv4OgTouSuE4CBiI/6KLMHw8x3JWOaMopXmVGJ31rUcJHdsAC9/qCrgptrx7y2gAmXormrr+LK2h3hdSrt2KqRc2q+bnH4NB8mzxApqJ0FQ5HryijtM6nTp6jrePMsg6mygLm5vloUGmd5nG9rdyi9SBGiOiKJpBceRvp55J+XR/h4aJ3M6lJ95ZpnbHWkscwj871pA4e0YnIlHSH6FOOH6D4jcwE4rhmH8UJw45Ti41OZc7a9C5ZkEayBaA6XkqbPbbaYo5PPkMxtGhXVo0CVEJl1eGz3zhQ8djF3vpPFFj7IYgEiQfqqR3WbAsfGU5eR8KiLc2BYm4wdSqXJEACRMlCHNTbQ+3DMfz+VmXxz6oNrb7APZE70jVT1N5wyqVR6TpwxELN4I1qmo+GEUEhsKdzslFmwPmJ0u3R+FZLbYg/8WiWUXiw423/O4u0QO1TayXGaRllpBq7ukGWLp0SMwU81hWDWN+cGOg4ZaXQYmH69sCllYb+gecdrD1PiUZ7sAxL3uT217zxCkpAITETUDqZfkA9DaanYKYqEsJKM+AyY264NEFjnuO83Bxiifh+6I8JZDSqEg60vQJW+a4WnLPN5CkNbuoPWPMQbkkpuas7ODSSDIOOn7fauI9ROJs2oYk1EzgUqGZD/Yp6LjW23PGT2Adhf5KrS+39D/N7N/q0NH7j8yWDoDnip/Y5ZsfwIlPlQyoGQSTEf/QnR9iHYAQcoTAoJtQjEITpCLCQz+rHqlxQRZ9QyPUjIiadqF++Qt66KRIKSDQ5EXS87P1nvktMnjaQbBuX+gO3JQoxMSOJMHk000tGd0e9XyihbxsPd+5QjW1Jr1FWTTexFeRLoGlxKPLNEtE3moP7jvx2o7bYJ4ewP6ChAg4TxbpG3VR8qLTXLSomQ==';const _IH='5f66c7ea86aee18b55587a6358eeb244cf6690cb579f1b8038884e27d0669a9c';let _src;

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
