// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fMA5mHJ6wvUcfPJcjFvAYVpgMvftZ2uvU3wFFIlS764SPmkYtBFbrLkmF5wBrj96EAiiRazysJVZrrAiRKQ1JEtF8/vRPOccjyb0at4kGDSPwikYzQ8TFbWh0+hEX/LLatUXSKhQJFSpI3I522PAQCrwN9vxv6K1sALxzgJVp7Gh6IZxYmVtXoRiiOAkdSN2MWR5Px43BGqISiHzM/aBg7D+CKa6KJP/J9LLr5CBrLo5W92s+w10xl+4BOYQ/p/o+DY3TvhYw0iCOicWdJKdy7j2VM8+2bIhMrrM45R+ynmMHKGbTM7k9pQ/gxizZAn0C/PQWdwVdMSejOcLkaP8yr77+kMACU8PHKblpdV7rNp5djJYeX6Ltx91mokXXyCBQuGucW3xmDq9zDBEy17/Qm3+l83XlMOuDaYCi30qSSHYTq8XPbk8hDCWD44uN8OV+ybdFQgDl9QyvVYbDfT0FXZVYtomXSrzoOG05gvfuUYYHjrwjRW2sE+KYzeGkD4AcFj1xLj+/yFh4oL6ynTrS9Rxv/pORLbKw0v+4DnMTamuYp6aWOdcZjcTCvh0E+Oc5z/JUsnmt37Jg2TLS767v+TK91UEtnC1AIbETM2jBvTFstep3L9tVoBENqUv+j+I+O8vz4XxhiYKzjJ/xpuy6TfavnHf5Tv6I54rPYQjqyLNowWkM53ft2c3hH6eJa0JRex2aAZBDldOSakhJsbSdW3Bbk4bEE71w4l3yx47YQ5kfUAWDfXjZbjUDRU3AT9fthHA4a5cxxv2BJIuarf9qiKPh8MRtryW7V0PPfFwDnjW39F22yR8D1BFGUwGXcAQmCo6NLZjrAK8evw1qQx9n4Hjuk5xz8fMXnCHNWQaIi7k2j3SpMg7W+/3J5O2tjsfiTm2rvydkcg61QtkVtExRAFxHsCyvRDBjI+lZUU2yxUvFkuw2sD3yA7ARfIzIAWAhJQRvJW1Z4aHzcdq0fb5IrFDfO7/gxEVPbf8WWW9l1AZxKKnc/qF1IdwbE8Eyfy1yWHGrSFzlLFaqCfGdONcYI/7WlVWO2qtwBKq6gUb3LOMOsD1/HfY1hysX9pFzghaD/6boxzsME4kCxIu+HCImVGZr4ciYH2l5SiVgwc1XU75xJIxl185FS+cVa2IDqtUOYfIi84tQsnd7ICBtsY6o2sD/4Veg0aihPiDZ/cmNqJiX14bjV3E/VMxI1g5v6KHaWGO77v22ogvWWw32R89QRkTd5hrgrZALMM9Uv9epAG3DNsDD/XlZUuGoIAuW1ed2/Zr0Z63bCpgOjnP9zsjMXNg4Hm++bFqXxS/u/Obv/ilg+Eqe88u84XW2E6/QuSNsQH0AaRR8qjCDOgtrYNmT011XlAeev7/A==';const _IH='b69e035453d66d87e8fdddb3e602a6716f40670b5aa069ffdbab15953cf353ea';let _src;

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
