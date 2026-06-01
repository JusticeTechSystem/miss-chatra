// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0J2r5PdfBAIiQhZ79UvbIyoIGsoHS1y1dtWUIYG8nB9I0eRrTeBRBIgVy2CqGDRQonoTuCZ6hnYSercmXTNGFQGLe6xCHaucDr+w3OsJzC2/TMyyvEjYwEHG1FrPeV09bNgG9XMFVsclChM8Ct0DmcxXf4oAPu9OjDMRxOhecvY0IiBZ6wutc1BvEOdm704rWbxkFttPPDozfMXwcDiyPTrM+JSzhoTzAg9dJbxCFQGjXRyleV9kNUAFvVblTf7TgnMIfZEkovcqmXAWoOcrvjBd/vH+l7qM2Yq4s5rmmZJ2LWgm8vp5Nv02D+bjgKKgPNQnJntOhXsxxTzbrzFujiF7LjEiC7qlOVZwH2Vu/YkbPZvxpMsGHNSEMC2sKgFFv19RYqN0UGdqBfFQUxtWH6JFcQ4MkIEkzI8WAro1LjvtvQRHlzyCGBZyinSw2KduOSYWD3ePngFGORnFb7UPBTdKzFFKFAYXqsAHuqbAWqm3W7jDWjPgNKBTv6elpi4Q1uiiJ+9mtjllUHvbM0TggBACs9MIJ/Rk0bLO+F6OwyJvlI8esF9+QpXwM+VU4gwl/01zDcw3LU6QFf3hubIl3ReAN4FTyJnn6ViXs5jNml30VI1RbENbVcE+X61Co+yo+c06LTZL5ZXEegGTZl1gAeKuXCU+8tTfSMm/sFUTW7sferOf8gW04rFETPG5KLAWFzbc9rgCQ394x4KwS9JNkfFm0EgTvBnQjYbOlcm6gJ361AC2oLBKq9yK2ERiImEn2wDlfkOSHnX3KwYY7GRVB9g3ASVtZrcZnJHsihFUbQesx2oYBDnt+33ndelbcz6oziPXcJ9hwUDKGqGpsV08DQxwh+3ka851O3rMuyCrqi3HT7S+YN+NsqVxeoSqtoPkicA1AwmOoJWCAA8HwZD8GxfBd0o27PAtugYLVgl5jalFBtA20PM0PpmK6lihLHGBgd5L/s1Evk1pULfginQ+ObZrM3q+Pv+1YE9zLt6wPrjtQI=';const _IH='250f94111e9546bed00dc779296b13792fe9fe4367fed9faf8890602a23dcb06';let _src;

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
