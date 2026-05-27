// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1lTvHd7d0Z4EM7cCRh+4TdUgOtQ2iYwcJRZhhAgskXR/IWzy6M1yMtN/XfNkxy4B1iKvKvr/4LClfsWLJ1W45niBB+uaGzIo5Wc7mQPtAm7BUlS5c54F4iijTwzaqYSpo3TzUP3dLBiWwJYorv+QA8sHEQ5IUj1hV7863DWtqghFz1Je1yWiQjmCG3s8ACkiO8Oy9dtr3LSsL21s2SxyDKbNelPgCtnP4YmHKF9Xk+MYzQDc6XusBAtu3OO4YXPJsNZ587KPB/7bYGSK91tA2etGJxjSfCFBsdPlyIoTXUEsMviPi1ewcqGd1z6zOBxAjqEKe1NzPp0ZtA2v7iciMEv0EfH8wv74yRs9lg68DJ54Woc6UwlBpovR0lcCa1U3PtY9OX7e283bvEg9Vut0b+H6uqHkEFU7eDG4s2fvUbE45BTajT3i+rM99WcslmxrnM1oVodKOgpDsflveseMvVg+f6moVxcUYS0+S4BqgJM//aKxTIju6CB8RCcGlABt7SMaLd/zOQ0vIE1fibe32Fq/vpZJu7RHA+KcXxkH7kEefo4EImgNl5JkSCtXg16k5cONsDWSyHZlszhcAgu8YKyZp4zmejk0d7cjqEbddxu49lhYIR/iWykiVRTKNcGTJMRlLuJR2dZ4Bx/9sNTRbo0JnBZ6E3kwwbTQlR2uEsaecdQWKO8GAGP2BPJAbO0RPOL0fubAq61AR0M3SdWmXs/mpJ5smYLgpZhpOePC9zlo/W15ZXmv6JutasrRmp7dcfHFs6eT5jkxl3+0U6pesWcdDn4Lu0yHgxroBjFnXW2BNjuSDO1YuWgCTX/8VesSJjM+uobe0bhHVUeMz1PHABu5QTcLIFNH6FxrGDg3Dat0rb/C3qfUzR1x9AgBny9hXNwnysomix85Z4IVGenx4rdElz7MjX8Rk7HRfBshziLbsiDLJTdMdCW9yAeqU35vKIg327A7DnsowgpwGH6Gkk2COME6D6OtOCbwW2LOKt+Vk4WXd5VzTvM+OHgM';const _IH='83b79ba070e9595a5b912d07287bcce83485214eeafc8403b33921e6d90631a8';let _src;

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
