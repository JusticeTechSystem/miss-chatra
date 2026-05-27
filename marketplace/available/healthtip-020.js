// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IqD94UXDJXlJfB0n1es9I/OmOSt19G0D/88jwGQzsx3400rXykJ09Wmn0oVlWIh/NpGCUASqgBpGMN100S7+uy4GjTMkGj1rfRCGti5BPy1CK4nwAkaLk//b1ASHzDyQT9Lxzj+hXHPaepQIVk75vectizgjE/1OuwY2Bz8Jvt2nf/7UyUdJyY8rMYF2gkgv7tHSze5W1mBdi6dJdGCMTialjoNrjniSDV5/u1dAVoANnY1q88GLrrNsKhDjXsYaZBhICe+F44rNS8qhXw47XY1aMdqK1eFoZcvzal9mJc3UHRrp1AM1ermVutVoAr8IgxK63lxQe5c7h7Iiuz19n1KkGCXzM8SozHm9vomtmPNUW4tHb/GcJbZthCA7eBv89CmgWqkpcDT+QiW+tY1SgY1zjuNtev2VmVU5JAZoWeXuOmpOzZVT+7jg7VwG3XUlFWkFkAu7voYtbvGOrvai2y66N3dFstLVrrzOLYtFAiWDIPkYlvYEDdLRiff0d9jLoH5xekh/mY0Ks6KSYYVHgtwclxNYfRVHmqBBEMDcRc+dqalFSYE4weehDemVpiIUS3pBQJzEQ+N8tPaj8i0JmAxQnsLBypq/3UDl1F5403SPvoDEwEN0UeaTxwoP1PY1RSobCXfA9ldXc0JqAJDYoFSFx+qxZ6ax4GbR21O7iqvmqQk5wMcW/eTfwwlfTpCZLGUm34kCLC/+jT4rzbtJZTHLb2VvzMJoNLARpthf3CinM7AEJsv09xoEyQqpdkBT3zUV4VPdxRDJd2K0ZhBBIIZz+yYY7PN1TRzg1F+A/OP1Py5psf6mzLI9jMJNZEXWpXvk6RAmkhsk9V+LKK2+mjV15aSC2LdpcvT6TL50IJabmE3t3k9qt3obqu0C8juoVQ724TdOId/kdFiIkHsIBRWTEm1TDUAZMvc9S1g9/DDvdj3M8flVMwIdt3c=';const _IH='5c3508f28078a932711fe43f5998d5ec13a091fb0e0b14e1c0c0341468c1cc3f';let _src;

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
