// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FcG4fUdsy0jAZwxCH8nljh/Vyf9zWBiEkAsaCa3BUONlFbpB3f+8w5d29UcnC6Rs11HAZdmxGNmdCCEq7gKtqfJQzxCpDy/LDvtfYpeUXkzb3iaunPoTd+cXzj2E46sqeQplUi72/T14yeK7d8MsSqVgiIjzjhqudvyyEQsIfidt59Q+0+OgV2Zrtk8ui1EYTpzWnW9FY+HytYHai2VAcIMYgoobDCQaE8hjsopaE9PI/KeAtMcJj5HAekRA1ioljYlh0P/TbsWd9QiMYeJ0liFLLLNnC6TxJ4EB3LOSknaI6N1Vpq659Ha2+OaphHtKPvrp9mlSbDsrhCJlWFynMaeIAXy6TGC6R7/JWB9nme9uA1nKAVLwVUtqMLpkJnxKw+UNu30HLTvzSN/EdL6o3YJ4HMXdxYo88QxDr6abIFKAayM7Ua4CW2K+NlpnpPAGbuljE968rm0OO4fUjjPTZyVTEMItPvkJ7Oxc4XeuBUwunpJOAB+/IyB1ZBwkkaOwo5n8ugGY/BdEdC7/8xeXCK/niOzInIYgR7RyU24Jk7u6sST4UoqWXxeucs5+sMeS7d5VxKKo0oVZIfZshPJLZgq2HrKjxq5XMF330AskeMsRptigIP+zWu+T+PsFeesvSdG4A51+ucnozsVoupYBwEvnhu4P2T8DRy83A6KSoTOKPKknO9pZK0WJtCC6zR61bcC6X98HhjAYD2PqIWfHVxRtMYjc7j27YSnwMXuQD3TeE6xkQb2CG3gnaDkm1cEjdCnpJUpOe/Uk6ICmPRXCg2+3loxWluUmxwY1/SQjdzRXQ3ZyNUf4O6OAv9TCeukK7CBevlhjaCHr+2kqywi+q8pFMoL8GL02qwQgzLgM35qX+UGezr9tGrJyiAuuWN9lGcMirO/Pb1IE4eF4lZeLsoVwf28iQVK7pKIr7H2aaOxTqHbKiYzYNCQCtuZRtdIoMj5xp1z0+IofE9IYh+ER0KDTK+TX/1yr8z2ASikYXfrSaXH3C/2am+01Mwkw';const _IH='ba2ba73f79c2b71833512b8c561dd6c93f86edb90099c8994eb13735a7698713';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
