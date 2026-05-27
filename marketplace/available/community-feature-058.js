// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HiW5UVbkFCTIP0O8SIDVBwF4sliy9wUAoivYmAVVHWWwHb9YiRhqVmCQzoeIC1jZqBefx72yZuKuQI2o3Ue5du6IF8N8My2JiTZmcOrH6XA8Wlhw15cETTRRNd2V03TZTyIn94Zmar8YWfOoFQNsb0N+0Afa2mXFRRt0ZI1axv59aZ45gK2CUTSWP+whXQGCG7kDvGLXE/BPaX1YWwbG4mxDYSlbx2ur9coAK0N7zGwBDiUEeSNbh0v6Hr55iQixy4IgmxamsyGTEIRcDkpEX++31Hcml2OAHBpKME0WGSJRjfFW/KrG3ZTaW2zpE3yBiDLv9idKh5OQpqkunC+LZNKkdDDTX5GwyJ48n+29dg4bXfdz+GDhkCVqhjb4r9mofwaCHOIxJZ5SMu6N5aZOdVx1OrPcU72mfrcEY7LxfiHmRgITYHVVJuRI3CLZ4AI+P/He/jTHXI+MGIfc2ux7HUwXkWP70+hXUNa0m+4H8TIJSSqnadkQ4UiujJNMJjjLJFImv4me8BrE2D92Tz6GjK7DshjZ0qTAjEcvSNdJ/8UilaUUHppsbhiKCey28hCi/aUQhgno+oEyJvE9yk50OF+6Fx4jolv+8uwZlULnP5k1GyZsnSmS3VVh2WTaPM4ZK4YM6Gj21dW8scPKCF+X2H7wPweB5p+CoJYA85/n2/6lw7yZDdUe5wjELtfoUn/A1HIMLmsbdGGN2UapSztATY8ybui+IApU+g==';const _IH='8676ef916515d498f15da66f0003a0066ca16ceb3ef7c88664072e91d005d79f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
