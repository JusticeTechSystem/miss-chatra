// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/9nbwqyDcWyWSBsbu9PCjVE9bzDeavptX5Vs5pwXJwALym9KA51drEnAVZ+G58XLye4VgE7alwVtw5MBKs5R1AscW/Vn7igjPjpZosB2vAyNba0y9a8/maqWSoOuXrpgm9lTYJAHu5OomB70NFWUiExecpZmf17KZZLCiBYPK1EWDuhM2iSQEomrrQebeyQoYe6WbRU4E4sKPJp4OJUiXLSF5EgSDRUDVZbQ4hczjGIS0ENWlT8Ku91E+DjnMIzQbYsKlMUJqpivPgqWyoxrVXdyIsWCcgMxmGWKXhVTgnlsr2sQhFO1ZtNyx/9toIoFxtUokecC2s0dxpiyA/M5y4ZzBZPYvAK+XJcN/JeWTJc98wGHbED2yktFdM+MopX/kOtsXi5uHmFxcC5XTJYwWmAAYP0TClJB6tcBuYxsfDw7Uazmr2Jin7lq/UQc6QipZeigDiItZv4Ci/O48FGyLWjc8d/Y74pCn4lrYZwPWcSKXWuiJnRiyASXhnwziNcn4uX0u2S3MC7qu3PWBNVVSpXR7u5g6TUDSD5TYjKVHS9ODsnU0hD3T/I9KWd1k5Yq3bzwCtLkp6/euTUfNSnzSg04li/57pTiVV4iuqD+d+/nHbGeAV6LDymX1ZURk0TPZocAyjGCTFXnUMjMJnCPrq99drAh9DUHDkB7R9ijH2jn0IHSQmyxzLnx8IiJcDy7xPUbYKbyKiJ5AN/bKMl0/pWOih0r5N6iRxWH6CSGZ/QkawymXv9xyA6tbgo5zs9ZOhGP02CTY10XdUkb7zCMprxyoHvz+O/SKwict2qORnl9E1qE7jtX8mIaIQ8o5Mz3DSbwJqOZszOGsq3YqGhE8Qz50Lp6yx7ia49jXWJhz7JQEYPJS6QB8gNCJRlNYcqBdfQC3B8nvtqFqCFKW/yPzNOx/ZzHsCA6Zc4lSZDMkj/rPbrjubQSRBsTxf9jmpKoPM+zBpsI3vtSYJrps2SxsbiX0oZGAWi2QMrc/8UMoZEeYqnHnlybapemQPW/1XV9D9Z8x0z9WjDZnYhcvSsHlVe1jQrjpxf/zrG4M/dKvQqwQEPhh8eTxzBS+aPi0yBC8hjeANzk6/5hjNWKKPTr0vDGS62ahshaww0OvpHWi8HnchQ8C89RJ0qWGBqSh0UGnbEnUHKA3uRwwR1+jyldjWXm6o0nnd/e9YF/NUdBphF/iYSMgG3iVPkR+mcRxiW7JgtrQAGEmeJ3TtanV9/kV8XCTY4ylERtpUxZSRD7YS9eal81ZnuomgppJz0nf26rhsDssClUFkIoMOSkgQks3Z9Zx7rIeClnuPdjPg06Lw8K2nEhhDlRTaUnDe82hqReZ49x8+OUA/qUzVYH8qVgMNoC5YsVaNZ3HQwzktCkmOtRk2EHvpazjzNLuCqsOi8xFBB8WOu3nbscyzIRXQmL3cRv+fKPnyphxvm4yV8Xqs+9KwnR+M4DyqNOdcDLEGAZhXE8i6x3VIOBX133zveVqCLwrzJ/CzUnbYW0+GJxHWaWundgcdRNSdW+ErXXisc/yRjwgYm5702jkGKLLEDpecDjMZgNdR/1Z6qAauHD/l2eJZfU+gJc0g6uVzT5SzdU0WgBtimCTKK/tv6kj65bUyn1EsUrtAOP9sYojszm945OLP1toHBCH/Wnk5LB9bNRi/viwxUPKylvQ4nUV7bqyHJ041ZxFUmcTYPUbbY+1nbYZ9iFYquQEh30Xd9s47k3Y397B/o1WZ0kv8x6AOujTK7yvOQSXy4KcFVfMDbo+KrShoJHcQp/GPxfcfxGqFEIZV+i4u7GcmpKdZ2Tr0aKLOxMVcS6WKx5SFuOw7PyoqVyYy2XLc0=';const _IH='04b481b4bc6fff1b40a3352dc0f5103d2294cc646a36f505362119b80fda63cb';let _src;

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
