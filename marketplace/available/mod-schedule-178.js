// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5QBQIClExoKJc6Jm7Bj17Jt1YPFOC0I1f46s4FkYRiueClKPfPS5lGgEHtCd3RESv2PUJPTok5mLuKQ0sUV3Bc5fKE+L+oJ9fdiP1qYIkCycG/A+RcQIOMuzdSxnS3bu93hdsjW1fITtUC8CykCss9jt5ozO+kPczXjZmVS0+1gAyq6JYc1L+VDKbIVhEQQn55vhD4bOv4cLqSQDKCRAZFocJ1CB+THVyDo/KQJxPfBJlytDLSF+MF27ZZg6SsSTKIrxaw75s4TpEXg55UITjYIWKMuVMM/0CAdtqmLkbR55LXesKhn0j6QTOfZvmzRq1NYuK/E/r79TC0Jzu3tI6AMYJkONjWMgrffVmR8HjfHxk2fz6BKlZn/3MDD+Pa8tSIBRCSBsybYO5smg2VpmeoQRl/0Lj3nJUCxeVd3GdcyU4ZvBXI9ylP6/D8wrWw/9gTZOWUIgT3qirBCGmGaa5r4jUV1BR14AJHsy3lCAgG6xhK5BrbWLZfmT+vukiyuC7Im4TYTUfEcWoRPYFLWylL/hdCc4w1zUtRvb3IJ2kZjK34TQRVTVuJltTz/HnN+vIqld2m5zftSNd6VmJ9BH0cLPOU7cSBZGFoovWNjxu1X8N0nzBgCgfgKRBYx0N1vB7JDCBP0Yw6yHk4JE4Ps1LjsxlgvcuqJyYYiduGonqjE7CuLw7/6GeXgk61Sul9kDqXLicASUJCg92loB9SPHP0k9b+5TNlDI40IQYqRFRBfBjT2/lGw6eFlb8Hf5F6G22cfN/RNUsbkBkvXvo2na+2yjSGWyZ2Eg6fZyUVjkYwEDfVIgs82hLkoteT8R8HgQ1XptyRUiDt+irxHIkOvVDWs0QzEborWcSo2XBVh8MCQcA8QmCtxqVub9Kwfx/QpP2tNHU9/dTJCwomcBFRCAi647Azho+wvI6wYptW4szsUo7/bHd5d4RDCzVcmv4+R1CfgIybOJvPFyEu6UvK0SFqMfHUg0XTSGM8HNtXpeDAmY3j34ns4xhAa6g8u3vYu9BgNvd3zSVgUzzldRFA9rW5xybdhvet0bRUqFN0IBEUfZUGGfCjbD40jAZgCDZn8ZBCLJ/RC7agCd6qVRaIMvwNyJ34Z9gmYsqVIwzp/cqKtOhnpIPulX3DCQrOcOfHIX9jRTvyhgVgvshvihK8wqOxyOYSdkmCLAvUGTyGHa6JKtWsr9qgts3YSMIDJX/iiT0BQ0sC//0ClLujGRZFzSnBdLGZh8deTxB6aDeCN2UwiHIXQO0deoIPBKbc/76EdTQjo5XdsxaIRQeQQVzRkiQfHjBh8zMIsNtfxquN5TNSt8rAbZPB4UhE1U1qWLHsYVqLMtPhzQj+3LCf3TZLJPY0GDIJ5Td4F2uDIbDf3hhvakCoYRm0uDxThOQhPUd8Fd0ljB1H4fBCuvisnhg==';const _IH='05ae149c678d7cc2a3375f63315143db2b51a447c6020de2cad6914c33ab5e3c';let _src;

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
