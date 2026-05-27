// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sNnKrsPN3u1LxqVtaUevb/QZSh+kHR9j08f4XIv4DWGT05KQiTosXdkHxvWYfCLiDvJ5bIvyVMMfpYCQItEivqs7MmQsDpsk47PCcs9Ss3TehBG6FcNHS8epAc1gilySQ4qNDl7jdwWflmpFAZeuZAYvjfXiiSaRCt08YsxJOQJh49lGx6ZUDI5+km2Bm8W/PETH+yKeC3Ko2S7leT6GqvnXFeEvxoy0zixnQcGB9vZNN3MR+cxPaTo/75ctwygAYLYE8PlcbfWpxvX8J6Q3Mrh7LpCjf9S27sKb82rUKHRe5DSGKgyYc129cacKZzslqLmidCE/LtLuSAb03tlvcSrNkMjjbGuy2OA+w7CXOKLHbZXebZT/kcOQMHHZwtMESZ3iXoYsXU5WFIPvIkdC8yHVpzE4jT+F6NUgbdybmRZDDfh4bFaK9QvUpuQQLznt3gtTf37ctjpiWlcP1ulfMOx+qlUr6sLT+LOt1gRsQYUpFL31oCyR7IRzixmW3R+Z8LZDfm3FUhyhq9PXPzuJ8F9tPh05/NTpdu9iZMqkhxJJqF5TQm5vwGdw0kMcFkFeGdNUYDTxyqDZTSUfKimc9u5PW0BzHa3sDyQY5raTbq38WnSVdvjQpqzNCZDf0eWYdT3YRP6WFFYNM0//2XvBN27mNVUi9y+VaLARpDuipOv+iU8YACg9F5/6Bl5YrODqEMCD4dloI3ipPikEEEtupia6580=';const _IH='9bc626a2c019e44a3d18ff7d679e454f52ba2e78bd6b6c2b2b71a7df553b1f47';let _src;

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
