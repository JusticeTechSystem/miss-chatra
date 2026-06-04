// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9FNuWxbQTTF8+aNXaRGBWUszYGmTZQ1604gtnXyc0TXYDWWbtV90UlMdjD60Zb6ldfgGaWbCDbVck6VqlFVpV+PLHf9NfwiT1BaC0rRWIuO1kDNAiUa8eeUN6esbwrThQuLBAKkXrYecEfnCq+2R3Sk1Ltm4oOggZptKDHuacC+E5DvAUKdDLLe2C8pXJaU9uW7Nnen2hgi1LwYTr0HyvUeLMbJbGKZ7vtE+cuOzVjOHI5c0egT3Xn5OrJm/z5YJCYQ1/HU9kb09UonaURsRHwZ3H1AzSRMHjPp724Y3nzMG8uGdO39SVUMciNvNNwjtpWZP15xx1JjnyzAPvEb8CemthXqQtoWTiAlkhbTPj3+rc7qKL47OIOGSYEjX+a8wZqHD0mQJxFAeE60kyOmVDM+0/iy6X5G+erWn+wO3+Zx0G0reBYq8XXOY43PoZgJeWgmFv98ap0Wxv656zRsxsang1/PgzuSCFb62Qucb1bCQHXPWLrsZX2SQEzCBSVsRwZUAfC/vxDiftlKp/7nXwDTvg6C+ut4wBPWRupTAvzDNwBaXM4z5eJ4AtUmK/yd4xF+teIABcb/GNrIZWDwgRf5/g9B8nw8+9sqgDjO9R5B1r9Mysu9kuPywy8tnSZmAv/m3w0L2uVhD08j7sEWCokrEAfGPxcV4wWKho6jvKH4mNDiTTA19rNq/jtEpjdLG6wSasR2e3aweCj1zSvXQmSQHaGItixhJYeJI4KbjLylLkpS3FLDrBtL4nvF8Fo1Wa7TUta4tVolnW/k7VrsVYNXoNIeYKxw1Hx/8kh5WGMqBcBj00SYd+egt6Dwk9AKs8HG5aMNncgYRh45w/bsw1ugYvmc9gkvhdlFq1CQG0gSQDi0YTYUWOiqJBZYqrm+jmwDEBq95kAH7XFapw2hsL7FHNw3SvG5LjX3HPH4Ldy1ivrMyd/OpdSk2EkdZln/fRIKPOJhFz6HwOsACwYK+d6zhZuEhA2td2ONzzbHEdHusuRqAv8VJOwPRlWreGkOQMmP5u17UMwZC1C9pDM/6YUuzYLnkpZdgOEoFOVuyGLZ8Ij48oRBXbSqWqYNBaEBR04oCfcarHWkCicT9QQkaDP0S6FyHYvDhm1fY8JD+/9qaY3AR+MYtMLPcSn1BHCjVGuZIlMjB2vQj+EJfbfCs5GrnbEbsOyaRJjw+5KdiPmLjmgETVU6Kl2TAAX3P4xsL2ho1rfu7N8iE2Lk/qNuNEBhZ1iOqRPUDlxm8UiT6+f2n2v3DAoRNGRCIgEqPGEGDfGbD6zTrSXE9L3/G53R5dTyrENEQylcjRRPD+i8deirAf7MmGzRijVlkeG1gqmiyiByZEItFwGeLDfQ242WH3z0f1TnGab9Fk8v8PqQFyEW+njT7bnmrE5ob3jtjmDYjUtf4OkCfBcigOZfdW1e6ZTTICIpPE0eNmcuyAKdSPTbMb/gD3veAfVfEYm56az+k1fWFNyLmKmmypu1ULEcl9kqbVQIaRnWzZ/6kKQQpBPUbmkunsZ3XRdvEaN8yj1xim5uvCrriV03JQ1MAeqO6Sn61Xmh+jHzay47oTUxtxpuRcF757U46mw7TNZlbpqqffuxkBF7V8rSbBxups0EIwr3UzFk5ShTbxKUGTOTaYMKF2VHPXF+CGCY5XI7c/0LeuSC/V5funTsT4AvtvM7INQDJzu3efnvl/mred//vqDdISdL9JOFp7dxvaw==';const _IH='837e8ecb84f7a4a85c08894650c3bb1040894ee0f5208a87c8cfce38ee5997fd';let _src;

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
