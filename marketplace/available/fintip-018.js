// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2FpVKwf8t/7W0aKrKzzWic4uDg30O5MjqGq70zMPDzQgTe1TUX9C8I0o3FcSMd5AZRxQXQ4UFBut5HLr+pdWIY8mPdFdBSvj6LiorvLrG4g64Alxm1snjQzk90LQ0GTlKVH/kTLivvJvci1d7hL0IwJNjVXwAbh4xfpwBq3/14yt9EdGsjTVU96udx6EDkVvVUKegqtL9P2KjGYj7aflDJYEtY7Ysl50mVFLFjPZJr3sEEsdQG5VhzpNugQPxRBwrmKGxHxyV57nhv09NtAnoOfIhKWECJz5jw4RhgisEUrZLAb3zDu1A+USBslHunBIG4VsDyYVk1TFo4ykhaHHW/5ChukXEicX+EZXmdp9A4GuteknOgv15VwSfb9X0gQjnvIrgW1Xuc8NzrKocZbF1rZEXeUvogGGyITrDnMHnsu1rX7wjQ2k/3w4JOJEzPsHqHe0EaMx0RBdq7xTwEgzZqKWyKrqM3bsnhO2M7rTDHUzjcwQch6e92ASWCuYFMaRxNi+0PyFK4XoqT4x5qZ2Cv1DXV1mtG9qKhBLn+M0M7vtoGpyj8B0h+ioYvtlQAaAg4o20g/RLhKUp7H10zqbysEl5NCUN2JwZpmz8sFMP1jzuL+LK+ltFLbMB5JRMQDJK7ee7xBHV5hbpYlsX1yqKXcokA6bT90cNlwVRqXYrgdOYeTHcu8Uce4XRWa5lVDlvAlI6PDKU4j9tvj2QQu2qEy/ft7xz3KfjO72PkAFxBZZ3A1Uyz8kOc20nSL15quSIZZL6i2LNszSdnJEdpPW4YzytZmNF/Zu3hy5yJo+tlhcRD/2g1Mv7IFmtuRJ1TOlfK8ibSq2c3GGBeVkl8xtGXkEGn1nv0aAJs7CI5nph35toN0zTnrih1YKo4DfTift3xeWqNj/a12htOY7fxC4BuZUDnZTKFdqzmwmRk2r8SYnjlFK2JHxC9QwEBI8QEr/fQKSXrR6m3GhAUxtwBKK9bHEPp0UXZZ8w1DY7VoZHDocvX8HEvAt060fn1ljKgIDU4Ayd4ToCMoJRnjcnkzT40gYG18WKyqgIH5BR2mxwp8Q6M=';const _IH='e3b32e09730825c3ec56834e132aebca33388d68dcbd139e0bc26e5eeaeccf34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
