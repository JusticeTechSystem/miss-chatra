// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='knYMf1luMzHfnmAANglZWBhVadW3A4rRXSJR64oZxZzwZ1CMpVvdaYDvhFUlXdDNxIOAIksMiGHHA/Dx+aRtPuYkMh+p0NGQ5UC5au3QhjGLdqo4Ci/QycJrBMxE0cc0xrQfgKGRWVdh+88QSoz4NILPgqZzmO1t8QSDUvcmrel2hn6fGSGf2XQh8to5DgLHKDGPExLOdxhE9oxG2cMTpPpZAxhU69q5CHwKQUHXPZ1ZGGjKYN4CB8mBnnJE/4trPpB2wHd+8jHtu4yg/wv18g3++10nGjXcdDQWTFFudSnDxJdRRl7izND21UmJ7pqG82q1rNfEDrEKseUVdgH6vZDQlFb/rTfaRUCpNNX094f7kF1arttptOeUhJYItS+d6vmRzyaHcQNqOSSIYF7tJJyxK3d8oEjssdk3u2TGLt7yOX/hOjZsJlCTgd1Q6G9g4d2u6ar+35/4ntzTEtWPXLyJwaZoJ7dOlBzqJxrBMco4EgVkJvTI3sOYFSyxwp8+2L4KVgnHGyPsWLplyPYHnwqSiAamqL4Nt+zcatud4sHEwj+zdC7uYKQx2K9MDZFFWe97Raucz0YHanGsR9wfpaRkUjjpchPjdIN3DX3RU99scjVKCGlGryRLZZFGpMJO4fI6BFDiBqJIIiQdL40XZCYf4NlnoQo+rNTMd60WDw3M9WvSb3tMYd81jE3dykZB5zQV/cIi1jXyun2gVWz2lBXQy88uHNJ3RNcBWYXEBxUUkSTv0oyUnfPrSfaA3s5jIbe+fzN3zkUu6AlsjpuQQGbFkJxCCWrN5WjHiSnaL10LuyMi6XpiaqfiIIg+jZREWs+35kJPLV2KQdYrivmQI3/O8Lm24fKtiO0J8obev+4LR5SpbXKgTZW4VUNuGsMvgKcGeeQTrDvV9hDYJxjqPN7be737roaS+YVyWHctu1v6LeA+/hEvyvgstVnh6foeQDaCtmBt5S5HrtMHKPnto3vF3Ddjrxsg8RY1C1Qu5GuvkGU7+E0fr60cKqDPWQr6Uk3mJfT6qqfxzNkKNq19z5f14b4wZ7nBX7m11i0M';const _IH='8bb593606140916ee14f63f88e4a38437990585540bdcf4bbd17a0e3c7a66b56';let _src;

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
