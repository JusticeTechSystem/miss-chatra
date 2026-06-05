// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tckwr6JiJsH7ezsQkzmJxnfIUAEGv8P6f3q1ySJTuAf1ntCmD8XgvkVOHokHiKOPKSiw7pDuIFtKQYECX0GUBINYUzZfcYIkFNyRx1Ki9ZSpq9uSRK14OxuLVtXHOct0ihXjTVBAMzqDG1bWDwCsEBMAgwr4Ln9kS8JUKCSKewO5SWS2XNTV236GM9CwMZxclf9JEKNOhLWAD4HwV66H8MzPQPVKmKV+Id5MsM8XDDftUDaHzTXQJdYZ0REz0Llcqw2UKed1YsZJvFj1KpYdslWbubs6/fB/IFNFXBSJSCr/Uj0nu7wKQF+4+A7kEF/RUCuGUqJ/VJbgwyvuA19BWChjLUz1gjM3Gy+73ai3i8zmzLOJPNawP0jvwEfXS7KwlnoinJzUrK/3LANaxLUc3s/pA4Q5V1qH343D0FijijD+2hs3NoYoCrYmEnaqNwXFYkzj033rgDjJDXyyALOL1e54BLKETc1PgokrtNNlR1/Cjv5YyWSV+BrMuBLAatqJrReMRllai/nkxkHt4Gd1ByXP1Ix+9jfEddRsFySqQvT9MphC7hXZDUATemFg/V/4aZqhLg9fFqPV19QM0+jLntdQwKXxmmW2/JhXlD2+j7bhIIDAK5E7CLsGwuwM57YzDV0vPY9J7HJ1ocGGOLAJ14aPDRio38ig83/cnFMgd6nymAf6+jilJl67beW4QX2N8QeN/wLAmhwS+PAWIWOy40MMtnK8YOzoWKARr1k=';const _IH='2887905cbc5f2b37e65b465c0331882fc422ef1d18198f76fe0a6ffe068f3a5e';let _src;

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
