// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNEyGCg4Fgq5L1CZIcszIRwi4Mf3UFGcJU54h1J5AOQZXRpmpC7BFJHZPoJAJKUG9aw1XdAEJwPmydvguMuMygG/RcVnd4Xic05UTtX/pZ7RaUXH/LXxlKSd7gILsDR19DTjgmbMkiOkAaAkVsQaZDyqNFrDabI39nkMrd2i6y714bh9u2QLSEhwHb4UbDs39G0+NB7jNcWJVMbguoCweXEH7okkUa0azuOjJwmtx3CfeJNmms+PBm3q8pjcMfMHUmf6G5IuU2jXhf9Vtx2eUxr1Zo2YIshbHjuAryoUNgV35yPrdD5F8CGPXaz/Ki1eZtvs4ZYv07KiwCXqzm5u5xpV8cQ9xX5zSLncUMZBE6xERkiNPaah5OXBFf0I+aD7fzMckjkRSSYVN2AnsAOe6ai90vFixPGlqGP9wU3xoWElTnY4xEOxrFmzmhXqXVP0wsyg8w71+SHyFZIkt32ElLh4LaE5nAp652TJeIx7dNGfPyjdHBvEgtfpYTQOfKIcccsoNXMz8A6FdAgJC+AJ55h67ObrgVCCplioWDB9r8ojXnxLJuUxGgSOU1lcB+2Z9zwyaaZVqdwnIKF27BHhmuN8MMabNlrdsNkHfPBMg2PhC+C2AVsF6S8vi7kb1+iNOCVsXVCqEIr6mDDcvHxFKJVYzC96KKfL7/dnwvxMp7VEJlL1dierA6tv9+C5HrAEugr7FOLSdovrdACL13JrHQ/vhNX2Tf07Q=';const _IH='a1d51510a4625a22a9f7c5f1722bf01ce2b4f4d289f9edfe3e94afe9039004ad';let _src;

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
