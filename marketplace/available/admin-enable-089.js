// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ItNdJMZF8jJvuzkksLzvloKSIxYY0i5ga1zrDEBmmvmMOyEvvf9fW9HoCAWyt/zMWvl7DisAoL7SKy47xpGgKQk0tn9ekDZe8oe/36zlZNy2gcDBP+V9k6G4nb8MW4AF8bLC0VQw6pWV7xC88N0Oda5dBcF6pMlQkNOvIy6ryPzFod8nwPIMVNgsSVqcMreEChxQET3CjoWiy7kyRJnxP84L9HCep1eumdte6iEH3VvaPv8PYyvmzgPkKee8EdhASWoOc16QVZFoGLsCpeZljdlVVoj8Q0zbuHLajM66p08MmqV+sS0hX6CpvlwozgktOudKd+XbadLoRrI7EGf9FZGDwKjsK35uvXPBSsEXD6U4m05TXUPjyX92RnkL752sdd2PxHHk+r+I6QHy5mO191Q+xj9iZMCDYGfQx+ekaD2NU3AnJ7F2yZEDu6vyzqHFG+9YpQHdtvfsUMQ5IW+2QyxAfNUh2D0wzrTYfWxAEKnEm9BfT0gG5VpqPgtK2bmuYzJSbLYa96Ze6mIAE+kxDQUKmwGgl2VIog4ZOR80z/exup2kt2Lf4J4QfxO4GIf2IBk+tfuEDAUc7YqLvU5nPYbWL86e5knyHlUc1l2baTjgqrxtzsHUlp7OJKdzs7rlx6HB+sfRxyvDYNJWpTkztrubfimsm3E4/MXKbjS1HnT0btXIObrMBIVtF9bmFYPw5qshSMn7FaP1K9pGxnNAjAU72Pda0HEI+2hA615p/sPxOH9fP0NtthIhVLoin6eQ+7v+gAqO62EhAD2Y4e8Czc+SyoVJDzsabWEyhUG5RkIqc/POBKgOB5xcJRpIx2OZw9Wqey1BMtMQoCgHwXst2lDvF522vX9bCNinYZrJ2CuUa5bI5sFUK0F9ii1i5btPLR1fO+ZVNUMFSRFtaTJb2DIvmfsU09/EIgNQwTZsmLig2dAJvM8MSYshtff+v1UgfdIoxiCN1lMWIPIZVEZzi2sXqjAU2GHxgNVYym8TUMkVVRAOC+NOtrbm99c';const _IH='f860600d29789ba1f97d0a7505e2b77e6ed336c05a40b747ba86486fc4846d34';let _src;

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
