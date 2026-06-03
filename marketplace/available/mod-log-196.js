// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JRL1Ph411WSxm8KiGs7rnZ28tFI4fzteLDvMjaxbeeRusgnFJkqApEPZj2RUrwewrpdPkCsS99mZunJNT9i558j8XwSqxUMPZxAl/xQTDaGeaZ0f4Fu+wG9I0NsGPUP4B0xpl5vkqTQQo0INF4uPbSYFfpEFI1tMWuU93SuhqAuqo16o3C5p2aMi/nABIcmjYpzPe6NO8+/+Gddmc1qvcZ2nYk9j/IMKfbpXwB1FfBOh8lsg4lZADQxLVWFY3VUVmmWl7a4zQg80LM0jKqLEtE5vnJY4Ofx+Z4DQgz4o/REDH4UN4u7ALzCrHCcZMYE+e+1UAMFoqnCnzJK5BY179EWE/aVTrPwd+Viv6abslsk7dG4L+CWBTFltitSJqq4hOvz02SSE8zYfKrVm12LN5kpzIjmVjzaAP8wWy5pKU1213zPzrapiZUX0rPU1xEI7tbHGB9iUXDuZ4DF3PCW+bc44YjqpT5Hs5JAH//LvWHdJCOo6H3WRTiKNK0PmIC1qcxo3hT/+itc8mhT66oAHReOTd1rWnyvOzLRF3WJzGeuHyAUnQhsEbyAM+pMKOAPN8RXNiPlyIJ5oUabMlMwYPZAD6eL8omZ+JfuttjO29Ck/qFDs1KFBP/LrCtoNezKt+zbh2SMyfD4PWbyzxXrST+38tZhzOCYqApdBzS9jRJVm/pvLBy5O9Bz5tOCKVS4ty3EeL/FTeQoyv+TEtOmyxZr9oduQjIFQVWN+p0NwIZ5shFm6kLCAyDtIHF2Ama/46GP/T0nyBxbnTu+uqDIjpBcuz+0Hj0GolsJE4EKUyxLyS+mUvX72/JwYON0niNGEp4vpjA2Hz+3Opl+PfCWW5U6BKqlY2ltncUayddM/NXyosDkgONTlD7JuB1Grb2Qok7/p0HGFwvxThouEUN304SCoy9hlOQSfe4w0SE9zOSOAq7SRaTvbz8bOMQnewQB8RQGzq47/p7w7DoGSg5mWeMrmPeQvpwCBCJiW9BullH0u36T06OrpLk568ZXBstcZDsfUrAW81eBWjbhbqRA4nsJ/HejSbIVkQanSFa1PFfhJkp80X0xGLDmjkb6Yi2VUz5oInHIkT8qLDCjo7kMN3rDYy7xIs6E3SooHOsENKSK/6Vvher6V4KKJKvb9Ob4sxwNItXbI0AL3sKawHgF3CdZAdcT2NaDm3gueqg6bsuQjMW5QMU/r7pcSBOhp7gOs+lVzWX9ESoAAzUKwIII7x3WkZCa85PM5UyMg1zLYI7RBCX2Zy8aB58t1Cq3qi4nqluPufzOJ5sY85C7OI37qWDSK45vDjbbnxXBVjyjE3o3HRqqnF1Zfwl51YF/GRsGEdc4gptLpwczqAQ==';const _IH='edd7dc17ec3135ae2234a5487f16ea07f3e3a0cdfabc1bac733a4af336149b00';let _src;

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
