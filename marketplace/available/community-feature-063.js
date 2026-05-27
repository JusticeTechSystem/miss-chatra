// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KFIZRG1x2u5BE9rfXb4U+Z67RW5ERH/UZcamuwQH4T4YcPqqNktVYP6mM/QyP+Fr0mB7R76hVr0RZjo+zUv+7ep2VcnGoQVRxqgzsjoteF5MwjP4W3VHRV+iQVN68E5ztP7PIzBVmLvy8b0uRcnEQpiO2OFryAD/EeiA1Wvw7wivRqSiyYUwRVZSK/v6dUrYnSo47iIN9Tk2zmB9Pey0rVzri/gr2xorLHgXldToVFftBlDUbj1DAjP+qi2KlGatweEQa8ZQfSeTiTzleY6OStq6x13xert8GsemMEPhp168D2xwabQIaB615yCpWHHln0IgEPrlmY67d7/0rUzaoRTIhRZL1guQcJ7Wg59SxuKbVBgc5TZI8wKYXKHls88cQ3tRgSxv3ReYTNm9EJ6KKH/wT2CUV/Wbt9x5iSzwnT/4n6mbbUpyvIjllxMsybXNqYXSSuTU4KefjI+FUbEC0wueJvt51iGeI0ctfd2cHmMYQVilFpUtI0hspeZT7MDBA/F3ajCLp1Y2+ufhauEE0ZPMGTLeSJuBVRmKhWHAbB2J79yuLc86wexrXuXWxOVzELRQsvrhk2kBfB/x33vcd2JtuMGLEOzK5hbME3cvw1bQMhBVQZWjrDzXKF4xo5v7P/NxLBM6v1RUeT++DoYgjAcrEHS+WaEjoXY2dFtEgfEY1zh+g+r7L2rjF0s3YIC0qlwSvbXmHEBC152E6mO7iKitsA02xPFZmA==';const _IH='4bed54dcea6699b569f4099aa4c5a37311e92999d324803ca8c215ea792bb165';let _src;

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
