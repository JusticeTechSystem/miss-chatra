// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ03nJU4sbFTyJgJUQOGdSCivSCeBVLS9Yu+u9JVpSZaUQycc7r40wuHjNNQDSoTKusoU/cHQJ77hDpIdYFrPH3wzMYfI0HLCPTnbhttoCUwvzsH2lvc+y48QV9GhzAaJVtI9bk6cxpPs0Frk278GRdmL9Vd09ltH9TIUvdMetkG+RCMhjBBpSjnaXg1YY4qI9Qsn8TB4jqIyjOb6+r18EXqNT9SZoii+Zm/JU4yzkNd2f+CeK2K22Oz4dTTqw5m6CWj8LDY8hUpzKBsqHkcy6jZ68nszQ1W3Wo4bk+3K68mnJsKbOW4HS1Kx/5NevWZyitNc0gOOof9UwChUrZNdX0uQJug65sftBy5XVgdzMqnofne21Ju2h0py2sYYiAuIpM6vmKVtMXD+x5rai+xLknY/tPrELrDCpJTS9DaLTOb5UF3T17xya4N2zRoVXzGXbp3Ru3QWeRrHgEudMAXTYDmmwdg0bLo5pa5G34Pfoyie4oW69kOCgJGJi9PPZs4cQ47wdTGdvfZzu+jdD6hwODcmIsmoEUzXi56SCxfeNVowfUMGTb3GNaBmINMjLS8BzUU/4sDGWLwi4FOIUbFrPf6bJ4veccokIRBODlmYOzA+j3l3aRPfGLLlJ3bJO04BG35CGLJAT5afhetFrcMSF/voWlNWMe6AhjZA73e71SiwLld+YRyyaN7+CoxIhxyoyebVRJ+WandJ4uxU1HsG6HGU3yP9oZbCrTt1KS1lRDeJkSZG';const _IH='0e6e246d0f4513121f75fd2c7df4b6123c5e119bec4567da4594fb79f85625bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
