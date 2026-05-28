// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h+DN9wgQW+NqhW5A1I7jV7jmDSqFLMmk6gZXfBNCptNrTyROVNgM74m7nuyGVTwroalPYeg9FVggS+Zm3agU+6hAzZZaptGA9zlqUB6FNILhkllt2B0JDWjkxOI+4nLsra82mcLpnQwUkLiB80g6Jn2G1FFc6wKflsxhZj+bpDEoR6vUd4PY6rWYlz+ZKy6bxkToo1UkFH8xI31qQmIe088qNDV/PF/SuMCvKonuW6N3uAg5V/M0K+7DXyIUN5Oe6XhLzkvMdndyBPNUSrWI/2QSeTqh518TPEatyhPIdkpDM0oXkvab2iS6U9Cgs2VuC4bUH9Oih1a1eEXmyCK4h58YG3IpVJGyvcHe/MB2E6VFk+vpdmREhf2DLVSValInDVUQ376+1CR90IHGdHuYljXDvynfkWB8RFuiU6kU06scaTQMAQn0kQjYQMHdTutCq/OWl1oUAbBO6X5d0X7ZhdPMb9ReaDU3qMZPO2IDcAFcY52H9aLtMRSf7os5tEZeR5CGcQbRdaDYrEOMDCVz6Hu7eSbrrxHUoMorO3tt9ohue4kVAc7BdCeofvNaeFq41nIuHhl32AyIzCpyBCAng/3K8QmrRmw73qyyLv11CSZ7kGoJNwkABSNRhRTz3IIwMxFmCDYUo4EjQ61Af9uMzkXdgWWcgJx6i5Co0uttDgS8dQtqizxk5o05nfGabTXBmlOqt24wQzjsE32uHk+cjNAVtvwghiLlHiWJKZqvjMRW9RqEujK1PeGAtm7E7VctV2tjlrGgVUVhsTXBfJLCyRHCoBVPPUFNqVbgPYSgw5PhuKJCYHk8vNle+E5h5GAbeTmOyy1P9I5b52dLdJQ4YPFQiRmOUmgmM/bpIFbD0CsO2t8agnhfUKHyFMnVrLraHIPCNIibPpRikvMNyv+maclrOW7V53hOOCUya5Ze270oaSFkHtxKat0K/xjKsnJ7ytDf1gd77I0XXT9v0gM40XSlEeplFnsos4l3f7HqqTUkQ3RbBmCGZnqJxIPfOTSxCQAeAXq5jiI3Ict1a4zkaEYRA073l2wMD11JWUfXRSfdS3W0z8YO0vlplD76DozdChilym08bZRRTo1l5eiHVxDpe0EIg7ysUAWdLebwSNCYPI01Dte2NTXqwhRvTAUxGQp/a6Fy+zTCnWsl8SOw+vZT7741vSf0bpH0z7meAD5T57AOpn+mk3UJcvr9vAmZnA==';const _IH='7fb872d9cca55bf8a47274d83a03104f3022b5eaa0311a73762ab7e30b624056';let _src;

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
