// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='swJQy0oQ9dohNxOSbaXZ3ImhgGn1kv6MGPWkKGLKUfemFXeD5PPDVE973tcMu2/yZv1mmfaQFAKx1M2WbXzj4Xk86JtOJ9JSH5LuavHdhUB8hv3VPkHvl6j2MJLLyPUxQI1td6pAO7sgbqEgB1VRYCSRJ3Qclm4V+ygI+cpK2WtGP0eo4fK2k4BfWmVd5gR1oazdCBVpHGPoAwsz1+F6Ib71GTdDd+9mBo092AuymGk1XY3evX0sXIpiap5X3AVD4161DzYcxM6zfF0nH8U/oA9q0Oeb86Xgp430b9A5VQQEsX5g4KV0fn6Nx4q8gCQ5FTdsKx7gHTqBBFrWmCgPg/TPn9ipixMBPgVM0SXYfQrtggm1j39AGLh8QYFOV0hNshZfteeTraiDlbwI+05FSgwzzkAfn2/LFiFjbG04lLivaQV9sMtO0RyMDFxubv4T1nD19Di6dOgkJ7D5YzNcq1ZlwG251Nd6JNRyZte1co9/xSTW6DZEdR+jIda5CKj0hge/n8f7bsn7qqIRuQTH0Zaaj7e+I2uDztkr3O0MrXB+1spQnrgwfO/qMO/VaZSsHPSuWInkiQUoKBGdSZadNju5Qbayzw/HllyF1UIdXk7zO3uf+oLraJcRc0EZyFJK0mflgMmAl0A24/HpFkulBUuZYc8isUX1kEN+PBAbQ1J3Usfh/LLyJJ72Mqlik9abkHcH1VN92f0vC3Drc/ycmUgeGLOBvCs+yYQYjhzCG56LQUpvFMIuLn5C+n8C3aSbQhX9v5NCnDK2F7emNC0JyD5XjWhzMi69DDZU3ZFuYSPZGfGrG+2+VGQ9sQyL0ntqruEyNu7GAutoBkrVy4sQcLDY7muMnqNKwM8FK5dBQputqrW7HgbCJMnW+Slt37cED8xvGZBe+PZSfIhof/YdV8RcEDpvD8y2vnMy2AjvtDYVRayHRNiROmH//wyReEXcNBIF+NVm8UPt4aPHwgGwVvVWHdpDr8VloJG3vHhXrNqiNjzdwmZ6m+cubllL7B3X90yXn5D1XG1VDGs6eMEbJ9dZ/WwFRendMGdRXa7QBeHlcytnBTOiM1aEZnR/54PCFWBR8UJmUesUAtbZ+EmHqTQGS0OUPCESsvzxEPefua+gPhVgPc1LrkOPl7wCZt2JzDRZeO1ziSja5pELiIrJV21rqy5ETCvpvMMknjgqsRpfg2gDiQaP/mofJHay/WaUslLaeIwSxUomGI21a7GoauPqXU8H17/3NCuIIT7VjjoFu9FBN11VsLI1hUCB2I2fO15GpLHfWXYMzjpLfU4BZsh2oQzKyvbwfKqzmuqIiP1CzO1ArYXFJjT2gw0/NrjjQHPPAlDK7iyNI0BoNuf59Hu9KRf0Cl4IlrSsBAzaX+zcXDrRWTEDZl5/kCZSI2Rbs+l9KJlw0y9IE8NUejdBmtmSy4KXlOPeIVNWrIWbxqB4dkVqMX/JCnorP1De47s7H8uWnuLt1DZKSBnLR1W+D4jVLTu+RTyaN/4v1ZHZDV/MluKFYH1nuUcPW3Cht0CFLhMr0ZZRWPjnAslNetNd3V7iefyIQKWIFkEVJsfEMxmc9YSsmn+Oi42hBlOO1XkxDSah89Dt';const _IH='ffbcc01b81e1bd9a24d0170853619eaadaaa59eebefa1b1eee2c5b71814294cf';let _src;

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
