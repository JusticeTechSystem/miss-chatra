// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ73ODcXOFtXTT7ryVMcVD3Z5cZO+Bc03/97k9MBSbOfPjxZCx+5ja70KfR3rLTgZuE0aD7+0tbPVmBB0Wx+SWQfen0Z5nJl41YPV+N+Kw0L7ZtNhqzG8NS2os3+S/vCSA4uk8wwtV3XlJA59zeRctwHxXHrTSuPQmOSXVWaFKaa4kpSx+ttCkQZkSCNmHZqodBn+3EA1dd3VkcoGDaAg0nWEjDUZDK+Btl8A/Wtr9ghPLPD6348cx57FSsFJj0CV30LuYNr76fgAuz1YOH5ygnThSkSZygjDtT+52uaJjftp1nWGKW7n6hQHa507CvKowuctRMPV+joZzLhJo9uGJ6bZNI/xVTU2E2V8xwgtcEHAz0sKuPndX0GclGtP94jp07ZJ8/EBJLIYvFgJd5xXpYwR7pPsjPG3VEuBzU0r8uAE3uQHFaSGsq8Qnewmp1CP2AtrLZ5fCwUTxxDFvYmdGx6rII8No44uc7QfY7OpXEHZ1DpuSVNJn+z6VeOcY6t3ZNnxYFZXAwBBztp00GKGMRADwiy/RbrDkpjE368iAGktDsftuBMmPzjelCc1y53/u3Lhd3bef2Ox/U8Nl1RZZcLCyBTSmOWe9UEur88Qf0VYXqc02/GMoPjbWz+c5GZfKGTHoqrU+mZTrfN2MqcJ4Ygc/NSee1g6vqBmie/Q2NlTusrdsmNYyP0SbYidxzexRAhsOFm2okySBYjffM/Qw4+xwOndtN5IuwLmR9Ocg1ep2wlz8RfFlNP0tasPSS4PBfTzTcvt3qfUeumJTvWxZRwchYKQYTCJLhyTLh7YR03Xu4u0lR+xRp01NDE5KPwA0idNpDC657qQ6jUsh4T/iIFS0oQA92+83lW1+P2+A3irjMf9yp9ZSUJJ8vE/oSwaliDkft1F2JhaCAR4CIQ9vXjXGjQLpDLnTKjA4I5sAfVryeynoLwXLqfvTk/Ac7pEjDRHdNSIC0a/nkArPhi9eyNhEZ6iXUYOgYRNrtkjjH/09AK/1Q2v4ZSQWj7OYw==';const _IH='b21bc02ca982322c7c9123b5d6b62dd6d18e5cdc288e70534d5700d32fef0534';let _src;

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
