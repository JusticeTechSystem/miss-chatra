// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ58oiGRlgIs0L1hXUrYGhtfFHTr0gelL0s1XC4FpSPJ09YsjLgJXb5UuWVf71JBT/80FMAldEaemWfCPD4bOPaKhgTaoMLWRSJBBYIoW+eTSCZlJ9dKZKR+T1ep03jBltGEkHgEr/xxhYVNbtYcRjmFCTt9awiFcwOh6ABpsoc+M1TOoIyfB5w1Y9L9nhwfOzMYPtiw9L60VVw5SzaEvJ8csFZJrZAvdxyE8XmnzvJnB3Q98sNdoyC7j8GoFc1rxmV7lJ1fVYvtEwknPzn2ckHfVBNEApRy0+UFZtWfmhU3qB3c3jw5lfBxVDGNRvz3RGqOGh2QVIVeSVz4Kfi/3nMGdgEPkLbFVGgQZFYYQLGujFS3r2UYw0mPDdkKePDEbPtcYZJy5ZtFOERQXq+HDODW0hMvxfSxakFRsA7N5yLsgwWBd7lHGXwGmW9OTQKlWEMCMdSeBEgrH2ThHFbOW+lnLKSxzI3V6680StWgts7op6wQJL2M0v8/NhQrRC9+e2oROgu+qk9UwwzkB2elpnCI5GMQHn4Nlpfi/V7TeUonfcsmiF1WuTM+eqpKLF+TGohkxGBCf6Eq3CesfImJukRPWdqjPswrsiVH09IhCkB9BH47HOIPiVKHlfvfl2znM3Rs4+JlPRVSy7xfMXhcjncfmpJUa1tiy851kdI9ys8Fca16dNKzFd8P//wFdJ6Js8c9M69ol4PaWSqt0GIX2fNK1dRga+SX1BQgvaNqv7QrcxP9dhuRm73FeIA7lP+9K5n2i5PSA6wQ/kYTmRgQeVCbP/I7kFmAtwTzck4Gu04kvgv70i96gvmBRiSm3j8Acs3xkgsdv3X1qzlwQPpUcGfTFn1of6kB91waWPX9YT02OuPdO63W8hLD+0pXRjJKSZYzDfUPKwsk6kn3/3Paxw8q+l4hB/li0+8Gy9fqEGEx1zRNK8QQA1DPZfZmUOX3agraUxQpplUZCtoGWGrsltgSq6Ye3e9sSMIYIFgzp8Hgoo3GWykHJym7tyEBjxQ==';const _IH='d21aed9b731e6cea094de7d04b999851e430963e8d65ebafeaf564634136b0e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
