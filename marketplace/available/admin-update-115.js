// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H278ArVrVB8ZTnRcSIswpKWgQI6hGZSaMgafOIXMxkn7Fa3xmmjaozsLjVzJ11D2ec+D7mViomVaZv5dgQr+cVLBkHMUwfFnPAc1YuH+G0Kds/jSOQyazz1tcLzSWlqC5eNn5YfIw6uANQsr+9FwfSdI5QOH3ltsaCwjn+hySw5rziOj973A+g9/6jqFui9a1+XlbPaUuRr/dlL5iKgIJ3+iSncEyyd30qRtofZ2OLv2YWWX3aSPzCxoAZ9p4Vp/zflWSPlALjrKKOK15K98TkivrO1wB45XbWuamqRbvaG/3OiDxnyxiv27JuwlThE+EhEm+dNIvwIV2BBPrI13vDw0uVrAcEykZDXVTrQ8qKyvcJ7srVjpKIn6H+SrO6eDUXX/9lBWKNhBbdsnwV4h+JdbM32Ybhd2EEvmDP/NC/ZLwp9iHExgTqhC2IirTHoAsKScgTT2Vdt9e+sw/Cp41W1X3gMcC+690xyXofbe3TFjprmiAw8iP3GW2wTwSDdbKJGpOqUYOkxeEquDmBU0B0pYIlnVB+lqngalOPcuyNzcd+SikjysCvZVdcTb7dusqJj63yU6EiWpcT87GCOcujcDJQYxRvNHEGIOtZHxahVkX6oUm5/a+1D+X+3O+S1sui7wRIPiP8RMbLK6hnF3bCpRtBCoe/QrRbLPrs4+PYtkEKN4z0fwqa1e2O9D77WYsHR4UMxHKrYnFKxeGqSX7V7NPIu+IGXU/NLhyqtHZPGG5dB5TGdn/TAZSLx1113GSNDfZfxiFVMZirjcd/RzpUlvL3DiAtSZ/sOLFX8Yb9Xw61yh/Fq/V80UIb9jsJm10+gkvihLtE7srw5EjxxbdV4oVEMp5VXck1y9rv/67zw5nNnPEGDnnjugsY+emYuxiOYS0iT5vKs2prEtNSSjesC6BTQ9Qm1NPGR0U3+MhpppfB6mbsRir7L3SPf5BBLS0T+7RR2ORUhKEZeVOONxGRiTqrslTKdeWKerW+QifMk2GcRtXOv/E+v7HqWLlrLEqQ==';const _IH='afb3c51f978dae1c69e45e3a5aaddc516a1ab586f2a5a326385175e27189f772';let _src;

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
