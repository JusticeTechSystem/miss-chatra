// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QSu2WojvNN0Dze8nz2njWo2IdqZsRmDxhxO+IvqaQd5UC4hzVfIT0hfBUGbDzTCFi+PrMCe5F4ddW9ny/owYGsgxPMd+rxWZ2sRub1tHavuliq2hlUv6Q+bPtCVRNgOEpzE3BsaafAFkdGSOCa6OLGqmyRagolojGiUbUnyg1A9I30NmpQ+YvLiqE0gjPzuptmaRT9YwdW+umBmtrarLQKQOOFKEs8JBEh9YPt7tFuIGwi3xlSXDwDZN3kLcGnb5D/CMvc9qpsBZgdQFHPOTOHdtqMInjAJBy7CrWAkcJwY3sNZTKwp29phCJtadBzAHyDbK3meIFow4HoBgU15Y6Oxf6q+US3TxGK8TrlOBwbnGxcTkgGpLj3yngDu4UAhBVu7yoSUSK+dXibPBHCG5AeytwPCvWOGnzVvrPawDHkQvrNGP5mYq2OVIHU+w3RFL4MF0L1M7kXZNSy5ru4ONUYvVRYTzvFIjMyES4PC8HC+sZQT6AAQWm0HCOqRnBDMGsHIqbcHFeO3ctuVuTdwTs9ylMYGwFu3RozqYbEp9F6hwxyMzyqjDTCOCdyrNHfwyRrWfW8or/gNJkTU87DHB4s11WM68T9mJskO/gmWisaZlZ1bkO1cIrkSSWnUu9nrHUNOsd6aPPKSa/lZuMHgpg+7Eb+u45nvJiXKKg0P06fFWEseRQg/sTzVOZQ30Sdxg5El5LAbRqikKgx/FQYp3S0LlBtAjVdPe2/Wgho+jCwSd99HOCx03e1Rd2NrZ9ShN939NkNXGwjNY8YbO7TwtOC7Of1cG8p/X9fQqRzUt1IBGtHWYmAoZnKzBRYaBr2Y+tIJc4/q3+sk2z2eKEmG6xyG+XgEvAzlWRqzkStri/pe3k00d82P6I+ExYMkJc7IgT2yJjKxd/BsSTutA43Ci88itc/7UTtA80pq8+lzsGE4ew7A/5Hsa1yUFYRKER8hMpfeXtz2t4PBQM/Ec1WvzPXBwRkRC9LjTSg7U1tNrdk4M2hG+77q8xseGgBg3l6atRZa5igHXfKEwxoem5Vlcp5xjyEqqIpgEZ5CwU97oNFwRwcGGmZxPkfR8CJfSK027Anze5dgWH574yy5S2nQvqJCvgOvVcTBtRiDIBv/YSJg/zpuZGnhUw1A/uru7jtWu29IXWHJMVdopOx+MaAA5o9YyEZWDi1CfJSZoZp+X5NrftPQzPXMSYpREy/nBygW4IdBAGbO4dVJk+8tCYQy1jrUQoqHiKcP+DSqB6QV7ogIxd9zSbcRwwPEjKQ0Kh/j17nWM0UHc1uhCKBOfk9lFBKvM4WTKv7Y573zANq+qnzOhgO5ohFYsOztkWZ4grxm0F8yfR22jO4Q6tIOfwIu2tPI5Nvf88QikOiI3YZu';const _IH='655714f996fdff81ceb6134e937df71b1986d595d86746311938d54aaffd2381';let _src;

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
