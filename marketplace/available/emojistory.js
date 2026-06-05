// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RnVPKrytFqLAvPhqTtpXYm7EjJnkMKFwALsEuVgNTrVFYtHBaj9Jfx/BzJPT+hJvy15DhsPOPjUe4lNYvRvGZZGyym6zHiLYGBZtVOVEk0bU0ZqScSW8tnl+VAvEReXf3Y+f/Z1Cz/MnVJfErT8YOhKuN1aI6Brfgl4QXtLfavMCHNTAYrTiFMcd/AnpSRuIdOwI4VVLjWlpkUP65twhCMMK0QXAg8ki8Ak0vgAxov6MZ9fkAADHYJMHYy1nIQwYX1RJYStjKxRpOUjUCm4g2u+TdckraNzFyVyUv/ssWlfvuGbhz2ViHHWw0HcxvMJxGyNMbPtUiUjiXRvEvmN533iy3bnqSzSONRJxFbqA5tbsoR3JUi7947czUJrLFCB+HkDNIsHg/WHwb8Ff5lQXCVLgJ/z+ixxuj8qKBZI/b5s3pTmumnQaqNgtS1Hs6fq0/Y2jPX1pJhCxO8CpChu08N0d93FXFJjGnsJu2IPv9n4ryfvXlQWLu7EkX7s38xA8bkW70X46rTjiR5GsF0sMTijEIDg9u0XcoaLSKPLM46OlIUOmgtvFPY3IMtNnaaKTmG70uU0NWrUZSYjkGhklIPfltd7yggeZ7mTcs3k+sIJ+hywkTab8At3yirb5ABNURl9kZwXjvUAkvt7KUzVTqqCxaUJU0En+PoRbEfF0Fv+quyRJVvMPc4DtbVDOHgCxzSBL6bNED/V5m8zyLGDM5zgF6xkb5jO+w9cHgfSh07LwMbLzOXSBAA4SWNTbLeUf+/qmWGCoLoiwt0tHc4VupYkGqcMiJIhXa4QU11lW0KwXvzn+BZXtjohIi43NUPj6EnCRmsRDmPnnhPYrBpa+aJRVDFBIOaWjlC5+PSnJCzgzpvTXNzIIc5ADsh+w7BayESpMn3+lAyM9CcQ7bKRd7f2zU3ZdIjT5/Tj4YPOLFA9UWQ3slC0IBK1xZtSPbKRLHrbj4T6fj5i2f0JkdFyIWlISAAd0nScNQc9xuDMSjYAjQ2Q8AR+ZApzueI/QXzWDEXKWWqrQPC7tG6vmbEe/4ncxjc6tchRWG/A4osRQKb7CRLMAKssKuqD7PsF3tTrrhaF71VV13ac+tnlgd9XBZh49LsAFN/7CUPinAjzUR3FmQoudtBow4rKJhGHzUu5WeTRiL2W68IVD8NfX+QSFm8hKTdfVIP/dqCqrHCdmLnsPgO3skLGmnMADfADCWmRBj/hNe1/E';const _IH='3f026902358edb96ddc867bedb30c868811dd54b1ae7808aee480403a527ed50';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
