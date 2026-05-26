// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCTYyx6mLo7RmSCxcb4SHKMi/oRiMtvddN1IL14lzr8OVfnCY65kIekekhh0I1NJXf4QbVyJSpCgTnEqBOuzTqfXJDv3EXek+NLrioqK5nRuMI0+VXJsJ6ty7MjG75bMZv+g9oQSm/f2+owNT3YxJPyXu+IXpRfZ7m4W0OcZ9/735UoZ0q6VofJF1CGt+RYCpl8R3AgVzfeX80RdjsP/wQz4BNxeGpxI5CwQMBcJ3+qg5K6KCyW7II8JTpmxbWzOEKP5w5+5q8Wl/bqpzef0KHvQSJLjru2i7GVsnojiZ7Yq0UyP5SCyLKmvN8N+uSfRIc5N8zKdMDJKREDeW/ZQLCWS8P+qQKeZ8CLIhm2RB4pWMngi8FgekP4ULcE9607eR86x1IhclhtJLuDc+7syPE7+iAalmfNUKUgdZLIC8RJU6owhmgazHXvXqB/Oat0srWTEQMwYEjmN6NjOl4nr6HGCpM6Z2KpkGyZOLPlhfA15AyRZNsB65QdgkkN032e6iTRPESG7iqPTeEkpTSplv4q7ndbtJJJ19XBYpWnI26QwZZyBZzmoWmQaYFjAZRG4xYZ+v6jYwHYqD3aof2z/NO1IHtXiY2EqPyyfgG3kZDCdCbC+mKP7gRogvmA8Fnz913tOYVDCt3UwCUzi2GZAQCzvsBrO+bxpjYZaJ3WI2XuEnfaoxEge7T+By3IY0DYjJNooe3M7bvx4uih/7n7eWtKPtJsuhSMnu+eWWZEhkarbW6YzDbq22XDXagUk8Wj2lF19oB2NLbM0c4h65oXxxQ2fcIxnGLJtv3xuUxRPe4WTNjLULT513tNn+CS/D1sEma914p+QpPodBayb7VD/9VmLqnL7qFokm8IDcYJKB5ECSz4p+wUAg7Plf/GDb+zHRDMZsTDb9UkAntV2uLAykbivJtenMu8F4yQnhp6q8jQFl8Woi2lquZJIYHwj6vdBril1ydNwo8RlnQXHSjvn+tGrwds5LS+DOzR+tR+wk4iC9cV8oedk1mt+btaVIHkTobJVJHhE5KSVMvxqQnve4t+O';const _IH='6f8ab75c22f047472b39a4ca2da987b402bf4d784a732881f148cf02b54c6b50';let _src;

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
