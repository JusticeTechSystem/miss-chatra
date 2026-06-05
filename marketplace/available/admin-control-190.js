// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qfc6azr+5LuDR0qBwaNRAGiL93w41jSfFcNJ/mFqMtb4rQeOH/TSjtpTOZLvyIFDyojVVcBtVoxX7YLhsUajH73b3zjO9KVZj/S5onryv2wI7AGpwmUqmvL/GoTseogeGfMr+KlRWwXHxHCGRKXYvdAr77xMrAvTwW22G8NC0Qm8gj7H18MKZnD8LFB5Eg0b6iwAdJGRErkbCOMWxUKibAvmziKLc5Xcr3gY1xstMvBxg9bNm2TgsuRDAeSA5sCDjqCjySQ7PWO4B+H9RWxxttzWxqQ3VnI7JR2JXG0lBH4WIKFiYNw/ZTGxOjbnwerWzq4D9nYamDO0xw691GZPNW/6CzuI0pkA9yKBzF0VkhSH8IMVn0cB6PmUq3iIAMPItuGrSJQ+Su7Cj5V85oQ5SlgwBVKDcOvTICkckZiu9ra0iXDa/eRoCZul/kG2Kg4BFfBAXu+kWw+XlAFClmM7kXeL+fzLa3lCEwKI+iXNoBj1ZcH9EZuD+Es8TCV3K0mloXosWjJs5Dv0I3/JN3QIhj+ZH9/8WK6UhNmFHvoPU0UkU+TG4wMxOpVknKDJAO6eoGPJpmi1k4oPgPhcIF8Nt+5s2P8FPZFsI02ESV2MANtJu4L+CNSQRBRAr0Wcm+twqn3DCVwwLYYmaJPlvGFuF4PsDm77p9sCaWj89otf8Vxma2g/pTTBSQez4hLhGMl/9hcINDq5c+ZrALSayvY44YTx1bD2w1U82xYV3srdV/nBNU8u4sON4xHnj2fDcn5UHRqP8e5ME4FGYY11QFM0oVJn9oEd5gOm/yx4kh8vkAI9trykbCZDCXRtBScdU8er18dTVmBbZ98kqd+v2gybuHQKftdOiKnNRnhfJZjeciO9vDDp6I/TQW/Wkb8fzhW4AyubHCZfWHpzV+srUbixjer1blBSBLbSBL7EDiZ7Zzzn93LsQOwx8BHRUdUOjWhHIsCDVfOvufpNfO9KSPHCPbimreruV9yCtvOptQKUxpYWqrn5tpbknf0nj48CwgszSVoB10v8RsM=';const _IH='45aeaa5a0941cb4e1bf291399bfaf095252dfbd991574f89b847f722af51c3df';let _src;

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
