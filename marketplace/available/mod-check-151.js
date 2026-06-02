// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hOIEp0Q7m0782ZH2rPGmlOlkoZVo7/miYq/mLQMmTQCi7D1g2iZIER6GjmEmQJmVUW4MRzvpUBUKi2pNvQ2ixK+9QT3CE9VnF6g+UzXCUrbGewrBJA+kIBOdGDYDBj12norbHRjeJ9shG3nhmzqX5spfsO3GesDEIi1sI5Cn8PUgeomzb6pBtoMaLYRyFsLk4sjSWfT6p67UQGfxi+/3V6Y8v/ya8qutdNnHpr6r/9PX4RCd0T9xhnMdI4TfvIJZbJ/WhpjWNa7Q5MAwL+Gps86TXv5Qcc92CUsULt5Fdo+ihzmv8WGuQZmBPg7z0E5ERh4OB5LTnW7/fA/CFJMzXq5fDR2to/Eyd98roVyBR8bHAFuWUhcGnoWumS8qbLQQseMuoihJHDQHK7XohZhAihOF4NaWOJ4GgNeB542sc8n9jttjve8UL7Y1SXB9sv7oT6STxBRqUbNACFoT4TVDBYtoksC+3fMTV07AM2ZTNdqTI9OTT8Hm2ySW47vJhXTYWiFJjmgk+VQp9D1PLbNUZnz25Yc1kBJcyHl/w6VxF51MRt/44YXvmE3w4qpLKNHT4q8/EDznoTHeXuO1QFs+Gyxa/Rw1K+LJRqPOw5DpCLOaftixcQOx+e4VNVUpXz3GemjVx/zBvwBuE6n75NrphxMe45KxpTR5exHEEDoWQSE0wkVGtEMTDUYgNUcF9SwC/RrPLrdRcd05xv/784BfEpCfFYyFFDNDsnvGCrQ6618gLLtZP3c0c3T8DZZv+1UzNE2sikPNTyHAtIFnny/YS50rNeNlpZSK1z7lZWr3znOzxlEX5slOJsFoz7eAOSzQk8DvKScADUtxYlQHDDLv8BPYKUJ9nsspwVOhmtv+A7+w+hxAjWosfdoMZ+u5SI1WNZkPK4HJgq9hYAh/fuezqxtrQtKmVuvGahdNpLjj6DQHHLoEYUCs/rbwc9OH7wlgVfE5Oy3ErUPjKF6dOI0w5PRj8GWmVutLom8VhUgtwFQ8kbQATGmHVKGIlx5brBmeghPZt/j8GlzLh6fXLTdGXYB8l+KzyzDI5Iutuu84a33i9mYnGZHFp259G46t+3522kteNbSrOSGOFzc1TH+ijapPo2IwsMBZuxgOMmkmRGypHbM0rUjpZ8ZgqiolmitZsr2rwWUe/BLM/rQpwTS2V6lAl76hToNBCQKh69DoK1k4p8UePz+VbWolOCICNQs0so+gyJH3YTJhELRAC6aKc9UZlqoe5MVSZUHCDbvNVKsfFcQwNvq8KUI4+3GfF4z3TkfkzdbNdpCeSE0HQmbF92IZ082aXjqclY8F2F67ijUe4e3n7wODWA0o0oj/CP/TKyVkoSs0+AKCOayalqVoGU+kHKc7NDuPKP78Mmb7';const _IH='436ec5cdc32ffc1e0877a62e3ebc77e346890ffcc8f78d74f90a588a12d1a8e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
