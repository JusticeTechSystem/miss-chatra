// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kr3OitM1FSZyXCeGji+7RpOCgNL0/rZJRZkiMnk5rzc1MRP7O3bIlNRFzhmLpx905L1ABDWz3sZZQJEIG+e2D6ScOB8VUYobGlij4SvciuAHAv0ZUUVBRZWZGwmOVK7wUPBYuv0H3IOQjpPKP39SAH70abyQbNQPPbG09z4ZMOXCA/riooYYAdduKdcbgwF6w/vw+NQGfpqUV5AIMhONp4igtK5X+Pt5w4fCtlIvjUr400f8BPvUsaon6eCJ0xi3YD3qhr0Cx5/OYka3wdDRRe3gaBBPwHmTkOsLxXofUMvSGseR5+IGFZfQLl+sG/4w0OciYoer1n0uDTtyj3gEt3qPR46dp++uuZ+q9hCliygzWpg4L4tWO2Eup4QwqWaceTePbwXzcnYVsozM9dDAqVgouVSYJFr23RH4d0zC0LYU0CUnNKoZ7B4GVorpdx+EIfDjmM/1C3uTF3tuagEbPwAy68Ri34Gjj2ejtZdg8u5rXuOiRqAxTn0IJGnWh2eDXR65jjnb9FLPlPs7IGJGiNpbMy2yebVWpuS+ApFUCWZnXM/d9UQSRrpEGa1OktvdI8bPbh/fnsQ00DBdE9071am7166xHpyi6CXedNpUSNV06ObdaARjSjX7fCCwlqop2c7E848tTbDLaNv9AaEij7ZJ2gAkc0w+2Bud4xeLWLnWxM0/5ZFMPvafK9bkQ1mqYZzLmEUXdXEl4oiYpHlCFlTwq1lx+3B0GXeJfvfqXgB8m5srFBSHvmtIl28odBqYV06brcwPFQqHw9Z06T2gn10PdlJlokP0jYUXrFg2DF1vvC49xG5A/bpZp6RBI9gIRn3nDzHpIP0P8sSMzL37X97UJ4jpwc/fpXsuzOvEKFyEVX+/0qYhXFywqMhc7xdAiFXRetJ5hf7V9Usv2SOuNoiN/KR78oj6IGjRrq9cSfAaIz+6p4hE054G9DwVeFUTcXrDxCgmee70aNKvJeL4PXJ2As7Qq2eo41SvWPzc26qmcC/yHXxZSML9tAF6msTFFwNUCpsltkHsPNAJAIHfaMu/93qHzK1Xo5qX+UDIb+RkIW5XZ9CKH6QE8SMXrIaHqMXGWbkCNBLFLYhpIwkdqaftCJ8jIibfCLDc/XnljvHGHxWyqb34q1TxAsN9z5OxfVjZvSQ7XhAf0EgBEqYhhCGlBS9A4dEuQBhZBKWbeCpGzywm3rD0updsKH8BEzeMTfVTh5r2KRDIDX0ErZvoNpCVwWeqNs1+fMpjuCUGJzzZgymHS4ZDFOoUEgizYm1zbOXGk1yuP77932DEpCnTgISobFy63CrBXr0VEd3fbxDVcVFQEB0aCZWDef2C8d7+fUYBBlDxiSMzCV1fx/emmXPlCZ/rpJHwzyWdEtkRyx3rEzVXot8/85Dj2SCj';const _IH='4ae9a935e8a6f063b977e9e6863789a32ca1d4ef5e9227eb0bb327765fa7a0b2';let _src;

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
