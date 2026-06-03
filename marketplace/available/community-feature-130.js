// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uzuoNrmH9alkdsiW96AaTukO54GEv8+FW0ssuDvVv2KGYk//FWMmFV0Hw4NJAD7Tcdj/0d6r+2+UTvNGQxgXDu9BhmOmrqMAnqgoG7roX8nsBNOI9+PpHWgbmMVvIBMPf/UZe3UrmlQl3GDv7XLT8ZlyCmH8a+3Gmi2BbdEl6+aW1PeoSJvYGKyORQRec9pTFj4Z/MPV+etj1d3A/Zkh9gqDUhNONKaYte4ytoVqB2BGrpZLYNDE7mMSuv1UuPkZsyT0rcmrnjbSPn/HYcBadpQ4fmgFDRgZRNGGnS28vwFpycSj6g10OaC0ESMvjioQk+T6I+PJ81BGrnc0MPg1MMabLTBbbn5fjU9D/K5XarirLEXztv31xz9/f7m135a5HRxh0NcPWnNrPZ6ne3ZNerqbVKq1J8QbwkIF9P5Eo7PWHDGGPvrUTG6Ul5xI2+z0+UXd0J6NxN/lEGRMZXutdiTkOGBnqE3QRG2PMNW+BtLbxuxylcQtj5qE0WgvOwqoRmRV83q1+FfHSFotchNhCosLQ5ayksi2Q3j/g24mvpGaElannZIUh3YbAq+Bg82BoNlKFpij4xkgyHgrD8CYNgm5XBjo/HyvLE/ujD+tPpKQ2nldc6XkAhboFjOYxFCuG48tkfUKmaRWonK43+pMP/UdZbzCnwgFHSAKbW4TtFzTtCoRug0LXV0z+Yed9StIjEx5EGYMhMQJ6ia4at6G1vNv62L7psFUcC/bJ2bNLRveo2gu/58bt0Gj';const _IH='dc848ddb34b5cebc37e7990da6f66989694593174e0abfbf5678dbd02419233f';let _src;

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
