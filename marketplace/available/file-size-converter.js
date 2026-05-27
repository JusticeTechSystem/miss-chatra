// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZqK5Du9Q79y1zMa5xL1DEIkFIXcpirxT+tvARQq5vrP+EVWZIMo2T+qK02QMF1QV8IH5UEJL8W7WupGLzH7d75+FFpxZQg1lvVddpMnN5jbhAlXAXlPwEeDs5ptAK0qnmL/0oG2K0wq5m5+V7wJkE5l9EsUkgk+iw5/p9/FxGl0VFUyEpDa2pc3YFPZbgcDZt8yiT/9iSe/ZRDKTtczqMzWJxM7CCIe0VOknTVmXIhkXLy2PLVxZjfK6shI+UXX7szHsIFwis40OmxUhHm8JEgon0As0+kXdCqrxmBtCHQnw/SVI23vi1anYMO9o+TvZIoiwLatl42xinOpm3FlRDesBF6tsr5HB0HEufB5o68GcJ2Iw2/3rHb5W7PzNgDBoNs4mBiy6Npi6wgQiEtMKXse3ld7rWOCj3ajVYL9ZVOqN07rnDA0ParbgEL24mTi67wrjt9cuTsNimtYvlpf9WMYE6M9H+w0WSoUQ56BuSZUiglG2Ls8mdJtgvNgjG7I8u53sHyKMHnBlCoOFn5kXEI02pBSs7wnlDRAU13m2ri4/LVbgjNlRPjpixwJHNQ8JsdLkyzYypgNNZxFn/j308ya9YqJ2CtuP7XWC2d3k+S4CUt850bv4cpOMDuCpRAd7IGdyKAC2PHIV4qrA1SgaAEB9xt6QtS7ttNaLyG3meK+wnntTx5w2dOfQ/fsCVjw4GipjzaZWe7/q4+oQ0t7K74Yh7uIIkWgLzMt1HpOvIkjExMYnAaUcRGLrTd27tazqZZMPQfoo/yn44TFfW6viNTLPTFRyun+VqUM1mphi97dSdYTJcZrv64CgP0GoIPKFodP3A3NycwTbYvlDGIZlafZtjLfDh0VkaWpqnEY8fb2uKnEY75f1OD4j9X2ta4QC0JsOQt7jdM4gysXrhv9VEndJACFflJ5k4J/KdpZTcjUly9Kt8R6GSXqFB8zghZ6EN93D013GSR1jCefcGE7NwK/FiHCRByBjvNNV9SLxHNq12bvOJ83o105aWMET9kB5aAStkFBU1mLPkyWEYZgqQ2o/hjTlFB7v3uimwXn9S0F7bBArac/mxt6m3XlDgdfyV27oM24+yoKJkywFRcZneSv2wG6SbifvsujZ6DtzA3sfT/VwwHSgg260f2DawJSstN/HRGr7IwpJRZOFUeGylM6Xt/ISFvJPm27PAmx6fiVj1xMhQWnmXPMfQZ2bsG1tUxUpI3ioykLoprzYUmwrpbyx6ILFHSOgSxrdgoV/H4cyR+s/Sl67YtODtdsVhQKcGrb6Z6b8zbWgMe2ODFeJaZAGAyT2WX25zIft+lwkRmHMxkn8sRcY0siwHFm4PQh+mxrpFiwFWB1QdUKn/6tAVExjWhbczG34b4QRASDGRxk8g7ASOgnRtYuJYmBIAojCv3+1GuILjmV2CpvEfyA/uCqvEsswCtVJ4yg9U4xuzdBxGFOAwF58/Ytxzce9wJY8efc2JuDK9ogrD1NPs/SRGJf8X5Zx8fVtLX8We7WJFlbUh95iZ8Uamsp1QelQWHqxdU2LulfTCgFti6F/urW69D0nKcbFAWyp07AV9rxt4hMErCX7mh0J1zpFU3fslmCzVM6lBlzlkm1I37iBU+toDpqXRHFHxSTqcVhqWfgd9anndwPV64/22LNNu1eJyTK/TFE/J6Jvf+M+TlOhcVCnIbpodgsWiOr7s8LzvIUzcbiN2MqjHqFKfMmAO48padgIN+6ylpSgJjdbhKmX0XlX1v2q/nAS2WQqhxyTVq3zSLcaUHZTy695fq9lQTnHjkAd+j3gybA9F2/tdculutWLUTxajUVn+rDq9CljfDrNo2tgLw==';const _IH='1d67ba5ef53ec2966fea9061ae84b17621deca08c70db4293411dbfb55a6fbbe';let _src;

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
