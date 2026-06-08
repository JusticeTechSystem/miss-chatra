// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aS3rJpMsWcVmTaQY2BHP5dg7RIRFif97ZKKtnrTL+GmoXduBcFgKcpin6Vc1ArII6dukv59AZArk9zsIo3ybQnfpmumldBnDPztUVfqbC0S0+4kox5lN/bNNmyyTXuuIIJM0pQQrMC/DeiGlHxDHT/NU4JXu+euIC3kY4aTt+KnqW7DICtwjoIRQj9Q16IPhcvDFK0tTwkg5t+V7mXqqY8PyoenbuGVPeDORABb2L8Mn3tga8bN7BG0VOkAceJ5dLg631d1N2k4xO+zRZnbSsYq6xdtSyxkhg0cIbxUpfvSuqEmPGe3QWGn9g//+iBMOsFUkR4BJQCXQDuv02SijBqm78mfc9G9nr25jwVydvf0YXjLr5D+2QV0Cted0AFFMO/9gByuEzNMckmwyiDrONojy+l8sZulS17C/dh44B5Djo8OdxH+hDTc5oTkuRA3+gKkagKFZ+lm/opNzn7+uikfsde1U5sODVIALz5CRRxrDX6bMgycGWEVPmd4go7jXVik+lCdJO+G2iXRfMdsGKiY7UJFwk1NN4pYRIRg77bFJafbMeXYl93SM3/nAkNmp4jvZVLN4wCvlJdJpMNlX18YmphOr3AjJchMhZ8Rxanp7GPn5Lfwv3+TBJan5hmud7YYNuSfRBiLbkBUHDq4mPW9vl9hXokAaw9hbp5q37/T1tGGq4hZpJybyO2dSBuh9jcAY8JECjh70skP97zXOH8gTTG7ILY68XiONZchb8LsrZeUya50=';const _IH='d5e3d1ab52f689b677273599137b9a816ce8eb05ac4a072c9b68279ce77e28bf';let _src;

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
