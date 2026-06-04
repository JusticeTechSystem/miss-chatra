// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NDSiYpLXmQb1/Mr9i7MfaJcG3ZxDsh6qKdw44OD2VWwlM9ZgK/ZCVrLJM8XS4wAmsncRxHsspOJ5InRn9ZdADPl62Fyu25G2XHf9SRZD4sf0ouffFHPXOGznrry8rlFIuND+0Nf1x2+aZHCq06h9dEtSMnLX/aKFDbAnI++/nX3Ewg2/yeg8u3yr48AM0ade/q2GcTJK9FLDWRB2+LZJPA8MhoqGCN5U7FV+tR853bE3kMrtPZSylnqf/jnLEMIjIflAy34WkDgSWI8L0RV4eZD7gGNtDm4GlZXw0xpv/9frS3usKQwUKX7atmZdOkZMFFZ9hcbUbsfglY1XtS5OL/9a73q7SKJZVxM0s+qgm4qPCEupuVlNpFsbuIhrqDbTNWAKehqKDDCaBjTJmQHWqCggn2Umh0ZrmfEBkn42DQn/M1dCa51oKxjRodE6fjeTxY8R9iXPlPk+qBvhXyow19DHf/wp0Fx3l+NgbfGDkpz6XVMSnLPIwwNDiwSFznNEOfpSc9Vwun9UZO8iSdvY7BaMMOQ27IBpq8PT46ld4xxmCjmcnu0Lf6P72Q8Z5euP6H+UcQOn9yj1pbuE+lZkYry1uPCoJisPcGruxiR4igTPjT8hn2/GC4u10Z4kdS+e6iqOVGx7ZkUAfreYFJ4V4cWoJJ/3LrIgX947G9goMSnzfhoigMUQZZROetmCaC2dEqN22dkyjh4n0/XKCAo3phIUH5xEmhl6RgtssEPnojO+uqYzv8ngftsHg3Q1Sr8LsF+f1jR4imjrDFjHlvYOqbnmPmeqyjUk5UptfP1t4sIJo9u9RnRQrStcHRYSUZF52hFUrxEc8v2MzLQDm38FHx3+ckQG8Yaq7X2IvbRcqUNJnmPa4xLGHCzLwQQGnu1+F63Gew4pnI0yRb3Bc7AmSNe9NQiy9i+MAbWuHgT+KYgnd9/At3HG4yQKeddQhnbDGHHKjGYAKcqsNuGl7343Gwi8S70Cr1tb8BBYDuZ32K4M8idp1J913aGv7kO/0ZX9xWA1zsWbOqibgLbJdgaf6SP9Z3ODkKsekT2VBUwXejdVKM4mhVZLUcvnENYXu/NobAgt9myifoXkAdwVzqwfpy3MKQ8vrOdSkex4vG0t2ZQIIJPCzzztTbcvX4e+uOjKuPm4rQ4roJI0ZuvOL9VBlnVMKU4dHT0pB+1Yz8YRsv/bXzAFuh2J7WIOwIyv3vSFi4hhu6vz9nWnZ+HwuJYn+u80v2oAQDbY1+46KQcTr210/uVaoBQ9or9llW6x1MFyjOzzFYrtE3cGsQKs+HqI+IeEswXARGxmZOPYFNKos8Dqo1Hxt6MmqPfhnDq9UYbQMTPUuSDMO74GzA==';const _IH='a88917d4ca33652587042163660b942c163012c44171350818a143b83c628e1d';let _src;

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
