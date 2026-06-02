// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B9jxCvFIK/s83vDiEtiiegE1dBTh05OMhKEYKlpi+rXJL3vlFvPVA3ZOS/RxIsfXmXxiNPfIPrRwyofnHXHk3HZhQSQXuJ3u2xw7wsBKbIYCLd8O046zLCmCwcJTjsSU7Lf+BqwZOO6h3Hyz7N2ealUEt1LslVB3/QRfQsGnE8XOMst0jQT/HXEkMaKN4TGVcJ7Qq4pv8TSwVBz8MsdLrL3gKWdqBJZA/2o3VHD67fEQIdq810voTFD5SlnW7CvbCA0QcN067jwybrKDfwGZZduGn7CEQoNL/6yT4je3p1W7D6NAa2GTYCch6Iz89EvfbnJTMYkz/w46CC4q+T3RZwYGIQ3Se3z/TOp10uY4DXyd2sl0agcCW61mMXf8an+b9MChyBXFgMzwF5jN/mZmLFb2VmoXhPqgny5ga++3n+88jyo426Di1wgtnPHO1QqYPo3RUDMGHFAzrW4qJ/tJJlaaTrPZHI2BVMTgHhj3G4opjxnrIBdFhgRkYt1Oh18bUFZrXzNHtnoJ36Vmmpx6x6Yt556v52JgQosWa7ffLXUC/PTNv75s8nRkklOt4s6UjcInPPHRI5tF+XaMf4t5TC7Cyo1etDv1IIHVEX5REJzcKTcDvbjQcwCmjyRJ9RwDtTFyvtw=';const _IH='96dc2a7ed263030c0f15cef784c871dfa58710aa75e62a22d04b9f4dca8812f0';let _src;

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
