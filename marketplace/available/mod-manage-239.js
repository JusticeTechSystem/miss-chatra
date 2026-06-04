// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ClaBmNvBv6IvF+HLvhXcde1+AxKY3q2sinlkLSuDOpkvyaZuG4IMBxoKtkdfSpOHKytCtokGWNeX6ppX5L6YQUSRdiBgqaLYqnSXj/XyiF2mIL/5OZtWXxiNG/ny6PToTF1zbYS06/mVRdh3YuXrBUru4KhKbmbcOJ/RcbhtCrxC82JBgm5AzpRTXCNoCeEPUG3HGs+vQVcFBRN2MvCb0StVd3v0JdJBhzWFuNZvgxrhDgrrhAR/JEO9TBID82eJOLnD9nxUvp/chU/7u+9jPZhpSSdqdfWs0+B2QjixRahMEl1fc/fn6CcwClE5uG8QrC8laDftyisEmhoJnSd2DvXn+us2cDmdqjIjC8WfNb3ASY+6Z13t2PTI/bfz+awSWsjv84A8QAFkm/rBLR1TrX47DeBy0CB25my2a5cVAzmjy28T8XzTTJd/SP/+M+jmDgNkH18rhcoW7w/eXRjKY7K21Ur8dEwZZSjNB8BprErd04OjfPC98B1w2DKOtnN+N+sqqHyF2YUYXeFR0n2gPj8HUNP8wAzdOdgMQXKsfFVTmXcKonCug/4BvJhIj9mSraTk4wVXdaRk7eOsthZLMjvh6nhnNt+/flYdBvEpU6SaKUKh0Ed6/wwfei9vaT8c5P3pdCoW//9bLFzWWkNPc/ySUspR24ILzuE+EMTvEnRIz9oGocG0SVjlU5sILnkJ5ARaJETXa7/GmsTAQ0UX4gJXv0CWYUBpcKTAcsWlCupuwW5+5SZTvkF7e5OOUhGmqINl8WUymXYwN6a1KsRfOqa+xSElqUETAi+WuH6qBugeIDsj4ZPTS51MvVm53TN7s0HYWzv5mRttB5u5pmzUnR2K1oQf8mNjJtLHhvHY3ZNUlwjxwgdi8a8VWHA6K50dawcoSoZpToc8DYQ0W67f8y5oFxmbt/Qs9IUAbl83OdqgJYdDK1AMIg98quqwRsp8P8A9X7ZSspkIDAgzSu43Myz/pqIHZ7Nl6D8oQEqHB5r0QTIkU5NkeTO5wuYpJmYIJRz7p2I2o0K+/hpgPwfygxOKfeEOmX8Zc7whcBcCDl4ckN2PlTh1Ma6nz883rvqwZAIgeV5+0AvsFnwP+/kSBwVSdSvRVYFn3Myp/pEg5U8RfZqt7883Y01LvjipRD0HHjcYrbNjcMS6X7pTZBaHS2oVO4AZ5118CQROpqfjhxMwsvSHm8/ODZKg0WAXwrL1NJiBY7ZpLYvPYTGjj/0+dNQz1XZJkmCy5c5Sn9DbOh9oxtKOfEds0028w3yyRMCFooct5dnkogtT9QtFS6MUXyPTb+GBuENThSHho7jfvlxA/5crc+ASY1slrtlcDgK/WrnRce5WqjE0tTx1IgeQhX95678aErBVkjQjJmkl3OOt0Y51HuUSQ==';const _IH='c1f77a51d4bc3f1e75cb11c90f38acc2c3b643761cc72607e05d9e740ec836a5';let _src;

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
