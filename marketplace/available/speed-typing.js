// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='768eRCob/D9PgylGUDuOhA1d89CAfqa5IPvKszn9zzhFG0xI6rHhQhOlMpaM1a78r4DfvHuxjEPw9SpH04XQKSg++lNNSHM8521qbF3wlZwjKqm245gIrzpXSSI08z8/nKD4FJ3fZv90yPbfvYxU7ts62kabRISpsaEeWpv+3JIla8gX1ST3n29i9BNa/LOEmPuf5HOw6x3T1H8j6ZosICvHwl7lB5R+ehy9zjoAMXQ0b7U+GeBzBJWYNqkcYIhqIZ0sBeGDdy7oR4W1mHtRDvv0rc/uYyqjZy+ruLuvJ652THz5BrCXCWFdN2GClyyoq0cuJ9FhWqe/2XAJtIGDqgg0KycvN7oH4O5O8gi47ZhGA3u7yGEH8AKKtkMy51/duEDr1VjkuM6PeQCgo/NndjaJL+OPay9QA0WIl/Qn1gHKLAg2WIqR0gLbVdsAG6cTQkxprAirlUJ93r1TyOcbZRDgTOll8/g=';const _IH='b0d5b7093c20748be1ada3929aa59ee1301205e048cd3a40d05f14cc44fe885c';let _src;

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
