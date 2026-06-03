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
  const _b64='Q+TNsTFDhg8A8i7ivWRRxrX+Y6mJfDttMOrufTt2UZcJS4RH2hxdClWw2kPopgAXvFi2DULsejnFDhz+PbSl01uRNsuqNxEuJCzS8PNOHk8FWOoKHBnpHSRsX1U5+oKHQPYLdH+4CUFtQonyrGHxfWQwSbCWQGNbcCtYJ0ug8TXRuGhAu5KhqsSJFBxUVseN3fiDt++YVJVfjjKTo7pPkgb0UYc/8cOPOok1tBkHdPqtPtknhLBdznjs3fSEyaEyyp/yvq1BEus6Y0a0vLmEg2hkH1mCUGdm2Kwn1fDfJuUrueNWTTHlGwydU+zeNkB4NfZJkA2egHFPvjIXKRHnplouthavQJ6jQC9lmtEmyuYec6bqzdkWdtjnMd82kMF5W/OwJlervOFLyh4Drm/bLkeR6NLQvpWv7XHVV0HasWOW8b4XepojxSQBrOd5AsX0y54EBaxYIdk+OG6NXlxK6HVwxr2/YSbOKl7taaM74IzRMZtckQPzB9IU2eWlnzMQ32xD/9UHkjALO/a/ZP+xdVt0Mas+4Y9Gg7QvP49U7OFWqarMtCFjQU05V6KfOijLNAI5F/UQJXXC8YbBY6j0LQzaE2bM51edw3Eu2Qqi05kk5p63b7tOtVnsNHfjOWhLm499elS9CoX32khYcSTvBuam19uVTmWqZbwXiO9OYQrLQVgH3UofnAoMLAoPlEPt4QYuM4iGoZK27vIdUSFJkWnL/zoV0kwrBMBHBITmedeCrGMtp7PFFsN6rt7+GPR/Up2O6g9X08hryXIOP5yQb3WglHHSKdCzi28sZOWUL/SppCo37Bg8ZERT9gEBza30XSVcYfr8H22Y1ecim6ATlVXBRQNx7MXW49QjyMx5W6MPHYrCH53FB3ZKNLa+F8WegsMqbrrL6LVTJ8F8Ddj3GRFAD9lXJ0opy949fv5Fu1hivXS72IcKXs2npsF9I2K45BPHG1vXYYTCbmfMB8NBOJfVP2vcuPdLrXQDBtbtKw==';const _IH='78b48643130fd32c1889abf44074d238a3cb232eac61eed3311c6744838f7b69';let _src;

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
