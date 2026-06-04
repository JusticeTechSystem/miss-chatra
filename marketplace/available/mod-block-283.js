// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='seYRcTYSyh/HaTvfxGzo1ADDoYUPQKxMHSsyXOvt5x+TjaRy76eaCW0UZNFA8ynNr03h4mlE9EHXLo6eERIEDPAza5DZSF1SsrysO8sq0qkICjyHxvxEyVrBNXZjKtALtqka1sdXbqgGR6rEMYtK69gjEezxV+UN10M60bUiDPWLBYDlMPPRcYB4pYsYydhaLL+3zjaYaO0S2jhZPfP2egS6v6qf1ecfLpPVvrGjlWUSmUAsNTZywD4+OMiSZG4OtyGsZGNGSmqtkdPu4IPoktRuSIDqLyrTH6MDTiTQ5WonnsJ1qXYtCEeX5cKh7Pg1xOnBUoYSU9KCUkmkDGAc0WrQm0RaN8qPKTX9K2jqrU+kG4YYKdBH9cR5PFV+XxalfDBwDSPEwJYm6VAp7+8oy56PYaJI7GTeUKS924SGvyG6nXIwS2DRk+KP6h3mVZWlOknSDFpQRRUHvFvD9u9POYKreYSWYiiRYPSv4b3r1wGAtaMAyUpJPCsOrnmwz2VPh+gZdW4z0c9uoqdOaA9Z2RAOwutWV7mSBcO2Y78Xnn9vzReGunCJZ/nq0DTi1fAN3vluNbTgg9nGGqKkzxp3K/dZNfWESYFO8/di0ILSpUpXZK0WuLKSo3q2TnmiWY2RLs1qUOkz/hjOZfgtJNtAoW9giep7GZXgc2hO8iZ+Ih50oJ8MVkx0CXMub+qaQUD5y6TUbPJjCH66Y9WRZmvTZlohZ2ZvSY5Hv1Q29Kq/ih2j7AfRMfliX14DqGwrY+C49E9BjU7jJXog/90aopt1f3tlVaKOJI8nKPOeoQxl9XRUZsAw830hc6euENy0fUY3USDpSccuhMbCJ8mpQIfroCHlh10h05axWr6QrC2WFX6ktvMFE5lS47DtuVY8HjQ5WNZeNrWOg9oY4iMEjaMEn37mB6EbKiJuTeaVk2QpbxVaB0X5omt/Skmozud1zDT8VLY1vAlcpEjgwpnuhg8O+zimnjKKMmF3glkvUsa197O4ypDaStFl8H4AC4LTD7UKPV8Rv9MPwsXvCsONbiLYF063AG06sokXrx9fy+yRuRGKm3F1ft+FujPHpYoxPMrmLZeEPiS7hklGsTm/moGQehfAXkb6hwU1DbcaiIp6HbA2Y/o5l3xb95QLi1fun5vPU4wOn1cKDopY+DLe1+eZLv+e9KwCLKVKwhkdwMqnL9nAfszvKdjmZk5yw2zIIwuu/3NUBu9MXAMemFZPCYb/FXnQfAu5giCBNet/wCV9H7hK7ZtKDFhkCtg0XowSeOF6Y/edhw/7tDgkoWZ2w5iyNZj04Gqrg6Zyfj9344nxCgu/cKfwDmv8JEsYg+82MXHWouHdjdGr/6dKUNaGozfxz1bun+7nYDPPdHm0MF8H';const _IH='31e00c7682b4e6991bb45348fc23400d3081ecf248efe936cb41cbc76123d446';let _src;

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
