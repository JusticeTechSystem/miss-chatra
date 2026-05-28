// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YB3GMYDqFHYEmAB4R7p1gNCq701j5jFslwuy4Ohprg/YYmoO6NQeGETVwL5dMO+CH1lbH6Y1rhY2yW+i17UNHcsijDkwu0V6iuEuASB3er3aNCs/GwgH3IvI11Xmg1UwEWUxBGMLS1IafhEZ4acmv6aeVHosgnPvvktTjrvJ+uqfb0jbfhpxlDoAvA5GRNFFXZJ9GMMaPI9r8qwpUCN2NMeDYeUhE6tiai41MFrDoOoePFqjir3joFyk38Jl/+n/+0T/znv4imbsPdyTIQnHD8s0MwCiJ+/h2liLTCT3nQpwzTERhsKPd8naNCBZaTySf+sKXfF40AzjJrz1qtvVgsVnYgr6SfQ+sJq3FAuJSdGeaRndLbE2/QOABDdJA5IypsrS5JK/Rrj+VHJ/04teyGBLfqgYzViZhaq0r4HTn6YyJ0weeShIgK8gVntAsH2ZQDn++RjLC0groRuf2/EPM5/n08sj4ma20K2/qEKjkSzbfg2BpD/nCLpq0w915K9ov1P9TUmU334zx6BE/MK8h+Yiga5XAkcCMJIDiNdyY0RRN3VZ00deM+X2K1LrFv1Tdl27p1BvRdLymW4UeFkOC05UNJv4HRxrPDDw4dV/74MNiENj98yuQwk5WjKtDeQS3lvGxbstaSHUdlTT0PZnW4/ZvoKskiIaCYQXZjW7b0v/Xt/K6cYmkC0jQurQ3sUOuoYBbajHvgpSPz4/1NBFetNZnZLJ/LvtiXL/3JvSZaKVWs525rN0p9BEx7FRYBPXJ3Lydhuf7bpI3V4G783jpuqBeTdr6ecxCyRxvErQL6Yy85RYz0h0FMlxJ8G9KJHTll89dSo8a2bgX22groJpB+CCDEjaKwYzwjTYsNVXmHg5AJUYYRjDi66CKkoK72+MU6mdb+wHvuBR1rDJ9dMGnndPHErT223rqihMQQy07mRTO51rCtbDANTFESLJkkPgbUn6qtZYEM7283D9NYlShENg266OEer6K27DoUvHdcn0z2i36CALs57w9IGM972tqmh7wxjQS1Ngu7GAJLtUkWMDCNvu3grHEhaWRx79sAPbkjcgzyxJlvPB0eqXWKrGzTrzeJk7/PNYmjIaVO1udN16qPCn+6owv40S3ZZVEPpdXzFWb57wUcxR8T6I7Xiw+R+vpdipXSB26yk1unlY8+Zk3AcrXf3D2SoHKOIPxth5stNnysdX5ZpbVLzMtcn10ATk1/aYoFQnRyoYNQWCS0jcMKkvOk6LzDkj756HsRx1ZjfLMqQhlXiGj6cWgCf3T41ll3s8a0GWuYo3FB+POtVBNe5rdms1/UAbzvOYHoGMiQBhgyTaPpXgP6R7Ew0kM/RBK7tdGIEmog==';const _IH='a5f3d0b4a1d92a30523871d3f09b2d1278b078eadedf39bb6a0f34b0d8d2d82d';let _src;

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
