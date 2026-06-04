// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qaAEve7QJCaMHNiiyaQe3N0kvDhbfyGJIyr8IjZ56ml4uKMzFEcIH0+jzI0GqdKDKr5SC2lhgZFcDX5byLLR6Z2HUiMD0cJpYGLtU5Y7lBefnqhd9d3v8j5kbH0+2O+yBbTx0XGSaD26mMk+zd61CPoNIUaworxPnb4WCYqJgFlbfaz1+MQ7kGZke5BdKRWWlQZZU/eYPLJaMdR7jczKRmJmxYsEuFtb4IY1gFsmHbj1FtfjyJ8GQgDaiatEKyYm4lgb50kRngDc4bF2AZ41Lqu8QGqaAiDhB0meqvJo5ILfZjR8UCUXi0aBYwbGfu0lotOAE4SMzxcaurD2gd+vkQGhNXxBp+XZm2dzkq49JGC9RDkw3BDo7ewdU7rMw2hIFiVPUzgfurhTUpX0mGSLklrlZ2BL9RjIulhbtoM+1sWaGvxVy2kueqTotO/u6CmbK2hVyysugBpdAI9daMYPMbHLL1yo3lkJBS3yajsfnSWVfVIjBh5me9A3nkKQImyjQpqecehueBAreku+1+h61fc3nHTZgXxBf95crNXNL1m1EsjyR6z1rCTdRsRu7NWEm421HAeKX+GT8r2ee1tHfTQuzJNRdXIllz2dl/n4uv+6kRrsZIEnva9zrll1huS9m4bzGZhRxLTEoFXb6Fx5S+Rw5qKNnYUcHQJu0RGa0tx6+DA/mQeeRV0ERhKM+MWIfTloF/JXpnA6jJ3EC4gPaL579uZ6dPPbDNIoTReqjZBSXG0repep0XQ67xAZf9dr9nZqdvS+LHe1in91I/BZm0UlR6p0ZZ243BVqWqh1yBfXOEZQYnxpls8DQjmeLdz6WwAKgPrf9pHyxAADR4GfrIyqHG9vaz0HY4qJNiFJm2HHg3KelaaJW+4D9lRA7nBJ/Uo8gj7GIfTjCt/XNr8DHtGTCLtYiQ4kpBO6o8tU6yyeHnDWXsaEh34XT9oPWh7P3Qpa7dYN1HcP7CrVasYCSchNOti9lOOxTwxYH4yq4c3GvPVnWXE5n+lmM8BiDu+SzqQVd1+zZMj32MlUX8fAPz2P9cH0Dpfu5nvo+Q1DFGIaQg==';const _IH='dd12cab9748ae93a28f41a0cba6b3b07d1dc9a02fe3ac2ea054326d5bf1641cc';let _src;

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
