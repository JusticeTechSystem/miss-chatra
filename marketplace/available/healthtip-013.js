// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kAE3lVe104nsq6hCEdq37YShIzOt361mPOb0YBxNHEyMzaAMt/vfEhv6pxzb2XtUpR9ETv1KAlEJzqXtLv21KMAt+OEJB8vVnmBVTdcq4D/7pju9knPZD/syei2/Jx/NczJ0Qm9hYrw9fFfnOueLBoaAf1UFcfWN7aT+T4S2rubJwZNbKIBzVtMMb4FVfMJG8d7KsFfz52BY90HeReOLB/BdPoQogkiZY5/Zt6vaCEQd4luGMZLNQytZd41ovLtOCInZUlyYHPPgzOnV86DyiPLCLvI9j2sDLI495ykdeQlggHK8ghUQjOu/4pmCa1F+iUeeq4ACyXKKQrnN1ERSfrc6kMrTN5UvkGNWWrnhWE0s3Lq9uDDBc9QSqqoL5ORmmvavoVUaDa3u/oIdIB5MndKSNL0Tc8GO7N7dk2pMovuormB6RXhQ8o0iTwS10BGo2J0Q63ooiAotkRc0bTQSfQTL2WWwQPfAzVtYxab7yQTy8yyYXGBDJsL91lJ3gwTzlVpsLoTewJfukSS4vJhLcM2ADgE1ul5vM0P6i/y4HNIhohIF5w1pgUocKWGjoUcY6j6UCtXrJhpdeHk3CY8KJcXPfEDIXxtr2Vyl59vw6b1kF7OzdNQ+Sbxu4m7uHVzQz3pTp4Bd8ppShTkDEoZ+Bwsi5Wmls9TyiN6eJcffwrj7qoc0FSvg7HePqOgMKtyYXv6CD15NUKDe20dt8YvcC+tZAamq6zJ987vW+idxjdZ+k4gXYuaUV1jtE2sUFrMgoRS8yk/lOwmsWqHmrdj+T2wF9mFnsktTspa03vHR6D6t98Evxu7DaoIO/fiQNh3KT1DVuM13o7a7KWNQECABkYFxJ/LJAjmy2M4gwjds9AUuYzCNF8zgOucR6VLbSEHq1kuoZsAgik1vwEEkOHwiC+HubKCQQcbCF1HG3lzX8vo4yW/7712kHSnbPmQ=';const _IH='872f08654b7a88cc22be102547c4dcbb6454bda8675dc16020fc4d95d09f43e3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
