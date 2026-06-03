// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDUKrmgW+FzcUHvrd294FFfPgo/Mxffc5F2CUjN6UuRZAPUxH+LsDcU/kaEzh3QRdzBJfZzEx6c3aykggKd/DYHSjTDWTyVTI7sAl61CuU9TSmpvEmzqxsECseFCpbHqSNdXCLn+gaiar9XauIQ5aH+4fK8B0U9e5wiOeQinKE6JHL11HODlwJvifd9uG0ADQZ1J1mFkd3fx/6KWpmDi8eb27goGiNt77xe9Pg1lQMLRjGVEI6lOVXWUzPpJT7P6GoYdlBbOc1uPKofS/VDOquDVPPZXBK3Cern3dVn5Q/HEXD8L+fnqwuPNPJACyzdSgWIFVMOrNQ/MsLMe8Zj5xOoY4TzpEBodPRUOBMCD4N7n6TieX3duWqK7Z/HXHDDvwDdA62lsTBaQ/JUr2EtxOl3/Rmvm3v5FQPpSXZYMV3NLvRFaH9DEliWZLhD1iQiSSePWEE8Y3+AIFWHD1ztIsiCWjuNKR9unbopEJQedf3BPyr3SoUyZazpp5tUyRr38nvUpTDkC24MFJw6iOT7upVkvZTKx6Iv3JfbEPqTbq+CzZGh+8u1PMWj8Shh81ickqqZFudOGUhRr4R6vn+8+zEEowv7kjfH27cnMpE96W4BWSi2nWjBxZJBA03jsKCnbpNf9U9p/YQOrKTQbBn8Tj2y3zli+Gg4+h09KtskuvdMFzaZdvMpuDYRujaXPBimcktuskNjaYBoIzzoqe7hWzLI9Kyj5strLxij44cVFC4DPFu4SbMeJQjn1EqnbQLiYG7qNGtvp5lL/AvYXPzEXcttWvIYlSe5kPmry/gAj3yhvv2q70Fx+roNGsJHuTWKofwsSnFofHLCRiB+RO1zBojiYoQ2kmu7Ns9LpLJ2GQdMxKOtvTJ0odTSQmvrqImg17R8SrmNXDrmMLvu5Ds6qtMkWFwAlEHgwm+leWuGIeDK56EIww/Sg+kkmb4D2Alp5sGw/J3Te46tkt43mK7rJbBGNnSC6hHMQzyxTePIZlwdzx90ZAJlEvMNpkHKlvxw/0Vn8EnyBYqObUOSGNlmjKdJGu1kbh3TyEE46ORcDILEC/ezqffKzo3DpY270/VVDeSgY6xUxMSljVEwK2SNhAQlML019IxWPYA5goyYHUamClOouTqWKI1kbtib/RLy7wV0toDK9y5XYOwXUTQEviDsE+d5lM9eCqc0gf+A9iZEMB2K8ieGv1wMM/Ia2fTPSUMkEqR1NHTzejDTl2IALMD0c+DaAEC3zAJoiax+/ceBpb6f0h4Oz3wGwlTfn';const _IH='3a1f219a087acd4d67804aed0301b2aad43ee6fc6a7e809abf438339df1d0d25';let _src;

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
