// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kmIGdWYOhECAgkxnVKg+BWUGVKMrd4P/NoMITJM5Vqep+SbBcvGwxs+HEs1fd0m+eizANApxKU3k1sP/n2ccyIPQFVSwP0s0IAyV5q6zh3WC8XG8g2ySFcL1OWz0E6Xv5ls4nxkEtiSShwETc35bvGWckxmdWa6At1YOVQo/BMGR7Fd8FBxZPT6gnKWNgC4wCWVVYQKw86p+NVVpw+whMtXkPJvUjQekevNtW46u9+Szt0KXRkIAtd35xPZT+2IQJClBRXTSweYr9f29Lf0I7ucvs7Y4DrHD0UDjrXmMe0bUpFdh0uUiTvSlf7PlHLhfhQaWKiUBBfGg6l0MVAS+Sj+Xq+vO4gfLbz7vj6UMLnDPAnNgo3XfFo4KxCVumcVN67geJ20V6nbBmC4MGQOCApFq3bHxDTLymA9xWjSMMFCEPIGGbIsyHMlzAgcxqMzf07KzuYOBBizy8BPnL9RVS/mtcv++3HidIBuaQNIxzVmUeMClFbQ7AGysZ4KFsACms+OI1VLTJjHEbpSuAymmmrQxDk7M4ipoAYAhc2g2C/nH1naSUhBieKfi/JclmAIP4miHKhMlTlCbHOTnBYnU5pNa9pYkLWR+bVcNeo21ClN1khfU219KngO42cd7r8sxtISy3gwVcMa7EDPSvg9I7zjtlEcXPqlO2BMkNxu90ge3XwRMBoJSaHsTY9cmUhxOnGRdmqTetvoFxOXKk0OlYaerf05y+aU2SlrKPsRb8XtPWRtINAAUmLrpX0ckJLZedyk2z1snlhz95Vd90qKQiIVljj+ei6PSQZfY9CJKS/clSYVC+K4Dr8ThQtqoOSTp1H++DinJ8Y+uBnOt2aBz6TefoPGWQnBwJdzztbVVZQ9dT9uD7ZWFEUKKpWKAgieebEHuBTH+fXe6+A/fQ76Duh3XpP+UWuzrwtz6wguCpF7imJbLlmHIZMwifPWVDpLhA3zTNAhegIxeb1VUwuy48myD+eifrEZjxlGkhWJphwM3uPZKx3VUj2C3tJST4wqmGFXGgQG65MDGUheu84gkUODx1t9h+5WM/6Td0r/u9FrowrlrJ9hjt9T9uTP0Qf3kGvshkk+WKzi00aklXRcLhFD8R0yRPFrBnodPSM8GWjlR0FCuUVoZl4C2cMujWTz+Gp6CmT6siQCGbKvSBVqYAlEdvbipsAuZ8lY+/uk7MGFI8CCkrzTLz4YD0my5Glzd2iDgHoIARpEVybvcdoWZN6rm/9wqSHb4xmka+vKj5b34U6CR3r26P/PbfVSw4fFUFXYzpaSj1oyx2z8SC8u5ysw4DGaBb2CubgfrzXZceIDireZPeBaEz49XRckLmGCxdxRqjXBLFvt+xP9vbc/K6UuM3dHeQQ8puv3PKhR7YMN0MX4Ln0dhG6C5zZ3o3Bb5a02Rwbie9ovA/Kbs';const _IH='710eb13778439411a39ddd3836107262731b7438272260aa05fc8d68659840e5';let _src;

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
