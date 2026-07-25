// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEissJ7Ei4gcdjxoH1GA07bovIbTMnvCW6GYHkWC7NF48mtUuTwIZ/DX2BeBQpGg1Jw+0vRv55zKXXR7llEAjhBV7eZO4yWM0R6SM6HJ55OXiVzcYQH4tiQ21k5OeAIrLV0PqDg9C7L0B9Lsa8gNN1hzzVfDj5U/ZBdG4iRbZ+CNO5zYN2Q0ctj8a4VpOjAW7aG8IsKxwTGByOYuRpS9zsS45GNr7gsqV0AoUy8/91cW7+yDe+PuSHDC/AuPwb7gQEomE9Y1LcPFcDs5ero+arRpsSSVdK3yzk24LNmfRSsgSog/8/Fxbu7oU335AZ0LvXYflUlnVCpblBY8aRQh4mMdqegiI7koYHtxuIwkeD6hc6cY6K6bDRd/bXsZcAffgGDVtG9GcSMrzSEP9OTpOKW2c/KxjLOozNuFo074l3jqKCAFH+E3ipcEJcxcpVtpOa31OGRUCToPCnS7VOi7kFmDSVd/CIctTWs8p9SULUzR7c1F2+1B46iRJcF3c1S+O5Ct94JjHcK7dUbryvoXasjP6sm4ajiAI8g8VZ79ZlIEb98yjG0LXxRoPfo2mmM/vvLYu3e0TGDRJdW2zXyWmJkqJEuiPuPO3IeC+XZGMSa3R7qyw=';const _IH='2a7fbedc81457b8da247e18ecaac0822f4c2df129f85b1e186b66b9306c783f0';let _src;

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
