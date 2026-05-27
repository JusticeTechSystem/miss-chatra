// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DGwGBhV6X0AwLimCIwn7LPA6wwdXK60h3GxIYWfmXXsLMkxnfZqEpiABwkq/4yUez6hii/UIUP/0yLRMFE6BBPcZo8J8pOay6gYanM0rMD43fTsr5YwisAwOajCZDtaz6WffuI0jwyPReEsv+i5qyavAr+3By7zz8ay2lHyDi+ykzlaaBk+hxan4ics2NOTIq9bxghrEiYzBmjzA6/o0PkD2EBBvRz0cTMXhjv+1KBCV1GxWsTtFzRlUL4Q59Ew2A1TIOGixXc+OzjTJ2/TwnMY+V8Yh2jgBVc7uSRG6zmJ5W7/AB/2iJmg4yjvUtL8YwRwzQWV/n6OlFUzJ1KHNVUoKDeJbEWPy9R5H2WpIKY6MEixtG9Sb6Z8lC8/MZmgh5AZDE3JKHdsALZo4Ggr2Ihpa+myex0C36f76n177zbGdlk2lQNv2dKQZIJNXQ9JhLYAAHqdivuHr6OIIX2Dmh7XDOnIi3/WoWXOJI0WaPcYFth4Atn4GhQHMwSKHtWwoSwdyA1myHSEwmsVDLhXMtGKbe5PU8cak4IptV938goCgXrz2ZHVRK2ZJkTptPwdTv/6/B5TOalz4ZTuHvyMOyr1pVePNbXo/IWf0iWhK/xDFrMPqZMRucwuLog495tQMYbHF8ZagCpB/r5NhJ/Ij8vpWfUxudx9e1SX+xMjcwfzY7EXtiZCeMoGhxbuFgNzDO4Wo9hnqgbeuBcfbgoNQd9SsXuXa70BVteO3lJPSQ1/ZMw==';const _IH='3d1a3e8b1cf45165203c2aaa1bd87b1036aa0dfb4a3dafb4dd43694ecd4563c8';let _src;

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
