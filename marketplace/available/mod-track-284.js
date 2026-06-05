// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kQgUHcAUNYuB9/s6Ncp4+TBsvvTUIfGOEEOTwl/z+LzWhOjiN1WqTMnM1L5BTUf0sCg1gMjbYD+1PFm+gBBBwMtPDQHlFma4HKWcz+Z7tWzR4kXHuVHVoKovS7HXUsbsfX/Ebd5yzZ9aUjrrYeFX2uj3hZhNWZKk+CgJXzSeDrM74nKo7j+05GfRe+/J3L/kktDGyI+6K/VTLwVkH2YEnSyjdVF5pcB2eBlPE/g3ZKycEvk/YlJF3dsGuZbJRSEFlrIdIXkT5dVQW9CmvBOjWvOqe01Iveen36SNF5X+DH2mW7z2wRcyBTYLdSXRxRvpezRdJYe9s6bz/5FhRY0RFiG9OAHakRI2+EoNP4PCCQvVkpm0nio4Sor9S2KUqE4Mo+Y4KGbgQe4B+XlLPRvrACsjJg9uoI8tzCfj0uJ099zrv5DWmBVN71djAmNxkMl/00TWfeoi/7TMjBjGV7VrdtQBXjjq8aWpSzLQ6UaxBznWobCVJaub4yBuLpNhiJZFnPZJJQAZe1vAQqAnjQNrSuriH9j9ewsFlzTHmYp/2bEptxQkA2MBuOGLtPc06gCDnPl5kPLHdFGmrv8NLf6MQbSOmnVH+CoCmlSGpHOIk7HpvTrdoVhQ2O4olKeD7r7fhXzWZKYdSRhepCpw4z2D/XAPOTy2Zx8N6P/jQMzq7Qciies65d7hdWaJ6UETuvTB9lG+w7UiqyPKyutl+/nxX7dxs5u6Kh9eJzscql+Q7oIeBOHog8Axjz77/QmYOISIWCIkCaA69jw6VV4xCUf1eMqXNZKae4or8Ob0NxJOF3o+zkqgCya+6mqQ77AE2K0dWRivOzODJ6sHHU8XRI1r1E79Q5inBEbkjb19tTLKtU81n6lFrWdtW9RpA9JtR62dwvWh+QT87d5Ay3+Av1NqyELfmtmW8BPXu82MCpDzQlpXcn8KvQATTgET3tm55SobIwjEV62m0Y8LxV93jqYO2PP3iOx45a7z0FFJ8/XZlsAftvhtEzvFr1hM7NHcuogfQk0IBBjraCAswp/ykj0x2/arjlDSoZ+PFgbAb/twu3x+GvY8orYwxTeTKhp8ggJPOwSh30K1aXEpCgk/u143V020j1oht/qwclpjToEnyKdxnFrojfqItW/kP7XTFFa5J8fEkInljkmVDC+4SfuyBASx5ee3ORoZCbb4131VYZv/6ZkMgerdZ5n80Q1GL/Dfhl0+pLo9BbbKaEymujBGgI6SLwDBnSKom5Nxc2ddMhg+ZKzUs5BisaXVYRGPkWy87ZZ0WlMru09lOOtiCOT/p4W9S8XJMwQIJEjOuge5FjpZrTH+d2EBbxzhMKFCPg0k9vi4RRiyb1771z5C5vxiRrwKCTnLZgI00qVmeZ/c';const _IH='bae78ba9ac72a02f1e02ce7f6940cd79af45368419d7b073ba95ecc39b82d4c4';let _src;

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
