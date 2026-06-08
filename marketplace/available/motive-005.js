// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4t09P0i8kyPD5PsCHBwSeFdSp93ZOtY0x8eqqa+/dCJkEhbyPa4UV/bcZve/g2/a/n56LRpTJWlAeGRVaNtXeTtcJ0/dNoN66PsmpOhtvLtTDSD/MIJQYqTAt98tXJko++wHNtLphUZaOeyojyz+PmZ3pwt5rSm5sU9TenjJHQ9Iux9mlxZR2mKKlrYq/KFNIzJqo+xq7XqkJ93ewcsPznawM4XFUdyOLT2trySONvp+zi+am/62/rZVhptbuoZeWmK8Z0+YAHFBdkQaLFBsWE7+gDsDABZmooZ+sBXgo0A+wylnSEC9Mo1nbXozL4YwH6o6Zmdy20glevaqQmEk2CrjRndwonwCg6eOBBRNS9PFyG1BDg7GvGwSei+jacrwfqHPh1E3TNrcyyjsk1sNh9sUq2Q94glcrAflZfayehvRq9fxF801vUe5Ht+aalSCvyri2MflErso7a8k1nsbN+j5n3+XLAVUZjGStQM1gAmwUkQYwc4Mp9oQmnVFyImceq8+R8s9Z2NyQnSJqgLCPenxubKuoJRXsNBu5WRBwLqPlLRxv2HVf4YCQekGLNQX75+OPnnSs85L7T+M+zH5CcrpVUrE+Igphgps1h3M6nQR0akBdisDL4NNwCKRpeUZaJ78vlWe/cgvgA3joMg3udnrdAyfiOyypHruumfsRN5cAlhytjw3bCp0iLekJVhwhFWoZx+5TyL1i816Vt8bgGA/PV23tVyupcfJrj0oXgIRMHMx15HddmwhkvfMSiDTyrMe//Ou/C2sV8gXLvWR4E2xCUQX1RtBpzsBn7SU90EMeHY5/Po4oN7FxT4Eu1vg7vHccEy+cqKWoDOTvfbfCwNAQqDTVBFZjC+0mEN951lR6KGGTfr2iJ3b3ABQRPBndkuKtAtTCxpU9VFwisTmmIvYRW6rqNeMaXClKmN2KIwpv5I9qQ+rZl3CFTSr7l4HK4asB2LTAKEVbhCSj1iUiGFyCvKjqVsta1eaWsJJUtKGgajuRsppgYwPZ+jwyPNJh/w4W6Mt7UwMhG0lI4=';const _IH='547c55ba9aa44869f11594db2083209cd439f0841562e04602c4490298699cf1';let _src;

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
