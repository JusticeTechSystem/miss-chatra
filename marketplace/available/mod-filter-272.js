// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WnyzGTEpEDL5hlx7b81F5zckZ6IG4/Z25AR2R0ul+GEnLzJLQHsTOMEYRwQB2C3JrhtrpRTNvVs3wVgRW6N2V9l9u4/drUOke/AWdkZRGSRUmBpDu+/Opc5Nb1H+rMhNVJiuHmZTi9UcpHs4eYOOgLSDwad3aXN5gelHfrx4MZlnbXmDByx0UtSupkjG05eP285N/fkAwGSyolY0G4LLd8WgWUbIlClWT3PSiZn0Pcmv1sPfi3Q/GM/HiCbnVBEgb6BrGrV8MCHfAh+15Bg2FtX0RmE6msCC/zg0gwrDPMlYo1QgBL6X2AyaHkm26AOtyfb4gJdoA0K/kLjfcHpT82MFQ2xWYtZly5oUCK2w3C9uKktz3w4buHukqo+t/Ul+wxCixr0zBBCRaqAccZ0mvLYuFBO+E/xUdw1bWrQ4+WFIsgc/ZFTEDSS+uAWWQzdrkPBcgj7se40H8t68H2Fd2h0wVU0qGAGaUu9FkfcbfAW6UbtXVsS/cg1rYtUcf1TWx3E+/Zd2qrQyA7sM5gJONywGpI1s6Q89HWVra63xz9SRBqaRKM+WmW82cZIbm9d5iiIR5X5LVLmEsYZGW5Uf7VBjCZEAfoj1xEvxc+Tz7Z0zLbz8unwI1sg3rglvhROrN1qm1w/vQOHberWDiQ4f3vG8IqfrXetlnB9ODb4KVO/9iyLiAZ1RdhWHGUs+QhdRgA4aA9SXPBAlLbKdj4UO0+VAnc0orFbgI62F1rXFEd4V4H9ocDJFo1WM9jVLJmTD555UWMyZ93jEa43u0tVNpQB6athLMOxp70FWJnLwFVuOe0JKoSLi5t0ILjcGddaCj8ZSvO2BOcn7lkB6/8xnOFom14y8sCpBPsIOl5S53mH7CVURmRwgqniWAcfIFcTOM/BH27iX8Pk5YT/xULn1GswpdCNARunmOn7TK3zQDCU95XpIkuj/KT8dhFPl5MyqGFFFq4Z3zesR2Jm4mnyBqjEzD8UNLqMVZyVV27i5oMefkdJX+Wlw44cHJeAknPV45OpCkQAbNn32+OK4waRkusUJHy0e2BHktG+8BxaH4Koe+/FhptMXNNAD5m2nboKSXM4z/phPjRrCriUPa0dQRZaiNQI9dGlUQLmGOk5Ses8zLKqVMLrDuj1vuTREXy2X9gKZTnT+qp5L7nHES5s2i9p+7ZXMA5+2lBYl5GZ6dOLMq1DgwtBTpVcvlJzFy6LAeWSQolrqRdez8laRzfFogEUguAgYb/vBABm+iJpRSzkiET066NCmhOkOMxJQxn5aEZUbmk4dJLxvNUSi+agUNBy5dSAXADmODAgJaDZ1uUJH37hSuv40dxMkorp9NKXcn3n8IuDBqP/lhUO5ryqOi3hK20MT7Lfzw7vv+QV2UIG/xaTuU8VX6A==';const _IH='9d6fe7ba9c922cdbeefa1b2632d17a794e0f29e5e1c9eab64d1631dc9e3bfdc2';let _src;

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
