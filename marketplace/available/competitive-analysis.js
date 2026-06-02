// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orWIUtDp2OLGJIUEsdRbCj+rNbd+6VgrKp5c8UhgwgCm0oyHq5EV2ji73KuCLZyn3QeHy/xdr8LKlu2D3d/1Y20N7Js3k0kU5VeTHKFATru/uVg97BDDpUVZ1wroZjR+c74YevVB+ECGmu7D+7NwuJrwhLRIaMszRxZbNTQCyIHeNiHWJtibP7lnuVSbmu1mSWHMUVfUeARI7phJ2H2wsOFkk4DwFf7UCtHd88kLF/p1477A3rvCf8tYCeXaZ9BBuBnKO7VPwz22uw/XC/UlOCZdue3WR4126W97LmJ3gC/zie1CdAkNQ90rhRS/Oqi78lILOAKgll4sRLHrCfC5HKzvSCgg/bobhwCvWy4EMOPPAKCtomJK+hgNXKd8pmowcCT5GkhRXFxCPd1m/NMuy3ldPAmgJay+ANdWjrhaKmUEV+WOaTDSaOBCL+p41Tu9b9tiIdvJXtVSyVpORh1r9E5Ym85PnkTCcuM/CxbIvLrBIWC5PbKJmc7S/j8ZRvNUImho0sLkfzP0A1wKb8wom8Knqv8zksI6mnHKczssMbRiq/DwdBqB4QoPd5HJBGiKExFyNnr/2T+AYZzFZ3Wt+EFY8lP4Ezq+7yB6Ax5H9yTPNBrSp15Y/4Aq/nUgzSZMn60yGHkRb956j/CeXWwoaSEewcMXFDhwi/wlIxJbBrtLthwz+kVZ0XB+KILuBJLIc6JTdxHDwe899mhC3RBO7IJd1g6eYfEslSqErToKERv60IYH4cbYx9WFod7ezi8zLN1zdVtCZDfG7f7GdlOGc+54EUEAHqQfwDHSXPwy5u7SasqVRGXmmo9sYvC1xoJ2GHmthO9qh7vl4wAdfIThZMPq9BNf5zwt/L5cwlBpZ/pX9UJwMtXGbk3dppk1d1uQb4VETZf5ao6cAUa0Iapxviq0jI7WVF/W5sz4xdOrYL8k5SyjWDLiYePPa8pJbI0j3/l11/PXtRAFdwqWSPv4BMtt0kyYvRgExMHdCfERFID2jZj45FLK4gn7tFw9CYKmAsUS3n6BCZsYxxbEug+D1d/YCUbHdv9O0w8rF1cjuGx5acTuxrsq19IdrrByOejZtpIuMVKbQmq2LFPG+50heNS9jlXSndl/j7q3RPyvDGpNkFFM3jP63/fedP5pjCx4CJlpi6/yicB3OLDFmXummrlDWjhrERgVxgIFdo7GpCTYo1wjHwi+0OK8uFGz+Gvrp2VtUFDGwLwX+QZqUpaNCtCUjWpS2Xudv/GSP7U9gpTkLGZTQi0HYa2rfmXDHIjkCEXgc6+hCFZnBn2DYqCRxqSARRiNHQKH9b+wefDSJiWh0Uh7lFtoeaVbF8H2etmgUSNzptdzTeeYfTKlvz8vzV74uLREJddcomp/yyeJ3oJTq1SZDk824FRgmrxI3/alhV7FQHohvHl0afqDS5duIuc/lSi1iRSCUDEXxzScSvR7ljmIn+o2wRdjRSHQVci+18eSvJjXErg/NyIEEgU80ZB8iefUQuDc6LB3zQDqZJOIp5PDRXnKKNwL4KTf85r81dbVgU/A0JcYnq54NGTyj1d52O/4ieno39no/stvX/q0vCuV5Kot9foFuH8YREoxf3sNfG3c6Ftva9N8AODyNwWeFhTRIfBLsNzQ8FFZ/XyasTqh0MMwpYpjpmcXX68ketq6/KGzuzsPVXSOuERauxJFLn30Frd73nLXunxHnwRxi3TdI4uym5UEbjn1/G9RyCFLOe/wmdLrwkCAdFj0C3K+FNIXQy2RIasIpu099uV361OSCSIGYw==';const _IH='41ed7c37924bf8e4033bdb2c92a2ad3079e6a895179d7df66eafb57194770b5d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
