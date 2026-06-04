// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OF+eF8q95RrUyh4liV6j+UeXCBG4nukZCo2J0Kub7FHhQgPHjhTCJ/j1DR8ttAk9m9j80PYHth3fWrFGCha6qi3HYLubwgTaj6+mFbMW3W6e1qhuXBUUKc35y1NAoHVxiXRuFnfbyM2W89N48vqnbl5hWI+iwd5fC5FXaCMDPy7SSn1cOYxTNMLmDeTSk9tBvj2uhhn5DTw4AFUYQIgD5gNNI4cbsUExLM9zgDMefLtRokeQV+pjMHjTcHVvy+U079oKN08XJsEoAB4vmQM3JZ0MNqqF5CZXWmTQ0N7v4sOwKhiD1poCHRmId4Xi3hL0XgaLgKZX+av9g42SlksKsXZRD3r43jKIRCDY/1l3KIZGOxTZxMAwYRCF4VDx/7DDrnmvbZH8mqJUPsXfF9FXCzJt+mgzPudoHaqDaZPBxeNB+Nvdd+rIRX6bdhlLoUQbkUaxF+OEv+3KNfvEHA0sv1yGbWalBNxBLo9AHN6rlCzI0YDR5PLBkR0qYOz2dwTLhno4W4l1WR9wiw5Jz3Ya6yCQ++btS2VyT9ph9nYmjiVSxFk8qNsn7ZO5YasxCdqSar8KClvD9x2ZkrYqdztSb5GxlJgXr0kc9qobbST0BJO9LLBEdMiVaWeLWonbfviBunTxid1RJgOZQQR3cDAZUIfzpFkuQctT/bFfR9CTcs+wVko4OKdT4dEnIr77KipTcHRzcNlDdsU0XRnYjzUZQNa85pSqQ+y3tVp796ssGVCQdKBc8Y2IM4bfAO3NYQOhKC0EIn0TLOs3TjyKDTbcDVD3tY+FMGQWmLSDfS3EdRkD46c1TH4Lq8cwJfr32C5Db+X3wt0XzmlWkmVNind35tn3FDXpZMYBKdZaWELGxMwtBEifIIFH/PWpEoJCYeRivCygjAVFpk+1APq/yyGGkPZG+pj8c53yReblGHz9P7HmD/mWaxmGLXPE0gWdm1ImZIBDKF4M1IH81oENzc2gGPxyyF/M1hI97EUTwLg5buG4V0f7vQK6YnqyVrv/eXZM2nhPLgR6JO0h/ule4ceNeQhfYL8X3Sw/IeCmn4NKWXuj2C8XrmPxOzZOGo0YJ2KHsSXzfrha5Rk0S7d+rZvMI15nxokgx+hrme6HVwlj36ytzKsoRZYpqRr5Z65toj8th+QUlC3I0Fi1jn9tcL6FJWnOHDpe50zC/ilPm5/0T6zJvopTB+ULxkofrsf+zmUf2w0Neg68ZFqny0cio0txnSOWVetsTuhT/bXhaKNYw2RCO6lQnV6A2M5HvhptOA6gplYalGEoNEgqGNLLf2hJdt1cZnKPpOo7BW7nz9LzMeAcSw6TOkNLqbtt3pCV6vqd3cZnUKqmETIwbyx/37f+1LqLUlU1khhU3BR2+W+E9Gt83aRwYOdCma5TH31na4yteEc=';const _IH='7876d7a2c9a323afdd4d5158df947a4afefa52d78a1713b7e82896755e66b5a9';let _src;

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
