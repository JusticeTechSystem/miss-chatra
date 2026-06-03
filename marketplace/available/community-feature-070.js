// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lKObW4ixIINyRAKqC+TFUje6Gy41xoTxV0aBjtkZMye1nVDO+gGFehSwbNfxYdCtpUV1Sni5vf4CTYTWsR6Vvv+hkZQNET+WMeCwmcsyBTOJGaW/SlHW3H5cItfploGS1+nZ2KGRy0nh2YTha6as+3DzIabjkXXuDYcDDbKwxBzfhXILVmqFhXoovdWmKaXgxYTvH2jGOs8uJZmjgX8eLBD9JFJcyLbFPagso50MjWSdd0WQpUB6Hnoh/YhCZzG954zMvZk45uN81n2m7gOfbx0SmOzeD/LgxoOwSTIIdOYtvbuLeqCvF4Pqqnn24sBmrGhc7ib0SRPsUnqtgx/ongnUUFpDrKQPGnOaCbwojWa3GRIExzRDTaUDLIxVHMs1hy7S6eVWH1ogfnopzFa+L2fyqqPs7rCveR45QXy2A1I2Do2kenSfHFBftYiyV0gm3hO/yThIsvLxmjFXWPiD0nyZ3JLaMj1zAYW493lDfcCcTN6gNVQR/XIbOEBhboix7UlUBsakMskbZpkXozI9vSnS+fJIzUvK99Rctjlz9NBqKjw0UhObCYTdG1XjpRrbmRE3pSCPH3XKQ8N/zE87V7n+4bTOVRIijBKC12Qv398FVZsQ0lay62x0oLPF09My23zitcCngLkU8hzH9EyO9W0odCiKG0bUq6GNmHHQHDR3rlxkDIlCrva+jR6SRPbecmeBun5gIwn6i8ZAxpT/xFGbGTm2ODJTvO8dq5tvLZGrJuVmAro=';const _IH='148f2f62b3ca8d1a5a609c2766ccb12f34a2c2bcca1c51a1430d5f15f72c4fbc';let _src;

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
