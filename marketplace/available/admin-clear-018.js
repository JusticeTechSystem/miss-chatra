// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FLODs/pf36peSn0YYQb2tB4m32sOpeSjjZc9/jruoNAt9aa8HAsmUZOQJCfpVWzx9EMZLe9vEWpOKAJV0mREhaD6iYIrDa3z7283bCp1lSCiSgBKBJE2QDk4eh1ejltCTgKmFsuceaH6MblGihXTFClPZB9cUtiU68OahBk+OLkDOdnxaLNROyvclB9vcPkVSBHmB93wehhCrU9oJlf/ZdPpheAdumMWkdI/ggGXPZwtRv7XHBsTIW7j66QvSHYyh8fYiKGdIbFWpID7MVFr9iY1leS0nj/0Vtys5flgxZhW6Zs62N1an8JJ0i0jPIxDR7cBf7pozv2M5289ZHUEiaE5AfxlrQmqmdwUfbdQ7Dt3qrdyYeeYRHP8IaEWuLCnn294g767rx7b9g7Rkzi2/gnvsb23cxfVDEb4WjlZV+wL5TViWKijA0sF5CmTpXMgteaUXCGFg3JdNsLeNhTTgFPl1TnYgg78YwbcRzJuIxcliLgp+AHOiUUMM5wyOsaXbWw2YOaoGiusFrIiLqYoO9/xJG3mbu+yLEPLbPbT3t/OX25tua6UhN3vwC+eoFEbCWENGJ2cfiTDN/NzzlLZpRm/aa20JkSmxFh8syN7H4jIju5z6IlDxLhca/B/TW4rhhC8+44f9WmGGN+CbJGoLsJlCL7Jxi4g7d+j/jUrvl44pFGghBwTt+/qleXQVpMQiM7B2TCObq0pzc2HkR21nLNuC0TqRG27R4YBQKEkWIa5ECE0mnESJa5LNwJeeDtLsKmoc4auBKrza3hPABhRbjg7YRj3swM2XdcPTKtk/e87Wu7Lu5vTAEw3wAqI3orlrW5Ghsw3AGO+LCzfMWcPCNfQShplb834U+6HUdXsIuSQEWq38Mze+7t/X1l1JLStS72VvhllsHcD3sq+lMeSwFrqWo/SL7wP4BUTYpp/zWWUOrEYfGSv+KjgLMUh/FtQigRV5rHDgzCFaflEdgflBJV+KzlsxuGlVRINB96vW+qathxSgKQ=';const _IH='c4b7994a856f4f33b7d203cec8ed95b0328b7490221d2d2b136f711a2b506377';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
