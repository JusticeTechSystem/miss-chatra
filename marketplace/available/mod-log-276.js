// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Xx/+Tb41hBa0texayHcLkEZyoZ2MbjMUbZNXDSZGQkA9thNUhPwnypfIC6lPcg9OnqCMo7EyWXuImzzOtuaJMe715WpYFDuktH/7hmgt+KB1Cen4t7jO8KSW8j1DtF52FgIS4bHzS+2patZc0pz4iVWp36rV+zH/TswST4QIku4+k1u4Nl9eScOs9IN22Oi01UQFkXWEFMT5cAVdiBEMSNL5Mheu/uOsBg16cEyxle6VRMBgRxPEkultDBLVDhCN6jSq0oFY/coXcOzO22ZCFpzKj3KPMpiPpdYlnn4kWZ1Prn5UUMcwP0JPY0uYiuAD17AePas/wNPHIzEX/5BINd9aTvzm5JedX86oezmqoJh8swJx+k+3CpxqCHitwo8TdjpSmHVCv/8izPvfggkwiQOZPQlcoZJKW4vTalCfP4aX+7xRP7Ub6j5HkbQmG1pocQQ2UUgo/AtI5orxAyde5iea8LuoWvTSoMxXGPVVbKOO4KS+WmMsjv+cdaf0xR4ZooF1l9W/Tv0sn5sx4QaMaGaPvKlqcyUCdyZ/CohcZf/0XkfoZJFquEzuze3UNgtQJQoRasf2WeVU1r0bJuf5rNferLKAlhcsqvkIdSTn6pSSyyfhbXTINE8+hqehW8cf94yIuPVLQmcRTzTcJL7Fqf6LVzIKcSMjIWrguuWLnaljavgcaYkVVLlwYKVNu7zrCu2b5IsN0CUwui3W5OPDIm56GHdIKFrr61H2h3yHB060TbIPMPPv8mb1RiP7FxxiW6B1z/iIODAqfRVj5CNSSGCi09KZSz1C/LnYdgJ6J3m2Dz6yJIw0+TD+SLuT4hxabSPxQXH9zRWtdMF9OeZvdU/iasm6lh68Chdcv2JUC/qHL2ZrgmHCCZx4KAau282kMeYYMdJbB+GPkPle46sXrt5K9X+B8OYLeZKeyRG8dhiz5yu7YsJNFtoNHy6S/vaOyQkR++8neB9Bcyj/arczH+/AORjiXFNBxE4i76ZCoykNTf6IsyblcsXq7JjBYiTAKPEU97JnBljgyHHhl0Dagn7obyHH366ka7mkWtFic8UtPywFdXL0vUJOj3wCrcUgf2x0FhbJlbhuSlEjRiBNyP1R8AvH0OuTBxY+tzlMaYxE9d2LsXjbwHpokRJZgwkLeIXu71+tkGQXO+fMmvMJZpDXM4Rm1F6lWLFBrKEGpqlsujazBlzVfneD1jTlpY68jdxleJXqDL+qY0tfBLqhzBwXHYTm2IduePsZ8Rx3TH2/b9m+6NEbubuiwldsQo7XmM2kSVFOpTkLo77nbXxR6eNfhesC60nRq8C2sn/Ug+HSQj1uFpnufaO9ocU7LiaxyTOx+V4XQkMaA==';const _IH='7e801880955bd40d187883a4305c1871e476567d7a3aaa332ffaa5715a2f1763';let _src;

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
