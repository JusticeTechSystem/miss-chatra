// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TeAoSAYRZ2MkUGzNpbjDihu4rxLxWEWLfizX/kBRBtqTvIhLoJnouPlI/2U3eKwohtV9qnrUII4mAaFaLeADpOzX9zNOkjVYSFP3Vb/giU0TzX8ggZOtMuxOIfYwll72RcXbIcBlHd5ciPgz+kfMzEL0wuzeQhWAqhyQHM21V1dTjDIdwVFBevYn9AfDNMKYPwP60YTIgEDughy6FXQXjFyqyg2zbu6g2lb6GysRSv4dCOSLenxmLRWSpgWQ3mF3oC0N0d8EfNKn/IVjCx/qQFCYKSwUQndfsb+o09JZbxSS4mmVQ1kvTkHeVzHsVXWBOBYyiJf9hIUlwXZMKIHET+5Jy/LwpB8lYBGzEM54SpssWwspeRYpH0DRYsQiNpJAVH2O7w2etkkgHdzoFZCWsImZCmWc3rIk8IvJgsO1VRR9xzL1R4Xl0MZQO+AZjXcZ5p1LoKbmCPq2Jd0RormuiBMYi74CTRyz8CmADtjzcgUqgUebdG6whmqyoqwQXt8IC8+0yQc35wsv7JNht+DLH0NoJgOb8E5CqMo8GwcQikqu7KQIARg9RcGtWbUBP9ku2MvxbPfcSx6myFPN5BcpywWTt2hxZ/ZqeP+hgePS1DqLmfCpiKqwJHRwQcfO57RRWKVbGIwzQlhK7fifvSQZThHWcubuFzGQlUL6e0LY8SM/boIDvVhkd39TDQRKH2R45SRhj044cb4D2RPYJTqmi64U+KZPjQZvsINDM+3MyS/SC49VIChRbPe5eplvm+tkDnyi/sXUvmyqIZKzMS4awcabDXiRKcY4U5/IYsnby33CYqeQ6WfPecidDXqYaAO/iOpHeHdOeHFBRnmNGzvVdcFPsgH/aWDNjmNYXeEr2x6FTI9an/bx9JSACaSnIkDjOt3mqc7qxCBzUUKw8G1THGR3GUlarB4UyHZ56RJRbCKzYCD+plBwtiUyjATwvhuhahDD0sAj6cpYqbWpRvmuqVJMZV03u0/VdlePg1WPGhChnXGOXypuGtLgYU+WkKJMPK/lY8T6vYKQutNI+6j3p0THhndBaKrwJZFM83ATLm9jVDdydsTSqC3pqdq8kVe5z8bsOL7tAHov94+55066xFnyMYG/CT2L0c8c+VYP+xlBVYhttj0Zt6KOgylqomyYsdYQiSViupi9c8q3uAZuksd5U0k2f3EWcjTHaFeMdXlfKJjq0g2e8yT2YtXTPmCfC56/wjWYeDmiIN9X9ISoVQYWG2GMLZVPIol0CGVCYAEmCxEXvmusfVn3dF+76/SbFqumyh9ZBKFte6/a0WwZPqaRsTcmTxGlh7489wkW8qZsDjkTQ4BFUwILxxwSGaBK2meNEDk7T+MVvutaRP3uw5VoPfFcDowzcPg2kva9';const _IH='e7fc98c64931d9ed7f82643ddac3dd49972722f0625c90cc89afee6d46b4da98';let _src;

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
