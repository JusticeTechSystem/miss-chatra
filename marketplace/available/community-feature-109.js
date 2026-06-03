// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wvPZaYY44qtqqiEfBygZYe5/bwihHVjN4JGR2Wu57JHpGua+eGKuAtfh+3Ip3kv9a9/DR8KDCN/olOhVzCn/sQL5SXq1pXZVn9N2B+Y7rirZBuWmzcgk8y2wALlgDerW2wXS3F0O/GTU/3CGl5VgMmSY+0PRfWEyfMXBo/LSDWymJfKKH8pIZHYjWS/gRIkJmLJiJ0EazxSwkFnCOxY3xfTnx18i87/5IqGAiX9f9TL6oKQWigfWgiTKXNCs5S3sDGGyk4fMOB8/h/5KnFnRGfKAmOVo3/jebjg6pt0Ntex8EzP9WryEiRtrQkLT2TH3j4/0dGB1k3KAOpQCEmT0QdK5Yy8HG2tM/bUv/YO9dzBhCjtwqhvhwbphgSw2zWAgVnW4BPkYL34/+8diwKBmDlEk/LUFUar/zOhV5ZIeIm47QFuzL07O94xUHvVsG/0u6zOvlu6ZJlVw0iJZEqXFNJ4QSl9fth7OfGWV6msXXolDr/02ngiy9wnISzw/TiIXF/v6uXOwLqQYGZTqn17KZhSicfKt+OKLPNupGbBEjuBevEKW7kgrQJHXIfav7uXIZvc4GdO7xymbQdCDvHfY3V7aQv2l8+I3CP3cOvbtFXlUpBjGK127snOSRd0vXiaxJDPPRZp2Ar9LfXLjSzS1HDvzHsIG2bZUKhkN7HB4fOiJz2/2etU2lT/yfho53PPC9VHA2jOVJYMwKKDrS91YPc796minFUkDQItUEMGb1LNKnEDFUuo=';const _IH='cdf4f8860510f43e87f8cd99c7d4e259ccbb03f3ec455f52b0a1920ee74844ac';let _src;

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
