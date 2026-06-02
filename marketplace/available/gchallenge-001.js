// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xf+5Yl6GFZl2+1tmok6XKcJlc+avZlNlt8czzZXIfmRUJM4TZgIpVqT78b0pysH+kJPJavIiQHfvH5mi544j9FYCk4k0xrdSJessesNDoGI+8XB1uocw/tZh3KP11R0gI03Npx6ZeBE6bQGKsObcFrnCPFZ+85/m7vLKC21a5UtnH+dYq1X4Om7kK+sqgs1LtyPMMmcv307skw+NmpnC6pmOFKpZxYlsAy42SWVNsh0bO7ekUXJnPg9OwB0YUrI3cBlH3JZfvdQAvdQrVqgsS9zV5TgPdA2VxCR/0BuhpsPvc9CXR1X2MOrezgzXdQAnwqrFZNSisur2o2EcJWWKEiWcGO0fU6B/f+X33KJbX1ESzTFRj83H1cEa4Y+vKhOmG0gkzOPLs6xjYVW8Y2aY8QAeg6hOyk1QLHgR/BpfZMCtivA0N0hTazRT5NdZct+EvQCnCkzhE+vtz4p2xR2afIf3hYlvNZoHh0j7nHDeyEcQoMHSZvIF7qdATy3oER9SdRf1w2sda3nuA+yiZ25CKZr+hV5MTBvECeaHVlfNiStOTbFHHlvZlpaFGok2leUdogOj8DgvpokeZ0rRcqk2xtPZc1nYzT75lS/ObMf4vb6wsv1ENziAXhF8TFqKcdLUBrTWXuBXdOgF1eU=';const _IH='bd6873fe496f5b5f8dd6bf4fd14fb5eaba8fa6830fe667868593dc834baabc79';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
