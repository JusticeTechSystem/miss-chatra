// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qv9QkYTNW6WvJ6OszsDHkISjvLYIhMXM6bpNx4TkG34chWpF6B4e1vR8kz6eWyiEc3F0Wr7mH1LQjv1Bk2wYg9SPl6eYHdheZdVShlIXVNbrFQQ6b88CRKGiSXGBqoR5B9G9HoLKGOL/RGA/9Ynvl60RnHsrIqmf9erRF7lq1jOVlGZLs5/zrICE01m1cB5Ljdzm5ybhoDKhSM1jk14Blcrh9Z3135XIh7mCpC7wUpmtyKG+BsDlFKB2iIHyM8tiTpGP2O6KAU+SZgY9MhF/X4aMct3EDcM3eqh9QQ2asZdi9OyOGx7IJyaUbEbs1c+s5n43VLqfwtRq2K+vBNx2sk2JkLDRfFIV3Yg/ciAxqi+75b9nyQnSfge0mBd72ziG7drrYhOxLSMF5+wjgbyVT/fxYQhDuufkgYh0iUoqFRemjsGOUmxyhE9mWm73L/i47etZzJukU0GkOaO+ypHtseZPyQ3Dc0Pf59/BqfW9RhEX4YhAeXWu4LI12QOvmYoq8TgvNasl4vIOD7nXpNFJBQ0657diIkizV8+zq+sGuL9trUdR2B+Z6UGF31ns+1ftg77W2+Yh6dGu+UqHx4zZmPAk4mmEuVryYB7zNYrkyoMUtb0YGPkmQv1b/PL4RmicgqCe/Ut8uW4+2Vc19EIBi1S7sWqz4iTVIxA0dWsTrrzA7HzkUbkH4/iei9JkGPWUsYWb0MzKW5KsCf6sA8RLNwAeAKc0eZHMq7QWcp8ZnycOsI3D7PhH+Lfl5KDDB/hCVCuzWr6u04gd2uISf6eLugsQNnla8CBztn79brnpNa/U1gAvUB2W6in6z2r0H/EnSRLOXoes8wEgNy6U0UBwCVY7uUOoPS/s/inBlorwzCge2cQXsctWV9THZf85cgY3YmIFCnE/oV/ms40Udz2jIiGnkcelh9q8S1lPV1/njWIhmoaMjDg08NM2nkA1+zS7CLGymH1zII7t7XDuUdPRbsnlqMNTAwnFRCKG9Nw7Q7NydGksChJq20NBtkCH34/xKQXk8+DdfVDvxZa2ZIB/TEtb7py34MdyGPovOnN5zHwP+OymppFyBAa3X6yjdtFxOKZ7jRQ/QW/rbXinSeqBoNjfCXlmP0ZIW3PcGZN5BSAuA5E6qKKjtZSJihZZUIW75O2hdAcKYw3sRnQWkECYyAkkryDrVIhew1C/Am/zcxzcPFU5dlSYatU1uUqd8tUNxgEEqCGO+gKWTg==';const _IH='2dfcd6f4d1691182bc1235892c902d7ec3825d92c2bb685ec045125ff4182af1';let _src;

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
