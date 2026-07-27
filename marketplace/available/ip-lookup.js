// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRi3dtvIiNZcGxd9ZpvXbhtViY4KON7YQMm1gvMbhtfBk170uUBx8lK6Im7cQcBKXMB6WeKap9VwuQDY/BBQdOF/izWuHv/lGjvNAHBEWyNp19nSf2hqgJYEjmMeVFUyChI5sMiXDU9IeSGgHiMyPbkC6Vh4r4OdTIvVkBGVHREuOA5bcZpOYL5JDo5WxrPm8CDkOGV+cj/7Q1R9mc2uP7eAPs+BvWnvXhqElqC266KFM1YZNXAjAHzGVy9CBAyodCEY+Qomf99PvIZd1tRPqnp9/9bosfOeK5sbI8gcqCMA0uUT9xqaOsktWMe7rII1Ft38SQOaO0BdGdwBhirXIDtpVLYi8+1XGRJ9XE9H50jfK29BuXAsOdFQqkgBtPNiBi1fLvroLUiYFDrPAbWXgKqXy+l+Nyyg7M/QNNQbw4VMYSD75ttpzHVYH4t2GNEGwYzaeCfXA61i6hozxUn6+6bmezii6lo0eqTxHnvU6XeeUeNehqRiQzSLtoZbEhhopQyqcwQOikbwEQC0TgFOHxN4kIo2qkMgRLnEtlgUNvex7a59gPATOZjw20Vvc4lC5xC5V9X4xOsGun4WKlIaT1JBIfXkmmEQoDHa+N7FfOC9zH7dbXrsDC+yqAI7n9mWylJtGcSEkE/4O7jpoqzwB8rzvAYxPfZYBRzH8JK3c+JltZP9WnbB1udO6uPDnCKB4MGq+0+6k65gGB7qRzIwhiYkGvP9AM/4576p3H5E4904gvoKdlvpTEr9DHjUII9laYcFDiTTKQ+zaoElYoXzKs2wJVtimUDbi9d2m7NysCAPIyiCDCORDE5Vk4fgosJ78dLWs71tT7obTZil19oe/5NLLJ2Eo+XeBlltvKwP3PS0zQECcK5sra+xZ4172ratw6XcXkYE9o7GrIEV9CsPDPjymygtjltzPqtU1GxjjEv2m/irXEqiqCEizlDZtPcgrflLW6FZH0JjnTuDRVDha4B+qkmJN2uWJA4tEzBOLX9rMzjRQuo2G6EcFfaUFgDXpvOCuGLIOMfll0nDTTvhQ7LABQKQ0oCbqWVZ7H80/O37QGm2E59cqcjPCZPLYPU/MP59YLynWuZZDgpaFUxPR5/F4o4YW+nWNdmBHM7q0CnIKbnJ72CaRrgEMSmUkHP4a6WtjMirYJFi3uF1BWNqIyggvxIYUXfg6ollqqH5qOkuRukmssNTOjAw3X92A+5EPiPMTuq+f/mcZxVMNnSVn61tlISJGyKsFOEX56Yf/8HA5fQveCrCMBKRUgYC1cTruHe';const _IH='f5cc4a00b44b7917fb8d476b2929b6f6a398432f8e1a36d92bd36ec22814f4d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
