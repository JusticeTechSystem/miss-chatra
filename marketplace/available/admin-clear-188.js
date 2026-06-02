// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hXwzS4rrhq6YkVw0MnMnl8l/okWhvw9hejuBIH31DNJYQkcHXMIXKbI6eHEC0kV1C1YcuZTAV3X/B7IM9Jgp4cH7b6FrQCsgiof4ygcd7WazxV5y7yGW89CtTMK7X20pY5QOSK67rG2zJwXIjWwVp+KnD0tnRGU1tvGn39z39T0dzrsq7AwrjHBex3ZFmjXo3e7vTpums/KdxFxJf3tS2eR2EtGaytAUTtIKIxG3iyEa9UldvifAyIw2Tn/LAqAHardiwW7b3e0FYHtDlfE3mYwbPzhlu/AZaoW8ZJytQX355njCU3y3KCrkFqLljHBaiHgf45ibl8HNIHnHDzQefpIGduPdW+EMbahYT//A1O0ETVL1sA3awiYu398kQ/f6AmxKXB1KLT3zwlimHp27sdrKliRiwkquv3IKp9GBVq9/tSiZaBUDP17G5XDDke29UglEseDqQQ+rUFVDDoUsd9ZoVCtMnnJ6x+9CMzcEVGA5ZlIri5e13+4+YS5zEwj25b8uK84W8gv2NRD1RG1m7OQJLPc7EDr3/X4cSZJHc2rLin7iR2db/Wqn8iw/RzvJKoRuYYQw2GcmES8xxcapaUAE/Wo14zeQnU7oyzDq9BwTWZwPpAEFsEVPw3rSi/hIIUl5vplOu+XWtCNyA69jdpTOKoflqtLKNvrArXEUd5GQhl1NTZjIDjzXD0nw4ITOqF9lahVJr7t3z3G+aue2cv7WVZENt3Yz/wZtRcqkwXwWxO2H45H+V4OlBxB49BUHxtD739OfpC64UlLctZNUyRwqnl7zS9yy6LumhV6Oi8/YuSMqpGkqU/uRc2eATRLQv46t8+KEb9zeQfJt26ZlJbSAvP+Y8BUXLyaZA6ETWxPcn4AYy8nU1yr0Z1LC3aoZUdUhU0TDv5fBU4+h0NQstY332CLavCA7psvSWT075xKlxmHJfsoadGhonPggTMn7q3ThOMw4+wSC0U6lIW++sHS+CkLoyGut59EK7aziDh3T1N4OUGwIh+VT';const _IH='f1dde0e26caec33766a7757e727343c2c54b4712309d091f0cad1e715ba04f48';let _src;

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
