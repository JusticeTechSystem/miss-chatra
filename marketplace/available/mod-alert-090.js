// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TC83k5TQ3Hrh2Y///qIjXjB0qnlGCqotNKwlW/2KXSZeIGHCEhhOAqhdG8xulAhc+ZZyV0E/BPaCwXLRNtZWyWLdNwtcdehGpW44vFwujc6ojsS4MjGZ9Glb/1pSaGyTHO5E6FOlYgeRG9JDXw8OEQP5+cnWmF9FdmOaOuZVFBpDaRPdN9y5bqdny3Ey4MvAJwK2LJ6lypVULU2dQAM7EbbR1OqbQvkXfrUUvp22+uUtFjWD98lUurJ/sM4WAqyBWFjmxRKDzSVLccgJU21lRsTNcQSi7EqDTkaTPcuJNXm6YEJydOu9g/IW/yJKIfVc9FDfMeywCefl+MN7KCyXOmVwq9Q4pkIx5dmet0wc8Vc/86Hm4diPdJ9kX9aswhoy0k0VX/J1csunu6aZQDWAbcl+tN1l8aCsQmGUwRoJ+XmHcGFoLApUX0UeY5ZJk1Fa/IXZZ0yRMu8G6V9ys85uLMx9hxew4Gkts79tGow9It5oGfhG1NqDk9GKSh1uQ8AbKfX/ijXJXMS8a5gFuxng6qvDL0i3Io3k17dyf/N1TQzUyiJkhhCxv0QH64GOkgsN6yVVxY1ruAU3Bir/xClT+NT90pMaKXmaKBduxMvoz/PrAairLyxxGwZfd4dKa1lwMiaow1IVhkSuLm8oM+eHlTXfngEgFPgACq0yBROlSfX6GIJ2awIHS4/dg/wdh38I5x9pU10FU2b260p4aasKMB9sKfnXPqQtvLHQuXNrTy0SnG5PkIDJW/k4Lu/h8b+2AyG7lAYYPvuF3oO7TnRaepQr8wryoFY9Txku5eXtu0AXlU6+0qM0U4WJC2Ti20ibX1WvqQI/1Znnm1J1Sl2+rm8O1+EBjPoXccHf/JpRv2yvB86BffBjXxF+53I5rSYv6U3xBftp5IXUAC0YFSQ+C4x3ly7VD8h4N+F2/TIfsDLjMEwlAu606M558allKDsTCpPpZDx9qiiTSckEO1pJgI3DXOFcQfvJUAtKXnDZlUh5fdS0ocGEE0bcva0kfwgIXIKOtGJJK1Bh9Q8zYg70d8yORolG+KbBXEVyscm7nOmwbS1kRa8/a/XUqBzbNi2JipOSwu0s3YHgKCFYyR/8/2MsJ0m+GjaFTuSTESaTII2d5WzbIHABVNo9iCa6sNgyrTYwYDe5APGC/aM5zP3TkCwlE/Tr6D9778hdobbGYVEiw2wQp+XiNdvUnaWIJt066YQzsDyd1PCDqYo5CV8LI8R2i3VapGAGc0lJH159SbFNh0YwVNooZCc+EHLKci9j8sOQPmeS1TcPjwN0yZjHWuRB9G9JEU2TLlBu43q4+7VRnOywP6/tNs4FcFFU3ABcFx/6lzhExO25EXWzRJz2d+LaskMnP8LPaw==';const _IH='c58f5231b9f32f762f8bfaf2055d64bdb6faaa424cd01ed25728ebc676831f36';let _src;

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
