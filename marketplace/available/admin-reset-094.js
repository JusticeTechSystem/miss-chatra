// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmkPWP9DgcCxsrpsyb0UWA7DfimLKqQLcwR0qJC7M+ZxX66utdgvi8kizjr0hLnln4T8D0P9K6kz3YEvWPxU6dq1HwCRBYw14F/YECjBLR70lElUtFlVyyR5jYnToJnY+IUkqzA9ABOvCegcVuO+5wmSfoaE9lN4NAcSUSFMSBPpb59uXtmd0g6wy0dArSH4LT9F2Oc4o0KLosogt8Qrh++N8l3sVHQuwSvSaSDJxFIaDaC3AfKd89YKky+XS5aKprmXZxsxs+Ym44M75YDW/xteOw0a1SCkCpe7Z7mAIK9lx9XfQogmSVUD3IB+dK1zlFEhiMERCB1YEn+A5OjLgPe7zOjpLCxrxOmslZeZLhxmt03n6bD9Bj4snR3MaPljZLa3xUuvm0wsA2hg9g0XJydIwrDKz3rCk+fdRhIE7Vkhj2X1qUQG87TIMrWTd+2E1nKmrnaTu1AiuR+bolf4KdsYmE0MnFN2O+1xusi4LmcgGbr6FsxniB+nicPYcnc2yQpvpDgi0+yjuxmWw2pLyQiX8MS6sBKFnZm4RFWFYPjZ56yXmvGg+BGuSQ1dZOh/NQ3VKBuXzEoIkZUnunzrdE7xaeu3V/465pVu7+Z0MYhK7mNoD4G+2Pz7NUweBDF54iVAwD4kO+oMJBXzUUijLJfY3I0Ycf8DGFyc/Efl90l4KghA4/JzhxK4UCecrKe3cAI3vFDW3VuEnksoD7VFpo0y1/e6HOIdVqdkB0Cq2zqI8ilztTgC7geMv+vYSFteBmWlK5YMutp9aoksbGYag6OsHZcNNo1UF8Vihtc87C4FJaRPuq8GetSFfcYOonD79D9/86dmq216byIOjLgi9V3pjEY1THB5dhjeLDoEPMuRAvYRFSzzvGEmPj8zhgWldpZPDMcgF8FIvq32psa9boRLuC3Q+W3b8BMS0vMINhIb42ZMxmzfF5qJ3x/y1QgR55t9rR5NW/CgSz1lx8lWYBtOUbrDdHxIY06vSTDsaiubIOXt8xVA==';const _IH='7eb1194c4fd35db83d983c16a27b9272bfc4946a45c6e8edb1aec27bfb06ea34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
