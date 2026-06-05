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
  const _b64='Fd2Qf4b51c1tSjmcnb5T4r/9mPp+tni3EmXG5DlVpTSRGqeRfFgi2K6KfA0m2S9ilUNSv/2A1aE+S/cDQoQEhUU1a/55v9I2TtyeAROAgz8L/F+qtIIginfD1/ooJ/ghYvBGQOtECJ3yipsAp6ZvIFRAAvQBHvFzW9wNUOpcgW5ypdSg7oNg4aCONC5K+Knpgne0IdOMne0Blc2gql/UUWR9jEPIODNtvF1lRKd0Z/XMolgcxU2JoRKdoNqsPO8anhtW+c1eEnie9NbhLU65++L3LS0JSkbaAhbzJpCfrHZqfL02En8yKrPy8dTA/gdD21vaP6x5wQkboREwTbT1OmgusLaGszC07Cyza34JxoOLIqvia5lf30gos7WOnRR2L+y41XVYdEUkd3buhAY/uZ+huzt0ho7+XtEXgtkuMDVs4fh6wlvdUndpvuAM3hy4eIvwyhthgDdkXSj3B7vIa4ihBg/lbtR7EyZ7VSEFXMTC7WqaJc0vGhkcHE74IMZO6AltI3AhFIqu+ni8imlKOaWD86FeT61M2yYPsIcIXNbSsX+asJ0skzmDhL/BUw0tBupE+Nw20Fm878bNSv22x0nAsnH7op5vGgZYwwwte8oJtwECY8y3SP+oAp4G8vcZHZDOR0bKSJ59GoZyutstqN4jAsozXTQWaXU28OVtq2rZT4AUwhjUxxgAuYMPf81BQ3nMaQq6iuF20n0B5ThaYseHnR0+2+Uu1C987tKcVPP4iJYjGLql9hYc3pQqHjuUsouHVRg8HiVeDxoHkptfKpBNjmuHzPoXxEwkZLYfXXHJIAszUH2JSMNi35YE8vWMRmpjRt/HRWCCfATmBEUG9j05fdES7WDCRfZvRXncnR2UhYqtaWf7fM08ovU90JmwiNkWGZMAKFgHs5jiCAFkB1vm4KPiA+Qz7FvP1VdSC4D6NTksCfyKUIHv5BCUzFQhDoY44x+C+1yEn2UX0Eb91plMaWJ6Y4xVOM0uLYGBAnlLU/gmt1fAYKy5GAFRFPjmfIc5czwccyEnn3cQSGID7WhYkt6fNr9+vQqGADesPAFrWvmN4U73uWTyq6/pa3oSTn+6sEIJCbFtURselDoW7ryQVQG3LMO1h5Jf1MIsy94VONP0xBsioOdLnlAZJqKB3D+JvfuyztY67r4sgWVFer/IKKUpgzELLKqCUNAnCCuy1s+TEPBUKUwjlLp+S1ue3roZFFdofBN9QEFetw5tV0pNgmgt7mCpkF5X1aEINSwvNGJIm0mcQvdAZpx+yYlCagYpVSRvD87nUF+LrWuAfJRaSe9yjbwR2AxWcQxRUkW7iuaa/3f6N/HmNNYyKvXLPEkSin49H1BMOW+DLBp7pZWWFwU/TKghaLmlkcCCdwW8GCoP/UqGJw==';const _IH='8235ce212d9a23850936a972570dbee2cb91e43276080b54a82a4d20a03391f4';let _src;

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
