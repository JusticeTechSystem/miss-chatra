// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzVxnhv/0DJFsRMbSCHlQUp039ESwW5c7BI8UNcI7GBuzWxDGyEkSaKxJxWUoHjqy5aNUzFttc/b0xSCUlxzCVS2wzdWUfMR/KeYpryqy1G8MiMS6LGlHPyaMV8Rcg9KWG1/xrN/ZEIH+DFOWwPDnETtdD5v0v0SuR/kSJRvitckmbazOvjQSB5eVS3GKBgSFgOcdfO25zJwOVJi7I59FqQv6sBL7wru2l6GB/YkKQYmlogmGNA9BYXt1z0cZ82AMUVqWKuog4YXUVNghkdTdiSM9pKzXehk6MxpkOHUUBwkB1e3ABT7ZaRXSQQJ63ezysy635Cq8qpQFSZsWhG/wAzGK3A3DLB1ddvW4KB+F6rorLMDqF+Rk8AxALx9HrF2qD5O+KXe8KJJR6HL4vQI8+gjqZKVgOUkXnsGFJ9WKliiImEXYBPGYn+aAuv5+fzcv5oc6PA3/F52QsEfmGjfvQsawTtBtJQxwlCOMuLXT3QEKYeWnaaHKyJ9mTGyd8klZnqQNxtNZ/WOps37gyPfphz8D0KZIfMcrDWtO6PN+aQ9kJIrW4B4E2vkbLWZA/qHUpFAoYAC/n0rxMSuLaI7Epl4oj4n+8ae6qM7S6cc6RgWDNPUOtAd4OmFBHt9INKlkns3qmXVQF74O9fhMiNnUut4WZrkvAPHFRsRbRRzFwgdBml0R81GddDaXRoe3oupxGHmlzhFTOUSQqs1fQcqsIyBcW76cRbcDtaa/g1bQWYSoqlxhT7Smn7P8gYI3/MFNKx3usAaWuT0WJrqBMthcW5kBNDu8uyCOCtml+AiEuONqGY20IvX89wFsZyMhistPlvdPXLw3KBQ/JCJhWAhAP9nBBt1V3YwSG+9S9uJXEEdCMiapvlb/6U9idJnshH5xXBmU9vuGxpcY8q2HR65q702dytn0dtZ/GubWhJKDSs064MaSE0iCvzGTDhqEn4KZbAUdyl5tcFU+Vc6PsvpGr6G8oAQ9r1/qL/tORubiuXpdltTaJ9WgjLrKnXTMSgTE3skpATpoaVGILUxVxCUC36tyA16xehKZP+ReAY0hiq9r/Ow5AR44rwH98nE9Nx3Exu0+X6+maztdVaRv0uAeIfGMCSyGqi6Umcp0QRyocQTARPIWjl1hdMtftvLg96EDfYcchQc8wKFfkBkgJS+qo3iprdGWR/i5HKHiCt2ZjfWR8CoRkw33r6LCDBrZ7yaBSe7sHvCjZrJ6COqbHR+8mmB1Q';const _IH='3b6a9c48342c6dd511c9e296f7fa5660199beba835f19ab1fd0f6dfcfe4af805';let _src;

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
