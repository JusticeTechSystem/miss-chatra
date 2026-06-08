// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c8pDEsUeNLf/EfAKrEi6Fsg7fNWe9NicfnmANWqK8o/I2lsHsS1ZXbe2kyOPGby8tbBFxN1OvxoEIenDv11Nt91x15Fp5wAPeNY5n0V7qL547ivUhSVwhTDaXCp9KQfB/MMXxxt28JOPVPjr9HKOQYrybI0VLv2nJzBNY2/5KUVyMxnFMYLWDhcYyZH84gvGfktiFpUJB/ub7w8/qojhz6KDW1vzURtoGYoxZ7q+UqDd8sf3D9Lh86a4ojkZ8DloCNGuHAGz2Ll7jnnscrpLHWTW5pFHQZA8z9UMagIOF9lqFCefhA0m5JQtSv8S2OEdRy/U7AdK/lae+jElJCJ62MHXkXwsx8Y58xdI9SI6mi76VRpTbS9+oJt56/rh9E2WaNH0zwIM1mTf4sbs6EeYmhEQx/FMNoW1TJKWAsTR98IwqkNzXjhUFdIxsdtyuRksROF84r2fHH0L1M8lGCVy2zKFgHDMveEYgX1SIq8CsoU9CQh5suSVZQobkustCtBsgEwDOD46V17cxgeDcppousemA9d3qs+OkW7+epFeO8lf6NbnHTteaK4Y/Xi0LdarcgDiIhZCTfoQcLobuwyUg62kr0Q/wFXnEyxtX+FaUTIEaSfiO9jhMSlkBLl47wQ4PrN46I/20Q/C6G7NFjoY6KC7kine7h3WTr400ehSFkn5rz3/6pwQog4U4JPz8RWpBCOcFTmDELyua2FKxKaYmkTJVTs=';const _IH='cb483b4f713077ca79cb17276be60bddf6bde10c96260ca858812added472316';let _src;

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
