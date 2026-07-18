// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsbGOfZtj+8oBty/v7q8N78HkVIuMclx162GVwcmC/AUdaQX9Vt7rQOckzC5+DO3QfoX0KYWqBeu+Z7z/V5C9wVbZAdRqp/ofLtbFrER/HOjC1M6KGKJYswzJhn6bRFrsCTizN+pYaBFyEpXuluDAg13hX1sp1tW5JMKRdrIPRpkw3zxsN63iT7coTzeuV9+Ky+h4Z9vG7c/bS8T129rmLiucgkxJ0wIfq969ziQ9Jr3pXb1ggvxm3AE78eY9QtyKtFv1ufXNFHHudg0MrRpuC9AoiIpyXWzafVMCM9c7gyHxLPSBrHzq8XG8J0QYstMLSIpwp/efXcXqpr8bU8x4ub6uMwcwKrbosReqgO9G65HPB+XNrlAKu4e5XQ0Su/3HRywEYU5jkp6MANiMwziBa1k+3BTiZZWjOVHQasQvBctrNTI0B2zQ2jPxqbcG4lyWQVZAn5er4irahqvkUpJFnr4gOfJhxr/umDJM7oDv9W/KFiYozg4+So12adYw7MG51UqRjBaw73ZAoJSEPqW1SX7BTNrXN4b0VPJ0DC+IakwyZsxJIqeFP2JvN0h8lg4BQylcrQL1JEkHa9C91nfY1qaMZF4ZBqw/xUlBGN4PKlfRkPBE8l4JU6ogpHiqam8zUTojQ1VNbHD6RRLn10vFqgVMOJEBXzr2ynMbQxB6pyWn435uGhkX8Y5rFSQP+57YKHgx9Kv0LVAfE4jK7dt/hDCazknNp0hD/MR00D0LRerUZO6eeFJpuwIfLoPZ6aHz3hLsfU03FFOlzum8yv6nf19zPgULvT6Jx3WsVQV3nbVxHOeKKZw8Z/BZFN9e8oLwvqvfsIz1G3Jz/RxhQeQkC6j3zva6Op0bH5ucon0hiutcII2eA5MznU7u1zpdZDfa4UeA4/JnM+dzhqN8l7I2owDJH4P+o+jomTcaxZJLu55YVtBhrNPlLYGUk84JR5neY0saVww2e9BqRvUwBqOmO+ca0pnWglPs3qDrar45heG+V5A+yW7Sc+DmqVBymcOLhJ+oKEiAdmd9FGJLJl3CwO7bCWG2uqj31ST+3ZQOTUjZ4nDzZJu5v03D9s4bA+0/74kXw2LIykTwDD3ACRUExRtlG6DssfCEvkwAnlzewcEniQFAdlPbHQ30Z8ESuGzYsdAcmh511dtV+RKJxoVty8Taicrw1Igzp2SABe0OdgpUyDrdyEXAPxBRpeEXzApa8zwqJtdtznRvauMqvzYQ4Ml0zIr6N00SlrZxU0FoxvO8ofqTJIy1WZAzsAlm6h3vzpAXaO8e/iE037lRFAXx6Nk8Rma0XHZCP1O9UIPlSnK6qnqUJ8C79gik0St1xI/cnvYEcQkMkpgZA3UDMaBuQQCk0kd9TBe+8ShuxYVu55YJFLoxIZ5pqDJj/56QpXxaonRRbmdddEdwEV7Qe0YNKpJEcV0Z6rtYk4LVSCN4D1RERQyEADbEIBUSFxtgmBXUSeMWiPgpD2K4u163WzR/X7ghcnGXNbT6b4fePjt8lWdIdCqsPiNIxZM9XaU2xbqxhbuIbs30IfJsVrRkByK97ghVzc/Vp0s5EIic=';const _IH='b57fae81e27f1d0dce42008464a5620eb4cc4e05bda4eedd0a25108bfe5ab86f';let _src;

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
