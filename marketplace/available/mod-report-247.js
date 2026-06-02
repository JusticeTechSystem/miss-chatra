// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DjbJvY6yzyhIFOZxZp+alD3dx51OjQaWn3nUuT79L+14CshGnW1s645lFw9IpTBPEaxbguWvHqxEJf5OErXaHbNQRHUv9nqgFzenbtaEkMipgEmDTDrl6pCFHSH1DaT3UwSrVSn3G1mgNmL5FOLUKic+rahJHFw4HssE95zktQcxZaCCDjrKMKPbvZXrydX18YNWvPVMxF6Ae4q+hMiQL8Hzhvp7TUHNJy9oqR/7+sSCyNVJ3Qs3zNtp7o5SI2VyPaNdr34P8a9XmvzYRIoQ6DkycNMQCUJqCx9bh1io3H5mnxXOd2UFYEcbAnEDUptgd5BH+1VSGq5vdhoQv+TjF7GilTewFoHDZmU+wUIkYv7ZhotnGfDQkpffQ2Hxe9Hiwy6nd/nwZLdzgIrGhv7dxiRbV0xRNTrdAu+6+5AUB9Xa+/dq5MI+SOSGLzYY2ID2GHPOvCxqXubEHtDeNNnJeupgbC4VSUKyiXeysIDM5N10zhjFbmkJUQrtke6HRV/b60y6ZPaX6tctQNasvK8oZBqRemexCGYM2J0CUlVh8cR30HMRXITPrD07wkBGjmYfOVa+cewGAGtzEZUHef4OxIOE/dkdxp5/U6UmK8BJ+7ZYlJucxCtfrTy7dKF/VfdO9HG0c7Logyg1/dJw89eZNyasB4OtUCCfwBlg39DqTAnlM9hxcVOwQP52t4Qs7Y7zwLtXfjAYv4uD/pOLfgZjsdP7geNDDU9KY4jgUsj03LST3KgNwCROVWqAkJIdZOVB8Q+GzgQK6sRWXoOrHkqvK5a2jYuTWBDMjYlyGWgVfOgCVqBTxasKtJ5PG9zD3MTSD1J+SsEh6EXhRiaRukpheiLz2uoqA7GzCIbQME29hmRWdwb7A2wjFp0KIrThlCygmbqTVPfHIe8M8b8sp5k8J1D2YijiOCzYe0OwrlpvHyaseUtwAeUXGgy3SmsB1RWkj5lrmZSNB2G2n1i2gBx+DO2bS9TmZ4z8TzJ1YjrK5tNWmoWEl497lAlnXDBiYKJwtlOOybUe+VdQZcMSNq7ayLQQwgCrt5S2O2RgztcAC97idC9kFSq3CWRfSFHSSxJ9D8gViXCpHFb5ZQJQqGAEx+f7LSaYLrr8Lyc9z1VmSx03N6YClOJ81/PIywcQGVD5yJsvWyeZEuNtG//GcM5eA1YqBHGEYtbHt+XQP0avQso5TGSjKoM2Aohk/fpgmlRymwb2QFf3Wy+Gfna9SvlxyI3EAxFB6EaX/a6veUlTy6HIfFfuFdEgz3q/osth/OLQ71dVWxlDnYpyVyYZr459yif+B9Xy/6PGXuyH3UcLzzQNuiCY0d0mILiDWc6OI9q7wc1Yoo9hzKdMDwTk7NyR1r8rr3ZSThafwUFDk3j/3xvBPFCP3H7PoQ==';const _IH='d5975c84f60952cfceba0a2d7f9ab6261642ffadbc0eb16ee9387d5d696a7447';let _src;

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
