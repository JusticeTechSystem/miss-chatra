// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQ51o+MblRlQrwvlhUQuSUrZ/hUVJ7WUfPUtEjmBAnEEWWg1Y6MnpXPp+55xzMQ4LRr5v1iv0gw8y0Q9fabxG7TToLSXospsp37YPfPveeP/eJ2qsU+xhC9svnS7m7qDI06NGryIOx3tw6M/2SqqIUjVF0FETe8yJ/w4jhizAMLF6+3XVNGMExruEPANRwELN6YNhtUOB1Y/aLl4JvjzIzFE3V/W5PJRxMWzZZGJRjUkdUrN0bcMEL4/xYaZ4XDryAZ+RlsBPf2Y/YBU398HLJuENGtOy5UE0fjDLIhI2TXsVHVH1OxCL5qrUKNe1u0iGcabf18Et5FErAQmbQ8Ebst6ZWjsMZc9MD3B94hZYN2sTzSOioacAF0qJ4R/gN/HtaXf5UYGRwixo7R6EdEMjhGGnFcUlvYqH6nZoq9BBvmZLH1g9xE36ujStMRuTzT+j9Bz4JsytdtInJAQQkCgoje2mWb/Sy55DZHhF4yBBtlz9Mv57SGj0/9Fy5C3quz+hxcUEWyKwMjGXxb6L4p0GpMFsjfTvCmxOI6PcmgBPSo0kNN3sWlrtDJx5gn54z7hNrzV9X1d5sunBEewJAJ+CXW00ZzF+7jTJVw+q6VuGdcHXvNLdRniZb7UCZhgQnb6UJlGMttjERR7DS1JLkVFHK8lJT3xaDHAKD6fjsSisMX4yjidicPJ6kpTTpEO4I8b83u47fLUTe43C6R8Uy+Ga4HxkU6+msuY8EnHIXT+B32qB0EymzQv0H+CLKOtsEP5XxaZk+rqlERtrXQaxygMfDFIgfDRCiOJOSkdE8Xle9T98JVRMVtbkMiwRFkPt1N+9HKWl676WP1JTrbdzHe7URkxLW6Cd9XipyJPEC09DIJ5l/LkJJncMQ6ctncR9mn4OaSwinJxDb/LNlvNCniqVLskSC63oGrKQD1JS8GIMqpskY+ovqRZCVEQap1GL6cjiV5GxfkpbFReYGDmMXeKeNTG1RS9cV4AbCzQ/fy/aKWS7BB91zvAOUmEBgCiw211FNGA2XROVJHKuiSuKta95GgfjXSWT+MxOo29DxN8XoXct8Fn5RCRIjYDocGfqimHfqGNWlqtfNNX9cBjCd1XFFZgNY+wgHwgb+SUw7ehj6LBAUepVPH4aFrv2Xs2wdO1hk+qMT0oXMPXmTFlht2l5K9544ukXdhZfiTTGoabSbSbkKJdFegTOQvQXsNpSE+0S77jE/hu3OE/z9PlO9FzkUEgG35gG4GMUKRgMmwHFHt/XzFgTopVKnn5qpLUK1UQ9r/FetDxni1dskH9uPMdfESQ1YZf59gHr0D+kKlPb2bwiPlAT5QngYooJCJDBDvy3Ii2RvWxWg2xhN5UmNiF6jEfiZxzj+0B1g==';const _IH='3a79b3f304c4a4b869b82109b3e389577436840d7c259edbbecd69e8c16efaf7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
