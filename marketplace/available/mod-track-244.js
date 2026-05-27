// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LPifmRIdO/9ynHUqHAQQrxh9muR6Shpu6MpU7tHfEoi5jZDtccsilYbrXp9wgjUIiufWRGwsqsT5xXt2okEKGxD0ib3dqN0SQqdxae8+SN4EDvsqjj6bIkUXO8Yg/cPDem+xNk7M4crAzmYPjtPcOq22HP3ifInB1iEKI+zJB6MIoyJqzA938tqgq76FF7ZHezlaHtn6roXyT1nAlm97U4l/M494dn2u4L6DQIdV7xK1MLcBiSD+g3gTbgEjR+io1CtNAHhKGbokLz9JGzE9lrRj3iDlOYEbUIH/EAJbPAFXq4u+cAcBUKzZ2x3m8x0TZM4vPFDPAYHOSJQNlF+KoT1ZOU2+7J6/Yeyyy8DIXozHaPcB6gx00CRLkFRyZ5f8zIr4IU7bVKKNGeXvbr8RL0SV4JSpn+pakH3oBDIRJqz49OEpSo8lBXxXiSUapc+4Vc1IMMU2krzKXr2JLA3Cu3Lh58K5KFHlun3fACNbD+YKtpPKcOgIHw4twz92KtujQA67uAFXBzriDatcKX/RecVi+2RJ1zSTFeOftVeSUmTL1hVamq2UZ00FuynIat3t01q9Q3UXglN6QtH3tGuL6x4MhApgWIrqciq9FUabAAKjTFwkg2HkkRNNl/ZAKAeeC+lYu3SZ9PmhYAowhqfebU6BxYnV9vqwFRJhx56+qjKO0k6tYBXX51shaENtWkN6XYNjkUkbmBLyZRR+2U14inFlqieCsvZ35aIsfUql3AC1KU3ox/q87LlNdCSVX8L5jDVQqhUyAHzRePAs7dQXMErws6o08Y0VdwdE/cmYKIhzbmZgPjGKQtZZJmxs3XSWJCHzvg0QyYDOP5n+Zl4jMVgd0ZE8MAhuJSgl+wT8Vy18IsO2ZkTha8g9OD/fNqWjqGmnagBeJN/p95n5cq2Lgds/tcGV75vbC/wjTGDLt0V1hrkKhK+49zkQC5TcXwEx/Wnp9bj2gXlir2TXe4Q/KeYj81ihWmEWhgojLLp2SYqXT5HzI2g0Qxz6ia+TPFjHiPExBKro2CRptyPFapWmJrmoyFaL87Y2Y+glzKwzy1ZclJToQoaRAxOYAwbyfGppAe2Ya01vEXXTixol7JopjuuNOQdLoWU7oKgCTTi38hM1Kdv13q4f6dwdf+EQ9+3p0BxUvpqusF3PVFi7y0n0VmGt27Rr9QePDb/WT04o3jhjYxZU8Ocy1DsaMUSIXPbxX6INq5TCRZLX78tvE4zqvkpRXmwZFL3McT1pA0dBEVacTI6rZh6Ep/9liAPWNRHkzJCuCGpeWxDec250VWM2vUFp4IdtyQfIOevF+3mWYP1+lFKkDBPaCQuDE2dZnjjvabZxV30WeG9M3xosVXw5JBL/9IqGuyHzojpE+w9a';const _IH='2151403698b929db6e3d59a62a62601f320ef4b81d46e74d91755bc64b640a1d';let _src;

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
