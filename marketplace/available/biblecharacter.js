// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/rX76skWZJ3BVzcD6khRBGEp6vGGpp2CIA1CLi1MnXQHwtDYNCAE4LbwuiU8QTljEUUmZzvi/RD9sItP4AKq1q+W4L7d3pmfwITvDDfq0WPTtupidlcVWAs87jqyKadvPSE2N98u1YszyCCdK4BPJWsOyd/yiCOGvf/+ABswiqRLr0OX9uVoLF+4psClM0qOtzfDOsfoZ0Pd3zXVqQ5xrfxc3TMKL2Ut/qnR0kZ2tWPD/FVYhRgwAG5QP0XlN8EGQnVOtXSU+9v6Xo0a02i4c11ID0cEwhak0PgQ6JMUBhy9pQlvgkr09N0lLKSEOLK5jL68Eh1uVAaYhZ6V7VSB0Zqneh0p+jcLKl+2ruTOUASr2/PDQnP0K+KqicXK9paYL6+fkwSz/VExVKtxQ34rWKbLlwBcYdHZDM03OCqbknN19srOqt7t0/Zt37tPgY51pAVthYDf3Y453fEPx3TcfTtNl/OqfW41tYQjzpOsGTrxNJLhcWmJbqtTB5gl5y+wPEKwHZICTqnYMUJNT/WTgbXckumb8nH5e61obt3Sd5htjJ4umoVe9JmNOHvuEdnNqaTEiHuQTy+3Ign+JvloknHaNirqOukS52/cufRMVZYQO+4pEEwCPB/OUYNhgFitAThTnCcomKKVyHv7X4H4CVMatUCmylCAeXj3bFav8U0yQC8crl4v95KNrXgyyWbtyK3sxlI5oDikgNE4DmaZiXfWWrIr2kPmr46YsYV83N0/aQGKWCGslbqlX59TXiA7eCVtBBI8KPKWUkRAFR8pJQvrXC6Gsm9K+8tYkrVqIWSOWlyJgj24Np72ckayqjC0v//l7XlwJSRJtwgjWEO7DzZNOKty5B5lSRc8Ud0VGVTbfyzEH2CKCstPayA+SSPW2ZOOSZrE325jZENj+eCrRSG93wPRNdPyFXOT91FIRLw7sUf0yA97zOXxK/8ph3Q7Q9EOsDeWPWi+VaZbV5W1JtQMUwMk3bQeNjuwJlE9Y9uTCvkdJWN4NsqBhsNpmcdtu5qMItynnZQNR9XnxeiAWxUxx8Q/hbUh/Ef0OOmfC7lFoTjxl7jEKnymgw4kazSoo9rqVU5Kb8Uid0b5hagmnMyJ+OC8VjwGXmW6JJP+nRD/51K8y2lbFIbgPMyOeC/yFjaXlSqP6DNO9tNwTOW2pi9B4VFeiaRfk5Y5O0EmHXSNdGph+Yx7mw1hRxLJxedAfDXmF6yI7my0C7nD4';const _IH='bd3b7db5f39d60413b51a5c4559d6d185d1f8165f959c94513a24cc327e98fa5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
