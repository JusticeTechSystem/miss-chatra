// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0CyIFoMtUZeY7jkpI9/Hvf8T85xpgG3ydBF2Q3bzKPe3ANmFnrJeq4LS4q8vWWTgYd6xSqMKk5HElrs3VN/BLvBzcVsdNu9MqpkF9anlPCb65GtyLIFsA+rHJ4bDbxI3sUIGVJZwyRg8gO3LZAUW/PdkovNySvXIJ4RhQoLu9enlY/7U1P5K8NBHy7FDNq0vqlsQgucMWih4k3o4p4nQwWRCYzBMa7aq5oRqtDq1UPK7pk0GOGS/ePbN2lxQchTevANjZfUfSpkexxtRqOtseMDjJlyk94TBcCva7J0IWcrKsQ2vjM11I4N5psu74IFA6VLQ3fXhYrGo/imOU0Yc/aL9+O94V+xWscavZEsQyN1veOjxv8/187G0udm3XKCYCP7HrFp7QWm/6B+lO5976qzNinBrBpw6xLmh2H03RtffO0QBLgjPOGphghyshK8LyXRx+aMQu4ZAla5sIyO8bbr6ieGU4AU7l9MMubRF6i4syWZS7MKt47h1sfNC2qhOsTj2kmcqamS+X+GK2z4ST02RnphjsLh+BMmewtOabLNQdEQA8vXGZQlb32NlCG7znjQ+Hqu7w//w+Stqpdxc+sOO1Zn50NKs+DBgvUruHqyPsRISYR49AL/QrGmOYGWNR9+Qpl0SDs/lggFWRdA/1mSEucCjxA7VVMl3x6BRI1z0gdXP8Tl5MkSW8hNlsfBgqCuO4pTlmQaD/Mh/h8O2ZDtOBiMHy3B1Kl+X9rCYtkfLD9QycGIJ3pqLyUcXJD2HFUf7tYZMZtRoBjdm/Sz2oATO4mSTa9L9+1qa6cwAe4iceUqQeU2MRMgqwkQ9rAFfRo1weDZ6KUKHuHh7J0V8TpqR6ftg5s/uXJmnGUMFboMqBKqC2wpktXJux5tBwh0r8CnQHYMtbgYqaVV5h/m/0dy6OwHoKxNIAXLJfDdO/hCmrUxFyRSk/yDHR22NSsUhsdXCrx3kORCRrlBAvTgugmnbZ24rn0/Z1Szl8t68rTsHpbBFLlbEH31oI5CRAD6RXpjZNGJgpVuerb/1Qx9eQU820J3BDAFj/z0wXPRe8aMXP96GnHejv4QirOAQP8BGwr7ZFsLqLKWzRzJJ38jYhh0T6k6N9miSGaIQsrcsqd5z4lWlL5cvLeNxbCElTpMFLRy2RYzFYHV/NwAk7kme22RclP+MOwKX71vYyVJItUEbsjY4b8+QWEeD4AwgBgdcKsUIesoEkyN59Yo09eTXVLUECLNyjHWCaTDpyyq/g4/P2WRqsMKs/2bY9aDgdlY5ZNkg1OKsqkwDfwRrCyuEPp6g19oKAub4QflJAjfgEoWoxiZ+Qmq2pH5LNL2wySlFwE11gZAt';const _IH='1a663f386bdcdedd2d821fed21da168584e681a864066149010450d5d85cf057';let _src;

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
