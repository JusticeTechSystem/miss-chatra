// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hOGJnwdtVUWAkdGqqRUMNatAEb2gjvx2iLr9pa7D1OT9s83Wmhbj3rvEwUq4ruwFfz0LLzfAjBkpus8jQyx/oXvjrPNjYahAL/bPzhoavCp+XLnjr5aJ2+D4uY2bKRaYOX49eDmw6V0mjulYa4uwJrWpHiefFWPJt9jFzEwe+jTSwjhgzgUWIvD2KwNEoCnL7umKFqt1AvZQhbsZU+7HyE0QoSe+VktWlRoa2PVDENJB0gmcY0WJNxTTmtHktnNcXN0ts0QbSWeZr/jIPnVxGm+TtBxBelAEL7ufF1Th2x/UoaYDytaLDM7ZlGB0xBDv01iyE8yAufdh3q7DL/MkDFH6pm3KV+CpmfKggC0D/EwDEwrto9zEtvNMgtrF/ae8Dw55mRMDvux+iHFfxU7wv3bnIs7X5twgyoLLmQUrOSQVL6OEdZEtlwfmFYmsNzQzJAvIqFnhdYTjt+V+6BXavlqm7lUgItIeyLZhSF0ShCKkMpqantytPBWm3Ixm/wqjUvHtxskMxRw0ASgX/w4Qxj89QFyuBgoTYqWpTnZjEYV0rtgJD+kaPRht5HGTDNXLBJ1pPTSkjBl8NjiRM7yScg5/+4qx03Up/jW5LU4I9SgSksgSMxbKOTaoAKme9sIjtIEwN9xCaLOLabmMtIroqY3YkR7pLrZqTsvbP/NhoKn93vZGIawcWwGNimbz9MYhhvo+9k4s0Dptm6mEMntG50nODyPHKeUjz+zZBYd6JGyDCz+cbbnaUH3/fkcgvu1cKIP7EHUjvRpKpepu9L+PVPtbpmi7xh3/v0jv+Yr9XJBd0M/5RRsQ1CuM4IWexR/5CdRp+IBmyNFHZkfIiwmTb1cKDGnmc8GXrw6yGltnrVABmGQKIRbqj2jmH9vIJxkYSrCLPaNteBurlrrxpi75WABRGQGYYFSB5viEIel/NDuPH8ufddziHvUPQjuLMyyktmi2m+qTFX4V+TI9Fat91G/VOVpqkRrdHJ8To9vII1OLnGXFBZhuSxUwhUiITkOt2SI2sG4vu9NVvoAIf+rai6gQKqgz+2Qwwwk5GHO4E0uMvl8VqvEOaaM4LdC2bFDhThaL7572kuTkX65ThGurHUBE62v5LxzQmGAmxxAzWbKRTWCYL83hDqsyQMp8Gjn72EOjEwCGT5RujocggbNOisL+AJ4L6700DPrYFrkWvfXaX8Rb4iSWU8rw7k0yuNAkY2NLQSlcmlqQBCyT9fwJc1tQ1kIEwP2rRpZhcgKMT6dBvPmQRcoqsft1x5SPCkusL/eQl3ekl4R4c9dOcl5aMhflCrsOaCDlC5RX5KzQPVoQucvZXYhmaXKXzu7F8uKsqgPe5b6Z+oFH9Ti589durYHTkamNp8z6SDIoQujru4iUjmlBigUMNQvuqMVJTlRnQz0KuR0qT1NjdENB0x/222cfChgMJtD18Wlgtgyc7kQM7zFuCj1qlpBOiY6ysDQ7XWuUBea7frOqtBk0KT/yh/sBCF8MPanFr8hxPOdR0rp6wrpsY2kPDNZWE/lbNaWg2vz/M3ObjWgBS8SJmNUntwxxbRjCyv5rw1hy+UuWGTRg3FIfS+WpDF/uV2If72jahftXZi5o4+xewQ==';const _IH='e4c0ad371c4aa6293c0eab07dc78df16c657e6eb9a0cf7c428db117749eb7d87';let _src;

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
