// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qKS7HsQwAByd75NMmM4adpgth9B5+JWu6q1lOCsb4BxAaEOG6FbMtdapr5vSg2HLi83d3g9hYxV7MfeJmbRsVFQLKrL5SOCnegvjeGDgPS3Vz53CqqsL3pZbhd88yGPxlD3ENvnSYa9I1dxLTrsFzfUYtuiE8C/82dxRA60mxPZcfEyOBLd9k9UFP6zKYiVTGY3AnlEKv3pmPIf4NgHtU3kUs4glURe4RWL7/tms2a5bJrabJtnOyREpsLulFYXI3eJ3jjsibjWKTX3cirOeDcelZvn104JLkNaU0UWeHHqD0E9Io3j4EfC5xHwz8fvn6amRslR2EQ7ecTSP9YfBIcuG3/m9Ta4mqvgLmCMMzXP+qcVFKONtnVR9WXJ1V5euToMFxb67nr5vdBoZzr94tQJR9E+VnfE1dHYaLOxtEF2HVo153SBdbf8D+E6J2/sPoD0Jx4Ixh6wEyXPVxlk1e08fIyWO76DmZNgPwhjhvCXAPMokCM4IUYsYV/IjYz48OyWZlil8ssaKIqAjayaVLKCYvUKYImk+rYMoKmqF6ETCI5Hk+1rIJphomztVblbu6IGdyiuV0qK4kU7QjJtx2JreivbPK5CEyBnRS954eTJMqyoqNTT/rXQPZxbesqZ57hpr8hpH0WsxYDhA4ltBcmgiXR0FpC88kzFYJlzho4bM5bV23ZQRoouXaaHYwPv3Aw7YDQ3X0lBnt6mGf8cl+E8t/d7h8pLLs8mWcElLTH+b13o+KkPgftHjnzzE7akGAo3qFXJDZ4A11BKrL6f7563YVhsdbythZ+y/puyzZwB/8rG7wpANDkzgsOmq9RvHAki0RKup1zLqFHbYjzF7AH30rO2Bf+RCtAtOn2LEWnjqFhUm7dIGvlol7wHHQ2Pyat2/ogdb9tU7icHAXFuPYYKl/BNeTlZfc/bonmM7eOiv74l47ECfJOCdA150DckBiBACcIna5AwUigy5z673LnXPUCz6wsehumguyIlmcEnPFmLS8PbKVMnAVIbrbW0bYoEoBQskl4ROJ9p4OAum7Mei208eoRqJzTeLxSshPHbXF/uBB0onucVowfJF+jvYx9mJR35I28TVtw37bAzQJwpT1QpO2zDTfF25wPDM2gRG3bqPxPMV9nQNW6Rzb7j8HYnMhFZ+GP6LcTM5yJ0gHkY3lo5mnmwyxeRuveWo5SUQs2TVHKlL36KH47ILidg6SdXLYslRRjehjlZAcU5A+QYOlIozvUbW67oTYCzmSAbBnJy3ZaJfmPlvpxLvwHYSXvgaN+dde4r/By2m9+9I71fefY0HowFpVw1ojNo2b6knnTgFDV4kc6QWE/TwP2lB4MVVaCT3s2LPcgXZ/ctgCZBzfLyp25SiYwM8Lw5q6MDZqBzx5CzBcQ==';const _IH='a4d4ac4ecb51041af6aff372054c008492a1f51a5c6a868121f22fb35c96ba42';let _src;

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
