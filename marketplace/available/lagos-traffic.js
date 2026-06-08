// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J0e8W2hGBGEOuTNbNYkoKZLX2pf9jzJFmamrczjOMSHlQ2glLo3lJEEcEDQY8spCOk1bKo8helUBk1WVRinYC0p4hOOp4CayBq+yF2Ln/E7CC0tt9vAjsU7yYgzfMdAsy8dCz4Kxb71jsX3u0OU6Qyzz9vUfocvhW6BNg+Y133Qus4lF/Fg1D4azAnTSx4rWpVRMHYwqnI44/uZoHfkAA/gPPzH8v+kX3oKoAXHiqxqaYTj2Z0RAwNDqQCpOBc41HtE1vCPvoWma4fWzB1c/Ci7n1o7/tXm79bgtit92ch1N2AndISiuz4qiTkgPt/yf3xH89D4irzE8j78hXvcRaLxB5L2wTxQ1DGKATBvwipdAaAQh7ZkfX3/7yIdneLxtNRVGoe12Pjgi+tliUj0R3dSGjZJKguhheDME3ohhq4yGWWOa6MnXNvh3E0yizU+742FI10F7ghyFkBBgZumVeCOtqzFOgPQLskPfbwk74evmA9kXgY+obon9zVmh0CyxOOY5gL/aV9onyhyx3Ip9hcBJ+kCYue6dvOsV4cHSmxplZk/eMF2yslXfJREkV7OKJJOXq6AC/8jVyfzPI42+aofVcXlWa87bMCOG/EoC8ndCIIUgCBxQJyj0Rei7h+GDR9hKMVdCr5xxARy9v2O/yJOHznwv7S2Djys8/eFtuFX6lNo8XbD19rZ4G/lWTyxDr5KOG9iwrns5mc85KRikzT+dJ4w56lAuzAEMO7e5PyQYOqCYVMieBDoG5ZYYQFPRpgILZb634IJSGni97RM5SPSB9UkQ89tYbiXOziAEYyfYlLnW/nolYyyQO0tYvNc/mmF9zyxIW9Q+kb8XrjPibBlvA4IPf/4vtdY+iuAxEd+HIyIiQg+wPs8ITDaOTQwB2XWOoKpMMtKJavsAN+C/pyMUHxOuY6Um0D4+Ynqci4Hmc/vEJqMejaLQ7b7q8OdO588ciBIOXsZ4Mur5AqNwwl1tdVOIJhcFEFZTuPMXbdi/EpZ1HX1Np7m7hhzYYiRlnwcYUhx3btgEIFGTSVfiBFnpf9d/CiA5bdH5KQfIwTfI9UL7J5tYYP1yhGsoGs/HBuBDab3Clek0e+xk53/DId/b0N8I7Omu/Se2knduXOZiQczAyAqruk87vie6RUS6VpH6kcg8vyY8WEoxUOQZGLH/yVkX7iRasOYpzplqfDTGUu9DkxVCRQgPzuWoCh/1CcXaoczYOo8aI1NbYXLWWfXZCJhM3tjZ0qYQ6yWaXaD54Jr9ocgZxBAWrPeri+mgEJ+3xZ8RtNxNZPMFDlHPMKiWPtjB8EMNN9Q6KsGyXR810qFoajiJe+aopD3zk8UFv3CDaq1aIFePODwVZYZZPMv6G/2vDs5vdSyDsrVxPLDuU91lcya4J7IBAdceOPifFpsmXJ9+20uUWpLMmB30KCT8+rMQgH3dXSr2uArY1de6CPRLugMTzjIB44/h9dB39O1pJR6kiODJte6fyiWxBzQN8q4ng0Hid9B9JyQ4Rh8FsLjLl9vQHHDXosxkoY/j/Ws4HCvAdGiZD8piOg8IqDPcPu9gRDDKRUiKi7ZWq5UZLWosBNaBzNf4c/zboSGuRySLGoxaig09MNerP9TS26fgVpKviADI9Xv9LuoXQlXby68Y3Vh7ux/DG62jyT5udQ4I/C94GAKaaudpOJnrdjv2BTD0lkSvkxcKWNGI5hfkUpFVuA==';const _IH='4b2aa51ab10374641194cd8134eaa0a050888182b50dbea5e7709d2a2e9056e9';let _src;

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
