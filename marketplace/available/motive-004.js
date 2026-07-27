// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4VEx+kg+wmFh3qjh+qVyfBtIxQS2NqJf2itQZ7XxLP4mKltM7x0/XBEF4lsTqTRksRR0s77HFN3bUFemagTYWvcnNMFegVxp+tGLgLvRLxrOTMAijFBPlNd0Rpb7JmG4uTFrlzzb6v7Go0D3AZgfq/DXNj5wqXvHOrfiMrfC4zzavGbABsS1Y4PrvY+hbP6VH2SwxCAgc3vkXS9zE3n3H4HyqF7m8Zg5ar9ELEcPJrav0ochqHzITsQzv7ZXCWof6bESsvJUWsjSiMAy3BGFMFOAjfIqA9GzPY6Zo11Hx0RiTQ9IvlGcsCvSrO0bCtsVhIML4pfyPcR0JYAHMHAQv/LXUqYJu9AbJ/U7ka7mvpKTlo8glPonF7QNRyT/bt7SjGlUOVpXkiX5Oj9W5w6DGOKyCChAAqtilWFkbYee7Egpqd55qszfHcQtW2p7J/TQOAIaJTexJdJGKzjSuJaL7xFrYzrj+RbHzECheAU5Ikm3OcCYKkRZAZibuzZRq02CGVo/U7OJ4jsQful8qfJAT1YaHDonYfWVV1zmX7mcTFWfhTHszCMkzXR+0Q6IKwRz6wnT+qTwimcGrwW28hgKkjxxgkwh/P5KanXAFAXts7NrwyYv4rvVpORM19nxkvXzK0gs53Uj41S3N/4aJ/Hk20z2N3RHcEmVEH9bYRAO0Z/3MBIuIOgOc3jTERbadcbiNCoazzx/Zj067Qhyw8QnJX91K2WT09peFulyv3jHYzgdzoYAy0vs1c/vABNYnK2peoRPd700NICeyfNdr/ZI2mFJCLzhsm07Klq0z3b7H2I5GT80FXNuFZLFtxFK0bmj463hjBHW9zEFKCRLefAn3lrAiYkT+vXBoBhSQNfm7KCnyW4zIVnopak76/UCoBzOlhDAojVptarqKLfvNo817bq6kULW+kJAVTO5I+O/ofUkcSO6xUDUc8xdAtb/oOhmmXU58FjWGIGL5uWWUcgBvyZsHUARw7vl5xsAFzoViKsdPU+8KFbe3Ooxoer9ADLjm+WVTUsN6A9/rY8K7WA==';const _IH='c47c47dc3b5726ea75f6862fedd82cea68403d6195bc7f707a414ea4a58d4a8b';let _src;

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
