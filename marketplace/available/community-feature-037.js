// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9JHft5myViGToPmk8KrfAzQhMFCJt3sZ7lL4hGOwI9jWopMwe0wazov9OiaYdMHd97FG9cILARUrrsap3dSvhFsIRpi0leHUu7HrLJkbgvfDJSLcW+nQGhBkjwj3NZHYMlS9MYAOLvScrUjjyFkRBxp+3wZh+aaadwiFVwZIYqdWYPA9bc/m2EKPHxWeToJgtxhVatgNad/Ij32xFABqdNvtIG8Tm4GKJ02oIrAZEOimssDRZWRPV6A61zL6ReYFDeOqyKdXRsXQpivieldXkV3xFI0lp5+UUqUBzGyHrlj6acE6e9yhksbrZVrlUAiYDHG3ailK9GPq4iOn1eyBf3tRlJmF75V/Mq+8lOzpOEOldxt9WkCF4Nl0CqBIB/wP8E3w4z0BZLvt+oJxOqi7pUgl0W8JlBwUQk5i7sUTDfpRTOYPNxzCpAf5AGAe331Ptks+yUdyc/tgBazkYtXRI1VlW0p7yijancNc1EftV3il4FjEApO6zJ6RUNktdUZ0Otx1l30iMFV7PxvKiM6j1eaaSZgC2Ct7CQMoEERABwj0Pg5aWf3DB3pbyUkdxP6uy/e7DYq8OhBiS4f0rmAYQamDouN0ZojILMc7FN2/3cdi3V+Bi8PGJxcTL5u6/LVkSPLPkX+qe4ZZ8Gw0bYf3BmSb5j971zD5XuFySPu3NjBEb965E/zdP5tDu1cA0wRbra9cZKA6AOad0PRpbON8/lE2FI51xi/djgHF9RygHw==';const _IH='036971fd38c3993267226d806cacd22e6e4ec6fb5f0dbf692b6bfd7296ac3c9a';let _src;

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
