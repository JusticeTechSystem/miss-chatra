// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M+yICgPApFg95fi2p2ojDreCXNwYVgErloQXINVUuURs0oxSE2oVQTYCRUx2LFyJMWas5Djw4s5Wms22FZjgYSGqAYD1me6NPu5psI4MigbmUiTnA1DBmfi7z5+G9ALUVWshKTsfBngMe7WDfSNvDz7h/IaP6jinHKR6AKmBeEkUcN1JuSgDJ232RS9m0BXwXMcn2w5SBsDlFWUg9Y7VpHCEfW323sYyxpqBVxY5+knIJl4pMhdjW9yCBeGn3KqZSSf7MytOAWL2WVAjnDp6cL3JPil+kozFNuG5z07Xvr3H5eG8IeL256GH1vF8QmJmSF8RMTWUehp57yV8HBG6itU6XsW5Fsvb+OUP7mfK2YNRDvoxEDCeFPlDYkaAZZy8jQBB+zxlkv3nlECKf/jnBDHmbdS/xvSsVz4LTqPaVds1Pt3BjTJMWAkkr2I18aKQxwruMIYWvi6tDOogfdH/sPdAcfRJiB1OZE/Jz3nLgaBjiP07+aPjnZ6BiI8WZPAgFFj31A0LDTOrysrCfZeA8ydn6xwEohmnMIQpSGDNFwM+U8t7tbMhjSH9Rk+nrB5ERsYrbmh5VY+e9S30peisLt/iIMufoxRUlfSwxnh5kJDYgTbxYCkrNlYYBj3ECy0ovk2toXMHPd3ddSXQAsWXdRjZzjYX241YGmzceNA1+VOFYOAmf/XGGowW/xuugrPc/50G7Y9SUwUxqq3+0XSDUo456ArJh9eAssRUE64uxSqp2qbDfy0=';const _IH='2066a26549c87b27bedf85d5b75a278fab44ba6897b6863b6d67dc2ccdbfaa96';let _src;

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
