// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o66nt1fui2RK3CHCASSxeVzZqeX3eHKYU6P8glI7x6GBio1ls5nZohCA7Ko3lIJwL5BE5M9J9MCCj6kBf87LXRcz2kF+xvHSZ4/BbD7CGlcEgT3kcAcFBLQAdnOl1J6g521DIOnAFPqejDUVuUR7SoE1uKJu/MlyEiezoxx/qU6U8tIKs9eAgQDg6n9H51E8luDVfoQzapRSitGBWGtqsy1WQxbveURzoqkXOiHR3hwtGMR6aR5A53cECYjkSp4XHbImwTRud9nEGCAPVKEgksygakPyTyTp5DwRtFahG9coeVMtYG1eFSgrSybbj/cuExvxPmVn8hJSi4E3FSS09sxjU/EKAGIdkAGmPqU+iBaQiKZs+J9zjTLldT+7MvXaBLPGOekGs3t/IYsUTx8a6P39GuAHho24opqmZfUqvFCxQPwEZMcehAqlLOn3Dn3xuDEnpvfee5qyZYiokwVGI+R6j7nwqNHQZy2FUcOOdk6yW/T/GFrq60rxA/XlG0737G1Hv6IxLGfFX/AKAqKu9hrRpVlbd0bzicH2InlqrB1fEQUQNZd0xtUn46+oYGpLMPQRnD9mBcRXkNKhGL9oNO91nv+eW4jhk7XEfTE8Na0aG/HRVOkHmmJby3OEQ3NQEiLQ3GmYfjRBS+VYmfHAU57orVGuicTCljjK0qADuOuCHq27Y4x7gnpneAjacvfD659gf4NguuRVkIHLiFyu1c+/yq1OOXmVsX9H+rsL4g==';const _IH='707d3b1a90ae9b2549a7eb0439f39f90323d8d2ec4383e44d640a11f13f1980b';let _src;

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
