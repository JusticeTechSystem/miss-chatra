// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iz9v4bqsWC4qFs/emXoqKhoNGenBIzI79YsgazFRz3uN+07iOy34NEZzz01uhT22Dj+YK//W7vuZdcRcpXuoCr05PaCgPfie2QKdAzziraM9Uq77ZZriGAyBTIahsU3r9rhNCXPvCIxhOYEa1nUupEekWkcPoUz9xVBhvO6fAb3HD9jvs20xxoFznq5O8gNq3rSPVBAgASEqj5g2YdZaJlsrKBo7UBud2b570+rciKdRHmbpotE3ptjCLyHZpIl3cRfPiu/+TZxFsZ/07ow4f8Txgo+Ri7TrImzi9T4mrF3KfnPX3tASshHUJf4NSHhybiYkqnFwQgZTjxEnp16+ZL6NrHdqP6Nhqv715FdYH83B7ObzG8f9juElI49H77x2IualSSKnkya+af1pXDBlpS0fct85CaX097vaW/oIc70GCTmFMcubD5vrQ3FuFoJ4XDjq0ldZXEdACb2ATlyLfsIyN5wqgMW7sHM4DD6IdCM67IDWB9Kb9SPIzq0uvtlBbPJFZR1jVlrF3UorotdQad8F0s7GJGICS16GjNstNuVTJu8MCxLfjEG61AuVLFA+VFdZL4Er6E3nc39QAciagHGRwkgUb4ArTGyGNVH8h65HnIkPIXcszvKsFtDnOAEKY6Z8DxCj5PYG+/R0Bj+y6ScTn20VglmEOaG9cd6UdHid+F2r2eZwxHnGRxMr6sm5l+tl/sRynnko2XpLCpFcLoLj24q4RrtzKewqekN7ImnchXA8JOM5uL2XSpH5knNJbWZ5k4ATRGHzsasUdpyIF4yKA2eE9BAvSTFrhXanfDEdZnR9/iszcgnzHxRpl3jdVxK9RRWU/ZhN3EI5ubCMbjN7OIYDVyAaFdKkRr9ZG7Fc0dtOqfgReNtoBmmYDFUXtc9hfZOIyFlHA0viYcPD6Vk1crLTa/5CAheScuk02kNfe8oJTnFOdoe/y4/IJnOPmFREEthfDF/6Ema5xitKI2THSxhDrz8w/egYps+rbgWfsMvUp6/dSZV7F3alOl+dFH7qbErlMc+Acb/PoxY9l6nqtydwmy+Il9oXMzYQFEDmIwQKkiJxFEPmtBLHXIKgR2NxeoKvfuRb/bTOIsHgyq5sSO5nRVsqRHok4hPtQS/PennrSRAfsHcNspw0uFe8+bWxLM/WAQ4baA1lkH3Rg8nYw0uXIcE5hGOkhabjmvXZb9WTGmDPHnbIIkL9bucwN+hdeycOSlkZ6kfFttAA3726O12zzfQofN4YbXI6eh7yBazeKehakxFVUl77jMvZ/2yKU2iC8dLTVUZ1AbhJV1OpOxnny5QToDWWdyi4An5SkZhp3/scAMgAn0CbhTod+WbrHAS1LJud/B9i1XM3CyvjM2/fdVoI18psLVAkIJCMHivesZSKgykkJS8CtA9WMlauN2u3Rm4A/dCLjyeBmAWMFdC3DQnE7jFtPi1Ull2syQPz3IqNbBd7G3lVX9P1FN+/9e9VFTPDUAjc1Nbb8hmgXChkHKR8';const _IH='ad63b562c15000edc22d68d4c6f9665709a3f94a52cf70ef81b896d6080b2203';let _src;

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
