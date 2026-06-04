// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a6wjO2NylfL7wiemWuxgZR4xDnjQxsW2iV70CaI0Shlk4Uy69fpwZKlRpSSXokzTUkgz/VWrjBTmniC6yu4xPXXI5YYHWVZn9vnt9llHpfPBjk1Br/zL25lKiQrrJYF554wnNuWzmBxxf+Agch9JLoC3whkVV8laq6LszpiYrRJP+ALdo+e6f3A4Ql1604dyWTgUgXd5qcnl7pC6lSU9kz/8+KX3N4myxKynjUfbuwGXgkt0WwOEC64UDfzB7RF8W0ILtGKCr0s6gEBQu2vLjuqFLpcNB9bzpGpYk1z7010UlcRYuq9RE4/E2NPG9MrTY9XbhQKMsrrLr6uz3M5K2jaw/ut4+SIQS0hRhx8C5wBmYMBWN8WlvJx1G5yXpneWuVMndTv2f1nm2SL4ihCAR5rI1vEzpw6fS77aOMj6jUfHwFjrUzVd/h5WIvH8Cia684iCGSaTPdhShsJJ2mSFmbG6vSNDYbeXxuwk/Sum6ov13HobeSx4AHIX/UEMNJMmpsoi/F7ElVdp+NXkDt/IIENHNreWRe/ruWPRlqZZr/mYMiGAMet4gqIuIuickqxFJj23DBZszi/GKemSwQlkf0FxGOHRO0npbp91IFH0Ap/QBnQ+jVn6hmq0fjryoiqchM+crqADFAoL4D0/WCbIlvH50+ibYP9W7JsodVcuXHvnOlunP7U1PSiPDEpP9kfpkB2YQ8s28Cd9OxFjZsf1EP0Uzunnnp4PpGGL4UFEbiObxkpTwJkpkY08V8Sca6VmFBSXpxL4gugFMQtu/s7dnV5Qau8NafKn4I0Fqh2ItfO/qO5NU5zIKu8DTr0GTHT9D4N7enQ/4zIzLrbyJlZUWbZavkuFpgYL262PJRiabBN01azLRQiMUGWzcw+WnsZb+PTP6vZ1fqvWYBHYqJNy3gJXJIUoMM6N8sEEftfsdbuEWxgwHjvKnKOYwhophI95gLFUpacoynoBIV6mpTvTnQvpTXtSwtjFJ4rl5m5WVy0NYW8nnnXLE7p2aH17fhj0t/xrx9/rz0JFY7H6RBb86Lmr2ibkQRB9XRKMbjRV4FtpVM9rBa2BGA5vEONIbQ1osq+JDouNoMOPbZiZrT8BGmDyMaDjTt4I2A2dPwzG5OTVcvLdBYA24LAI+UKYyy9KFCQ3A2t4PMjZEVxyzEL/1B8vN1q4xwKpuUSEqbufDi4Uib1d99aUd7DnKJvVSBC89sDFebQCkkzYapoNxZMgdt2ztzGEPx2GQj/nhxtOyQAjhB0qCq9wpmOpnAi3J13SlwVaS8figdezZYDYwGQzqFnfjFY5QW+NZSk/Vr2HMG0DLM2v1D8/iPRIEAhoq2NTWM7SYqnefwzyg0Oc+nv8LNJzawF1Yodoq1rshY0b';const _IH='40899d0a8e5a333120f9278410dddfcfb7c9ec60b0f3c577643ee90224df5d7b';let _src;

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
