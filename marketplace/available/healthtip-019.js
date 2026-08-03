// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdLgVZAL0AEh1QpdH0E9gO5V0PObBSNZc6L6c7N9qUqVljcjcSVMe7WqECeOTpornQNAfVN1gmknd7TZ5GLZPji6q63GNnipGFAjuRY/rEwh0TdruB1j7NhvYWpeq3FJltAC8S8q3rg95ALnvRWUonaiGZI+CdVgoIKBauGCG+eVfyQGwPJaycFMYeAGxXm8GqRJ4YXHDTsatL/lNpqFsJknvs/62XLdemjZ4ISEU0fxquawJeeLBosFZvGwDR73TD9BcqvYaz5bbOpNlSvXe7TmLmidIh+Uk7bO++y4KuQok9bwfMgFiTIbnxJsNdByKIGDcqiZeH6bFilvcWnWwhoTrFLdJJbZOM+HYK5z5c+f8ScY18hppsdvgm3tLqgFMcgC2PC/t7lZ0kjxaSMJ++z5qfGASmhefxp6ZE2O6ExJR/erCWybMPwVDYo+ztkgK4pUpCmB9PRedHMP5ogTuRW6ZOKmZ8f8lRMYHoqd7PywpdsmzFzeZ2egszJfBYxPEFOqHQPk3hSvhrXyEHLhD+SqnndbDaMyZ6EuCiEDz+Gm+Af014VWDZcXXIkwSjKn9mMy4e+ZcGyqxYJ7jqLCXMA9H4Bfuj7l2R73J1g5xfCpeF7od2W3vs0FmbCQEiaOcf5URX3aF0nma00KKBjyztGx/V6GX5QPz+WF7/jXJTC+mRWMtbJfzH2GlCEje5kD2N0x56qDfYR++Hgr1rUZ4JQMknB1RCQKMmvnZUWP/c02v89xT8YNw8yFsqRpBRmPhq3WIHVm/nswJj7t8jB5sgOZCuuJ1Tt66D/ZmfNc/+2TRHfx+oWZF2pXhOtrnicNnbqb4B8gW0nRtfT05PCf0fmsNb2NOjeZUR7BuYPA1vgWZt/yWRL/b5upI58cHWxLrMgS6rwXR17E6hUGQbjIDUZmFbvTpXjkg4dIAJm1KjkUBQrzz4FCEsdSo=';const _IH='fa61abb6c1c75d589e7411f146d6bfc71dc95fca7dcbd1626735516c230726af';let _src;

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
