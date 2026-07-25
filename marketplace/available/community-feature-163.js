// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSetKKBqWPIYcrWOTGEWPwi4dRBCqD1R/BLz1dcJI3M+9yR6FWzWJyNi26GP+hMCI5hBcF4yXFFum1p4g25vVMdh+pgivuqhJARhv6JnsD/JF17rT13K5qOlbZuCFLuatn1ANxB+m2k2HYzM0HN//8+VOGp4tgIZM21/6Hd4hVOQe3C1Ys7lmJX5/l2w7d7QSSP8jj/ILFDHx+7kKf2sABuFDOoolephQQndXtLQyH+A9jMM8e5Vy2yC3lu77EyEQsDNSNrAl/Z4SUSl/ieacUu6K5k/YDpsznob9wDmulXaiSrmR55bIIS4VHM5kzuLNiE58sHTLdt8PMkLIyJ1I+4fnBZ+VaaZMI7Mx/ZDoNPgbwGId3DIyyBvUCqjCDkNM8S5HN4gGN8wfTnzz0ILpoMMi62f0V/p6g7qZYlkcm0eVYbeRynVUP5E9m+HZC/scd3jO1Zd8R+nWCDqzgXNUet9DJOnUFxAmT7XTEDDQ6b6U0+/4WMWZe/phw8taU3lH9D9SZThFQdYFryuOKK+w+OfyCxPu3TizrUDhyDizrEjgKgxGIWmn71kKx4s+kDKgQksLPOYDzulCHrVlxwvWDxtpLKUClT6XGCddGMzhHIBHGLQF/9RCkZiuZZmG831cOoa++U3DeoV2NqIaSSBuxWASfcCg7aMw4XDrV9uTrf8OKhzLvBUqSu4YbKG15HxwNFcm1XanfrNbVxIff8kNEeXRLtE/WqVoynX9xp+g==';const _IH='9543ad3b533d0c46cf86493d9264523fba16f93727151813dfcb8bab23adc40f';let _src;

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
