// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bST46l3bOk6gnjuSMBXiexdWeHHwLT7B0rpYY9FVYouAb4eKjQQAojzE27XWul2CwI6cuBwT6I1XBXDANIt6pq2bBp1ILft9x48po/G0UITx4IX7Ibg4h4yxcuVKbU/rhpf2CQkyBxfLgj2hD2IfNik4688kywJL0sufbiVV89LI5OtGTSJ3ppqCATC881lwF+Wl5FDaTPlE7/PmwUgPIryxrrMIf1LzLltTmkgu0Hmka3egucOA82hJfHf4dIv1HWsQ2obX74cgOPBpt1uyBt7/BQKkTKOR3B0R/X6hJeYzXKDFzWBxB5QkMTd7z1KgNc7qEwkRCsJjM+GSuCk4hBUjl1UDNKUAGEmJg/OKs49POGljUPYPYDdjWJ65FVop1iIMFus+NpyTuilMbsut5glFUJTbCa2qPpXsHvM7+I0Ai8/FrkauyXowg5GlPM3RSx/4KQolE93nKRvAlOTzQmvuoNa5iTnkBsTHcQl/Lgp9rMRKm4vbny3FKohVIQdowMU0VuuO3e9IimAj1znYXaKloLWVrTV0ubZUZ7W7lAPXtELT3lnvcxvCRGDiVuBaRvhY++Vx1tmHfDF1';const _IH='241d6d3a3ca8e2edd3113616249d9dc0e8a6ab8cd8ca3d306967b9d79bfcd3f7';let _src;

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
