// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sZtRvrkFXa2Pli0LDJoRBw7pjt3Ph1h+3Pg3BI2WZZY8ZJh/CtXxezAy6JEluBrf+n4rzknNMolX1FdiTZ89JCMo3OLuhWeN6txvt+BsQ14tlbGkrfEtKlVJC6Q74S526cGIzba1+JFmeHbRzpwt+tsRoG98jH2EVRDSjzev4IVDdiYTY82Gwm+vRTMYEqsfQgojVIVGDxHo4foOPAmNyOm3AEGuN15NVPNm8g/VfFjgA7JnkSSpKI8Iq1KJMxSQTUPtHomZWQqjP0OlsDaKFT16cfbmaZ48eFEl8QcF2ihtnaAAwe9rXfp34wSicRzZ/kVsJ9mnHpgxxds5QjCkXSr27CZsTMIU9EzYRcw5BxiQPSl0YGG8aCEcsiEgIzf4xUceIBs820znAZHRBRVyaqOUqlFr5kv5ZV0TrHqk8Shy5eNVJcQh7YW0N2wVDd9DMvmXCqPTD3oL6CQmPRm6YTBnjqsG6Dg9EQMOEpBiViUBRYOe11lNnA4/UzLIPkW7p5PzG1fDj4yj+SdeSbu+3zyrvovAWGGaef2miOVmrT0rpQoiiExbVT89x8JN8Nkbqce0weP9lfGSMDTHwNjZnVbj/3RloJFKOTa76qz38GMMQEtRLhx+16t7+3MvOIoJORD2K/y7keilkTu+URDlJQagm9l84Janel1Dt/lCSpMK8CyR7gVpq9MzfGgHjkb7cSLTtafLToYH+sqi/JO8ErJ/9SnQBphCGRHQQrhsR4/Ak8/L7891JPN3+vJhyt7bhp0FV74Iso2c3zKSrHjYLK4/ELT5CYZtlbO2cUfYkLkfUf/mELHS2R4E3zWOAN/wH2MCNtEoiNpoNGuKf+XBd6oi9EYKAu0lYLav6sSfhf6MuWZIQ9ggsP2w4caGAIYEdaX0tOWwmHkREEnrTyvn/Sl5a7mLizr951VsyzLKgEN+mq+TbRZa3/D15L8ReTq7DWmmCaxtFOutYtqpVcVGezXYRj/QBVyup7tl2ax/jBlk1rf/sDO/YeeRc9d1UsNxlpz7uayXNGkmfDZNyDZsFDtoBVcztJ7KP0ne/cUWbV2+tNRUriYSKvcf94/OpDbESxd3zzfTn9ZOrjt3tXdlOL0dc1Fp9F8+mcYHht3IhEzreM6xZPH+4vhltk4um4M8XGhgiAd+Sf1aL+JSwirS68gwtCsIDme/vztr6DlgBF9iTPHCWmJFQnrbA9A=';const _IH='d92a10d65df1532b938e90a8c1752d8995ba9b173bb9450310674f18fa87ff32';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
