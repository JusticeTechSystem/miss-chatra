// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Md63oKPpCkir1pKvLXpimsctx5zm1w7+0MHKp9d1mgGpLdFBsDEeiQmx8ovC3NXCKh8DG1Pe+LbtSTfPxTaQYivJoM8HNgmkIu7moFKhLZOXx/pT3+Q74QAFFPY/ZHIlIp4FMgYO9YrmgV212aMVEcTqCuXm0NS5GMoFO2OLfnh5VTFoHZQnSZQfjRPSweG0vOTpyZv07KP9CcMMdolw7xeeSZewMDFMoiaig0oUpunR4ql/iGr1JXI/wuf4il/KcDm9lHvLwpE/oc6XHPVGn7w7y9qnpb26A0QLkd1acI5i5VpxA8e3yxXYkgL+KmAgkuA27vSXpF4rq98RSAueOzXqJrS6mjW4rKQEjs3v3N3lVP3/bmofSXrf7wlqlhT4gKE7ZwzmGmsD2a4zcM0SfpBr2IpyL1TwtnZ7bbNkcX3OVG2iYz3G9+AqP0XJrEgYY9ZoX7nrbZm6xJURm+u9G+65xQ8zOuoCJNu6M8r0hekRrEMBwB2XmoFExut9Tm2oRPuT8sbaQ9tkaz9oaRkwSd0hgQL4oxYMkjkeBR0VO9f2Y4HrIbitBmC+vJM/qC8je4CkhOSzje23Roe40gV+nQCA/ZO8UWd/z8N1Zy39Hdlhfp9mQPqMBRJGeswZqHx8tLvSn0VSoWwiTZ/FZxQiBaBaWlXb8MAs7cruK3fZXda1FhSoN7Tle+C9wVB6BUtYzIXUIoUNn9QpsxpoZk+9J1vMkfNs2u5pMmOydDgtC/fiKZyj524Luh895sB1BhfgJbD4PH2+KFjkgvgqR2lF4YM1n/9QwdgP/Ir6V/wVxLp7lHlbKyjzM/3yAonKc6O1OynVBWyJT5gUpE0NhqAcCjNKDXZUmtYjmkPZRVRh0AvJfucGG80UCanxHvNJGm+UWovk84bqZA5ijYfHckQm6e5CLiJ8cZv63+gLFviNm/JWQgzf7aReCV9qsappbj4yeKPrn+zmcpKPX+nA37RYuWotdpx9CkKP7T7Xb6o78qT+/n/1HLtStzwG/8l2OAmhaPh4tbqm/GO2fQyWNkN2v2gai2a3c9IsuezT2ujDapIBgKxTql5MAHd0219AO11GBN56d2yrNSM+9po44vlf529rwa3GiZOwvqM7TMaXpKrJJejKhri7bMyadVokcd0WPgR8uQ0DZR/i1SVzRdBedxF+z2FSiZVN7mvzU5SXZUIfnOSe6je4QM2qa1+Z6sHAOnjOlTbG';const _IH='8167cdf3ed005187a24f8f1b5ec88f9f513541a1d8cd8adabd7650340da988a7';let _src;

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
