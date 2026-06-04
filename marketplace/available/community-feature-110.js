// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZpqbH/1O3X8nEAk+/3xgWZQJIRvr5yb8Pjvv8zwDzToVoOt80ZL2a45qCH6CVLp3p9HHG4T64/g+cUzzlWaHuXZUDnxjSz3uprHRupSkcPPzvTzy8X6qOSA5hCgmLSvZtTmkomSHCxtIuBkKdlp28bMtwPKU8NAiT9wKktt64WZbDx03Y2FTBps+KydA5iEOVa5tkKt8Aguw9eYlivAkc7NOnR0q8MnwYgKds6mVfGPpkUneEWbZ4gpAIEcC/b8U7Rt0T5a9Xvdixu8dA1QjSXJ7mfOYfWNP12q7q9teOttyBZ8R8MV3VJEeAZ1ZrWBM4H8e6MkxvIeMByAgJqSXxKUF2HgEjKCXgGm6eA3sgM5w9lJYTSe4i6/0kYWDLy5mmKfNFC9JTS0/SFyCWi9oIOoYmUQb/fUKwiE7YpWQd6hYtdvSXOU+VEEji3ivUkEGfD8Cgz0+NmP8/R47i7l25fQ3wKW7ZaJ/Cy4nunrN89bDCRoYFLMjWGjBL4n2+ia3/ochIhLyD4Wp/BwoEVWwtKQ7DI1lf7rDMrmAjRObOUcbpEbfRAVENBvjsWoJwPZW5+Ufpyn7cW0xkCQxeoeAn+D9YPnKwLSAWUR8KTdfl7RYPjQGZOEvhQeFKDX8TekzaredCFxxVXRPakzvp0Nf7989GlWMxu2dPIUZDlk1zbmjTTyRgji2AKcBIfQHeY5R4IejkKALAskiCsj324d8jllNJeMAKwBR03awpPmloaJARzWwd7n9EV8g';const _IH='a9293cc82955d1cba739707dd4ade18dd6f9d4c7aa687e61359f6a666afb037e';let _src;

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
