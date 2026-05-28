// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tatse91hu0HqDlVHkTRVLGmc3WbY9I5hp3fRnluAKr/JR8HNlLXixHRbj6uC2PJ3TPveN0H0YOvLUjnFp+EA2a51T+zeGoYfQZeh0cgMoirowhhzgdK2A4ua5+uR6syAFsgtAYUbdh2xX8Qx5jUSBDkpnwYnbIZUqkj+cKng44zhp51+ygrebXM5MPOMtH2L+ekiMwoV3d4L7F4z8l7chgNxc/6xARqBaP8Kb2imnM4dJFaSjJXvF2s2ufk31C/c1xnsdxhXQALCDYIlaifTJ0u1fgpfZf1YASLBLn18gWoTXyP0AIMXjys1yoytchDZTEVsscm1E+6W8Uajdl1k3SAMwfcp9cVUN7Kf45LRPk/Cebu29/PTJN/0ntQQohnC+WDcTJuHE3FJBCBjBfRPgwZmwM0egOiefMrIzvLptVkScqDTj1yiEX1VYlQeHdS68R5QVXM3eLBXv1/+x2n2oQLO19EBm+4SiE2Yurs9vboTT8iiGornCa0MKx4XfDwPKISgNZ4WCEOysgmpA8tgls25D13Ng+dPHjmyGyZaJZVMTMLMDWPwQ+wqzgTVjmBYX0EwcqD6O7YtVwWDf4Fo6T8F04aVphiYlLh9440sznlfCeTZZbssDOC489NOUj24vAmbf+iBbFqvjyD2D8IUNpIISCgn5yKvxuMF7tn0JMWa/FNa0mLM/4QVcv8x1v/cmaMyT2pWPAdXwQSYEnGMSvuFQ0eJNnomRu1oFH5sj9fnjOgQV1DC28V3OZxRTyOS39625zGRFJq9sQAq06zPZti/UVcgzj2gc9gOg3RCXhX/S12ROUGaTQqqhPMITLfjV5dQ0ICfU8sXiW+GOmgseRHX9UPxKgRPmfr2t4pKr+vq99vNQOcaND1YmgnRj07p0BowzzaFu6NDeFRknHjvtNGTS2RAMWSDPH0tet0nC2x4qi4A+ORcGXoGnC3JZMigRSED7q3i3ECldH939QFH4zkPFogZ/lgxk8MPVlYGqSxAtplblUKRQjSIIpwbQxlHR/4yQEh5Z4e8eXmzz9pcHrdixpnucjOdkV3IbAQl90CEtOODug+9adjeyvyiASGFPQmLDbN0TzldA6w8AJgrO0xLddVbjswdSwLYPp91jrRO+AwKGdTVMkEQphpxCM42ZLrJYxRfHOLjKaohz+38dj19pMm2DBewh7JoPiPb0bTdXhnave6nbLWrLJXDO4D/twfThb3Hltv4d+3K9ItarzHysVaHsfbaYoPrQyHBDCFYE0O/2KvFvLlSipTcHkhkZ6GyU+kc9Xq8GL+1PPdqKKfbygtNDxvvhJ/dStahERn5J97w+m75Gn/xKx/Gkag1HEZ7Ln89n0165SaBxbjz6ayW/jg72XeqrYxvEn9k';const _IH='6881cce59c6ceaeba6522c61c2b4ed31777c32aff42393106108f765aa9335f3';let _src;

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
