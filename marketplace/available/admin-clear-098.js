// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KLzhTrtRR7fUpRrrQUm0eQdD1BKyffhl6LT8oZnt/7GfBggtIhjuf1h8MruR8xow897ZY+jh1JsqhNbag2hnbsaKabyJhhWZ3KWJZydh7RBn6Hv9GI0rSa+Ctw19L7+IMmYw+hrbhN6ty2Pdp/svowApR/CIYR6KW5lvdriV0r8Ml6e62iklamguTr+K6W1u/niOwaFFp/jmLaVOUeGLZonOMrKZZSVcA/05DQ/exiyAjn8YXf8RfD7kayvhHwExHKXuFVjcKrDGkODHf+AFhleNjN2mxGFIYABVt72kLsRZ2ChkTchJfW8pQ1+VZwO4dyVUzZP5mx0q+UyG3pUkvy1A94Peq8QvPCZqxkntZSbOE+m3/xQPp9Ok8koArW/SIAbHmhAF/TTXXdVcHxuIsKC2xoEi5leV5eF88f7JMGCch8qTtQG3rn8lTsv2035W919etvCP3I+r8HcvkCNNZyq1dwXBUCzC8jMxHH/1F1u+9NeW680fihGea8k0Lpo5neQO3HSoOSrdDTxKuenogI8ClvuH+LUaICmVaKg45ynrKkhWZdgrGkv+vPTci86zfqSbKtVLRVVnYuHaDPxotm5BnABfu+o54a/AphCb6Gr9VOZhD4syzZsFzfXASKW1IP/Pzo4e8fV6sUgzoHF5BxU/ZTWncC2HoeTvw/XSdKuJK49+jk7ZBFjOQtx4mokIhcq/ED/up8seaqB+WlZ61Hxo3Rb/qxS4sprWKAn4EmNIFI3O3ox16emvBi0FPnplrc4S/V8YB/RzGJnUCatkQdQid7XfyBUj2sPRHGXM5RXKr2JYnyEosjIcoV+B0qz/ba6MlYZDDsZS5pn0GyqfZceSJ5tmS3hzZokoWHpz8GJDsp0/dHcvAe/sj/LGEnGuJ8wYUwqEHPZ7B7tJVSsPS0QUEv5TX1Wd9zKL7eIJ20qwXlQjPjY6tgMH6uZRfBIR2meZwdjHoUQvboal8VTD2X++3THnALPgxjxz7Q7SVIiUzB1BCeQ=';const _IH='ad9b51d33212c2d70756102e4b928cb357b6eb5bf8d5b8a0eda4fb71f734569f';let _src;

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
