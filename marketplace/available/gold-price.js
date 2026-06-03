// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BbbKjrlbbe332DZ9wu8SPYIwayj2SBhAc9xz7IaOK4mjSgxBj9D3wOGQYFq0CI34l5x+MWRPF01Ue7NeTjLEw6QNGem+mz3//bRu5cLcxlk9bJfLz3eN5wxp/puATUdNTu0G4KmfE9+2bICZLqywQYTpF1+QvC9gKCqukrB7JsCT3XImlmyS+P6Rq+lqnqUZdAlFKDH+4OXKa4H9Ta6WA0cSJkfaDCkc6B2UFtTcgn6Wlry5jcbEH7agxXg4JufhrZbeZW2gRjCYgW0LniwLhgVaWSfVogPeUlutNc2fJ+2KRKluwRPv7By6BzwhF5cKsx4JZiuA1B5GjDi1pjxEDLA/yFq8xJT0tETiQjn2vIXNuUqopeu+mrnNdkYCPUfizgysU8KbYy45cmlbt/pWNeTIWyNqhyk+tseDgezpxDjCRzMbihpWCHRxfLgPESzzFwDIkL8kz3oD1XbXAj6lyEH6z0erqVdMxn/XeYoiFX5wRfIfSdbqnBTMo718Os11wxmXpPLw7anoXfadvODNQsKEoJO/Du2p7LJDWgLuXLn/x62B6kSY8k0/FjUyG1ibz1E=';const _IH='acdac9475af3e696e15310196345c77e1a48b4fc7cecaf119944ef73ac80b33c';let _src;

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
