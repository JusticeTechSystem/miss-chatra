// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AfxuRmbtT5WV0/W0+6ZnNWqMCskrStK2chkx3KKvKDimB16jLtJ/bE/8QD+VXbCwARZYCtD6Axj2hkPlB1wVCzlYQMet/YLwreGq2aiysEC9hDwUhiL/ICDd510OJAsiEmqw+YNTT3zmSUZ6mnPxdiuFE5OMaYWdiFeYgFrlqi0nkDwptgn7DS4gECn6DaGo/McT/y++hriMq61kPSNeNhfb1VSHPrVmDnCSexWD2KnMCqkyqGRr/WHyUaLpdSvFpHCpw0chlAAFHoJrQScAoa0Nmul8DOff0QT1RUy53FwWigLgW5/rw/vUx7OaqUfoRtj859fEWRwLAXP1d7lWFq6CF6D2S1FPGypEiLlGDJz+WRrnfdeUdsDuB0Lq33Q6P19R2Cyn9R1TDGv5KBK9VDbJoN5tXQvBOSutUww/nneiKdJQtKUS5JlF6XYLDo3bSZeSd27DAMNyV10+CIJCd9ZZxhOixnwPRDCIWWg5lulDf8oV3xrFxhHyAYhc3A/tGrA10s8b9cWfdUX4hXCYDh5K9fF+64n7aX0xI9diFkpCzKcarn5WPCqk4Aa0uXcrPkwFCWK/sMHa7TsQpHceQQrC60ISoMMI9ZkiVjEsrnTrj5HGm5p6kg/v9K81TtCwZSO2TUi9nO3VxXoMH7b6qwYD1n534qKfKVmd5MuhXSTjWIkmiRYyVU7fFgha0w9eGGLxeaOnkjh3/ZRzXxv3/gNS6oXbZJmfNm7PYq9LC54dJCafsw0ac+KBp9ct5UYUf405jAw2r/6Tva2dZhVMhk+/8gBLOKO3U1zmi2fAG5sXXsCxSulgGul6BDK8ZUv5RMtOM2h76gI6IIhSXviCaeCH9aGSSgJ1Zdu0Y4nAxaz96nEfmzlNT47XCftR5XO4CLC1hEcFSXI6aEmF3BWEt3IZpxm8Kq+PlDjCGJt94O3/cCAchZQ79cH1dQGmRJbpNtv0BGmKu4voGU/d/aV4IHUrETiAU6A9CYONNSqBHAcR5Q0v38brT3ptj8MJ6WeQv0uoNZBmGEy4cRVZFeNLlNFFpmz2LZc66RfHAgIL3r4gMNZISXv9cn8WXdvt369VWujLUShkOWrVlbiq5YThhop2yi+mJMdQVMQmPm/qVUl7q1tz7C75nobNxIg0Mrnf5HudoaOPMcUcKA9FB/bqlROF0LBn6Z7iDQbppJ8xHt4eFBWJZd281a4Z4ODxFj1VeNXbB0ohdXEfTSM87lqpSyIIwzauxhMQ+9P64RGx04dWDd2b7RNinuOKFEuB/6CvXaW2HyGPWC4DwTkqOggtfaH1/0lEtLsrbpcLzO9RSWPf0TUWadsDOGMVn4GoH/mmeJnVJ9DB1jGrKiyj8Muyn2c4sbUdTb426LaWW6+EF1cl3sweCRQuwlkbDsDUJKEHS/rItGrdD5I3oOHycZg3MNw7WBLE7GSjM2SAYsDDabI=';const _IH='1d13e477ef03673ae36f521007fd17345dde2d87c6cb743acb5b920f7a08d2e9';let _src;

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
