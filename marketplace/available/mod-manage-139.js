// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I2CtNiRD+0TsZ+lghyV9WG9uhhcCOqmYPnaXO38d2VVeBMkPirM3Z2BMP4Tm4oVBwB9+PjVb9uqdYzIKTqmctVKR3sz74HILwUj8brqFBefkeCSzl1FQtRMl8rt6S6TcYxLp3mOBtVjIVYCSTIMNKuz4OWxsFMPfagmF/NW5NHG4lZmp2MRelc7I0ttVTTup0BSjaAbUI74wq41rcH/jYgT8rF3xMiw+6yySl0zrmT8B7MjUwd/cuInG/+M7K56UnU90Ce7xc+aezRuoAdP53BRwIgVCiYZ/shroBpGqSFBa36O+Do/tIj8YZjtAeNt7elvhK9wkB8awvKgflQ4WJj4xzMIGnjj1TKZYpZknmh8URpEscUx8R6lazEkivgsdjpLFClk2mE+hPCIT9Rl0Fsmb8TGrG5E47f5zhXQ7H4n0wp2m3MBfKZLwY8q2TW1TKnu8i03AvSbEV5xsmretrGmP/0Xxh9bjWxB+Giorm+ZURZpwjCePhOK7zcXOFTuwA5OUqmN6dOZPbHceXAQfuflCPN3keLJHhOiXWwLf2mnazmX1eBUIqnEMzqTMdmMyQrpD51/isQEqlbWKRleOV+3M14xrh9+2U5/tAMwFGCIWixgr9gmg7AdgWjYih9bGqrzcBxsam4SKQv4UELumGoDdAM0QRoeWxzjQ2g0btT+WJ7Bhdt+Qve546nQQG+5140eaY6vdSEi8TS4hGvbLV7yK1nIhQyK8eq1hPkBt2cQ5BFL8iq5EgWU9MKqfFyg0TSoEMDla8SXZ+CL4zXXHo9beKxkDKE7M1jcg2UZhV9zTDCOqQJ4ODU914JdJtjg9SWM1aX/O8sjlWFtuqENnInculiDAfTnVOL6F1kg59yb3t+9d5g5P8SqkJCRXtWcHssF6MJP6qltgUpnImUHkiPyO0COvQ/bqtUOtwsh5UnzI8RU0AygGW6arDh+lDHo05HKXQQE4DjUB+w3eU9/oHi6nQndjsVqHMMIE+I4R3RlGTgQ9bmkRQvMMmVPQ3UT0WySNyaFUD9eerSzEKpm9NYFXgm7ZODbjclOni4uRB1lZhSQRamnhKpfQZk72PWoq5GYgyLMS12749DsgVWeIfBg8ItSuAyEkuGTXwPltyvRq56rgoKd20QKpI9EA8uOKfL1/XMlFnIRn0WD0nch/dfTp7zmlZ8jrTQV2+AVf45tRJ0+7p5p430H5A2maUo3in2TLNXZHvGWDQF/XgOFausk8Ccccw0mjHnqLP/cKzZOcBGVh5NzKc1swCA/viZAVlOHWANTle/nPIfpya/1nXggh7lkXGJ/aQymB/vCAOEhX16MtCR27aBhov46kAF/EfNwBxcFmLcpheL2MeMGOeU+uqLuF/lugtj/GUOFozv6otR/vFhiJ5g==';const _IH='f5386c32f050c48b9b46222b35e2e43c897a4d8de4344aea7249fd11abfe1f36';let _src;

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
