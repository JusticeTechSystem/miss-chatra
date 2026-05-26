// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4yn5PYZ/K3qUuxrUKiUySsH/Ajau7Vlq/IJ4W4HPkiuq/XY6MWD4ZQwk3UIkKwMjR2fCjgKffMeKqEalgmwpg8Iy1jvgg1n+MjXtrG+/owbVr3waPdijCpSkiu8Ss8xOkl1WqbUUSCosbF7E+vMsNJbBtjOZGwK/dzStJiT2WhGF5PEW5ewxEMgPf19tWS9aLBPVW/6YMjzOIe40ikmPA8/CAX0dAxhoM5W+sfwWTdR/FnuEglNz/hIX7+TaiObSZnbJClXVlgA+bgE3SIPuC7f8ex0SQNQMGNRK1I3S1/Vf3XZqrQzAwtc7193PYoEFzvjuZDZzdc1o/RvJDF/3CVhjP/Koq1W6tzMLiu78oQ+3Fj6Ui24wyFsMciJPd3uFzPARvuFZ8rolusClikyVsEn+thBfr4L/+4PHI6JIhKDNrEI+5uLKdGIVWTSJSB0OQ/TlJNbYqNqTpRmPOdKRTD02Dv9MNSJisVUlXemPQlnmeHhYyLZ0oob3KMGu6U9FbPlRLDeCfnmGv5Y9aqnoVqPcvY2lT3GDiTDzXArTiMiU2Uker/Yoj/taP+Pvh52k7Ujz8Z2p1xr5o2b3aWhgS8v9uXh0xF4uWo/ZXTd+s2j1XPAJCVSCkBIx2LOIrofwYt3zMwRvB4BEepGWHjVp0gWQ14JhUl1o9fLm+AUwSrrpUx6ojcv+1g8m4Bve/wsy4o/rq9n+LQo4daJ9+fw8jbk6eBoSG05iE8aT6e91Vp5F7QdX7NqM/yMjsHONWdxkLIdglmIZWDb989OlbIUvDKtVWjkmiOvHAD7vgwfqBuwz20jxBi3umMbm3U17AVjhgWALpB81kqXGvULyumSkEllUcwnRYtejZcNoBehaKGGLnGG+sigiNbWgKkK0HPB3cQRyzvKMmxFuPa8H9YGQtCJjbo9cZ/8KvFHNabyMyDq1V1gDx/UFB2/GgSKG2mtRyQoMDf5cii6bwAXonWqLpzKkJ+pjXa4GLVTF7+3ZJFFOXj2L8u0V6ixaROu9C10LNobLR4X499JerucFnnTJCEzmH3HwpFaYfBi2BmHmZ1dg0AAo87+6NRCIqwG22qVHI7J3lwO8CMW0N2QPf7wOi268YEDyL1U12kNL6+av55U89PbX6Egz4vZZUH3Cp0UkQuUutvwMgvX8Cb+Hsg/W9FXeOdBYdMmS9tO8Q+7L302tjyyTVZRskIldfox4dBizHAT6AFynS0nZDM2eELJ32slIHNwJX7ChHdaPEDrtdOD31gwGaKpmfHyyFAlPxCsMTGQFCSDVkXm4Y5OTDeUrC5nEnD3DhpyKVohhbOVy2zQeSePK+xr8mvJ+sOnowY3Vp4gsV3RoQb6YQeBS+XDTGAjZbLi8AyyEog==';const _IH='235195339e04519b756464f637ae271939f5a9439dbd612f9cf677befe24471a';let _src;

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
