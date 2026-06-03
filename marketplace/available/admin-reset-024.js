// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tktof+i3g8cWFoPIvzOLY/yP8juPnys1el/4Wffea45gz4TNnVAV7CTyak4/uz8y7dRVGIGxmDhbECmo5ydIiSHlAc2fNX/wP7mLL2+7WtihhIbOMwxfSFw/HHjd4UQFhnaKPg+64CPLRYHFo/g9WA0hpORlYDFv1sNrtjRAlY/Sms55fSVMAvQqmsQA+6Te9K2x/ikNGmmTrvH6gdOrRybWSTCBdhWbA000nY00bP9+MLt6jLTSdwF8vD2K2ZCbhnPhNskDBq9vefImuP36Y8GaSaE1tcKqiwIGzfgFPuimDHUHKZTJhPhNl9i9e+FJaOrNlHFU7YNrm9LGcWlYjduZzY5/hPuWXnaPpKWGqy1d6U96SQ5R7h/BliNx8Q5o4bcwuHY5NmLhgz1asCrt6aIrsmhUx+QWWubORGHtp9CQiGP7ONPvPMsmn8IDWZzejLKBBuyAv304I0JiSHVnX5vgSW1SR7/Cnr3dp2eRsGweaZihQPm6VKfMC1MmJqz056w8ynYu5ew+EqVPFPUPFA6UEAwc1LpFLJo0jX6abaNBfp3O7GLQDYf/g0txviUdSI2FdpKCc9AXwZX29tEdeg2LazUXMYLmj4B0UBs/eH9FIzx0Sx2DGh/IrwNuVkd4WRc3031gVOa+Vg+MokVB/pjlQF0jOUo+4s8MYl0HWX5knle3wSEXvOd+dM1OKQ65UarHaT3UaFs1LKKQX/4DjbTByJmf3JUxYPFXblMdNmpHrkwo3uu0XsOkmPy82c0JjrdybrY68+IHEC4RNEN9/spC48ZTQUzeaMCdan1d7lE/z+FRUdIOa71vS4tM/4QmWeLuVwZzoNSop/wtqjmMdbwu+p+2ZQk0jLQdOLRcmSIhx/uBf9y+1Vr0gCs40cBtDUiOmLbGp9pr12N/neS05/K3scyHcZfr5sIGj5MGc6q7We0TKMTBRgmf45jgS2HDoeCsy7c/UA8+rNvIWAV7cdNiSQPx4jBtQcsds0IwgSqccfW2Ohg=';const _IH='62887025596471bc76f2ce5af5d801b65a7ec50e28034441c7ec3f3d2913ddc9';let _src;

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
