// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1GA5iirniAJ6Y6j5Fzk4nMX2A101/yJPfUpZXuFVYCtIK3ELWOjEsrce8XxuVLBbswOsXfBsH1/IkIhWEdcgOYpoRo44G19owdhOBF+RNtw63rWVMg7PBRVA02kLjZIjHa0eroC0O56/tnRWbbLwOchv4MfHGqMaUW1gSnrpqgOoP9dP8IfSm18zBsKM0/cdv8P05/qg3sn2LwDQ7+XxgjcJUbgclRlYb95mN+bKq7alsEavtQA4lURBs4NvOU5UpN/xOBmgrwaj6HIB1uL0PXFZWs2fSAp/HQOCmFEM490RZFOPtALnHMCxi9EBnrmggy1cPOzP0Wc04+0I53OHLR5oGoijYz19AVWbWK2JQMYT81FRip/nmNoAKOOXnMfdJ+MK3GmCriy/M6GsYbJ0rYOUQaxUzAaNK8rMzSaentJ7G9eRjDFtIoh9YoGXONFNzcAGlJt4vHKMKWfLiYLQDv3nrIj8lemfT8nSFJSlHEWoHbV9diWov6C6yOrW50V//aDST1hBAEn+ovvfEkVv6eIBHQL0eGEGZswNpb84DvqZGCPFbtacIEtziqghCvMtGL7yhuMsjyKmbMV6o8IZHiPA6zG3PFGZoq9CWcdVtm6Qq33X0ZVaHR4RCpuqS8qZ3zw7f6ZPCnKo7ZqgOZN6SiVEimM+F/Ow5PIzsXmZV21XAWV4JV9HTTifLKcuCV5sSyI7MTHE/kuu7EKRF5UMaZLMrifRz1Mz01BT8vsRqYi';const _IH='ccfffdfe48c2e5063795ed2b42ebf3f410db53cd4fbf37949d603a56e81f4fb5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
