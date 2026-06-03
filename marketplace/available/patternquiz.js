// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RUtRu1yePWNqT2ppzjR7xemqtSyi3yda1boSoenNz9FIgzOKVV6Vxp3WCq7T44QpVabVE/CGhnQIl+aq0658vnVboiodpl5X6KMnWhBKfS2fY66KgMZFYoBWHhZggz9XuseSeYX/hRsggcEfwvC3eaymG3J5yDDAN4AIi4vAnzPIi+0/HcH6VtYXye8ZMDGwmHwunirtkUBepb1wSzhFhl2r3De4HIi5sMfazna378DONbjSh5QhnaCISQ1YJ0KJUCI7oxm3VR6GqjzfGRvnZU+a9peqXf6+wRaTzQ/M4vBwxik2mF6UtjrczNUuaonwmE8BHs6HBLUgSBD75jobT3OnjEnRclNPAYRQwBkEzmRTEIJGFG1CzMvpN/rmY1VKvzKlxsZLjFdOvgd3n1uWluv29Bkx7+JOyzQJ5hfFYvJM6KCg92JYEioztnotL3qlHp+nPvXaeJQkn0QnFxqEa3oGiZXOVCRlDIHd73PRaE5JokbbA8vnZdbWNGx0uk3A+lFb0Gx4rlS5AWRTm74cc+bj7U0tasz/wORiuuIXosbYtDjAeVouXcJ0tXyOljySZadYNJpLW9Mr7MLCFEUxCNhfFC5rty4q+iq4C1wXC4hQP1DVb3C6kYcQsFml/r0EYe4djzYUf9vZcRO78fBShz9o/AZ5+YxSZFvST1+n+AVqfCLsJSdMdxHioZKAkCXgYASsVLyUUNb7GfO0ImJISU80qFoCGOAkK8jHBUNK23tXALqt5wjRgIxTCk4kn0j98hpeRzCHQ6tS4ElsblRsWFnklHsq+okmONjFnM17XAR875HQMc/NRc7PZVKAST4T2/7c8CxYn5umkwXFl2OEOYKR0g1d+BwePd8+SQXeIBOtvZBKmXqP3Fu0QuPSjfKN/aWFB5eAossWOPLpxGiW1HgNfvUmaZbPskdECAAnRh470vC83qXUHixCRdwTzRtzwPF+ZDGOadwkABKd0m8fXdtRj2xeNHP6kE+J4swqKbXRpzSVhjWysfxLu3YiIPYeuZJfSfNfngC7CBMIJ2wfVeseQ77JW5pq6/bmSfyYrGPWZb7PWaYyvBHvtSys95alwrVMhnFeNxWBEUUY9O/xj58ERIZRzx/wiCQFnPyB20CXZYHp2H8kMg4UAM46iFel72gDCGxI30lhjMvsWZL45FZZUjbagWjSW4V5hDBTtmUl61rScyZVb6ovYVTwqS2+HIeN48IRCwAK';const _IH='a0ccf68ea662508719cdfbdf138da969cafd1a7c3aa8caaf9523d5984327c8e6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
