// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mybit5QroY4Buyiw9o8nRz/58fCNsgytaDN39mUpNqQxZUsFFk0W23onFfHS+CqANHrWClIBO1tNm/9XvNTjHXx0p2lX1fEbjoKlE8uJeloA/Pk5msh7iezUy+jApDTzXN+P/zgekfMiPrf8JsWUWazv/xYUmeC33B4Ab/ad5g337GqsEB2AsVDAoLpYYgAWnzIW9nsYTEAD24vIxUP0SEI4ty3DIDGnvG54g2SmhWjoJEcp8mPnYdsBC5O8UhZat2cCvPb5lG/58bztahahmkSflhQ2vX2SnzFlRSlTeZavbkf0UiyLsJQiOkgDi8P7IMWwh5bdaTBfrL5esbJkn87g7EQTv9vd+BifOryVrMG0BonwnJSjADhgMaUU9WjrVonyJnTe51qGFRzmI2EaHt3DelE8JwcAfP0U5PmUYzsG4bQ7MnWTp97rliGzOmWuVSWZ1llCrVx5OcTEoWHKXkvd0LSh/3CLBwmmrY1Y2DWeO9k7WaOghL8k/13tBCUBlLCLSjEJiWe5j2kp0+3hsIcxL55/pS1woYn27YfDl30R5lxOGZ9UFmsB6ud3ZBiOmxmLSmfe8lVkPoe7tC2l6Szv341jx8Z72dNsrNMPixFRy/J60NG91B42ik+pIC4muP4iyRyToNTR2Ckhc0VXftBQh3wLJlGThnShnbZ2EiHdU9cz5UT05WiRwenj3VwUHDFBBGB93IVjRFvVIiGk3/IT7pkGmaJmT2SoVbdq57j9Rlp9cjc6WzUGVQv9wv6tKh8ZOdBzaX+oeuONqkEd/UpBo52yfyU58GE9GzAgy85MdbEEGbr3hWKKqEQjFD7Udn3x2Ac2oi1KYJc9TpPvgn0kGBZ4KvqF8KWnLyZon1O+qm/e0Kqu8RqTv15Rw9dEDIEwjtSaoo/JmYS25YbfhrtCpniIxQoWPVwiIv1fpxFRs0MXVZnQRvktv337Se5YT9kFqgEaxt0w3JX1WykuWOtISgQPkTXGltGvW0H5t3LfoxeeB/uD885hVvPGTKBUbl5HX1M3qvfHXCnxf8eIZB6CpmUiZK4q1ZQyqtsR5GWqimqUEruk8okdCewbgMQQlIox7mdZrXrHTNUxqvmksLVfHM3BFd1Z4i/v8xm+j9sBXh50/Ej7XF8lmZnIzx6+Pwnk/0oHn6znLqmzz7dnhyIcLGJkJF3caQNK2Z6VfdencCoat7QBpDNXYzwh0OJdQXSeQD4=';const _IH='080807fde8dd8015e951406b15941bb053cd8387f53cfd24938aeb09afc4cbd2';let _src;

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
