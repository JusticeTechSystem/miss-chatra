// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QOwIoZHdVPncUcW9xiX6D8YZzS9xx7IJjqDYcU9kzqtlOHOd0qqTCcu75r3r1vbxHGcU/VU0iZHEBKOinrS6RS4cJu34AbshVPLYdTPuHjiuCxCtoPC8NgxxUDGL+5IZEL412d1nDSu7s8bB6NJWFILqeGUbo8/opoZwuMMGCatOYA4wQxzWd651P30jvDfwuT90j5POzDmzu7AiyfMxv5EJ/8qP8am1plzRkBqa6cIFqohcLy15qa2v5o5pr6FXtRwEvci1KJiXc24dL5lcTkkV3fXkqXsW5Xmii1ovvzEYJfI/qSW7y1oSR9DopeIeKxLoaWWpz25VbYT1J7GKxHzvOCxOTb150DYfAmBFwOcAOriXrFdjxYUoEzWeAEOs3Nr0Eem7eoxC01i9VRQKXK8q18EN1b/g/KP/1VU8O7417b5JwDykPko12YvSY6zL4PAJB65rhMwsG/GAkjvRcvQhBCgONUZrYK/X0uG7HCuGarBlezwRoFUYYD7BWeL1PCHJAPq1XuoKTqpD7tl+X0ThHw+09eRCAb46CR5dWLaWHUPUJhbFmM/cB7vJMT1zOc9s+TRWUa8UN0YUBKJeOtEDXJgXmBaHe9vIvoJumY3HRXBgZJqEisPeyk1s5TyG4anTPFa3Cx2pc/JA7VsvFngz5VcL59xxjoOUEFvwSQ1EUPDtFd75cANEjG9Mc3NLPv12Z7Kq8M9PSqC68YI9UA2/yikyqJJEyXj7El8dGwK3VQpLOM7MywI/Q2R4NnzpPzXW1RAjZEA4APPcOBqzTjy9F+qrK551ZisU2AdD+18Pqf0dbnups1g1k4wts/3J4bGKoU2jvflFMulWlNWI1XLrWYiEcqHaWC7iFPUdKP29BrM/ZmaYMEbv8OM20SqqZNtq1rz8gkLCh8SP7VxxI8cIzIGGcl/Xo89sSfg7z9oAeXT7NcQsquRO6AFDRadnB4mkDDy/qxyFI8oBmeHp1BnpQBN6QSQMDohbSzsdf7tKJJrwlRxJBlSHrY/16yWBpoAh+KKEVVpmq6q8YV4OnqONAbnC5hKr3KDSVirHGCyU4yQ+/UbBP7yMJIpJfAAcmsul8DA36FaSOPY0rbJRzW+a+rNVpn7m9S+Ou8sU1eiClXR5Gs0PKdh0+yUotjtHA/ZMYEWud0B3lBumVasOHCeOpqCTbBxqmYIIWkI//KejbvbsTFEVfi97pCZJ//blTCUIexYxpnbb1M4BdNglIIDqA2fNIogw/Y6TLzOZmoG4H4slZCCbZbQLz5BGjGS0ZK//68Tw4YEIXhjgP2Xr8WeAnaRPHUT9NpyEeVrp017APDc1A3QclnG120Kr+8bVnXDnKGt1gY/HCZvao9MzOOPsmcRsNWzHGDno0Qs3';const _IH='8f3de5f9c402de90e5ec92aa72abe95e652c862097576e6b5fef251b7a332d17';let _src;

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
