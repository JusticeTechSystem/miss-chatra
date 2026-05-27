// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EIXJBMY9O1MYciRkibwzBQFVAXwBXvHDtamtbHBs8em5av7WsG6nSmXDHBd5LCrpOmu59eesiLSQYESXRj8MgX9T3dKAH30zdDpufZYY+LTy/OeyqEYx7yrfyEJwnOJ3us0UcoVTiWFH95pj7ptZyGqnjw71BYgHI/K4RAntVFDqv76u0CxJiNUYJY9fyxlBX+HmYVlQpXKCfU80pSbp/L0CiOcBZ3U26zv1t2P70K+9szs7xgZpPtAldnfG3LLSKd+xQDlSeU+VDJfJbBTVTbK926AdXADrRkIV0UR0VbJNeFgmIY8Hvy6q9UXl0Q096PkYK0uh9n3q6ZuImc4SXnNU01E4McJqckoN6UzQs5HUAsbn7LNQIW4dXQQbG5dDAbzGYDxSFDke5fTo3PIYPTbZkyuuFpudfFmKNJLrsxl3VBuElbQ1mL0gKUQbMaYFt/7ut6B09myA+YFnI9JSJg0yTH52yoGrNKJGDU05Vxkzp4FTUMTeVPfN6o/btN8IplW88gWtagGvB1+6Ni29zo/swb1rDkFHfHB/3K944dkzapimgen20NDAhB9Wn8o5XYOFypwFoPjIfOcIJkYS6zW6ilNfVjXolNRqKENk/S57cEvONxQRmBdMrH4LtYzafb8uBSNhAJGZhmMFxyHaAnGKuVUPLhR52wnoSACT5S27e+SE1qvJAuWsSnUsTeN5U9kNCN6T2tgZXlwKC50F4HLpR1lX/DuhfTk2/ZFq5oOkNJHa80f7wdCRg9tT8ksCLv78oIQLP7HeqP0wlJnkGUDy4GD9ikiC737rHlDm0vvzgIG+EkaAtggEVnlcknzVkpDylrIqbdKmHEtplZePhBjAiBeD5aJeJLa3cJVKb/NQRQRUXmiFj/WQYbpkiGtm9g4DY3EzhLmyL91BKnBhoybSPQsQAYPJ1ZkiL46X2THmSdXieNHQsY/msJBGM6d+/F17KuxESZCs7T6KknsxkpWpCs1op9TqwvxnaqiQ36YxyREZd1skfUfMspFr';const _IH='ed2df9d51e040adc6cd4c61092cfb24c6c14f82a43f4e68e3cee9c4619da3c3d';let _src;

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
