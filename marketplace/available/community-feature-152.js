// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lbnfJ5BuYHLcHpRscPjE/mv5YyoUH4Q3mexjgzdi/AOz25R4YztSygCWJw58+IgUzseVkJgu4cctImFNFMTfaLr9PjCe2TTPh51I/Ff4jPvFj30RrX89eZLVXlyUZ95sPcM80kgpDddvMJJn/LddtzeboP08iYBZTR5F4twbizkE9eGCmE7oAYPX/9QbUP4DzOCD7MWMbjDlOYs0FGujrlxbEF4uS5UiZw2sHnJ95n1gidZajPjjFeTqiMdFVCyZKMjsAOuOckwpcoOATb/gxbU6kAcCkAIDMKYJ8iPJgcIOvVHK27I44UtpU2A1woMmOPHwsmWXZYy/6pWNQd9zITMZSt2h4q62lI9EFdHhWo3o0efsXAVtx/aIxXjlP8lE9WMFYv/HJjxy4ulG7R/ImsW+iXw8uxVfZPqaqtZ8Kog5MhsHOaDiLI60qXwjgi8JQwXCVBpFMQzc5MvuDX9nxruJituOkBj6ykSTRVzlnmPQ+8hiAZ0jIPqRQosE84FaeC1FLxltwee+IfRuyJddW3hijsgC3wJ4Y1fbFq2ZjmG/7A2ROK3Ed4DvGYST2Rv3G42nnULba1Q42JVek/JA9WevI7HqOsIVhnXs1DdzvFWBXkrtQFQSFdnRK8zLXh5YGenkBjWsxXbAnq5NcsVN7x3zYyBL9aKpbUlwf0jZbxvzF/0mmYH5EHg1aZaWpQ2eZbN8w/nqZ33Jj7mrSxK41T53DHoUg0CilFfPX/W/TrAUe3s=';const _IH='182f5f83fc36a8a7b8d62b8b19b9c7a866294e81bb4b7cc36c2820496a2b0a40';let _src;

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
