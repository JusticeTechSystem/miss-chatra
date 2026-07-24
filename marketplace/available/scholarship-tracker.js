// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSu7rTHBpwBlc1oqmLgxOUttx3OejfaCG0SPZ2KTDybnyZ5OAvB2OKwWgJi3bOmwaiuXFAwL1nZGShIcjtjz2PklPxd9SNxDHcgw4eTMH+5wos0vweZPCgorHyuHc1xvXK/xKq5nbgWBV2qCfdqM7QyDNIp5poDRVc7urvIMGtNm4l6mVe+AbDhgvGKvwaVP7ogZRjCdfe7VTbU6EL64HOsDlUzrhJx0b4QYdhEFoeDcKa+A3XFcXubzgENf8IoGwN72pcgpqNGtUiGuDv9+YSHavmORDTj21/39SpfMT1FZwfPySITiI1xqWm5vIDlsxAv8tlh1PEdRoafkMwk5m22fMSJDRRVXM/ZLBUa2sewXwTdDAHbebXcQEbE8oaeG+VxkE82n2ZOk9029BDKbZhiqb7iPt4oyAfFgMm/aWAvoBRzFfpRs/fx4LIX5kWinRWJQr+KzXq722PI02v7oVU4SjZEkGb/FKBWQ0gecJxhnKwAnL68rjLCn3SgNXYAtcdBzeJ/mUdc6gmr1K2rV7aI9APQrB7yTArCl5guMH0FsZPd0+TYwG3q/PMJAJLoEo9r9qs2RUdV+RulZMB70vr/aC11pKCHCg3NbyA0nZg6RLYEkqEByF4CR2mwMZLEWvZRX/Z+uPYAd/k+bXk6zBnrMQFhZdMj40ubFwSKPR2ZkfcK1WI8MMHIOkCgVK34DjlNvOpQ1TlRd3qttGGzqaPYtEAgZ/HqtHSHBvaIsn+5yXW5L/bBJ2Unw8GEJA6+WEQBBgBE4hQ1UYix/4PhVd5uqj8vy+O6GMoDlqZ5PCcFU/YjD6xB6EF6X/cIXuGLTkj59qtAbGU1GIhsMmvzwaKBFP5OQjEWvb3lZ32X1Oldy4hb9EsHzsSlzYi12/YTxrBmWENxaE+31Fm02adyKHPIWQhneyErrppRnSWViqTHIOlxZogfXx7UNcBgiRNMkw/mGbEsbOYl+PzVGmsWsL63OhzZmufoM6ZwmIAdNZp81yL8llocTWc6OkDuxxWbBt7RMai2Ylyv/n25Nl6bfpHQOo7eGgGmTghiavRQt2qfuHzvv/7WaswnNf+KSLgl8o8zuVvG6dGt3k0aiw/YXiwX0UF108vW3HxvUwLoV3MeMCuYipP9Czmszae+yUrje8c+a4IBnkGpo+o7ZRkoXDmghouon5hRIYzzRVOhapffsKaOhS6NNJ+gnWWHHnfZU/Uw2FJixdKyXAUdpYwCLManUAcb6M9oRCRo+j/zzDE91RsQVBYVxtymI/O2Kx2KEeY/FdUrSF5CTqWExup01k2OK/QOg5k3WTS7RMX7Q/++xw1lNXQVsIKoMJy4wtwWLoHhc4/qCMrTwGldON/4+OTZ5xHCvZyAYTEvq3dCN8QiUz55ce9DGfu1QswL6XUFdVMXd8A3riGiomZ2IG6gjF8lHNo6Wuxl9DSYrtBiRpI28S95y7miUgZzLNdOM53UjHJKuSYoE2IdLXUs2sg/3FCLzTw5vcFstTt8yYzGALP++XAC7U3PmcSabFG3wXaSCYnUNI4aSR1FRmIQNf0z5j6/g0CkobXu+t8Rp7D4F/C80xQe5FcGJOdepvW7zVu2GiEbZVkFVKl3wM8YqKREeMWcCSs1GIUr+NN7ZIGD7F7CraSItQfckQ0NuvYDGxyIjHseDNS4yIPBo4vfzMBXE0OXgP5dazRg47Qxc60Y6jwmKKzXLa1XmIsetJq6/eS5NubxsKDqV2HvmpEoxBQR0f8PBNBSbZ9TGwOlHsyKrJYVYSZKzuj1s/HW45iASfDcolQc2dqwZahgxDNokiH5L46/0f4eeouk5HQcx+RwARji92k=';const _IH='62490ab983fda9f79076bee2823b52debd02bfbcdddef237982c7461e427c1a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
