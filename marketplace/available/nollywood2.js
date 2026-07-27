// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXEgncMoKRRGU3cB37tg1Nrbjglk49mDNx5P7dFTRQzcNoGAbCsHGl7ZgEvjQXCDkUmYoZBhUhLg8pzPG6DOpcba53CLOZLoNC4mBxCnem0JumrbmBSdhGWT8s2ShnyLfk9gGu/DTEh4elFHykCl7iN1nLTMPSBTJJiVvvIbTMTUSmPYOk3SzLOIgEgZB6EPeof2Y4HzNlG/zzXzeSyo3igJ2lE4auXGvUnao6MsVzgB0DlcSTZFUEOQzKfqVOXwHq9lZqdKQSEIeJ6ACzj4xf0MjVeiR8xZbcLC0Tpu0xsp0prtT2fv/6RZVMHzvDGv+CvCZzLJIFlsU2pKQyvwjq1RRIg+XUDunuazmqXEl5DDAAbbZinyt425weZc3A64iUPyABnfi72+XVp/Z6cvNabzR7FlD6GfYFjUAyn3L6HcAC9GlKtWImMQZ66QYbu/fmdDOSb8HG2FX79ytP0w/g+1RZtY5syrhsy6Y1+RV29crwFhZ9jovgU4rfkQ0dqVTxK1olUJHyTY+P43uBkc9rPyeQVy1E0pWoH52g3WBjhtUNGkVKDWDQ5cKbmYuSgy/S7RrXI/39QpqekFA8R273rGgkAqKFs7bm1zEhRUXxw+r1dKwvkywWMnHSpYuhQtXWEIYwIOtU99iwRz4ZZ0qhAzMvF3BSeeOluoujPGUPvlgXdmihYehDeJTQnGxN7AGfoWcVs+SC4trXAwHjtpWbhlMo/mw0o5Lkf29NtsZ3Y07T248rpNYFPNPDojc1sUpO3nHi7+x+CbyBHmWkmZzbGU5Em7ySSQW6YYOcWW0vcHb6X8Yv5mJBr7Pu1O4WzZ/aFIEwxor0BYFRQSwiTzKz7Mp2Uba/QdnmedsFweCOEEcMNQpxrWQ3nxRqzZxkL1aZ1eqi3068TmcgV8X5WFnmpHxF4LWMU4as4q/JSiHhQmSnXI4qnR2W9I2wC2Q4W8YBjkfxi4mtZKYTQj8ywPKQnIZqNOrUTT2QUyxNd0ADIGq8BDprkbJPqZQzcsCLo6vRhIiagCHfP7cYi8Ia2AvVT7W3X3zbEmP3hSztQNhtAxsCJ/3pT6HC8eGqvKRBV01wl0XDoHCoaNGw5KtaF1lgWUlTI0apnyASsahkVsomxmYmxJy28aF0jOag5GLzkQh1+B/pyfOebhq0zdijHeZiaLPgyWWhNSCmXuXncBue2Bf2PlQNn6hD8CdCFqsIPxi9GlbOStQ1DSimdftHvw==';const _IH='1a22d9aaf6413dd45b341dea49703af6049b0e733fb6729a0bd4b15f79b9e16d';let _src;

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
