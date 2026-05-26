// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJJpBq5qQd0IjYDdYBDrN4qYmRscSMyWtl3XEW4uJV/xPF8Pdo6UC5OVWukXXD4b6H7QWd21Nb2tGrX/usse0ehE+qNdOk+vl4aTcuAp28uY0yVHsjHK/1AMNF6mns4HPjZeBaPXIdZmW/3E119FZGc9nvw2cDO2YoQ8iOEE0t+0vnhXGmLTCMZ2GaNeTbfkryFL9tQTYFsFjLAf4kHKlFxjlZXB0+flTC0BK7v52jnU88YwnneyWG90tM+b43ShuJFQQAkVmXoheRySnvkQ5uECOaBSc24Q4WIVRRVhO/bmzx93hpuiyW3nXp2t0QgyuLKJweZhSjjoyvNDRz1vfz8yncFH1CWUGOm8VWYrX1XrEYUYinKkCalfvyTyK3Cydt3zNstBH/+pWRgkD6ccI4ueuqt0pIj5OoR6dqjBdk6HW5ehsP4pdticooRCVZFPgQAtQuq57mDbqwYGG+Hrm/FCmFDv9ik1lIXJLL2u8O/GvdLAuGOgcBOx3J3e3xkKwEc39tYAkv7BX4HeavZxkwSYGySf9404t9fqFXfJHmy50aIW31iaYl5jU3tzIgog2OuNVZFAfQhfy1dYa15r+pV1Vtx4u5anICuWONgbtCmtZZ5Oe2ubNeM7IggEge/oCuMgt6eD++sGJPWb16JaVDLvUz6geLtQRtAekzKE7h+L+ljCdUcF1l0rvlC9x5mTtTKC9OL9FgSjuX79IsjzinLI+aun0RbNm7gaxvtqmfYnNoo=';const _IH='73b0e71a29cdc1ff545092944707489a19ba25de079569b43ecd15113c81928c';let _src;

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
