// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z5x/HqN620FIyIa6QgmrwpDqDl/BraiSbR0G8xBM0EnixCgG1TbCjFdoZ8QKW3LArmupIinbDlDq4lW/WtLF3tCBcB3DiyhDvkb5bQgKSVC1zDOiu1n/UUZoK+rvf8IJ7WXc6lDUYNkiOLokX7YZklkqIiqpho3pUTmzrjL7FxIP5zReh425XYDlEFS/Xv/bRr78qye2LIs8XTcxgWHKa7KA1QcCblwd0NaybX4USoxh2TPz8Ka3DFQub6msV9wQCFLnnHexSnvGDyMtVVg6uOX2jJg/Pn5nRJdWpu8SNCV+rQaltwtnBJ708UBleaQofYXLj557ig5yZTp/At8a38I/OiLRfyO9S6os7WUTSRlSIy0dyjwWuY6fSJk7n/KmEbVaQj+gKtJbDU/ZF7KV+4ljWdf/sKSD8Ykw/gg1voVFTDmKqlmDVP5/bAnkJxG5CgM3qpkBorDlPVSaffbqL877nk7fuHs4Q/hgasoeYGlK50grBNuFPeXOt66mTt+ua2qc0cFgX/tjr+AXWz+3chk+dIAKmlT9wi9Kr3n1G+CkNXDjOYxKtBgnaCCLnd3RluSWiVOE4ssjVhFK5Skk07KZpEre533/zwNfDOyQcc3a/J/6+J0W6/WKcYf8qJnu+FZ0KE0B90kubgfeLjt66d1zBd6x36ETiKEBvnTuPJOfiatVlKJ0bwwBSuMVT61ZBTEjVlGkIPYfw6b87lEp45dDc7JacxP3DhBA4aMykcy5b0NVX+XOEXV6yUDM/swNfXUFcU76JFAUKNA/CMnWOtVK4pLFd9TEN/JIGEGtrceWlPbxVFNy4bfsyVUHdkZU5EJDLIvryMFWptjs8kw7jZDBJ+Zooh7SF5chGz/1ICi3nlgTUC/pAnL1eIFd+OqHWpbhH0yrs8uUCVXiHI/d+NmmG1+6bk3eVqjVVqhb0B/SdixgBny6+FXzfwjLZm3HvIX1a9VhcHegVFp/5/zmahRYa6Kc03a0XU9x7WFxyI+H2Hm61oclwYVbfXUE';const _IH='422f0aed52f54f08480c45e8bc96f67936201123e64103e6dc1ad4cc0cf8b287';let _src;

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
