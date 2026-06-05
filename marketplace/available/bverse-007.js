// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NDFbYYa0wf0p9aNT/oph0wDTCZEhIA5dBX0uJ8Ii90kHoPeza07yDUth5COH6lHwECEYgBSf3HEvzPjnVMfCIVPGxJFCXvtmEVFbhda0CrGmotqobIyjNIwb88FQV2tGrlq/xk78F9Je9eJYVu30PWeCXAJROjFEhDw8XJDmbfAOV9O06fJ7N7/yamEpA8fOaE8lz7dyfnmZjGxGeh9oScpEehHFUOdE5MbEHhwr2+pBiAqDx53Oblbrg/qeZOF7lVhVIqPhLHDuqEaIUEeMdV9MWXI/pMf9oqAHH5+yTnS994ffpa762QjqFRWcSkh3RKuRjP9zOY9jWRIT1xqBFJZ8CdcAA7PtT71PKugVIFsnBc37ur/0PLE8s2h26TwwizEUEzr1LgMU5ATXaKVzN9pcFfrWL8MTEwms5mtuotquLfcGk7zzBbVzgM232pbGtZn1qZXVixe5nDaz4OLMsvkB8WstAaDA0OcWZ+P/1B2ERA+gv+vzq8FfP6EUMtgf4lOoMNwzYuP4cZjQsy3kTHkEvrRJKWTG9v4nB39/27Cpotd8nkh1Xx3C7n8i1XRj6Kjdidp77GiXCEaC4WvwZ3fWlk9LI1hJaYSoDy+rfI337wiYFNEz+Aquodqnh3wWPRv9fSxYbZbgv3JlpIvcBat2sPL/Kg3k';const _IH='8c9946a30019d9f842db6595bdd9c6787660a292705ba32771f8533bcc9bd745';let _src;

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
