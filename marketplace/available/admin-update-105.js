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
  const _b64='itBCTcmKmgaKh4L0Gj2MRiFsAmMiyeP/z/xrvWoQ7APLTP/DFggBsza+0f7+IQKvz1cbhhThqa6+ZCvVJb2rAmZkLIdj9DV2tu2poQem8Fzw53xzRA5TK8l2NuEQUcJWHIeW5vF8N83L0n2zNqsvis0dS5l5nSY35d+gLxf+qH4/AK3loQMDmDCjTxFHimOl58V5qbYhNzUdGsNfcnjA1ormVP3nGu/et+76CSvDVgD2KNuh6uhnYfSmymfq4+qHT7WhPWV1rrVkX9zbCqzZdR/LTFhK0XQhKi0RDDTdbSXftlKIBSJELf0v/BN/O7Oku1Bv3apAlpnHExm92MkwLN04F3yZ2OIKcM+bKYdjlsQa1sxAuVrmvIjw/KAjI+mqdt306UrWjXO0cHGVIZc+RoLsYFsbpZoi4tYPYsFIxsxlzzoFScwFqLLNIyUvplbDuYCkR5waSGec1wbKhM8QfK9dvep7JC6q6BwM6vi4+nJLjCsRsnRlVgG17e8TsXFCOzZ5lZuyn5oQuTsyhOKGMutWK8jz2ed92CaAbWuftWIZlFuRtAz+CXkBUCRn1wSkd6enJucLJOAMdVj1JV3sTjLtTxlxSUcfqt2S4EjfVn3zhzxsnwx6nUIKsUlQpfr0maIxCZ+IUL6pUhy8wZDaeOesuzc4P4uFRMgKATrpc9W2x3UNXNW8ZO9GFgjkF/jjnuNktqvM+vEp9yKUgZAVEnJ15zBnvbheE5K4WxtL3mjB8FMSz702vdjIiHNDG48ElT2SIB/IFLfTO/VxdKMJVxj5mW/hJLzdBJeAblNB0/ql8PfahCPIzlbhvis9fhuibtZ1UyarxmhQW8DLdScqgPH/WGUvkH3z4MX/K2Tca3oRDsINJR0vEfKxVMrzzK3y0lldvnDZFO/FOcQmYpqklwnfY9kBLzzlnCaX/gaQytv+adGH5hBM0OkWZkQW2A9kim7TWkcmeGb9NGHm5TFe2SgOTShWtTcY7mNkHF9uClPG7YqLv7bCETh72aCv74U44g==';const _IH='2c5636db13d140dd3bdd62afcf5d10a31f414a9c2941ed3d44b5c1a3f131e7cf';let _src;

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
