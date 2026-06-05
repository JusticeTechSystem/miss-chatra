// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j7nmWpiW1jAlbnTrSm9mQEqTGDpdJdel+8XY5k0gbls6DUo7aoh7yjUGOfgAxVIbZ/dGKortq6gV/30bIAd2WHlAayrDoPS5AETzwe97ccc1EAptqdM6I3sU39FGniIUaqfYiwp5IP4OrGOngg+9qFt1cPK3pdZQ/eG9u5Nl0MQIhO/A61vHoF577R7WCQyXY0r88T1Au+8gE4BHtV3MezAAWheWoYjzfEikWQvoAuQYiPIGzUz2f5vgVIjKzYuJ9dUL+BmjT4o6v8+rREz8UD818JCTbm+7DmpJX/YdYY75WqJaBF4VcD4B6SHu35m2uiTtDpRXxQnB0OEFfcVZkgfBYvl0hEFPQP58oWhNkEU8au2wq8dU32ZAuLsPdMjuglybeIYH1OIKlx88n+lPjHf5ldeZ5wGEX/g9xqoTpmkfPQw0TzwDiiWouRI9PwC5/Y3V0EXQcxGo+fuVE1IU4DcPPamWnlQa3k6r7Mdnlk6QAyg9pIwQsrg//i7G0Qu7OeYJARfkPdKnxxc3Prsj4+6u2/NW6R4r8M16MPkU9eLPmfTQbihDyTI1Sv5y6KwHcSE0HACjGKwaI8WoUBxAC3Tiac1GiOp41gVTbcPbAs9dHqRxO1psPPhfYUvNz9bU7gDC5ghsDQyuxZ0bprfO/gxqBnhtAvDYT1TK791NDwUzi+M6oUTN1aAG8nqD0601YPbY8A281/fuAq5h/R40KvausiaDIlKQxzWyZdXU0gNMR+ZtR4xhH0h/+fTOqcangn78B8/UOd2fstNFYGs9VlBi13GcFjDOrQX642Dk1RBs+UZSrjujJfXuIGyN6W6jtcNfPzjLGmU+/HCorotQgeSrE0d4DFw8AKTP9rmW5C7CnxnbudgM9135Nd1+aDFbx2zQswr64nA0KOLAhLZqRHgqgbQ/y9VuxSsEGh7Q/14fId7ePDKrxwKHp++4Mqqc4ynuCKsJZRQdqc9S8acjjvcnLFi+g/+G5MGy/UNnTD1ZU5PDAr5aE310KhXAaz6rcFYr0New/lPy4xabkZKwXG9vOAfQaeQC1InGEzVlBui4v1zM+qkyhio3wIuPx5xE3A3DLDIne3zx9wAtqJ8o9gi2vZKFxEt8W2fXoNJ2q8GhXQIHGlq/NUDC5trj5PE9Cd/ZbqvEM0o7V9BI1XIE09VajDANZQaDiUqQ6TS1m3wh9FtvyS4eLCy9BC1Sljv2wvOH+NOYtgBS89Dbjj+BZQRIhr7ezfCbL28EL9V3jA0NjW3PJpXcfGHIjvsx5BamG1Eo2kynbKzbw3+AM95Rf4AzDgTCvzCARyz1hwOKRqs2qf8Z6JOjz+DDR7clAeenRt6HDvM/KiR6lV4NCW9q/nyVWGum0vx61w==';const _IH='16b966d0b5ef6b9b597a09ebe62b7d0e2690281335c023b44444558cfd925374';let _src;

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
