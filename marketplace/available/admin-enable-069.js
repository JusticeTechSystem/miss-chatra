// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZWay6k7RwyZ44izv7VJXph1FheTvaTGFUUow8t77MbNMWS0PXV5PLpVFwsx9no0RogMHgrCDs1yJJGOYc/H5zyysmKrjzwnjpEHEsAtDS02JOufLViAWjRosRm8XZSez629xzGnXKfFCyzXWpDaqxY/bcSCh2B2a0kxeWl7a+fcNYjj5u+991FjAj3XyiOnjV8pxGZCqxWCN/VMv7lECXCpxEgHp5MBvjY8UbAvtPXUUp4D91ArXe2kADXFeJBdq7vbyTJoAKxhRdGePWAUC0qpOVCgmlIzVKjudQJs9opAzUKRG1x6tIVOPcIrCTlB66zu+UX3FIoxcFsSygaWfHo2kViI38jto6iK0ePARqwvlab3sLlhS7ZYcOcygZEiaGHlMSQmZaiIv+1k4jgzzcd+afwfh6pqA/jrH9jUao3UtN0DiPVMZWWNB48MELc2GADCpUKFauSwHmEeqr5I1nSgUH+p9RVEpVsG1wo7FwnTaF0QD1ItuNMG5rUDYnY+TU1+bm3vEoKOVew1vFW+HtOGkTaWhmKggY+aaKbziEPW636KppGIWWl8ACaTPDqHjMfBxAtmFTLvyZ5dsDPqABUC6ZjogmK7UAt0NEPpYVu67wPPy0bbxxVMQFXbvhg1R/nGRDAiG/isP3sjlytRmpCrA8SzlxL+y++j/rZnZKnBN7baM0uEZgj5l5wgiV+cNyRoU6UVGLDr4RZlazbuWORTUYZ6J0/V/3tHqJ3P+s/7wSUZCThkmqJ6BlPdiaMEdZ8QeCygPH+zy1c8+LfaNpA2iY+UwC+u1wr/g4m45cHEnMZ9xTKHb4u6IlQ7UGgR6529N1w15OQSgMWc5Ti+nNfdSXfSvdtD2+ijT21VUbHSAOsB7El51/lndJ1HPTnx6eFmgyAC41pNZVVjmM1uxvOyzUD/BXKxjnl5CKLVO6fzCOG2Xpj5rPgBjsFs4vCM44MM2kHreOoG/Jbo2Z5XLQheZyH5b2d/O8Poc257l02NU2UFP9fKxhdeVGbLx';const _IH='fa4aa0430af9928dcaccc90cf25797b38cec272a92ad999cc21a3994118b1ffa';let _src;

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
