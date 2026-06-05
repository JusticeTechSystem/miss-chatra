// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PbSbuFp0LzjggxXDTCBbwB/BPKZe+HrfRpTWX1R7ner0jOet5wnpv7ALymetzSbRIRb1GRitE4fiaY+DeAFkk74HJ76a8ioInD1iWW9bia7ZbDF7OkWkudxVrWFrPBx2IOhY2sWMz1l9mnDN7fYoZsdt7Hs/+rqBnW/MFV8wm16Crhbo8HzdYunqVJQ6decd/1/G7jSfYrVyqctS3oFMmxGtuMK96qJpn9qcr8zJOlzPS291/TzbYuy2KeSPN/qbZdUr0ZhWvEQksGl++mi7XmxdQAbeKp8BlwceYyT0l2JxzMWBy5ufCvQmMDXKlM9g3AH924ENrIiMs9VxMl3/ntBqoMCXR4rk+4Q2GSADmcX16is6MEn3/74V3BYdtDAHJNxt7zg0xKZmTv/h1SigewBP2T8lCW815zXlnGgLAs0Sy4vMFE4ra2F7fcDjzTv9HuOYEXl8IH6U/e94ehXQcdZ4vjVFv9SRsms1CGyFf7MPH2pLVst5pjenEIiqbjysAjOaW2b2x7wFumx43G8gdASDOgR4l86wG5JkW+VjmaRHbGF7hbpQ3DCZ/6vkiM7+n3Ve9iaNOhi5xlZQXDa8eaBke42pJKQzkJ8SfO89oMsuRXG7lZM+d8Om3VvXyzEqenyxjIEGvIBEJoxtMR1xY0rKW8wVkhvJW/wBL4pX5h0CYm7avm2Yci5sDAUHybgK9H064Lt9UNJ3BCqztsN8W0/ZZNg48HsqJeiwmtIMByA5aqz/4SVqJeyFzjVIfmMtbvoVq4iGcCeFcT+G8hGVm8FGqpIdnC835aL7Ha02iFP2EbX9qyL8SshM/+Ye8h5Z72q3P2/EvmRUvc2qUqtJug6eq9RZndbamkmRPt7fes5s63OXsGvjGyuLCzhm6LJ5RyQDy6vkXk0hKtSiW0bNdHxnETOreMqVL7G7EyrYBmda0HgtKkeCN6+9CsdSV4IGuW6mh2I8hgN/zsd8WxOnig/yQE1RSb1Dxxrz1BXY4+cJiQn1OfshwpIFt2rdezhxh7vfk4hFyejbtgZNdwkl5G9DRnqgbMPMjiY3WW4zh9Dh8zjGQBJ8vq/BXCYKXux1Q1qUMZtVipK1PKdPqQbAZkLYvyWTcPpLQTK8GFngvOm0CsR9/2NIga4g9kDHD1XJKoOp6Nr1kPtc67iUjFqi5mCmMmA+mVyF4A1gnY59psVXqkfR3ppSs2GWo3sDBjwtSaDSQsJPCLQk3P3tUrvWFf4nfrXuTMFX6OIZqOXh/0oOTSKOGmXSkCdY+pRYbsN9SPbvXrEoweBnlB8Ygs3cVZulNwrs2+LkJAoQJHZ29CbKa0Vf0ebWFAUpd4bSfCm6USZ6E1Mp2Tqfibtfw33Nnd1kBqT+UwhI5cZ11TyCFcHoLkbxcCHAV7DXhYcFFsKKksTND8l4EoHiQ1PzYp0p6/6aPeZ09Fy+m0heyIbbahrmD9Ai9+ApIsv0ZPMvkrwC2gqWEF3bMhmUuyOKTAgDvhqOq+kDwq7Ad4LJsEx6SF1sXzOQSYnI';const _IH='ee432fc3adcc522f2591bdee6d3dbd18c647991e671f6c8f85850229b184f6bd';let _src;

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
