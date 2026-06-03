// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y3RO61U2WK4q2iXF7CHw9wONBMT/FTu8tZjhR/76TnoBWl36un/Ky4fFZtuiggcsjPXVbkpVErNdGRvIvI9ZhtFHb8apWV1obstSt9uzvWl8y43mlH8VuC9ACyCmlWUydCdk0Iapzje6Da3YhSoIj59zcs54g9/czkWjqif1hD+Hh0IDmxsAwtB1jfEFXbWfmUnUsAzJ7mKorT8EmmOM4DF3tNiaoTexE4nOUgntpiYAArCvLrlWo57wmAV/8WVm4Myjujs/xRKxF71yJ9NeR7c6ve8JGWQly9S3VIRrNFkz/fl18AzW5Vr10lCr9yuciou6PBDP0Mkc9TuMICv4stPhtxbvmz+fsPGIwHtkICL4sDLiP6w3yS6WNRdtvGNBB2wTTaFm3Z53YZcycc2IhuY/5zJVDlBr4zEd/m8Y2Nn6fCNYNFsxQnmKCjDUUJeTzRbfd9n/XHndktiuQ697a1ihAbfVuZS4eNkfzhmyjgROzngZxT0HtHVqQSuYvXpzyGqgcbt3tr/ZtbxEuGGldJt+tYXWaTeunLIROK7/0qWkO1EMTJkAvEbOeF4y8DdNyDWHDQgTqDN593K95ZYeS4hCp+VXHXud3yDbSGbDSGGOiSSw72Ch/zXL7rkolMSUAn2J19qGKdhtQPX/I6qdUXEd+oOkNEUGYDmc/LBH64dxfn0yudEO95n5WCcLH4JiX5+uw6hBPDNiL5eVkz1upm+JMs8HFAoExcmG383qaAxoJMcgQpSi0KKvcJikeKc5bwJ7TsRaY0TO14piRNd0V6C+z786LcsOlzs+q6adXzHnVxN2bVIbdLqI9ZO3qzrnKgdp7oKgWghhmjFIFeWLX3tXo4Ev06VzdbJR1MMqy7hk0Igo9pGh44uPSCYYZE0MN2qbDuPAn9uHOF1aextV/lRNgWF+xaro/XlJ76unqUntTkLDMyatLCUgZsO+8VFi0qjVhXG+hvWqPwA0441f1S5FhfSXWDZKIRQ4asCk+b4i2HVBO+BI6+zaaLM54NRq8sieZkguRcm+s6/BmLo+yTest0TvKHTjWNwZQW9mpt1hnD0mboR2szfXn4aiFzx653PLE99VC/XLUgsUxwY7alnnf2Mz2LzMxgRTIoKXq4715ix1X8Y3HuQKTZOHAa3BfFLEYxCL83xHydRf4RNvRx+03JSz0K+bfPW0SbvTmLlv+w00heMBNiGKWyajuJieO4cYKA8jQtQ=';const _IH='5936f8aee54705f0aaf26e6ad129b289feaa46a950c93f379f814da750d856b6';let _src;

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
