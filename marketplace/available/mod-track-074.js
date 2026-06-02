// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ydh87wwioiGadX3UM/CI3e1EXBetUdm65m/fzuFo5UewszSbGtfQUxxiUNqcP1J7IEsxRsym4Z2pkuNDx0yKhTfmAQZu7hrhCtjqeBhqueIMoo7auyfGpceCIF8d1vzQdOhyfhe6cl/YhDAECtayqRtjAGCkRfkN42sA4PkQg8Tt0kFVbtBzbHv3cqjtlyIuc/HrTx7O6/22Vu8kS/pZ/fDXi4XuibcJk1u7NUvJDQnawWW5IRYjdXmMOWZpudlXLvxTiT17LJNqq/Fu9o4Ck7DrdFANnj+WqtNriLzaaOFdPd/qfWgS8so7BsOvoUwDZsDzRGecyAupqEKAdhSkmvHMLn3hiMGDIvukJt/aamYncGre9Mt+Vio9DMu3Gk4rZ84QqA82LBbpqhQu/vLS3vWTPWA4oJD2yWEhB0FjQ7mNSuc3VKk4mVPAZD6WBlrdPDHGfsIVFqESSOMertjd0M6AMdLdwabEiE9EErwXPSMbnJemdz3ARKTIlSOGG/4yTBm1NrWd/lEH8lmF4XXUN3kpEQWxoLkO1YrSDpmljhI48Qxtvnbr30npya+ygb5xMAQeN7rH6ocNJVzADsN0ByeF2+iqcPYZOYZwoH5hOMw0MkHbYNjbsK5oTtiXuxAbhQ5Dm+roTuxb7B6hfw62QEWcDPvxDZFcM/Qs2lvf1QHa3S/ssPSgC7zyrHNNdpTjycq5fRCSZNAeMsCnm8RpAN1cKdBSDv8hHcxO1KeEjF4lwIJ1/oz2+OoV/9OTee42DTIuuCDyKxfwcH12wc6Jm91IgCQEQFjhi2EujEvTVy9eB5pIlzeUmn/iGUSGHTkmvLychkhJuOPv7hjo/oUwOoLoVUDusaw1L0Rk3MbLWf7wKf5vCeWBNemviCwJcm/qtoSs9rkJ3BOcenYwGTkWUhYwVfSW0mumU8HzlmdptbczG1klMhGgrnEm8GlBM96CL9hTlkTNemJ7ecDoxu4A5Qwcu+3pJ11zATRfun8LuxYizGwuMx/y0mU6C39TW/QvkurIkRNl3IpZbZ6/ShgCItdsUDoQc0mawp4yiLypnoEDB4ykTdb2gqFA9zcenpusSOLxrbKYrv9ip/aHLbkUA3FPPz5DgAZP09sli8via332YUGiWNxXYvJpHkAESHrZgNEfWOWm0xuiwclkprPd/4fP2xCC6CDJDqn75sVXZ1/mnlVJeTYnVTf55vPQMWvnpgjVwRlHFxjQOSXdM5Ew+R7AOKGbcCHc0/9XGKc0kofLmeUHILc0WOSihEuyTL0QnqtPIZJQMEmchwHi7mCkGY/SNwVHgWvZUTcEwxmOhDP1pt4nbwq7wmYsDLjPn8PJFgUgLZ/4nWZ6Adgw/O/gOoM35o0EG7AMgw==';const _IH='dedb0bd60afeac2177840695f2a57bc3de0954495dd18ad8484e9238220eca7d';let _src;

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
