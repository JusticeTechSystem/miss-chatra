// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ML6dg5C0nshkO/tzQ1t8FvKoPRx8lN50TmN/4ZoPvazyB/okfED4LFqSMwQzVqYdwXtMfjTpoMAaj0touM7Ua3BmtKAa3VS73CcV+upGR2PQ5g/VMt2HtqqXo2GyiI1A5FDUbUlBeaQoVZAX5DPmCG4BLvLHtI0QuFKwDd7WuM/3g2zbRnreRp9L3QOh/K48QVBY9KtragST6L7iw8Z1l61/bx29nR3AWNMbEcqpFvGpGKeZEsPl0svbYCRAFT2/fadFS4U8ElwlqL2zYBrmzcP+K+cOj5mficLmFyjokpS+Np9zav6EoEgPAzkzjpDzs0xEqCoAcc3m8AZBm6Z/oKV8d4/7RX4sFNokFhilc3La5bb3aUoRYQskaUJCS9FRBrjhG6qb1uNfuhcnBoiFwrMa3KYtBWLK7Td0Un9PV3URB6lgFeGVRwOtYjB2NXUwsVpbyFjux4tC0XC3oLzUtz5sNjKxyoQxT32lMDLjHUX/N22AKc8R0/yVHJuM9cDsaVGUt65nfEROQbWGmvCflgyjeXZAeUcXRKefMwFlaivnoEEnj0RHDhf+KYQzTzs8YiM9rz7UtNO6VgPtFcRE+yqz+vgm7uYObfPJGW3j1HLneTx6CJ3Ne+9uVqPmNhG40ltjE1ISoQnjsR5zDhMo8FPYdsVd4yqlq6IWXBRL+68wm/KdVrrxfAu5eBJTc6nvEkfB8praj4uxMImp/gexI9ETeYpJcA5z+z0KJJViaoouOqdWky+ODnUMBdRlBMytyZS40VCkuGq6lBXkeE9FpnNO+1uPelQC0M2hbU76yL2EXnZxfNHwZdtsMaHqfd+aiIYMwJ2j45P7OnGKQXVm8eKJQ7b2huk3FPwhg9cpP0s6OpGlM7ldyfSC5ihvIXKuk9jYcIpbmhXNyRy4vY/bbQnIoJHk8OcV5kZsdNl2siOQxZQcCWibFck6wgY8lb/bJXmUs4+lZTLR0Q3surXMdcwwc6ziGz6VJb/YGsMi8G+lcpWW9iEr3VVE/p+jnuXZxSXp0oU5FnPPXaO0QhLY8jI=';const _IH='711bf2c1b878d0206af637463ccfa18d32f32fc4c175d1ae36143200a67e475c';let _src;

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
