// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ZWMKWUtOMMHrgHMEHbdLmFBk1RJIBYawjL/1KOH1+KQfkF4grGYStxhT++qGRp4Pm/8RYaHYs03NJqdz0i6jU9syiF2iN9ZT2hnp2RQ7f9eYZR3Oz7Sws7gCmkUxih3qpBQpiSWzQDrRS1AOHCcbkSfYQKZeN+LhCGrz9jJFCipSv2UdLkuSRZJml5hU1bGVQAvmuWmXubaHNTFsJ1Q15e8JjQQ2rr0zd8CY9AQvVzAGQyQso6RhMwAA4tycgt24umOroNV51NRiyGpyMzAFY9oIF34gbW6+dnoFN6E+2PvJ/AVPOAiWXgGqEb1/7NsmrptuCr5qOV8cZN0fvAv0Ef4k+Ceqe7dsIf/yRzD/0twEO30OIDzwhmQv4PbJ7+E0aBMlukiJfq9/d5YVjkVxCiRKpx+4jo0XtfYKeSH3lAGUMt3uOnfGa3wXDFsU4q0S8K+Z+mxDtB4izecEv2nMn3+5eW61ADTVLtJH8Kjvwye1PJ8bX+F3yNy9S4WQ9bCCZ8Rsj8RFKlf5Lqyob/de1rtyGzwZYflgSrRn0hEDjRPUaSR/6HhMqcCU6oajhtrd6USqPEe6JOVxgjoknzbrZbeLWt5rJme9R76AGx4fv/gnEqm5UI4SX0xdrbJRxANzuExl8HUvrVUjHckSa9MdpFTGViCZuw01/oa2qeatauSUcQ3hdqCuAFE8CBsR3waPn52DL5hl/LLeEL2PJSb8b6BdhztW7fXPzNQv6pBjCQdEIPbI4LmFFn2QEVsOUM2mwbM9jluCWtG4ttScRBHi2AotUTuJncg52/P+Rw4HbFbP0B2lrfFg7nvZFeywOAWyQYsOtcezcT5UWfsFXxxdfpzqxWLzkuv2vOXOya5PmHvAA8ot5OWEcikrpTiYc505xMx4cTblpqaKMR6puIafnMTS4EmZVrtyOk8sb0HDabnWc4y3SPph6krZqVdize9TD7Uwq1hc1TnXBlUf1/jWInMGMMQtrNrd/GBra5/5VbdZ2cdvTNsYZSb0necQgjzRpwZbv8gbVQ/TNEaFWBm7PcLW6KSCE3GINt9RT1fDkxzRPTll4nwnUBI9z7Ptq/Jtr385DvDMzCEIQ7Wcwj/Zu4LZPjjZcX1Oka+4xP1gHOkxzQTb/FWQlpo0xN3+OHnI+OEGEDmtVv3SS+CG+tckx+4LVB7egL1vJOPy3tON7WW3tUhVwTFZZVAr9o81pTLRUUT';const _IH='48d8adefefab5e2fec82caba35ab8c21d35e34f6a9d5eea6ff7ebe6c5928e586';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
