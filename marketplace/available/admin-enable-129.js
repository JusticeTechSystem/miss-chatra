// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3xrScrZomIAZbHGR5hbqMEBqUqXTUtb5ERxpaCP3e5uOpmna8IE0yIIwBc34iCXPQkSJdlbUahlErOSddk9k3Q6cc9ChdHDH7O6MhFalk5adbU+/MY0VRoPhhqWCXS/YEl31oA5hhz9xQQ5crmTjrwTQQKZiZ/NByVLpO2HlaJJ7l6TUcZQ4qk8MZIYCa22DDbN2ojvMesrxbr2+BiDPMLyIbZjLEdf5PX87nBn8PFA+t7La2cS7cin4qBQMgZIuCWtG8074yV1z8eX+RH/tqyRunky2ESg5j+EYNqIhtigu+GUMpuWgsZdsjcCEl89Yy0fcS67ujE3SravpIoW02hnP2PusVs3Tl3wuyAVCWZctjlAUousZvpTOgf/t0THjP+nY/HxZTNuOaR9GjKypEHfOtnfvLmOPtlvURtAllQ1JdUiyWKcOv4K92NppAvT8q7Oa21NF5JsAo01VtT1cMldO7wuoALA5Byu9yaCDLEcG2IBn/d4vjBGV2mGGSpOd72Xh9lK27/VLzI8sy9ho3KW48hdBnUp9HM7R9gsY5UzygEW2YZ//rlBKD6Wqno4YWbv8PZiJYPRNlSkJfYNuxTWdKFf6lpkAdgLtW7D7ewLnALxt3REV1lZYF/YSd6T9hO4+nTQNQtVpy6SyG6UewCwrIfbtwTqjA5chldJY1zYHh2/X2EqGrkFVb46UlJ3pqjid2PrCFEETMARwO4gkuXwU7R4hPjbPFoWWK4BHDsuio/FS4CUp1NFP/u/cszRvH6dMJz3YXAHk7V3lW8EiK9XDC9ivl5J2tcI5KLsYfv0wNSZK4MplGc6O0MNHCkIQoSs4t73N/fPdHfxe/ZzODYECMpERMNjcuRn16CaRUtsadwrXFS3O2nLkAQkYz4gs3hbgEinxfNXlKURVOVewm0KS3EgBjXrXdwtSqiZ9P0cwJxIJupjX/guMk7uvy28Y7zEODkxi7upwP9/0spveBHTS1yGBXna61zrYzPtJUhFQGYaGt5SoBnaB7xsOVFJx5';const _IH='abb70b710f30a7ac5ba4919a1c77f1a757796dedcbdf93f321e97af865a8808a';let _src;

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
