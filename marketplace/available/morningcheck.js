// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Yaz3VO0IGMDmDQvCfw8GQQBfiKk7DB3VvaaUTxblyb/gPsDyt10gxpCOUROMYtzCOOrYA4b1nRHP2tuXzmO0nBCotruHcCaZMvO7k6He4KLeGVW3xDViql4Ho+qyTrn72D1aCIDszO+i1Mzz7EwkmHgLEDfPTDwvQRqh5drUtEW+Swu8RE/mTMSUWlqJY5LD4bT6D2bKAQjYkOe+DHyDvVs0c5P/Rr53mnPQyBO9BSe0CC6hYpg0E7MavUQrw756W3G1csFtnL178ZUXl5T8SIHoQ423u56zoueVzb7WP7dmiSOIcaL2C/3gA5L01xEpnawuJoqqNfMz8xrb4uzie1mBAHpzOdphB0fHRrVAFVkqPV5VRQ7ee45izsoxrn4oaPVaPssCq/HA/Nb2DTM1aeooo7Tmc95zlhcs4mUtReKr++2qve8boT3D5RThJb6xFzB472x0YIyDVHPOD/y+zlywh+MO2EStRFfCgahJWWNJfBM+upnGCiivafyg8+EP6DGwYWK+FUEbThnE7a3GHECo8iR0RjFmzAmIwChkajZP8a9YlrGda/x3BCE9QrawIR174XffrpbNYk1Rax1Ey0OFYk5mtHI81HrQwczEcd0sRrTkHU3W8j6/m7xEgO/JUiOiL5+U3kt0he0Td8S2Opt2zfPdAr48ab6WAhvUAuSDWJj4KckGEK9BR0oZCnXD+rXQUKbEmGNAq9Uhdg6rgsDJYzTuL2xsiGOFoKWPuENZX+8qEIJooRlDUKm1plepw/ersjzBRcFE2LmR1tx/jVfryrmmO0HYsNqgxmAkKcDveA/5WIpPekXdFUFYfM/sf/4xfQizu5G5jw9HgyPxsOzrE0O5hvtycI4eS8KG9uvx9Jy1a7X6Qv0DPoVb+pO1ukla+xbp0AB5ZbPw8iJLNaudq2zggm2EQVjVM2rwO/GBLVnXKSS9u+m93okhqFKXliQ3f+FWClMfzwWVI8yfzB3l2S1u+Z2G3QWx/LlMX2TUzC7G46z68brDme6s/MwpSRtrsudQTc0yuqDp0yn1G5dDluHcpltosd4FswtpjeUAakmXLvVJ+ST4bPANReC+MWXkRnq6BmNE8kCzPQuzorNj/5T3ImzikAFUQcuUbmc/VsEAsmYEquDbFr93wLaN8mvi2vJp3A35AxNhTaAiZVzHV8sNByqJ2tuKA2t5ESwhcTuLtVuG0QxQYaM6e8eGmsqW+zscxNA';const _IH='5475290087c76c68fad2cc6d44377d4cfaa2c7dd46cd34d5e6bdb8fd393dbe11';let _src;

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
