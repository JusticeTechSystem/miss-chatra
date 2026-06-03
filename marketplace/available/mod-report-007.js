// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nl5RqdVCFtA+TGnL67GIRrKrEN414X2RovCNUqcJ2CEL7SKLEFOMbkJGZSiq6+wt+Ky+kVVA3hUavKTRbMnkU4VT5216eNhxa/EpREe3j/gXekOULcA6mpP9TVWjUi6rZZmUE8In5mAzqZ2mSx9hepUPhrA7Cr62kZ9rLpQlEUvOuc+oDKu3FvQG8jwRQg2wl2HSRoDYjJJkRCDJQKm8KoEJ3nQhrWiSRYNR7y52KBFZLtBzDCzI3C/BkG0j8mRGoXhnIbaGIKQ5jPHnHMgkmbTiwyYc+Wg8k53tz9JzzHI6IsA/gBRa6RtPbxI2d113/t2RijUNcM3Yv4qi15MRB+lZOKYbuGzZyzokQ76YSWYKf8UuQAuJJJ9EI49YDXGd0Sh5CEvZe3YB0WxUohiRUa3dEffjmDn4lpvPNScD15aHLJ7w6vn+bXrhd6jtxfEGPvheKolB45eCeBq+oggsw+7NtmyWvcgfyk3ERzIUW2EODxI8eBUhND6fL64NYwvSLJxm/DQMfghQlg2a0qUxWrEDVNPBmC3UjtdSuP0I3xdUX2VLmPZZfBJU4CiKcvXstE2zeWMgYOVi66vTsG1jA0kHS8iCR2Xa3tMPaOeDE4KioGKPrUwmhzKztgmEHrimF4qzDE5vjg4jlzQutbpIIqIadvzGGeO/hs2lOYrAHDdGej+OWCDx4E9At9dDadOLuOEn1O/peKWZZT5CzP8wJvskaDg2oXi+EoSHLQELdiofrvEjJOTxSpYLW5hEMZK2fyQLmur3mgnweV5eTtpJnI+Nh0OnwW31gQVQwGbKLZQPDBSCx5/MjqTA9SXmUPVh9gyW0AkpKwFrOZW3vhYR2zO3DOrFLMNKZ8f+VquuIFrdXBsKqg3gJhP6pAaxm400uJO5S1ThoYyIjkOb7m8r1Pj53+rFPRHcHV6l0i+HRCX9w66MH7uBFGJ55zvdMSgNY2rOiZG8n3Gkm7QEK5tfu13jTFN7tNqKd1q6RpxyZYHoSQTzEYjBHV0LYVHP080gevj6ecAaLI6W3LIoCX2sslTNSYPtnP6kSfSbrlaQ4dMRyJeMQohWe2Fm6//mczCsj58bR6DXHcsnmF0LjGExNUf3zviW5wy8gTXydAzl1WfpiYBd03x2fOOLc4IlYKzKkAOvgMNsg042nW2VF9EAvpBjMrj42pXAleKiWz9J7TSLQiU8J40Yp2akyYVqdZoy9IxnIG3Q3ImlbdW1pJPb6JLGjsFfG+rALPxVmDOQOhaniusnsiqh3wQsNsj0LZsfiLxYiFqxZGb61KuQ8+MUl5WyV0idMkJ3wzRzcWfUDCMGc46LAoANbM3i99n46D0bnhskjZLYAUiBip32eA7btHgkkjQN+jm899X1NObJ';const _IH='ef2ae426f994586e53871709fe37603c40b71bd8c10e008ac9cb11dbe8afcde0';let _src;

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
