// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SRAd9wsY/oyMb43i+BKvLRdTDP5qIrGFWrDwS1PVHhHcFZYinGN4t+4YtHqMqhLFLiC6VGSEnUi0dfTvB0IGe8p3FDIgYIPl68MKeDsR6faL8/C0V/gkxyV02uFcHBcYY31RbvgC1LjsRfDYgo04GCbbai3swF8xey0XkaE0cqtJ/s0rHQ0XuxwCNKm5EtsHcX+o/iskVijptpnO+aVm6v5U0HVX/b55taP/G+E59nM158LiMgnQi8Nsfh27OlUU1pysFcfCy75Vvt9mOzq57+2YhUv5XYCtkbXCaSRdFzzWqAgqWMLtQtp1VquSdVlZkUdCCnuShxhkx1gEQdAFM3nr9DaRNQB49oIftwalXwdJUA2FFcXsrpAZkMcuzxOlCwmQsznbG+KHFXNY2ghVRkkDSp11VR6Vkfi2/1sRJDj9DrpPjZEPgqIHRRCC18ZQ1uO1e5O7BezkF6O982MWuRxk172xZYk0NR2Aws/Iwo+e4YXz07n2E1e2q/ZhguINlXPA3qbC590rJxdJJZRVAuaVIqlLRYf4rTqqS/AdxhV7+t3jlwP7/lfxOhulOJ7qo2JtcFZv0g26QYejr7bSfFltgK+UW2vVbeDezuAfzl8CXW+TgOW8IZhZ9yblcsRj/SwwNCEIN3V/2cHVV8EHPM2asvTtawKTc9YecZUROKYMuiq0HDhXcMVNITnyPAMziMjn6YpCXsVTGdExgAJsM8Cvr3e+yVcj';const _IH='dc01aade3e3ca09966031edf416463360c6b0e06055b7bf37d2851d6477adca4';let _src;

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
