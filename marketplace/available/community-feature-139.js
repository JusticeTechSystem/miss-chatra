// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='70/hVcOz9ya4RBmdBrVzOQFQfO/Slc+qjiEkVdEuwUeG+E6LDodU6kybeeyDe+d6GPVJMSbzgRa9MmNgjiWAs1/ej2SsUNreWNTKE3o+hWHLQK4VXJIsa7ZmQAJbJEggRTQFZInjgoF+UfmzGvkCPjgtn81pGoa4nWRU2z78I8mB92m361iFW82mawSkoVZzt0HnAxxNJKQWdX/cbKHkJPJMskilrHQl7y3sKjKouuRM/lnURIuoDqaA4N1RzpbIYGpZVYBbkImOQvDBdw4jmtkFoKvXNFnkcTI5OpJtzAl9fHVCZ/NqWKoU30iDD0GxBTKzBCjgRR6XdKHs8kIKrP2hpPXEnabyRUJNf3fg7wb+Cja7M2g7Oy+SBbqn7TU7bIRKczaDlHVupgRTFbDMGogD/9h5O/qI7T4a38JYeGh33iVgmA8bpKiR9f+Xf24bwMBA4KJ4CCYPwdxe0CG9qK6rjG3lzjkxeIofKTI9m0I9Qv6xPRcgTlYmkFw6baG5BSg7PoX0052qShzbYJwaX/4SWEHIO6osykuroW7N7z60Pfy4yo0RjBt7ZaD19pOlp4ewMa+l/D1Swt73OvBAT27ElPGYsTD9jSJZ3gnUvsS0XBDbv4EcqQ3Y01Rax25/fWWM8Hm6yAxQtnQ1HxkJv9AWZ7ZKO1wJGXBVtjgbEyDHnYqKMZw+epCrjecbf8yfDGwqPhDDvBIFEVxyy35NkFCUo+HFo8Ty7afjFNEc3eRfNbmZ8Fk=';const _IH='cf2c76fe9073fcc19143be49778790ab69b0cf840ba36ab42352c41192ff5fff';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
