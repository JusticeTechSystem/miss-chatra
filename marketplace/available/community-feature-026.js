// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qWAGuUwx8FplLR854996wyC72osP5tqF+XeMXa74ZIuT3NAXoyKG1oyXvLq1IPujn0AKWS1UPMmmppOnwGSLNMgLWrUJSh4oZgSBAhEws9enXdROoobBrt22z+HYksIEzCfDq2kR0poNbl62kMgE7mhJfkKZR9AvNMmsQYiCF6K0Y5bKRVbGm3Fg/0GIUgu18aVoM4FBG/VezMRrhN8uWoVv4zX3sx3vh954jFd+OSnZvyW4A4/NTrogETlyvbuhpYyR2kU0AsCzVqVrHcqllE2gabFr1AO26l6xxsrD4c/lqJ/6vCQQHsm7Bj36lefjRaWLrCtRkbmvObjRsIYHpGzNRi03x/9yJnqnmmc3lXjVs2AItn0Yt3R6dlHjvkRdT48J3yAQ8P7DUIH//2Xkaf2Ne8eUyk7GHEAr3Xupc3e5dV6NastoF8N5+4EiboE2XvXuo1FUfx4Q9Y9pfOeEqybwoULVk/jN1fpYMf+lQpycG09llqtB8K5HP5lKk/RVnMtKkk/EC43pVdph05L4Aw1UsRAi14TV1+pGZlG5hzM68dPo58QcUyLDpnlcRKCQu34Bp6iDmck/2AFeT0Io1uswjIBPlQhMWcgKfxceuak9a0TJKmBcTrE9LuLS8MfRieuBujcEF2EBnURXsLwdM+avOvKOMegL/6pF9xy74s8yA1Zv1mbvWtg5j6RLa28GRQC96g8t1z1B+ORshxwsjha8SEQ=';const _IH='848c958c4fc4d2249dfb9809001fe0f1d79a3979133d2bdcf9e9eca829291995';let _src;

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
