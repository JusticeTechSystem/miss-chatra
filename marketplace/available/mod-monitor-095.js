// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q6A4TcfmQUbsLJuutC3mtCaitNw8t+yXg+1frtfvbQXPNqnFrADEZT8c0zVy3roGXbmKZgI8Uj4i4zCL342qfJIAIyYryM241coMpywl8plfhxlhY4u0dd2c6DnbPhWDq0in9/LBOSaDrofe7r14yTVImcet7UDqEO8U7deLTVVmbnRIfHq3q1mXRNfW1KeiR2F4Sqq+JxyBgSPkAnloOKyug8NFNmKh/rQeoToVjktd9Y+qdV04e73g/9NtTaTYTt82cA9c5qLiNhr4k0HHkpDorgblWMNxj3wJki19x2C/wed63uOcdFYdHJOpFUJwcg4LrOl6YQH51Ya2lrIgxj0+okdyeXs32cK5OYucroeocKCmnnEGU992miYIPIK65tSD5P6u08t2ywwEWW7xtbR+ufmKK0tfOFSFDnfoXtTmFFh8EzWzRnC0k+EzQb8TCJlfU6p3F4Ie++nFsWr8kQglfWpcgAyp3LO1SIwvcWXE3vwN4gYBauDZB8UzWNBK5BahT362BoGBZo+tLPw7rfvTesWyLtoU/Aul8VEUEOaoCYpIscScs6OkMqOSPz8mjSrEJthpX/xBgdDJY2yjrRl4DxHoaMmWOM9+hTu5/ekW8+EVHXTR7btAJrznh2GdRAZMpxtB/HIPgY+O9nwpFvqRNTM2VzUv1H+CYHNpaSmclFRq2A0SGOWoDAAIUpzliiabm+IugHqjr4w+kZHGlPg8w7QpQCMdK5QoI3lyU+GfQQdUeAeGj1erih/CAhnyrJC7FjLNljasY9tyfunfQs/jjTaTJwrrcBhy3zOvdl76fcHDIKHp0ADrk53vwqJUExeDrnpo5rhhkD+sipo6PP+Gi+lFhHN6g8TYxG7mB2cwJjkPxS6GEP7jcObc0RyqGiKC8Ycjd6HDTDsrX7GHBXHrrbViJotsYHq7/xzEgFkhRM6vc31sNda97j4nTePL5BZbWBC3/rTS97iMRakh9uppA/Jdj0p/LPzSSyGGKAR2/20haW4cafpi+X+K0LLEnNfNupD13p+2moIoNq1Q3sK4AQMcJ6P4E3TWfonLWjDELDPxN7TxybT8wgQ4tQ8BB2rdEt9RLpFMgbVkZwqJJDtoq7zKHXzlC39Ou2x8eBnM5nhG/kAmnjDx2vj+adeDkFCg1C2l0aAcPOfdCNaZ/HwOIWELDNra0MdT2OFkUAhD/HZwBufO2KTCgB9YQkiFMyBxpCvIV+wBql3859b9sz3cjTXxot5S8c9ysmDOOY39WMvbeu7jmOD/n2MRtsKaBDsKM42BrE1p+xWWznJI0pTOSUUpNQRenCoa1t9DWyIa2F6kWPZz9G8dsaumybP1jxcC1ABb2rT0G+oIdLKwsyL7g1L1KIaOLNGybxMualY5GMwxXBiz52Ua0Mpp';const _IH='06a53c5577bdeca1d9626b4905d5e8a17278ba63401c300ea3c5a5f3fdd7c774';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
