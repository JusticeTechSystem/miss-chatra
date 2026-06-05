// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BNJr+u9hPBlEmTMOChh+W2F8aO7yPTgnimmr/hcJ11+zY0PnJOO6HrUWDyHpcY/AR8td8/ho2tAMeJ4U3DdZQtEALjXAXyxl4nOFMASBN3mrcIAyIX8RszE/f9SVK/kNIjR1ZhxZvCjU/OyEGHkYI5aYIIEkhrQdnvG0xMHAj7j/J2Iqav2r2hIPRBPGzJunLV4pXI52Ir3BnJeGmCM0NjiL4cOyZI85Ovj8IXDu2nBydY2EwW1DI4cHM06jBhoxbaH3fa6NYXnJ/qY+I5wANc9861nQE813BFooMRejJ/uW6GIdqAziEC7yf+FpD1DHWws5wws4/pNxSziRppuWcTgfc8l2lv6jiaLLyv1Kg21aVLotSZK9cYEc73K5Bl/GDk/V84oGRwrUQzC6VT7SmacGM9O123iY6q+QciuSqfxOF2+KAtvuL6al0BDH0rBpMJugU4MUrVtEed/AFBEbVT0ZTG8evbZlRqXdSgKNaMGGJq0cFQ42J00JJR5LDbcBqZLjyXHwxuWZyWFytDOIHv2EiH0C1UFM6ZXM+uCwPs/TbIz+fQNFZwj+xMY4tT/VhdGr6HKQwc8mwhgbLJzElucasEIQprjpHQf/NwFj3ZgKoZSJhH+PC3nv/rTC5xLY+CZKIhpQsgjcSt+9//XfhQVcClDpwIt6pIGor6aTrROxsCH4IMeMCx50haQZtTPSS969IUJM2Z+i2szSQm27IeXdnN1/fRqDJ840Mhl9dA==';const _IH='1e96d8d4499d9e80a31512da0b82e8d1a6afb4b9a5c6ee35927dbf9a59227eaa';let _src;

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
