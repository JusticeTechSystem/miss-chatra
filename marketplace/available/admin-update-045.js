// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJTyzkO5WEGr6+C1eUwP308c4wCjhYx4xEsvJ/JbB/BOohWryXrLy2Qs2/0wXsFAoaE0MnTwvTNPaWzn9K4ptFA+IfHgxwIbGndiaHLRMs64EkgHVwyETd/CVk6iS08z3c0KFhikH9NYwqFp6lZuMsIT+UOal7q5s3GS/0EX647ypFYC9sngurCtxSxTxwP6YL1xXBgclF+xEdnQ41QE9Z0KTOFlafVkL3gRjbFfyekz5oK+5DLDRdXiXQoDizVYQpjLPlczq81sTx3CzkTtUT33fyJPpv/jUz2kZ+DtmsxXFxafMvjJNRzpVcOE/MJVglwgmwhgcy1iKjOvb/IEqQcn+QK/gUeCnFKGbdqhVuVAfg6TCUONflRMRiqmzKldBwooKBnhqPUj+6WhPVjab8vXEgEZO6B4t6YtUTCYTFsR3I8wXQoIPPecHYxBttOyp3Fdn3+c8btiT4yBM8jd50OtFMFxAmaSF2fAkNahSxJvR8pt3w+SGrR65fYvK4Oy0UOkIvzQBjnuZIBImU+CtbDw1Smo5X8bFXO2NC8fc82YKVGVq9Ll80Gj4KDzFCvFxTWv6CPt1i02CoarTkgK45YcDRckW/9BSrCxywoBeb5NQxBaVuIjpKOobA//ES9jLsXo1r8UDl7dVCHNFcIuCBAelLf8fbtW9W+6h5xc2wcu0hZozE8DxZYQctQKEMiIjPzjYgoGVkzRwH7Zhgkbpr2QrasFe5Ok9yJMehr71RHYeJPmUzyIekrKXaPSJexBAvMZbJ69R9dgWr5QhAgk90pTeQGdCRKfq8AjB2ZRvkSxaUQMD9F6hLExoWKlAaoHoYVTX41z43YLig8XOBQnZiMhTuSHKkTTPec3qGKh7yOaJEfl0GjfousUvQdOpDevbYj5vioGeIqXBsmszzrlcKoIep8VQ7svEUVFlzGEjiQC1aMtZVJl8uqdb8HH/Vic0SMkTAs8zpXdapniE5hKt0Fwo8mjhm1KL/y1thSi9E3XkQh5SLqYIiS3SEAv';const _IH='02441ae4af7204154265e3f1f29a96152d74c25e074a78a0512d2a6225b63f4b';let _src;

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
