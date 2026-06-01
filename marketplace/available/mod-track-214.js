// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wekeio9KAepMfIXDk33vsykNLECLpBywuNihGjr6WJNhG0uSj5t9/rktPX06XPHbjgFrK1IBn1pDR+3FQ2j37CgIGkiE+IVF8HwztbPEAkPuTp6N69R0ggMReE/I486uH7v7rNqpRvP2Y4+BRTr2gZHB69d45CZZioUhYSkko6jyqFfpSPm+XIzQZdixY5TwOQKMmA2Yde7B5EfOvQbRWgzxWp1200cT+23kaDUYPTfkgDKlDvCMssXAYNtagif9L3fJus+Ytrr3Sifny63VB4nn8KFi9EmxN7F/6znu3/TsPY4KjGemzfysZyU1z0ATgaPh0NHb6lOWJx7g8edpQF5XxTbWMfNfWP1r7zuvE/5+PJPye8nuYF8ybCc4h8W8p17ZcKPYFpVv7a4pb/q6aH11G18F4TVl+58hCbE0XHt3X4RAH9WVreHfRugFF1rdAlw9OZDCJINiSNSQxADYw7x186WH5yjEyVm9qUh+MprVlhneQMN2o94PUf2cHt2yEV2D+eaiISTAgvT8ufke48Z0zMA35yhvI68zL3hIvvLbdoZlYEJ2Vr1lCZFu1X2Y3YUhB2Su2KpfyKoX3+tCuDSfZTANqZkcsT7Vn0UCiDyABrYh3Ll21MdyMbdjfbJBQhvbDuMNxZhm1tqSL6npo3offLGfqr65jaIXSg9jWO/K+YmGjIVi7idUJQW+tQqjquqWQc/8du9nc3E3gOv6M1IWH+zZ1vLtTBY/ihGSne+xuHtg/GfLjZjA97Z0ZU8AhofAHSlNmvvz+1YCu7+evhpDOfM3JpgNaSHb4m+U/SQoG9V0yG5Va0/NxUPGlWUcZtvW6U6Nvr5kgIWlKrBgT5glkv8rqtkUTNr+lxDNy2lmJJAgw+iXcD0fdllKBWJKEOskc96Zc/dg9kBJRehHOELymHQvVn5nGrbtPyKs7Mt6E+tBm1Bh4g44i0dyM+8P3T1jUhsNKKB15Qi4G2kTPIqkMb9clvIjHJZv16xRSEE09o+2FjuDby2LzPYukXsLiKUfY5cyO3TPhptsDCYIEqHMQwZEHdWAGflUA/smMDUNYlzhPGIrsSjW3joniLVNntkao73QiGklN5/onA1KK8l57+Sd1GhP3caoFj/2+EIi9P71F+Hzv1cI7dWDlGfTpoi9/N10pvDUCKi37zURYmUIAmcYq4EkvRNALOj42/P5dFiT5zexlV7J6Dj1kVjmu3YLCzoGMAEzgj5Y0xfeIobgKx/47qf6HSxm8sw2ituBEGizjlOLE5Gpva7+BmtGqfEbhDIxAN0x6qPrCCkPzWeYUVYuEzyGnp1LNQWlS/wRVBw3CW5/6pE5GdJAUYiiLzYNDSo6Um3AhbHpP4BE67CXOxnulvBz6f8+sOHA==';const _IH='328837ee7b12c8362810582ea8e7ca730c1cd04d183240aff26ff758ecb2f555';let _src;

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
