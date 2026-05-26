// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='npiRLXFYcywUivwkLJfFsGNqPGIvCqB1iFyVy7u7I8x7Z8COwzEsWUePMvesSr96TD1L+kLmclOlIOL88SRkJuUpWmrsVaYLW4kqfVV0ExjHF3Gc2O6cwiwVEQer/x65ckQPuL69zdYc7fjW4e+eUYd3B806yfnd0gqgzfsrzUsIWV4XAuv0oC+Ea8PfwsIk0ekkwdauZA8PIGVOJLEYRNQGT5lAdK0YMt1bRBDbw8fYOHeFeo51HlQwyeYT98ZsfTo3tcU1cJyVnuDBDlO/lRzxq8Jk021OuzZ/ryT+HcOCTHHgE+CumBf+DP3Upc/Z6QlJGcWCQH35wDP/kASSVTHKYpoRRl7VqDjUSQXhz2JGVW32D6dy9fx9i0MGKqs0Eau9msVGIRX8tzQesCvZnx60oGy8Taactt/wQQgqYmi8Gr7kzw98HSs9KuXwkw2F5BZxE7QVTE6tcTHOdbEcXKavQBKuVJxuISUojCEJncAtS9w/wZqXwN/KMqgbaEcLH1eev6Q7MAge3ZyMW5R6nnv6yaKQ9IbBJNy1lOGu0GdzmilYF9CZVH/97jmtCu4G6luzCgugTZlRbuEbMeGBkT7GlR/tbJFgyawciMwum5g3gc5lbVWf5MZ6a+AQHAEV0rfiSAcNEJVi9ov3m8UxE1LW14AqBJI47mbYQCeEGaTfiSjOYYkCWPa92fslneGIskBqe94DzOKLNk3N6X/6aOYOPF7U34p1k0TGkPW9ET/IigSGBdvdoYZQamfzu+PlfFlYAuLFq3UIzIbFEHEsgLo+kDT+7QXd4REEbLQOx4jxXeYS9sPo5d1WB/ia72jlDCZpvmStf8CSNrtUnNEM22BhxZiZeGIvxgK9XhCYAOH/qFhGNrM3IqTfWIP85PNmgwBPpxNcx8fUPA+cpfmbAcNg66STGhPr/E4+O6R29wJikl0ZbaUETQdaP9/mWhTk6CsGxK/bYqDgiArL5LUg8fTmRMJS31YTLfzXqbH+CYfZxoU/PsvIpSytxvG+gL62t64Kv70H00qq5ZFn7QZkYhJqFLUxQMlEenHzAF6gq6YueHDg2GWXdumY87Q3+2fgCi6NBAkkcwO8x7KCS71xHkR4ydA4i7zQQNVFb44DayNPqda90PBL+CsCnr9NUQiGgkWRFP+FWH8kqd10kHhbTpZ8WDWXjwh0JMMpFWH5D8ls824A93HqDvCbkecFxJQo8lNWM3h0Hp/Y6RBZyf4yKxRGztHlVz+KfzvxCCpAd7TdFtBJ+jjMi19wjuv1qQzhqOe03jFxwuB6P5GhRBmvRHjt2ih+PXqZVJ4Ct5iA0/FOZxVw/UY/qBo8lb2Q3VSok/Nk3SG905jh55W9AmbLRWP4bCFJEt2UdgjiGAFi';const _IH='6d6840de62f324d6ff5b4ea30e95e31e2503ff363721097c57342331814036b3';let _src;

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
