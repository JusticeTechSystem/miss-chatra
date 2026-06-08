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
  const _b64='vZNkCvHomO1ZywTpj1rM44kN4bLaNQl9miRXJ8JnATI8YDqXW/6oWSW8rMOXJ3USqrP36YjJR+rfo99vUoyfUVAqfWZyE1BJgNEPBdPasTnxP41nx2NTih5hfUcqQGsZvhkixOJUhIb6JpOSCcAlF899lFznoI5F/4X3TnKThgA3EpqbmqTmwz0ulFIsz6c4k3wsrgv1RL3xbD0SSQetCcq3nGSMJOIj6Yf4HWR/HNmSiQBqm1O6Ve9AlzvJtrqYoWb8qFp0ZCgR9uveDojO6KrbIzHAp3hfm7bwzHrQCepwEhv1DpvGcVRRh5KsCFA7wqB5uFiV+xac8WdfDzSv95TKdQICHSFtyiR9OP0cAmOd9qZTzgpiH4ZMNq131A59pzAwJy+WbMjoLWtK9AcUyjeqzNPTDuivRT0qeEbIrJcf8egrdov4fVFq6wsbftVJGVq+8cQGl/S3ltlDYU0YKdm48uXhsv6vHv/s9uBpj7fm7uIkil3i2YpLHJc9CmtLhbuZXjlAUUfsmgI1P5k7Dlef7zR4sCwuosp9B9caYSZ2AVLDh25ntW173bNLWUyNRbVag9apSDvu7gtUMkUvndUkMxCfif84lBLHUqxYWRSVsBcTU8iOfxjZV48ea2a3EvWo5tEqbJ4kxLzouxPo6JDIuNcu5QDsWYDBuMb56QXxygsxaSrQ3qdHgZfYKeI8zAlMgR3/ehgxYovKMZrqLO7VfEHrZHTrtsZdbx7XHhXQc1JnxsU40KV8W+PFh7eN+W5LA3UwDPyai5148BbLn5+eXStORamrSuCkpD3f/92gJIXXHVWQtgUZUXWmOfsCFbBbZw1SE71WXv0SF5ZeM27QEYnmsmLs6Z/Uw7ede6UmgoBmV8YS5TD0tveaWvjhUunFTf4dVGwf/6mgwJl8jeVtOtYgjS7SKq5/N1M1QI70a31gchnfU2+/Ex9lHB37HjBwkaFUmqT3d9QsiauA5/5+A93v5eoW++80qEs16uCzTayH54tixLZZgs6vFzkIRuGzvPpMbGmz+GdO95IKQkzCV5zg2kRJSLv3RRP6Xr0RZJZVtXmp+9lZVkuMFb3wODUn0oT7v5ZBojwKccFUgFOA3HjI0+ZZWdEayd/flx+yOi5Z86Mrc3qjn6IgZjfvSX7TM4mgG1pM7pg9skvOQ5bAfNIPyIUNSrEhDF8x4kXQTP4NXSe+UBv6KmV/pvfesvnovLLqtg==';const _IH='013f51eac6ed558031f3af4fe45f49ac0e11e92109750035785c15a04773afc9';let _src;

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
