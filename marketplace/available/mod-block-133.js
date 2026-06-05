// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QBlxk/BG4oihQAjT8gMdudESc2QXgQM9XREzEc3HWzlf3qsOFnbmb1JhZNOrQDnbs8I03hRRfM+HMX7Q0q8rM9gqFQlWvYm+TXegXCgXaH5Sa+5n3GAYniCLRSPTlxzuiHIB4uM1i4/mUXtk/fFrOXfa/IshXpvXi0yXa8o3aF14A0sADuSQucMS52CUvCJcbLZLjvGkQ9iZRzyIM/Lgi6wKcYbShya1cd4q8nNn/DYkhe41xUwWyUiGYl88HHtNLtLyOPrGXQA0jOaFmie+FTPcfrX247NmdrpYrIvey8FbDt4EOx2ljyWSfLt0ZCy/5EVsTNC5wt3vEjz1o2suL/a7WecavBgsF2yfEdZEyun8yv6QTzLRsyCI8RliJ/sB3Z2YTkvHTRUEOhrKbNAuq5UHJAMztRev8Z1WCbHRiPda9iOsih9efujBsQk2UrT4RV94GZX+GDRihugp3orbIgCCB/HhV8sPfW0IbvEM2m9PUY70Q4tFR0EMVdLZZY/eBbpV+c9enDCO/2QpmtNib/ydp566iIyyuiP1w3BbbrDVVLr7F1k0nBQSUEbpGQd5ICjoujNwRRFYV7MtPt8XCE0PahXEeK13pbwaPrla5bO2pxZM62Q7+Cqr+AL0PnywRaZ7vU7VPEIPmTqUhyMJLxZxn6Pyishpg+XAp5ukgX460a5os352Yk6LtuEVZJgvjU4c089MHtuLDeM47tdPYzE1XB2NhPfaQADQjXi1aP6PdjSykwm3HIZErhYPyCsWuHejcG1FeKRLcJOE1hJZGTg9krqHMWgH03YgdOjOsTizEygb9TtPZaU88CLqkpolBT3l48mJfTCArt8o16COMqQq9aNVSxMN2ugnXNPKJ+6hkS3O5eS0SwNPrFFOZtFtP1sE0FSZO5731d0uzu5NarvFjbOoQpncpli5PhmvWEA0Z5XxVkWHeFB7RCZPvmMtIM9PwBHh/mjSbHbxLwMddxZI2hqAnMri/jCSBI5oLYcu2UFGIGxCFFsJmI0XFlX35CZYH67ks/UVnKRMttc6lY2bDkzZL8we6ScgIhi3O4lftYTmSzJZETahS2lTJtjLZAsn13hQIslBS327apcbQIfc+WQi10NGfdWj12WRN3nXPWuXiSUa1q7USkQJw+nx+nrNrEluFgGPjPXFYpl22msmk+KCuU3UMyvuwJijBr9PgScrAqsg8cALk616U6/sfUVPbTKFDZLPhdjOAu9/PynFPjMmdKdI80IIbGQ0VH8WEnVaFR1p+I/SKFzwA77AEtrlEsAN8ncnX5uHTJDWPsMKEVDBXZn42o/FFTsQ6Uwp37DFW84uzcVsmm/wjWQVQR+gwrmW5yQSI5J2pR20itU1dfgS2q93XgcF6DGZ';const _IH='fc0f110f8e3620fee62d84b1cedaa1ffad3cbf8825016bdbb28ec051cc07b6b3';let _src;

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
