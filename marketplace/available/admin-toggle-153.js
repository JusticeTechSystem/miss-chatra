// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CVEOQDxcWllqxv8XJ6MMxJwEb+DflevstuvgXmulLThWVIhqKv6VmMVFDBt7Ge8BFAFlaO7iHd6eWyy1QqnDR3UuidQJkeL6bqnX3NaCKjpgTEOxk7XWcZJuUZFi9btBs8TWtfEGklxmPGdeK64DfMdnV1KFuy3GXCTJVJ3BU8oweO2VmmSd26K3yimANaoPpakcB4LjPmJoCwOqFahcdqdRZE4ycIZuK3qpOI2ZmS5RuwOS1k5dK7dkL1LOLNuWoGV8wFg/r3UhPlJMh3m1mrt1JT0Imx8jIJEvfE4zfPgAPBox3wpoE7Ik8Bb57VtFo1mp+wt1zL4ZW7YlZSxBGKy1uAI9rG5zb5oW0DlBYxZ3Neh4dLU+RcVAw05Mc3qKpU6fqde/5Bj3/Lv6Ze2jgev3Zl18ZwYjxZVxH5Hf7s82u4rNtjDsbthHmqlSmUbZcCFwu/KPRYLODNtpi4fr/8Fm8OevLNCmRK0UtWjSqF+QE60700UXkMA02u4gC/twkfwiINm+ShBmFnEgN8OATuYU20SPqCPYq3gWDF/Ne2s4iwZ9asX+1k2I97qzRyREx42qn9LPh/DTBIEoI76ktYgB6SId7QTL2g7pPBOktqu19LpT52G8F79/7Wd7Q946SwjUNQZ8Wsx5hDqenYYC1B2pLx7znubm7vcdTU8jp7O5wcPZD9q9XePofxnjX4DkRqf/9aiWckP7asHOG9QUtMlU/wQ5TvR668P3MsqFxr0kzYj7Z2OAf+5KBB0YHnyULbwgA6il5h8zcs8C3yWXTIkhZBQOKIVUyaU/QPDMRMy2Ru5oUP6L1L6EkAXUShj7DKCtHW9bm7QW4azqiZwnZIyRM71L3fgtj8wqKYRLDLwa37LyfXxiVcuG5gi1gznN6kOTUpVTkCeKSDmYclCy41ZQnV7ARm30sTZAqVJE2lQyUrbr+UydfdCK6g/u9+Dwa++i3Lr0LgyNtpDFupQ0jmxnQKQRgsoEaaJykCMSoMtqewuSLGJOyg/O7F87bJSm5w==';const _IH='77f75f18cfc8272791f1059e029cb08028ed532c04c419908716e57ab9069aa0';let _src;

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
