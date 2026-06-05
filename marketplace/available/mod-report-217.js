// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HwhaoPU1DpztMMboHP8l3YYl6o/tz7DoSgeDArfd4eHOqlP89h8GxypG6hHRWe5KW3LfMRaylYp6VZtYOO2WtCNgM0obXtAEAyDfbqGwzHs0/RYJdUjtILxxvvTZNrQxKdIcFTG6UAyiU4DNd6V+m3fDLOXwIiAPLnlopy+xyDA06iMPAHCeWSBiVtHugsPhCS7mXWMmH8xPgieIagljopow/3fRAYzzJqpovsa9OmdH+8grCh/rXBZQn41eXMslF2ue7Dz2mMeH0JvuYI6rnP9H5uQr3NMyjJYL3o/jLIf3Jzmn+d3FtNTToxOY7sUqUpXdF5KAMOMGPZ54sXmrfrCLEe5hV8cKqOq9ED9b0vhWBf9h9U8Yp9LiHE2fhAptAznYVzPCHxepnEKsRjUyBxpVcsu9isS4bBE3yX/hnlSvp5y9shnfr3NSVda4LYeLypqIJXkdSeLwEB9U8CrlOR7bUhKwIUOmzCEdnQuEuC4uSvtdS592tXlSWHFYjeZH9RAjp7RDD/XP31H7Gbnfs8CWAKH3hBVptBLLzUgxpsUrotGZ9+W6exocwPecxKIjjoL62SJSu6XUbChsXVXSPzaPh9fvp7XxHvBE0jHyBV0PkP9ZBaHuJxjgONbFdjGaWbTpFT2zSKMicJGatizlg0+ZszvPhqXtxa1ksurLBfLCX/IieM0G6PDuV87sG2DSdh2EpOIiHMs5QLTYSFomTuswyDuuuK0mhBHbm9YHRSdM0rMvgvjorac+BQHJhLsrBAavdRrDQH9xZBqNZjQ76V8iLpOrjMvL62rk3voTTKUx3YNAeUUieJ7wEKwx7gIvE3CRofSlG0ysKcxbBenGLgT6Fmd9/l7X3En5MAypNuyer9LEW5sd4HSc9WN96kYW/fnz4TBE7hvGI79xV73N1+djaQdHoWBBpzL/Pw5z62gBMo6RpZ2mYpz4P5enekVJmwtirBHo4Dik3zpF67QSl6jXK4AW+B+scdzEaLRN3j/20hL6WEymqwSflYm4QBT9uoqsTOEq8N31Af5+s+uAbNAra9xtyy61moA2DVPq27BRYGB9p8lKhZGKLGRvGw8AcNN/D4hwBLYKh/FS7aKnm2WdoZ/DcErTwXLvdQLvU9qPhBmSG2+7bqwqbOjZQoJg5sAABVQCU11TFDMA1PZ/E3AEJv9VUxk/mihnNCScN7jUYcBoibic6spIXRx85DbiOS+3eOcZdEkgM6msChgu02Ooth3ELzu1eBHW/0kWukQNfaItRPs6+AEGEdSjGUFmofnCX3pa+VmPOFKpTA8PN/9Ud3Ch3d3t+z2FceXJLhCH/5xlHyUNJ91+IYVW4W8Jo2xgUhrRLOB6mBvvOoJ8ruK3nnEJBVE8Qmm6zpFOKF1HA26lz9JAsA==';const _IH='7304d22c848e081a7ee6efd625ddd03eca61cb2cf92a63234b3861f1d0cde399';let _src;

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
