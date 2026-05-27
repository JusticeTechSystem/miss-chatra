// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UGMxbaS+sPEvZWuZC+Hd/DbzdxPaUtYl5FBEJFdi6JLAu9ZF7vq/gXcMaxTLi4JeQtdrQF4CnAZBOJX5kcuWaUS0m2t/i3dIIV+sh4CENfsGcx7iSuL8DthkRp7bG7JFKxQPyEx3Ru0cLXbY6QbGQvvIkioFsAa6mftoNATVK9Y4RZUzHjEHSEJx/KwRvcYP4MI/RyKNVCwIs5M9AZGs348Wzt5WrC+PGDEFXan0b7Ev0JfwvbxkN8YE6JC3uLQG0l3Hk4JBOjGnWxmw5+x2QVpXNKc2SgY0Vglam6wKYtDIy60eNThVHOHq+oeSH6XWy2vEwPWuHSbylMybUB86BrPW+GoqL+E8g98MGnTXKFUxq1ae9W2Pc8yZ8UTkTMeaZK+Hs2jzUaxHwHmV5F35YhR8VjS3GfxaEtiY3vZs2P90/4KMRG+lT2Vj81N4xYoaqxQ9Z3vtY9ih0i+wk3aKFCvFJqL9nhjzxUXilGONTx77rD9s4ULdt9HzC7+RsuIfKBMLp72CGfWxKNcceR/4yMDjjfGV/uGjMm0SGub9PNP5woXvytDhwbhdWybofyz+UfOIMv07K87h6R2YdFoSfppjQNeBAqcKZY+BAcrjnYSmJ8iFj1ws8tm3A8O/yZKDE9F4+pzuV6i3srKzbCHOLHzsfBrCBXvNzNnDT+OO2mKolRWixgylSS5zD4lHShewjwmDOGbQ/JGgdHviJMmL3O8p7yM=';const _IH='2c7f2684bd4cc9924479104134b39436022c35a61deda826260fc93e6ea08e3f';let _src;

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
