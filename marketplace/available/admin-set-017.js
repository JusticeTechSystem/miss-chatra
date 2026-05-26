// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5fGl8M4ZKQR1YVI6fVsvJCPPg9Ly8hK0ZmXBg9kw6tn0TPSPgOpbhjOU667GwsuCWbN9u0dBZav3RNx5R8Mc+9DAjtQR/0CxdpVw43Nx0UDpo8n0HyFutiikUJPlppdbbZYduKhIz3Dt9hE/Upe3ll8pAUSJSf69IJs4TBXRJM4lfjxuLRlKI7iaQM3rLb4zh64WBmMbUqgsIAEBsx30VIr1BZqXl6OpStIKfffxk+wSyalhSucDjHYHyidlVXGqB65fuPKvTNiJvdhzTvKazy6sF5r8lyKPsV6loPIo/gmGY1/UYRQsWDrqsvurMwIl2QvyCO+BbkXOlfYWRxSsvXmAoXQLJpcDVgN5S3ZGZdptmBxJxbyxNsAu0GL+4ljX92Sp1sbuRtOrLutkypIwZqICrYrFJUlFOSKDHJ5VavSrQr++OKBhdi2P/uxkLFX4Kwd228TSglfzeOyjjLLo5H56ypwW1OvtwumtmoS6krD1mdQmykrKmOsZW5wlxpp15b6BlV98CjRW4TfZCIGDV8TjVsUh6NAJNcb79JYRup9pBFIfM2BjbYW+f7wPvbOZvcZegnsmsrgrmXfv+41MIQw8p+yh+ZWVPm4whNMrXkrZi1SEq1iSpy4ECOMDl1B0IIo49myvwRnXz6EsK6A0ciyPXD3/R6VGhiVZoRqzEJ6YY4E46MLM5nH2NnrpZrGKkKygpJfpQxblTbgC29OcJ3BknAVER5JNvQsAkeeauDIZy4uhggzbq5iBeadktmmcxMO73VVv8mCFqYy++RfksGkxYymHPtK6T9mwLLya+J7u9OWvBMgA+Na1RigLUi2oP+Z/z8l30CuYc59f7+EmlQ+bA06rr6JDrwLlTXZJHcYXADMWjN1OFsuFHL8mq8nBwV6L4wc51hn/5l+hPi+LBJn4hE1gmxss6ID4ndmfEE1EItBXVKhq4psFFI/qZKvWULVkEc0FJR5C1QZ+V1g2C71WGZ9tnm2u';const _IH='c8fb4be41fae10ba954786ae0155fa2dddb46bdbef17ce11271153a254fb6860';let _src;

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
