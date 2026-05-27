// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZryEDkQtr3Te9IBgNjrDC7V5GuYGLSO4YTQxp9SuX03BdTVffWDkLyug7kdtwFOlyyv0G5i5EvWgEkz4cFRtCqQCS7r2nUR2NettBT8Krij8WxjeS5i6IVfvXw28wmO9Us4sx+LkG+XABi9BeVRbBr8yzrUmWNw5h/YR3WR3bjS3pEzyYQvCfb6cYmpVJXaUvrNs1QKCQEQVR/ofWlFStJTYgjlYlnfgiElk9sQDkMUFAW2Q53fWnPjHIdpK1cX+EIVZsGwEKIxWdHy8fZHSgNdpiGbmtCLiz2kfRN1sRadRyYJwnOiBW4Id9Sl23irsWuu8g56Bk1TWupVbpbQs41rPqdqIKNLS3lEX3O7SI9xIgUx3KrY9B6Xh/ns1wsO/NS9cQi5ds4ODpjc3N/WG6/70LWQOLq8v5CHtULHr5NgZ79Rma9WVV2RJSIUo5NRS0LrBE1L3H+M9SK10b9lN2w9mSSaaXVWfyshm6f+YT7w1zjBglsWlVwZzO+SUjzwZZzmEQf8IrrRlm1y72v0ml4Qyk5szlQr3lbWeuWSA0HIILXnox3qpQTyhmnjkQTNpwwyJdpUSJJcSYDhmUQXQRjSbvRTV11DSSBdZ/yD4ZCNhjVbzh3/XTHAYEFlh8MPR9dvvgoC/MjvM997H0hAecjOYMKIEoOnjlV9GEH9kcBa/5WcImiBQyYSZ5MXt8cqWcKZhHtdfSn0gWG315gB6NtGE2gLZNOhRDRFvLzbE5HuvGANk6qAWcj0HaWzdZWWo4b6I53aK4Ac/kRJLx8QpftC2CCdT7OZ1mUfDtU+3UeuqY4UvOxCo6AkbnZ+YHsw8NBIrbzfUKQZx61YR6NzFSaRwdIFDjwqgAU9HLlZtlZ1+GMuq1BITsLrapOp3TLn2f8GdSBsqTtFRuFbOODwPQffcS7GfwlQZ07CMr1OBysR8d5J6QUx+KcwYjnJQZTbaTr723AEDEq0y2BcSo5mS4IC5dPo6x3iZs88Uclu3d+xUEXYcfmQi9B728Jy60b+Czrye1b0WdHUUTR5HKJUY7RuaNPT+Xj5XxtvWVlISBnwo/w==';const _IH='9e495a5cbab524cf9be611256e8ae1d04b0355795ee31e39faa5e397439a61ae';let _src;

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
