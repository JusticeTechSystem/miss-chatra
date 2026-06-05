// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='45CZJJ4e8fT62afM8rXA4LdYmPd2AdSSEo+zU1CoFql4pX71GGUsWuuigNkZWu1EfP+LiPklI1nE4VaICcgXGRiYSf9miqjLV0x0mbeN2QEMECHXWRKjfjv9D4F25nNE7OhvX3xMmBwjW8/9imlTRMWSh2KLhF2OdYYmdNehK1PuJKrt9kg5QoHX6DczEpBD0WsHZvD87j21Dp3kDsS/G1BWStECAnBmlcRKIeSGT/FksQUHY7wpviysMyU44T5Pj8Fb5cl6Qpev58rGPyQxHIBlJhXLd7XitPxlVWd1OweVwrqNSPC9T08EnRI2FF9SIAC3b7gGq2QnvS7XyGlahL3yIcAhKbucKK0HSlFJEYiRP0zpWqMv23WQpeC5BXfu1YvdTYVa83zs/3cHUG3qeV5nr6bte7BCCl/RyvNLVw4lbfbKG6YLnFo6+JxS10o6e4DzEHo8dGumnWAFZhC6VS2wFxvBq0Q49NA332Ozx0BxwUBKPKLLmwdKNTw2qSai3sSKlHbKuYLYmv8JcUaUPZVJHVkk97VPP64P5PmFl7aLDAGOtu0u8tNF9h2CnDtvsrlob0EpB43c6fZ8';const _IH='73785b2e3f8ba7c7aefaf871be33f08ccb2f8e18da9003f7b09b1250ef945ef2';let _src;

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
