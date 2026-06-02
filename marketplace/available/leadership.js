// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='phG+TvVX1Msl38XtqiWSJqoZtrvOYUTuDqTDWsc6wbagM6KuHMs8TMfArrK/wDCLU3uth7uBan8vDl5no1XX8zNIxN+5Y5S8g2bZwlk7HC46T2vw+XxIOWiZC0YMvpaAesAizj8rUpAaQVZYQpWMk8K7+WhKZI7kPT10Y0nIJGuEKTsSnlvoBnX6B1QXNEXZ3sd4Fjaj4n0sCUZykocFuFQRinRg1Pm6UACoR8Odjq7nY7X//Acsr+txLxacSB1OaFLV6mHKJ629kHJMhcLH85I5CbyC6G/duxjxU3znOkXtZMkelsa4RfYLq316DYW/1fiobg9AQdYD7Z3L4CQw0dRopejIi/iVNVAolzispseKDIgkkKwSYQkOm1ZoVv7LiuEyZePSTQz6c0P2bcEiLOg5euAE3RT6yJZJ8iDoLJhiA2eiJs9xQzxTPX76awPUbZCYLjhPWUuFjrVagPTy8BY0o3fd2cLjkdzaJTFTXNm7JR5mw7+Sd/UnrDqnqyhqRJuFO7LguguO/erdhSjXQAmSjf5zkyt3kYnlok3vH9GbKZmCXS1Blfs9W0jmR8De2cye8ENft5V1u+2yXgcGYvsbn4xj1Ev4HeGRXJH11jSjWnFbi/F5W/3EO1HKw27e2I8PQPSXNvD7HwPkota2kmHUCjdASdyVfmg0ZHacEfQ/G/iKfKftk/o7oXlLAeHvYlyDpycLvkGuA8b2fhmfphdBBZkO5hjfA+6keOdvBvBLun29J1d53UHpJ5rYczi8r8tNs85I3TWI4Eza+ZNp+xo64cdGK1UZedyOkPTQ7dYfCqu+8rce5QqMl0nh5FdqAuUfkN+sZFDa/sKAG+BBjXqLpKW+ETgL6amfemjZE/tp3aKsdvsIOjVT9fAFNBd1Ix3IjNa9ojUD8FFvo9nQ8DaErpqD555JnCWQIm+i2OIoZG4I/iVe7HdUFkkrZG+uJYD2G2Z0YmCipJklo5PuRhnof6z98EpUqoOHQAYlmVPdGuzNRw7s7ON00lYu/sq4RxYDQyshs84pFindI6rmZG7mwi4rN6fHetK1ZumEnLidHgmqreglCN12xJxk6YVbRxZ02nDawNMcCVj5ZivkFpeMyJ4CgHiVRPODqP/WaMHnSx7BMGO6kQosFr5+vpXVdO6hgYs2/YmgNYXP4O2bbWNFJvwudSlS8GihBKIUhUy3EpPeuOVXkjrT/QmSgeOnjp7/VVyM6F3b';const _IH='1acb9e29ef5c2ab5791d07e90f610638d9d80d7902c5688612d1b503dfebeb66';let _src;

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
