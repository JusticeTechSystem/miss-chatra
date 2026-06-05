// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NPDOdol60tq/hLd6+U4jNbr1wi+49iUCsOuOMhjwcQTuTmwTOAG4rP8VpaHyaWYPEfewizIRLFKGysvDXOZjwSgUqAHjuZcswEdRGuuJqunU6njPR4fGIJ1dVXSizRb09XZU6vdqK+hPP8Gl/R8xwHtJYe9I+R4al88e1EqGPUXqzfT5HAGsd8iJfrFjWbrNVzLI5lm3k2F0nlJgmVzcVZm/fVysswp9nzwe9OOSLXAcOOEjAI6x2DYWa6ab8/OvPIPONlYBEEau+kJKnEAUdFNGK9fobcc1f/zOVdcH2Syo+u+MEmTPGrMdPfjEd2/kO3GVi7YREx8xbYLjHkJQe3qD+obIdw8zw0y5rlKsrC98hbpgSUPxv/HdjR8TSx1uaad0nAE9eE+aHWPoUdJzahPdik7mtV36xaGIu9LDFRLErgg24c4h5hQ+Q3DsLr6JlHj+WtCDTO70Rbp1Bt4CsbdctZgF6mIFSXftRakjR4OKwyy09d7fqj90DMYnJN518jL0EBzAg7HIG4tW/2dFynkptrsmhoeL2gjUTU8ITpWw2GYQOAluBbSPoj9P8l107MmX9ZwApxNhelxgbDzUvYpGOw+KWuISMlYvJ1yf7mBSPHSz2EhfW/GJwRXQrCREK4iepGPwgb6l3kGFrVqEAJ141FAnjlyQ7KqNIIxLnutZOdGYW11YVlH5VJyKzhDEP7oUgoZ8KqslaXaogyn7cKPp3r8pxhK1N1UEhUfWklSpqkw3BqvETm89';const _IH='4076a52eb73827596f249d9ee73cb28bf10dd1983ad0bbbaaa0813ae1069b392';let _src;

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
