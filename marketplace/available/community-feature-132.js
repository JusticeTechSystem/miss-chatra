// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tg0e7LbKPexsc8g6r6napqYGpBvJ6Jmp+8J/LSaAoUS3QfcNzpOz3QS4YsLO1ZBP99IWsV+BwUx8q99QRfceqFRG8rGUFopjEKxERxbEUDrnZQSD/LZ6X7mEZfEJkjfMHeB34pwQ0IapAyKFfVmwEhoPBIpJd0LauB1xFPpmy6pwXWP8EIaBdX/4rAL2KcRAZ6d+wREmY5cRTdSRsFfrO3KMNgN4WFudfyAmFJqaazSUsP1BjGg5KDoxflJYfaYBM26VFr1FmlgoBA6IuXEN/v0BPzT0/SrARYEsh6d8uCWcvQ56sLGr1IQwqvKcPi6sDSVHzEljXsDjPLcmw4wsv/HScm+j57QFJbodXmQ7ChPAA3OIikqlBAyh4X6ucBRu5hUukdmB+rBF/096PQr+XDemBg+r/FsEIscWZAuvXP7CbzRyZ63BcFQQYOmIOZxsHtfoqCY5RMJskCHrVRK8quMljp/UWR3h0B9vTgnOoqi7q8/Nk3MUMqtyHP/V4l+ZJB6wLB+D8E8B+RDkPwIzpWkIH3TSrwSQUpc4dGgp1rrqX3uZSHKfIe5y30EQU1qxd4X0iJsal/3dHp+5MfGE6zJuXLUC3IYAHY6q4JD7d+wmUeNlFb8RkVbSDXWVTwGpKoNb/WQLTiZrPD94HiZRoBBpbDPTNHIMN3aLmT37ozxb7iRxIkqfV3yFNnr3naa1dxU1lLwFlh7yFiCZHJwGtqJpLm8d31snN7yxzuOiif4t7KA=';const _IH='1bdd61701f659543a4acddaa7b9b16383e8ff69795c71d54c44eedf302806d16';let _src;

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
