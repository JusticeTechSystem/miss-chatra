// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNQEWVPVWNL8A1wYvsNkchuJtDL40oc1LAn338x5Kx2AGSZjaxKfPxkiqBBAqgzv5hhxtLk2Ge+DaBUcTGM3iFItZF+9KAXNtvZa0QR2foeeOTofCVkFpKG2HodCGPuz+2uAB3vRoR9A/DdbCM3hwvhibhsqjIn7dsEwvjZUMndxrz3czKWa8+++jDhue28m2OkLTc7qFdlUnea9yvuRxgbgOPb2RPCFyf0zYSipkgGgeQKzu0FDHzS4juoBfxAYUUo0c7ofgbcEmkBOc4o22U3QFfQahTJbGNjjkQcc/2g0WBCfzpMNr1ngwC2QkpjaurUUL6u3M+YUeLecVQy102PuxLKgm/E77kTx7RWDtSqwEyqk4qRaWTlNjmkDK3Hqp9h4DvHr3wde0q1mN9q8p2wNMsh97Fcq+8bhh7yDwtadIqsrTg7VRhFtTEA1lYCtsMre7i5XMtKhT4kx3JZbgyeNtW4GoD6HLuTYhyNJFJKrwydFX6Eo2ZiBcfrbYGvKIFdMkIdOMK25HEUKgX+vtJemIruCHqpBHZvPul/B2tmmOQutstLruCswPPhp7RCteWubDFrULQAOq+mUWzIU76Cy/n088ta15A2VH/KWUu9T5psWURBhW71MDC8jP5TVApivBoRc4aamQDTrb1NkCRBfMWuqS8+UGyMxQkyyTG/lRAs7IzCw+1rzDxQTFZQuXWQ9abQ39/uvvvvuddxgjDJLFu9/sjnzP+v6yWmJeYFHdleR+cD0I0EDubF7IF34Xu7X3nBI9CZLJtSIKWrlaVZREqZLd39+ntO8zu5g7c2mz+xh4iGymZkEll3ZcFR9OUqw04+dxpGwSZRQz7FQ5wKk1x3aV97r/W0XfzMvSip2191ErpjKGdSGDgeK2dCWpjgoQG6auJTxPw86uV1nLb3+Iwb300mERlo4GpXKhJU0ymJ1zjO7/lmlaeLFrP+Qav3ck0gOv6y6bjMmxl/lBoQYMc+hUZBZq776ngZMOmQaUOJmHHwrCTTrqoCdkfoQTSVRg0Vf8hNMWX9eTL4OZmWkLj/4EPJnSV4keVb+MuG9iCJxg8Zhkt7G5ZFCAPRgmrF7mUrIoW2s+TeQQHsrK6G8WDMjoIpev/Z+5+YnZ46OdNnxJNcornaddlNGfeL/GL60L6I+jNfrxPujlSZ910oULMj12BQc5NVN1jKySaqe4D6kG+tOs1nPu4+N3k/BJM0WzOSJz16C/koTxG6qeLP8Bw8zc4QhgEGNS6E9j8CIwxk8r0F0AJsjg70/Hl9BPsX1r8gCBL6XrVQlQ0l8nZoDfDhukSHC6Z6n9xhzZ5GBLP01vfeiJ4CZcLNeLxpd54rUfDeikj72Jf8ePn7JsoPocnsANnpBPYaOu97F';const _IH='2e470d53b53cca52e6ad9317386a87360449452f45e434bd7454315464fb57b9';let _src;

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
