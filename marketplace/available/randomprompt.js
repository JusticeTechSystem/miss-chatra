// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+3HSQeBzLfMGBcB1efsApsYXYJTHyGkitDs8cxr1b/rSoz2vcxMFFP2FDMM/UAKedFOe+IlXgHEUYnXXTDCAS+m2A+QTese3x0gEEK68VMMH15Af7oJt37iOI77ufNdXiWIDj3PgmO+4pRNMnzbWeBYnkxpca1gz4lvv/8npPr9xQKbwpyf6rNWnCUlQdZST675dk0nd0oE+luK/4t5ucvT60VIFbsz3Kdhl14iU8k5oSTWSPItTLGKGOTx8HFB8sr9bEEAcPecCMzgJCdYgJr45m6jezVe7XOpopPFGT8ty2n0CaCrXAPTva5ruiIEkcopuYWj/gPIwIkx5hjMZaCenkoBkHhwhaSYynu6g/t9TMR6imSaeuBgpZq85227fHTP3Z7cCIeaJkL5HxVloPN3s+qU4k0yMBKo6mnqOpoI7DULzQk/VorS5u4y8S5xcpp+RY+UOWOI8JNWSIXVktjvz93DTb1HS+Awy1LK3N4bJQE9C1TmILpGnWe3cMd9uYy1i5v6GSKQr5gK+I9CJB5lKR/lTeiQPBx9dbC7YpYKbWZZFbTB1+Lw6Pf3YUOdrRUfO+hJBOWgv7qkEY5W9JHYpM0P0yTQzL3EpEm7pUAHLIb0fZ1NQ6sdr5YuVXPmOk5FBlNt4CDF2LosKr3kr9P2E/deeO7pnVfE5i2VWROJnWESI7ENf9DnSxAnBVeOlrrEKsW2jS74nxoxPXxCloFL8ciFySmWuPPGDIfaienXHgV4st8sb37fanQ90bBdNso2zgUlt/yPxeqD7rm55vtwBRZeNxvJMvvHq7rndDid/8KrMKGJ7BQ5awAtJnjA4YCYbwYdDQby7DhA3e24fNJfmX590VImBucWW/n7dbIQUmhHu/uvmWUsGb3XtjjaOSc3rGOOFsDYLw4hDbBb++Fh/+XNteHK8DI4i0En0Rn13zg3GaJnj3iCXyL0s2UBbcb5eGpjZiWI0q+VchYLJkQ6q+DeuDjPqIDChT9v1HEuXlyv+XKkXhUdzs72rnmh2TQ9zAduAqtosAutnQl4U82k++8wmb2NQtAfLOaY+t1gyxs5XWCnHe6UdutW2ACNy6KLQKYJwMGsMe/CKphrbeM8JVeGjwCu1nI1owVKfXBweg7ysuJ4EP6o+ZCGyQy75ytD9x0LuGm1wFLO3v0570nb7vuNJYx9RLGY/ZdNA6di91NfXm0kFp9mnIlalQh/TRTaub7Eg9p4GWU=';const _IH='38dea30f43e37ac766648401586934211473e976fd82720af705223790fa0862';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
