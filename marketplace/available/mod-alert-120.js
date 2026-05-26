// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='plI1r6HnEqZIFrh56Iv43AgELO4jcAzoqiOPzaXa4AnWRPCzwjyyjD/IV0ukaQkS40Xw60THImbVd9aOIlgnK9QDoO1Etj5Bm+0u2R2rvbG6V9fnILbssS9OaYSjvEZkmH9UiHWRarK6MvYiaCY+wSzTaSM5Kx80QClE6hZHPZCgcJKuXcw/FX7XPHPcN1o/0PjdaY+7sLK7/6g4avbBgMg9gRmuOBsKTeRK9Kit+y9qkWDUAx/yDuAnwyM9palY9UpOzAIBq4zDQQhUHJcwH5TguTg/tWV1/N6Z25mNCSxESaTa105hOPxbAEY7hpe3moVtLVpGWVRTKnTynoo5c57vyzfuS+M7vdSsx03pMldB9sAu7yj5QvslL5xFdf4n3o5jtUj534V0ve5BSZfyMP/tAfdJQFuEFHmWFy2+leOGarOx+UaroWC0/HCsQKGjsTTwTQ+qnfc64K+w8BE40aoShPe3jpgI96YMdKGOEchtB8JDOiTdtiI6Afp1/n2efGD0IU4/qNCaaL1c3DEBkt05UOpDzrDNeWWBz1w/JDTrD5DFg7494WQVsn3mjC7KmNdcbhurrexoaapOLH7AAw6tnYVzmYkR0jAm3PS3sbn5rbHKQMoy2WPirnaqr33Sj0dv5dMo8H5qt8YVhcJZiVOQzKaeZz+BMEMs3ksgUK77k4bbwQASqSFp4j9RzpCFx7CWkZsjeEBvZ1NdCNLSFXAs1AGSTpxx0HQxv0OyHCno5upDoXjvcFbBN0YQbZNgY01727sb7kOuv1VAAtFNOEHuSDFUNmYoy/kh6m9uUrYxg6bWK3gH7B0M0Qxa6JVVXrK+vHdD2j5hXHGnoB1peajr3D4/pBHzVdP5Aim/H8O1guSUFc4IJ4mxJSvLfq2Oq1wYJjfIQ2mEjItrp6HXUaHlQYo6z9l9F5DNVmaRO5bfu0T9CM+p9YBDVeVFr8Q36S991o5uaOG3egL1ekdZ9c4ymZ/n0s1pMJPpUCvoOBsZnB1PywusuPm4P4KDwtHc9uCmlAPO0GlWKJlU7JONhIIaXJ51LVlvtogHntF1V9HcghGstJoYbAxfU9GENMq7WVhQPDO8db+2H+uqau4YNz0NdZ916yEHd9SnbXF8Ktfc6F+DnGBzBE5UngXKkFs3edku9X9BNPe1lVjSMJ0qXo0++Pn6Aq08RfiIyzzdubDZt962TZHn0tiN2YfmPWN6LYjI2Zn0459IjyxkTYgpGs67dR8tNyq+/q1pR9NCTU0ek1faji7O1vJS5AqwyKLkYARn6vfpOgZfnAxfUOHw9jNBPdN4z+m3A/ne6GmTcxzWvI8G4637P+o7T/IRhHE7646U6NXu8Vo9nm5FDG++fmKj42Np5qcvgBuuTGNA';const _IH='1e6e22a21cb6376a99e91e662a0c632a7f884ee1bd8dbfcdbe6bf232654d5890';let _src;

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
