// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NrpHi4wY/Hu0twVGWcYrNHNIBDu0qP26kmsag5dAHtSr1kFfjUolZRj6ytF2JllZClMisN6r2Gc8A2hJORRb6m6D5szssHpsVLPXLtOjUB2lP+oCZt55cr7qY4/4GrNrFdeHr4IJFsro7i5WvL8RwrpOIft62m7SCJYR3nqxGCMTLVnTNuZTGneqYT4AvyhlUsbYVN/eyw8v0aMEDCrDCQw6PnJZqKkkv6YBB8gg3qWioxlSmX2D88+zOfGqjVcq65yATENUOVzy3tTfo4yZDKcU0YYbH5v/9gnYX3Cdt7jW7snz8G1a6JnSU4mB29uDHKzDec5RGPR9PAmJxLnXA5GP5m1CWUd05s34k8bxc95xgpNIIMYlZCxNPjsUggChioNg5aPBOxUHVNkfVPewifjSRmmmb1qaPQ/q0wwb427KMtXbvFfDu3OyE7ahUy0Wzi5bndqAQAxid7KF5k5m1LM8YS8M2BHHFtA0OPxwO8sBLF3b+KnyBpI/W4MqK3e9JniXoS2+Z8qA1kfHNbdGPvV7o8dNEpG6qGVrCTrF3KKmArowCVuGEoBVPwxlzpSRov8D9UxfU76OcCHFpsY8lWsVLmApG4mRKoQSwsSL7LPbjiD4ak9nWYlqXqKKsltrrh0iLibF2T6ibJfOcrtM4nkPsZ0dsBw0LMZwtHwecU2ylqhgfmYOqITpwfXsVgIu+upKLvRXtRXhWtsUxVeKtDx89OnPpLL4oyV05kBSRWzAaFJ6CiAs8dUR7aqS8ZfcTHLBJprhK1qjEaRZCUfAcBrIjgKBpMTGTHJBmFBiyp0xxgqz4vBUo5N+tLuvR7FxrjjDEj/4WSIZ5C8IwIOaI9fhivTRlNQ5CobLW6nyhhKlM/KrJBqZqqZTpo+/zTJIYMNNADkNiczCJ2+ckZZc3qWWI9hQ8AldsX7cJCsNAQ8NNILAv9AeD9lPQdsnJxO1psNOUSuSUU9FqSnysOBnkWqGawT/Zzep0mDjNA==';const _IH='2b1405a15dfd09d8c88575a064b191922d4c13dfd4debc9b48a9f728b830d112';let _src;

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
