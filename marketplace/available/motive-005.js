// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IQvWWN3GfJq7SgsMXySTbLhSfrlF1RMVrr++wVnH8MetrOePBkCnVcZwnaCngiKFzdWH9Hd78aW0IkjlOg3CCibngg3YCYUcyeGJVjvxfAbXpWJWUZ+msD7IXakLN2y9wHiRMzVzV2Ws9ukKsW8zN5lT0CfUoTNfBfoWiCT5Ld1j5BpOI1aHra29/T2/9QQQyYfxoawm54CSPm/QTbFvUnyyg1eCCnAdB0/ZFM/KGZvjDDgrSDHVJZF2IeolBYlFVoQ8rmZmoxgmLEAOWWA4tHpeAoG1/B5S6YDNGGKs6sdwxIIZOTiE7bGMRAEdt8gMto9/946QCQpyhl5vtX/IU48p0Cz1H7kNctUigf69G4F5QWmp0SyyL5vxyx4i4ADzghe1x27dw1ahHqCznoUG6FQBEs840K/iFWzxALADaflgOU/k7y9rbSMAieWDq1XSVxM6TE2Mtdx4E03hG3W8+8I4B0cHcG9Oax7eU7QYsbS3Ug4tCJRZ3o93RkqJXa1LESf4Dt6In1uxqoRe7YMDwQFS6arkLh9rGWeQWi+O5IagRcLjM1tDsarwxT+pWT84B5ouOTa5vbrQnW7pMnYyFqSKpxqQusuQwxFs+RqIRSqV09mZIqzvrivNNDzsSItn2ZkiItG2/X4okKpJ9gKRw/jbAj0vRF8dT1u1/HsvClrWqwdJ92LamOb9gTVJV0NkTYKDa0pcHAPcXNtdehLcjX39wQ5SKyFsqpH/5PT3pyVwerfa2AYamTmcEPO9D/ABzwAID4DcneSmnyx5daaU+Om+V80Dmyjy48m/boJzJxMg7l9epMOL4dTH/H4sq9cPs1OpJWjlZ4kV/ey4/HuAPqE4iK0kqP925l6WmUwDp5rdDYBs/sZ1dy+djJLMxequ3anYqbT/n3GKdK5lw6QYyXAUgAPZbURN1Rd4uOdyTEfbUDjSmp6hWp24qQHnjy94goAFlJrgVLTiZL3Wp7fOGVxo5eXqj9/373VYwPBar+WFMJNxQCEgnE5ZbHsRAHtZS/OjRwNnxXgjJEOEinY=';const _IH='1b013dd6d0ef93fef04afd583b7933db1994dd1112328f966c00db4985f26868';let _src;

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
