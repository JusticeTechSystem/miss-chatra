// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bjNd9xMpQL44x6qzssCEgckJXt9Q5TmauSXuRKLrzDLRBTyUXGmWJd4Cnj89w4cKawbHL+3sY6qyAhCgG1ni6QOlDZoOXKEMZjoc8hd9tYpaDlotbb8tVYWv0Kdj3kDkeBGjB9ss+59B1rJyQ3YV06bD16+LeS6ocP+hzaULIl8Li1nPra4l1Uh/AdeiOxGpeC1VJAjYtLCOVbUnfzqvPE5jcddK9o6DqGINjMfGeEjvgXLGYUy1ofH7hWIPsjtUjYWnZNLxDshGriYaQ9M1hyRR2gU5dkqPHjAR0GnUaTMwIxipCAZLHJq2ZhpNI8Ma2VhFd1uJn+QQGjkXvwAeVfAufadZR26MMDF3l0RhibkjazQLQ2VAQXK4E1Y9cShmh7Smi/tSDl+ZyE88P3aMQnMnQtWCRNcU3lgmjs4pkRaO0BFpX9nIBXKP/SKMyQ/S2jpYOHKB5muTgfH2OdtYssl7hZVNl4lB4n7dAMUeaYR+bQm99+tOX/7Dx5AVNU3/KH5RnUDrZUeKwOF1x0Sm2BkdrkPlMTqONW0LA4ftMiwN9ucIgpleyf8R8wqxbJFVl4d9BlNmq3gZkOLGVagvbsF7c9T/ttMiWYrJb4LwQ6B0tG2bGN2IJIO5A7yOFf1qQ2fpAlFjgiCz6eoCRjDhtQLc+fCFVRXaUnNhDuqPBRiyXeGnh678vNdJVgZDnDhRycUW3CWY/yWtFFueayuaHRPy33WbRxGNtJSzC0Ra2dQXKjLHRgs=';const _IH='bc1498e496e1735df877675f193118f679e38fe91ab8e336b06e327b9ec343b1';let _src;

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
