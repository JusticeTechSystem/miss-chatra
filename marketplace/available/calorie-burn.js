// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jyb2CXnsObsksFbNVwbKijaEj32Vk/6SCv/4lhKuIJ1rd9KVnA4EjsYCf9vAo+w8k3Vm9nFZ/9RwWVORxd92nUb01Q49Ia2G7ufRGYccmLwIFO8i2nzRcv7r2dtsNNLJBg6kBGuDKNLI1HgcA0fGS1nXaCluqjp7x1UkXbu5wCHEiyPPfUNlZh9KR6NUK0ztsKUzOYZiwYZfFC3fSkshFEn1LpRmPJFBaUx6/4+lPFrt4FpR3/V3oFf3IUmCxqGAv6e7DbqvsdmbD1ZX+B0zYKDhMhCX5QnA0FZOOQyShH2Bf97IKFokIvsrULXvBuyJPFFfPQ4k/EYYUfQwBW9woBMdopq8jEh97fyG/p4HYDohiqddBPh/A7cJJ5QvXEZ9ZDNFri0PPsYirYND9Nr17yzU93mqRyquzUHiz9bHIl8ALQzeO7Ulb+5RYaahY0SRxRQcLXCh7RyX5xlt9gmLOc7ACh0FUJqXohYyzhLp/Iltqr+rVus1Q/f9HkXStiUUH6RrjjF5ocpqb3huoKCdZ4NAf4/XZ3TLiDTTYy7Ps/y0YCsd+TttjVDwnaPba59/2sl3+APXLZ5ZHZQs6HRmUDiF9dKmpkJe/xRe5qt/+yaOxFsQmTZJw5VU0T3OtNFpfZxpIXxGLqxNkyhZYFpOWHhrYF3uxVJSBhss94buW+XbR2555USLXoVMkDx+WHd2zzpQgtzZHrMvSEEtJk0AZR5zQHPNq2RBuy2RyprIwPzWr++BlmGYYm9x0FupAs1CSfJakQJ+K4aumlz9cxmFFUYlx5LFlZXODoXkANqvx+MDXWEtSvzm9dNESJVzNzXGGUrU3WLojMEBJGj3pm4+P7t9cGhgdGp0Vbor6Ks7EVgiN6EFl8NTH8PqnnQAcfjL6VPSLSS9JGJe8vpKt+ySShH4ElokEtv4SJXiqsUb/Eg5RBP/YShGXFyRMjryqx+CrDXKXKGUmZctLkJhXNJ/j7ngl2nkN8+veExhZK0a4SHcHgZk1J7rrYR8tKVZL8Y0kYZuMU8eRMEnzNFZQYoZum5a1zl/Zx7XeQ6/6p+6yGJApWbLMQ1REDtTDQqOGX6dXK2PUkLf4tsYXPX3BIt5ySgs/RnPI6T5SMYfc92kH6+aojg82e60WG+Nk9rMMk/0VXYb9qpKznD1qGYkZUZ9Y5WzHpTtCIBV66gesIgKUPiu6BugwvgPFKegcoFesaVo56zgMJxOHLPdD6bxb5AJ/+D2OYnNYkRX9lkSU5yYnwI9nKqRKiU6LNw86cjyH0KhRkYKyI+JJdrjtsvNBwAPG+pKwRemz4XSUa0PMBRWLeQo5j/2xEWyw5iedI/FdWTTC8oOqByCd6jAXq884Cc0kQofLfbfk7djKhxQjOf0pEvl63NItR2b1327BsdzH9yptY/+hdirCfAWi8CTqIVQxVMdc+xnB6p557nd';const _IH='56219d59fa8d7566825df57e0ab2f7ac637212dffb33d29f182600e5907086eb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
