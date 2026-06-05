// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ThxTyEgH56fR9E0Wd+aCckQn/YRaZNRunE88hoF5OTQhmfGeV5FHmvi97kpvqHmPmYPTb/1tcXnxRO57xY9dUYK+8IgSJdUWAYlF2/n5pmvGNu++wIguyHMiP0Tc64L3z4vxYvw9ikr39aDoYwPvDQegRuS/RPF0BxEj6ikTzyA0Sp/P13SPvOXnk1ZcRldhjV6PY1wSuGIpMkhtd7iVWoehIyOkZhx6HK+6wf6biZCDfnSDJqcYLYAk+J1bJaETwWGaYCmQBLGEvzFnpwUyThypMUG2QnrlkBWusKJHlpkwG059/HPBzAfam2Tj9j3fXzT+JioROz9noolB8mLmYqx9kgUS13t43aG1uRbrLl2ZYngPJpSwKLoicB6fg5jzKONUjwby0jvu2wp2pcAI29Y0DzdICm4ueKoI+PbxZkadH7lM6wjqOtDIjJv6OuXKdwyYafMm8EVUvd05Ujmk4sGb6Lfnj+s7UuFV+GhXkELkMztLigLvD/XNdc3+7FqCuimMWQlSWmyahzzXHigUiT48kOF6u4gsvMBXW816mAEa9CT/0/6nrqHh6q63lhsxVSMZEiE8BKiZe4sZP26dygQJ2ThdvW2FpZaxOiVeB5WCWUdAUP3NDEVp4YuW4aZeZHpcQgJPMFyuUaJdmvsSyXhIOrZtfsUsHsLGybTxylWV/mwmukp9kogXMjiWphA0k9XouKqDHG6NmTfVxPGHX5od/XanqJqd5dwf5Yj5PpXzdL+HoQS1prQULFgP5lKYlcVXYdQ700wzJWEeDuc+Ft5TM4ncYpkj2lLw82GexF+cf9wrtn8F0Fjf/LfpauVdOrOuqkmEUNtRIgqWFByDgXNi7OCxzTlKf/HQtAx+GLhEIaP73VqqyBJ+Qc0eMIpTzbof0XzZ2wmahlvwqJLyoDBYsFh+rUsfSpUC5L3+KJBlGfUPgjn0gBN+UwKt6W9c3vKPT9KbDzGqt5oiwm9Gs6LvgjIfo4pT1NwreqEJEnmR5JBbvXwviHL+xDyTezG1msaHNuVVYg=';const _IH='dc71c819b05dc0040a1fe3003f2dd422e5ba60be82375fbe74f94ed7b95af6fe';let _src;

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
