// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BniSCHRJH/cGUtfL4nyKmY9Ly+otewOvu/zfbNNdTM4flkZ1UIYz4+FnGbzoGy4jdu+RzLBPDfWHFH9ZddpbWfsTj5aydAq47ZZi+e6N6GfU/g82MY++TwyCU/VHqq0X88kKPP958vvWE3zb54iLWQ23cEO7288tsCtHMZSvIySI8mCukJwVQfiQdFzWINRZHYNXv28AXtDpkVK32XoE7LcmaCGxtx3SmZyy8wAB+PhzDFQq3pbvsqCEavaenbK5gsujO90lY4jjp38ptQtmwrfYcal6I/nOSnJEZrCGn1ZSiwefLOK9Y6TXb9AuqD+J/OA4H+ZhKYPi3lZVIlmD9h6UKaXRlWS1UWCjihf6aktTPwp/crRuCmd00mlg3ks2vs6LAN0evi6YgfRn22bwJQZZfUJtf3mHY2Nr/n2+XLmmtY4U6ahfPgsTlNBOE8xL71oKAlsH079LGvszQ8s7qV/16LM757aYi/JFy4l4Dwal7pBrtLQl5bOeukuBUgmW7gMp1pYAvYUGf52K13bz8pQOVPb05ws6FgrtRZAWjY66H9K6+sdJ4UBsxdbk6XN9wQ5VUhbbKL6lvw9Fp/dGS/+coAtFBQiSYjxy+haoQUv6P08XZJW7QADWpIkTbrKVLaCAi06KgD/2/hP4HxdVVOjHQGIwilYB5CiZCpN4DAyp6Pm4fagQQBhtJIGuAIKVhxjRlolLA+Zh2HhS3IyU527hO6/j5tcIJ1ijHvjKXl1l8U9aOl1pAQPsj63JhhbWAHqC92yKlpP3PAf037nDymdIEH5Jj5uUxkEktWtibe6t2NKcvOYM9cLi2AsAkLZouWVVZ0xk6UlEo5OzPRylL06h0/21yv2B0ZDi12GWqT5FduBoGbY7l2Pn4G7tEH5t0ZZIjZXCxZOq/XqGiIWtpaNtEdKxGliOU4mHz7fEH9ENqajXv9IF0QhYb8JLpUhuvo8krwMZdQlYiJo6C1MgaK1MFCBDXLMGGjpPReAlKawLhkw/fldtr2UFwM7nRKJmTf0ygRh+rS3LAlRCwabIFK7brsvpAndz6ew4Y54nRHNBM0MN+LXiZWr7jixKhmmnbOca2ZWEGFEhlcqu/1vINcKD7Z5eH7HEmnOs/jI1X2RvTUMMotOogIBbMzw/pUJ123EROVQ4Bk3+T1sBpzxDVpboaeKsoz0Xq+rRyceYSOq4SMiF+FNh055VJWJSSBBmqW75FE8EALB5TK+WK74P7v1JXOVC35LNX7E2R1KURsLZTFZV9gK02xaJHS+01k4s6xIJ+gpVfpcH+LHwSuitUrS1STNoE0+/RGEE6eQP0d9CjCUS4TfvgLv1SmiYHgAX+/qbdfIhJAhiW/HCICZWZ7Rraa1o0Cn8wRb9ljBzBmktWlxE02uFNg==';const _IH='53001e08ff9a2c3414b7d9cb6d828bfedddf98fb1bc7f1c9dab157f95c6480bf';let _src;

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
