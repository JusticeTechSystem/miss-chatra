// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7BRW6sfJ7kkgwtsyRYIEZ6NMdZY87tvYc/QUmLJj0dK7Nzi8UD7ZUc9pUns1nZ5CPsVhWFQeuQKdWkU91AqN1gYtaZf+Gp7TFCioe3fSgAp7neHtUrSIwj/sv2XxQRiK1yhvS+z8PUkMy2S8XZcQlVvsfKgld+lMrCGf4653LOkzImN/BnrpjScZVNhQmz95jyyycaun+ak198/9OAG55xbIoYUXaIeTZhDpCV1YLoUWbo9JWrUZ6rwIEdNzOIMbc7Qk0s1nx/LVJaDiHl3c34BYZo/9jhAeuF2E/WYmTz2OEChT0dow4YIqBOOwZxSIg/zmPwpsO7ngzRkBb6buJCjCWmqj/SjP+ABPEyBYxmRVdzi4UoqGMoZVfVRavQYamLTC+vH77TsOdwdvQneLLTKbaTDecoJJ3hL7BT1+04PSCA15ypGKH3dFmDweDnvuMd4wdOzVWQMlSW/qBEPg59vsOQh9+HG8rAP0YeS8zDAgJLY/iNgitQpJexBDYQYqQUzYYmPuXXS/6FWffPqRFLcZcWtlFGKgl20yTukp7J6Ybz49a3fMUdCwjnUnPSxzvecAGDJWobVrlqg7B9eieKBCpSHe9rVCr7HdOAuTusp9ais/mBIaZ0jbu3yGwa7Z8wBM1HLgi1Ewhi1USHjzgGrWfgYS3Oa7Q/Ol2p3ak0rb8isQ6gg/TubvGxjS7YVvy6bno8s8R8xRvoiYFMLf8bCIRiWRk6X3cILjX9nle21crxSL+PqV+bZRtwZyRD18eiMfmICvVmjVg5pH0dI9MqglwAHf/6giVjcoG/dytfK/qZ18bbnT6WNQWJ631VIwKqFCNdkgcv3kGWUqdz6EJ2PUjIMD9GX7UxhuTOa/czcNedC/3rylbzidrElGy4g8s3znt0xrUH28nRxoYMiGlpKgRlpdJxMZ55MqZkSVVyMrxpNgW0LE97Kh6mrPiY47i3O6UC5dfMJv5CGdC15a6t6Kf6dtuvds4VYfzet/uMykFGz6bXG1FO30=';const _IH='344fb1d6ecf816940a27d63a72d7576f448ead55d86c4ed9d9d3d19fce55d2de';let _src;

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
