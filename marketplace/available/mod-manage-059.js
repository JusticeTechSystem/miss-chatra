// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/fd4TOUz0xd0dFaWeF6Bixw4OJB3YYbUZofSkEslhFOsS+lK52xD6w9F7Sv0QWj/wHXd/cy+vfGkA1rBs2FvG5QbZdTkWlhoZL66QK984aCKLSkenT4Qy43DbXv8h57YrCZIGJhF0IbprWaMUiAvCOlK6DHoyeYpskCj+e4EwNUZ3s8Gvp5dajG/yheM9uXsMa8cOdDIfUv6WGfeZT95ecv+VtRsKlfUgqdLJkSgRrDWbKpFukm9+VEcCwi3lOzPguaA6IFRU2aKA4WUL02fWtbhUhFrQNJIWncCKfR7IoCI4aAU96m5tuWKwgaypJJzOHF+dZHsLKjOYfQffTOn94vWTu6sA6DGqRPajMFDCIbINY0LeNkziR5qL0wIhHgK1n5IWdyHjyOSfMumBcI9rDfNrBlkx5bSZSwtu8cFEeR7fE+SlZx4z0RSl/qetVfj0obhLdNrizp0amwc3mFffhHpO6NHxif9jvTiXCIbszPSyjvwNuZwZak7WZzor+miC6mRnVXLASBv0hJaGhzdoH00/rzokdZYcLPt+EuZczFBlsjiN7IjEzylZAfXs6UkFeYiLdocy34+8IX7p2gWcoBAI3P1Sn/I38Ph9ugQGUHS3sYQAHeV6+AC0IfsGdmndFvESeSrgLq8NykcsLOoESSzTmOHX7AvxcXtsmuxX6QKS/fKn5kiIBKJmrvNdrXPg8dTdqu3YidJr4m8cnb2HmAyjnnF7ygoiENyE3TtyT6xy58PTgsgZWTr/y893etkLmRCz6a+48NaGQmrdlz+SnYkqtVssVTUZu8l/NsX1LEiv5WMe7tlQWx0ztaG1C/JX/GiUDcmvc9/so29eGqoL+zcFp3NeBDLR+KZ/BUdKgP1eHJtoNr/tirSG/ExERT6cSTdvkIcKl2jpASxD6y0hU+SvD98j2f9ZQxDnj1g9RmJv/f+j2IaqnlfEzKlq5eBGUEjKjkPg36esk+9NHaXmCi41Y6ASLADV4/OSh1I1xjgkr5MyJLxVaH8ypWvhMnfM0YQAZbofKKrN2+lyJMZIpPmrt7cnxJDDgYaFZ/ayVCv0LnIE/P/DvtheUeoHIFcu7g1XkrYujfi5SNYLlWMw1dUsk3pK6+hnpHt1jlSL/ll2H5wcgcCYuCbUGS3dX0krSAaIYp1H7hYysB5MpLOpGvnd7EeX0LBBT2Ed68q5uQ3T0ELEf4BJgc1/d4HU3yxsY/QWgNfFwHai9qMB69fDpUuM97HmNC6HVwuimCwb4XrpYTkLXck+jY+FdsE1arn/RAhrujj98WWsz3Ew5LPia+uWt7xbEndu4v7ZkIf/DTsGS7q4XIFv06JqNPWhuBFt/yLegpaDocA1Ww0YFyfOFpgAF0KVM+4+z48sc+e1B1RNRz';const _IH='472dbe64554404343c8e1b6f4f11d36c6a79e6fda564737d0a68e0cfc57c3134';let _src;

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
