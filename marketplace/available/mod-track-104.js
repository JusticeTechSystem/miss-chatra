// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ohPvnGc/3hiX/TtrBiO5yIXc5azdT8nY8bZn4L3jCh9R7f3ww9Nk3UDKf8EEs+onQq4o6U8HwqhB7RvpKfwFKJKH7YsTLkAqL1syjEPlmoMw39x5JcTr3fE0lKe7CpEVhLJZpZzZxd0akixVoEg+AGxTfv7KSylyGRdtGF0Y65kq4i8gTEc+EJwlEyaN1xsP6WpRJnQ5G/xI/Pm5CbkwMHP708y8QHb356z7OKh5g8J1rfY6yZDahw8D4t039iGDWt8iGeuLOiUK2FclYE/P5DHQjSIBcrnKSHQtoHg9fhpGo37b002wPCMHT+8FCcGlx60lL05HWvy4aWhP76aA0ddpmffmJpwiRf/wfUZkFc063tFoXBqHDFmx/jua2+xTCwIc8AOhelzxao3VSM/vTKtyuyhLDv6Z/yVKs9jGKrsjkkDeBE9YoabIad0tWmVcNPTjB4aD/REMzOQfvkkkxRy1J480r1pPNneyNjx+yF72wg4MFbUa6lK5glNx36pXkpBJeDRPd0cNb1w4z92tmZ/jxTTTwU2WNQ24vvG5zutf0GjLyNJpDN7XiAv5Id/MAt9sIptuPgFnr4lspbR6jIvCISDseDPSdbbsQ0yHhTTRqZVV3pHnlA25bNT2CmLgC6yjCBE2HeNr2LBHvSij84X+a2nSAYS1C9XqwspN0k2f3PXONxzQNQ1AOBO0XKDZmO1TXEI4OrO4qnMRTDSjADnOMfOs9uTkIv4wD5jdz0WkjKNgiiMnucXxWCi1MLYF2TJREVQLClAVYZZpCAM0VzSTzzgx4yWjYe3+h7PrBPWF2BUG+IM8wE1Lsrjd8f2TAMsDPszu3uBULeUEmUW9MotH5NayfoR+Bh5O3GJDaGc4RTHqIwMrw3f0upH8HCq9VUgcEMVrcPWxqvlArX9z+HXMwZq4vk+M1qRe5dHEEbfN2NW89kIF+R+gD37goQSB/NaYpAexgC1BRVD5a0n+FG7AHWqFKzRM1KUHalyycOumNd3yColeCQ79e9Q0hWRnydPbWOiyJib7Sv6gVfWQqQX2uJuX4tODAYwpDccpRo6Ri6lClorkJPlnlCeIQdeOvxcaE6fQgORi39ORDutD3Hfs8/NQqA8EZDVRmyiNhP+Cl1Os1TgGb1ARNRUV4tyPM8qHMcSjVljkooVTS7/vJCSmt0vnVYeGQ20N8rKFs7soCnkXiT7GTtff/v/M9P0S3PpD3qGGOnweJiIrgs1vQpWoiW8upAMVgT9XMvPJFcyo9k/XPsyO+3TAUJG0mclUs2gpJpmD5Ib3QhLIM3/VqDDR+50Fdf5WOE4WjUrFKCzAQGK9NuwrPjVZR+oNkd02yufgV64iMNhkXx7gZKtFj2dARRmeWu5iQhD0b2Cg==';const _IH='527be063bb444cdb743fe888c0ece9579a77dd7ed197ae58700e825ae53f4752';let _src;

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
