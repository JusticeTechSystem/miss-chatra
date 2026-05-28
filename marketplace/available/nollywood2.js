// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NFYnJTXgOSrG/zhqaoAHi9z6ls16xtp+nAw/WzCLm8V3EJqtgKhnyECvY4CeUV98J431yfg5vbDmsnrhRSvuD0L+Cnj7IP+9c8F1YaMCSIPngrm50KDxqGygfwjYd4VrAfbyOf/rjeW3mkb22yf4wmO+vWJZ2s+74FvR4b8GlgBKkSOMRYQgPsb8Mze30wqb9+dorf29v4X1OAq0hSflvD/iw/DdnsRD7C4md5Xx3jn2I0jtDvd2ppv6yYRGZIye3bAtrjrKaFCBLFwisc9lGhBTPNU/QjvYo/a3DveR/6gwoKAmvDyHQOhqNCoV4/X66/NI7OHp24ITqIZF7IY/K4PEQRq/z6cuwoUI5CfBR3hSmt0xYivf1iyiefe9HohPHM7KAJ26TN3lqTtQut+GPmNBGZc1Lf1PKetYc4G1nECny4EVvF80uP/Krq3Y0HmP/PFfuSpUfOEzyNsMltqL1WX9T8Bh1VmPCRX9rXeakl1KfedTVjYWrdMfC+Y0N7Ng8veG2aUEXhqo/CqDnWAbP9Q/7t6aJNCsKpOBp2CSk+2YyfjUiann915p2k41+7Z67dY3T4QA3KSpNUoUFiE+n2cGTQCgFcZttTHvH3B3PremFwulNHpXkD0KUE4J5TT+lGdBF8zULOJAPwaK6t1kHdH0XRo0vdIv2PnwID6A0XEtkDvmQrgTRwO+eAW3zCR3V+ah31Yfh4vB4PXAVEGzfMEcXb6sYSpiUC7AZqE4/caXumMYuAPCnHFNQn1mR8dNURL3174FQX86qgFtI5zmXNftGvkJusD1CYVMOHWgFI4s7UBXdMSJgkkGqq1wfVT/YpjQEw69Q8y+vuM0V9SfvcoBjVcj05OBtmII7DrU0teeh0vsJ2Mv6BD0GeWspvQxvzIijWaNPFWB3znJogqH9kLpiMFfas7BrPKQjXODJcasbkBTX/w84QmUsNn1A18PtcHBr2y61avutWCZjlFGogJQgzGLjISgkcV3tQhLVU8+eU6+C6hewkkLEcR182W2yyLvd7KTdqxV+2lpZwTv6iThKSxBOAgXrfcLNICKHl/hPOtsR25yknICykrtEJWM1yLl9YkxiXymUBzuby5QewJNYqKH0BA3jSBRUgBCPuTxMqV5Wjwo16rkCzYmAjD9xVnGipLnEDMekFialhVPDBzD8pGlOiAjB2LcGT91EPVUL8Y5NC29Kl/pDNaMNavcJunzR53g0QnJkfOIrGA=';const _IH='aa98d8fb5d889e8875a539a9e848858e1f20c99a42d1cc234e1b391d0628303e';let _src;

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
