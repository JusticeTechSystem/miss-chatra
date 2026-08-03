// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4/44OcLehpRTFWD7HTr6pOCD+r0gjO7/J1JjrJUunCoxiWy7ivTAujWsXICVXemGNtN/Uh/HMSr3REPHYdmB5xqUwmf/71nBZcKFXpMPC9lGw9TnbAIeZw8e6J5iqqG8653lDSZ+yhSsxhpxyH7vh6CGfDX5rWpsccn9d+d6jWiI2jxK0TI0A6TjcVIPkKfiNRryBAJuZQBkWSRIhIpjbWQKP+2Xt2loBG/xMU5cbFxMf7ImX9AYRUAGsUnBt/MpqwPUFTGqeuZfn1gkm6AyORU5HY9IyFVSMv1cQPJeyKQkkh7YRqMVOljKI67tGxC2WVOHJYzkrjd4FyVFlyjGvTAJh8IuCMTBzDcCVhjkSu5/ZlJcWt+6umxjxtNK1/2YkyV1saU5xmpxXn8wijUb4dQSLw6vs8Lg9T42O4ZXjX1RMWEHUVlQguovP09FQHLUjC4eERD37pZBah2G57vpPhGnOD2hKaNpvfKAcGXxGgrToHIrUv2N3YaCzkv0VJb6r8brJQKvCREbBkzTfFiHTH16U5mMtcidMq5LCLSY5EJIJ8u/Oec+SoiuziRtahqietnRH6uS3c/cYxPOtAVzOf33b2sZNANxhbhsrSITX/YMswpMs6G8w5VcMupvyBYXUZ/zlkM5RzhJWiqcNIog6XnXkXfJuFkgM8xWJTPjatAmIYFXFaFotieKn/tgTXNxINfbzdT2D7Hg0PoLgnzONSak0m6NSAmCX0b4RIDsl69CUsSQiB12dTg4U+FjCJQ5B9zMAdEmwFIXSHYawl/ueAhXvh1P9fXfBsqFOI5b3/pXZoenqtz6fblGyUmfJ4JwZRVNRlUiG3pFOOLCJrLGYjB13H+pr9b8+wG+THrlGybDZyQsgpg8KUapdu/0bCOnF7Vf+cTmMZXE9IGOEmFMHf4OE3en8m+XRnMnAB6OtNKmyiCMr4BD/oMRmB6CjTsAT2SBKQzWpuvJNePg4Iv2cyp5FEiOfpcolSi5yScLpNqkPl31xK+fzFPIDBl4rwO4BF89P1S9LjbqBuSz2/hAnUcf495wFPrMX30ZaUWs37Xcea1rZ9W6Wpcn4tI4nPYzI3ofs777LHIUaXEcTEuREOSw7g/UA44un7zP7K5bnZlh26RIH68jrGJtHfgUfJsEe6M4uqI+0E4azaR3Dqt6iuRXD9VVZksk+uwGr2cu+FyAJXOJg7Qbl5BvgxTOthguvEHYiikcp7dzhn5IyO/xvg1c5msBpv9RUQqYNndHRnx8RYT4e3VsWWWiKCDJ30jsL0WlDiX4auqdUJFbXomxSo6AfuKK2bMqZ55Puf5voz1B6FKt7/mHV8umA/jFzIdyjXDfBv7zML695zgmI0KgFEWH50QlK617NGLp3HzbYC2K/KM74';const _IH='c29f9c2e39bd16b53ebbf3667259c4a1f644343486e9a085011bbebfcff2f10a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
