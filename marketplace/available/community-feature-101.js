// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kzLXHitFF17v6xiF/waurJRePnELv9aW3gCQLL06CpjWAYQ1aO4FiajpmUpUITXxKj5ibEIzFyVbTIYe0Qr6ni7Bsej8UhEF9NbuHwcFxMMNcKC7OzVbPxzgjF/U1NfflwMnZgrN37jxfkmIIGaCdYOB39ikT/utfJSUclzAdhRGfO0A+zSkHW8mTW5NZIL1n2s1788zqmT4YGhd+m94BEJQCbL4/4y6E+VD2RlyCC6h6KxFgGUbNSsDxHVupZwm89e1dC/wFJqN22ciD0pidSKwz/3cSLd/KWke7o2TEeLySTEvCLu77taTSIQspYmIDAe795XUJO2+elKdiIooCFvt4MNm6HOY7KfOvdgNM5IhpPs0aSBMax71ew5KwONfpowDd4XAob3mGPuIlLSHONW0cwGMlPMZomehONqrS4jMP0yYo2mnuXAQ9VMZPs4kFC6LBcb9YwFv13KuYwl2C3EMyJcckDO7CPV34T6LIHZfc+aemGwxZuOJqNe1+qHPKeTXnUtLukzmTWJM3qLpjny4FlYp4ztM2fK3+iwvwQmWOCLd3hsARNsIHDvFv02QY8usnk0M2cjgsOJFKDJMoz61fkDicgVLsia1bQ/TmsM7kn12fsLHuNkGyj/FbOpfaMjZZ9LjIm/a6RZvoQ+GGzCQewX8h+VETHH5jOyPwUyzsDQ7eeEBOd3r1qvI+i4la7lrIziJGGy0afYwLjIYeDgf8oIR2VU8';const _IH='50f356aa09ffe937169cfd9d1b9d7d7ddf3c719d66516ba56f98061dfb66c6fb';let _src;

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
