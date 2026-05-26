// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bJdamqMGPOpj/uUUmjEON2jEa5Ght1/C3O8CAoU2giX4sxRR3pL2B+jVONj1T5QXegWuu8CF3UlVq4w5z5MRcRpt/rW611fE5bulX+zKAPy9KlSG2GTVcdaaDWb8ZRPafg6jo6zsv9OU1IaKrK38VuBkedoNJBhY0jXfBidFQ5GUUOYH4TFkVJyEM1mwdSZAshXP17nKWFPE7ogKd6COUk78aIPz9R5KqPa0ZP3ATmWBeJRa2ZXeVp0bCkka/OhlEVwgGk8KLUTh858ir3iMHSKg9+jyyfhXeMftwW3Pf7kRA7fBZCyxzjpwfCR/3dIaJk41Sty+B76sDypTZ9F89A0N8GXzK0ryP0WnT9qqQ473XFL0ZjgBIgC7nd4GPTFMy4jTaNRQKfhE6NfHCeD8CbnMuVrFPCg237dZeh/FXgDTudIY0p5pjumQQ0f83oyMqml2OBjfw8O0ZVqTSjuY1vWmPS85sWBIF63lT0vamqVurJnNmvHnSyOk2S1ajJMBRRZ2PVAz8uqNC4HsKFa88pdG1855g+qGLfFCCiKK0c/QD7Q5m+QwDaAIMkSE5A9plG74lIlASenbYbeKd5oBVE8HkXU2gRBQ0Mi/x/YQ57OeCTnoK9paSCT3Ge4GYEbJ38tgttOUct+j8nyvUsJLuxrvts87PiFJ0WB8GbQBLe4abW01nyg4syMLhgb4ueR2usYP4weKPfPHXeFrJgqscnNHkis=';const _IH='95c609dcd1190544284f68660ecb28df6c7442becb8b8c60a413047b79242b6c';let _src;

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
