// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9y3ozYtApzEdntcsASGbEWkbIpJmSgQL59jWY/O9zDU36oo1DQDC5pFvcIUtF767zW99orLAY33dXaTaIO0A/2UECpAgwbRbYYJPk17g7CpqcpKvms4Ihm6B3PqyKMzTJTIG1GJPqvsv74qESNjPHMfxGsH8nnE+CaNwDTARQarOK2R9I1inre1wbMAIzLJDXAMhYvgnWJQzuCmk1IL0Nv4RqdnE0npPWbx7K/G65XBnoC8pgmwrE/Q+Wj2zZXIjS2wmlsaqb9t8LnH7KY3hfW15FlQMhOReG4l+uMwU2+OL3eg7R0Yg7gsn2XreGJNR5yr786mHkJl9pPrHCt59WftIgKApEs7AerwXfLcmrBzF2TEaO13mLF7eyO44C14XRqsqWGzlUlHxXSGTmIDExtH/Us2HnjL/tUkBnuQJTndSEXlFUZvLGWJ65yaTF3vbFwQttBkdtOc3vGB4lNAyw6m9U8Wv+EGKO9YjjMY0H/oLiZE8y0vzwPAAtZb1aDxBTETjUqiV2LBxjDhaz8wA0zIqOletEg7WKSSvuWA82WCTNKonjZB9W1oCX2pwQ0ZLHDOUk+nJqTJsjNwJvmX1Gx2BmuGVpBOiaJsAsQuK2Ij9h9iBCLkZZzJgBkwCgsDNZd0j5Gu9dmmpPV3GtBY6VU0Dd+XulkWvVpnm7nLZMReLe0HWgdPTKzz7R5ZYgvmGkYStyTyx9TAYuk+AGv0rl3v3rHabkO+lOgUT/hl4s6wHQmF7vbKyQsRbHnJNCyaKyIqmPXUmoq60Jq/OWLRCMZxm9GoLNjqKftwfzWEpm1mOKGwRhgkWnIStR8kW4Zk6i0Qp6H+DQStOc8mwxbLvEirjO+ec46CdXV7XT4JdW0MnphhH92vH+sxco7q+7KWF//TyFCy0waeSy8GsLAcgJ/6bI7GAs3chsCpJGqHq+AnX2DF5ffJlzNtf3ZWffaiSg+6jtgNwixjt76E2ZE5Z8LDqlEL4juJf5oVgSIyxoOT7OOVnLf2KsRrGnmjyBAnAO+WU8CM0TlUkEOp2zd8M+63m6DANU3UJULZEp5tnRCDcPC4aYnR3ta3sszXTJh2skF6EVNdMmgBGS8uIhUJ2uJP6O42nc8wUiuNQ4hXtgpZ2ISktG9cRh60M6Dy9LKjpVaVNTEb9EekZXm5EQI2qNgM85hHcfPQT57xsO9d0+dvYwawW3nJ3GfkSuj8Cs+EQ7luRw==';const _IH='f1a9fc125a7b9bc1c712605a57f56ac2715cda1c9a0e58d93b02b51f79cb0d6d';let _src;

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
