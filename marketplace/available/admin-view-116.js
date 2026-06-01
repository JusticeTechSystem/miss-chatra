// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4qogdTc9ZtLBvts7mtq2nBinsAgYJIirMRqtTn8CqyGqQMunJenlXXh37Csnpu4omZp1zde4z94W/8egy8UbL0zsc/OByfDaYr7c9yWF5M3SbGv7V9v78IqoCGl52li0cLcpDb9mAQN7nVYBEdZhCE51f34Ri22SzS8/MDgj0SL4oG00A0P/66TIF/XI0DN+hFLl/1hVWHM36IOOCgftphMM1A8RxglXBywXA40AjyGvgLzzIEeaC7TGMhSc92OD+3k/qc+tjMatovAewTBIACcCs70o8JJXRY6c8AbDo/tR2CLpMlHUHoBVJYEv6ceQBCrJS9tTTVlqTfH9CMwc3TtJc6N4qLp61SrOW3zACm0OLwGadECByPofR/tO//V2dSFapW09XKDz9Iwdu92Y/LrsC9LDRS93Gz5F0iXrI+p4OeoVzlt5Z1v4/lTzP6/c+Q786BSxaLCb8JJPRisxiVCYHTUfgEuQaQVVSPE3tLMCtlBQHy8IzQXv2a5VgPE/PNpXJuHKTC40aFXfxNl3iIDLNpLycSuBrz+Tl0/JwyHEMgwccl7I8KY/tScsoZvXtGXDql446O2NbQ99WUknWGZvXtDt3uVBBPF2Kv8Ynlfgw3EpQKioe+qn30G/zA5hF6IU4xIknGuAlzdHDB2qczFDJhpHlCzHUj2SaSrQGKUYcNClT44pL825SN7S8vPihvfPpC8csoetQ25rbzIL8D6xZcj1RkjqTuh2LjrfnqvYuK/fYSRZlDY4WpklXdXp2L4iMKId3H/54rIBjnX7rWY32yhCJ3a9jS+53tRAf5wBYSD3n6gxO7kI0boYnrG7I1Dsi8Z9WxNMkfQy3xe3OPErknXctxeIlbLvPhnSKvTffRbUHHbL69PrKgSXzZA3cAz6pM2lpYEPR8Kbz7eMf9lwKmEGpRv6ggzCzgCKfkxE5wwxyekUUaQjsN7T7qWX1ZICJrLrQAhTBk4dfHEn7bR++joBpPVLppRfRuVujM5T8Kj';const _IH='a2321cd03a29ce976e611d0bfa0cec2fd7632914c9ec332e4b9dd4ecc642c1e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
