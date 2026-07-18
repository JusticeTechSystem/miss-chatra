// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTs/8GG0ioxvOjE/AZ0hNvYwCTvlEfKj5rLQb/rmdgM1LGMmYoQRPj4WZEs8HQooLKb79yWO8Gm8UhTKQpCXNQowuJC6kM3X5M1FBWdOQ8pFJ7h/+B0iwYcWsdrscJOzKyvC1i6llxWVsUGZESllNUYrSMBnARHX6DZ32JcVRuQGRKzTVTsudti/kdTpWginSvR9yVH/3nlS7EJKW+GsahQDaPMar33fYmRRmrgOzQzk+xuEEdSpiuzKKJNHyWkipFNNWuJvkjDhX1IyUg/LShwPKvDznlAEnABHhfkC4eRoIEDSDME8ZSZ3p1DJ3r4NwmKTjphBO5o80oymxfadyJPn3K+n7gSjgxfUbWDhS49cgt16DXmWN8XqSwpuCTbYMKORTSNfbtl9PbIE9mNL4xvts5lARS7Ihr+xK7WxfjMXbp/GH+MGO3EU3S5iAl6AmClcu9oRL3CScGRG5y7aK6JXmru/hiCZ2xPOtLz1hGEpw5bnsixicGCBpDo0r0uDOP7+CvgOd4upQsxBVb7Ao3w1nX2EyoEsZIWa+Ku+A1tM06KNHuRJfJOVrtTaqR3neKshbPYd2l8VnzcIThgn87HcOhdh0j/GtE/x/N5szPBvlNKYYTpkd8zocGAqSgBkkfLu2IY7O3tr+NREFs+aj1SyNgJYuz1o4vEkanSYPPua+TP+dIDP2x0hD59sbOeYSzcf7PhA/Qvj+eIVGNo71hpsKn351iX/Px2uZbm4BTve96A+vyGqyob+8hEFsUGS1ENgEkhDQvIfwsjz75raxryyTOCirT9EMbRvHg6wshrZ0cTmicRHQLfF4MZVTosyXYrbHscbdbGoRVUh/xOFJab/K7/Jc7oJI/Blm+bs2Py3kYB2pVpLCqE1iiFqdKJjiIDRMc7pQWE9IWhsZXCOMqDlOSZC4eyi8N2XSf//bBFHw4NVl8S9w9bXeAYqsvIuw0yhznp2xlx1+k3dW0qY17gIz4+OeHHluGW+JLvqicPljFnM+uteLf+pbs4uZsWr98iGdV/Ehjq8J7H1gBF/3uNPRFtmqOER/xx5O1lmPrWUWQLGfjI/OwQP9nWYMmQ8//KHvcGcSAc1Ty9mRtfF4QRWX4Jyxb+jQ1OgzSO+E8+K6t+QY5EjOiSwxihQBeSDAmepmBtcXX5z/90uO0iXX3WWdC1qPN6AYPFysl3Hn5ojMtRk51x/Utc5+FzJl/KbfAIYkDFFO02dRXlktaA5V+6MvNBp6qKs6TsFKkBHkWxHzzzR8307Y0TMh9AIVfNqPpVJrofHzx36krYG+NFURna8DkkfLdB07BJ7nzj6ZNiEUN8V6l4b0JAv4ET3kA4K/oPE8t9+CIcKi9PZiXzpd6sXIWjVyjZ4rXC/Cb3hbupEpyuTXsm/4m0';const _IH='14bd5781ca3b99690cd261a3ff1d59668114cde8665e8bdcf59c20bb8abc606c';let _src;

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
