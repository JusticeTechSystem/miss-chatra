// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a0N2h0KAqdbON2Ie7OZueUHlcxrO1xYaHxJVzk/XqSFn++pGqctRw6JGbElLioOKk+z5fycDeG8mLqA/8nYZ/ib2+Ft2kA4JP+EepWlBPfmGJVzVd6/DsjAz60RUmn2I3MJ/une0/TvDf6fsecQMeodYujFvgQ+ohtgCz0Vl18hpm/xsnKIy5Q84KLutmZk2Z9iUTLOeEWcEqij0zReGX/g/40GFdERala6POiui+DO7Zi7YYVyYXWsfbZ3N7zdt2bR9LOc9V8gFKjdrr5vfWzjgt9o+x0Li8gYFvTveM3zGrbOP8/um9r5cMlB88rkH7jajJOJ/gYQL19ciugA6+e4znkxyvQtiSQQFd5r912jntIcULAnDKkP9fu8oSU5p0RZRXURaSGB3t6tfZKVaG/8YQyB36b86qdaYwKJ+Qb3d4fDHNfcXA8TOErJd9gTI2H1TO1ndCw6ALIHjKRIOYoph7+CrfthgO7EaMcmoOB4EnW+z4h0k8RzxiYUeKqbIZXfHcgQR7DkcJbLOu0FdeLgmtgcN4Jsr5ztp/vLgvMBLGMr1+rwJzMyHznO/iDGdidopVd6KLSVrmFUjWKUK+srKskEXd/Dkqu+7dFW1fWdJpbWIqwg1dhxsN46EXys3YwTi9HR9u8srNpCLtcv4nnEEpK6s7JcNsTedlaH8QK35uLpE7K/MOzaJqioU47wfVNgoGluwidG0zZ4Mp6M84CE/uQYmQBScMEGTUCakV//lpnqsx3T9j/BSrJKEsSVkWU2aHPj/wAXRgVUn6umXzhjFwDVQV/KXuLtupmcXBHTGnfjiqPzGUfzTGB2AjVnYTLcl5aepe14PTegZejCBdubVPwFfOrxLvHsFCzOSHHLV8P1SfPJ33eM5BoND51SC7DBHAL1r3RAivAmOkQr3lDTyOSjiDfJgqM+wDXMee5AcbzYcBuPY5RftEnD0KBUypTJtJXphsB83sFzgJIGmLkuicn1H6kOpUGR+CZ/G7Q==';const _IH='4143db54dedf8f8c5383e53d9e6ea46bddb2d53fe662870eb02021b345a19772';let _src;

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
