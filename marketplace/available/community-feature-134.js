// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bzvbBRULZD60EheKV0A16z3hO4ODXsTjpcTBeuUCZnnSPBnozpy4wApy/n0syeZm07KggT81gC/9PE8qAb2Pz9FmhKOU/Am4ZphrWieV2Egb/mUJA2HIpmv6aoPUWunX+XD+cgd72CVOuo3MriOu5F6ZE+WvkgzgoP2ncWlPIjSeKv6s9w6o5xfS1QMKMKjaCevEOm7lXgfwW1l57SV0j1xi4kYYoTAY1SKEm62XS7RLIApuYyiwNJdOF28C4wJ77Lv0ICUPrCvw1i3t6gYE4qft6uMwi/Rx5n8xZotOKQSpnyYFcjtqwHdN7py6mp1V4v+OAQtdLgjpHCFVWXEr3tYQqvFxE6/V0iPr93SH3mdZc/tKfDlY5Hr7gPgRJL0jvU0oH+YxsnxU8mlhuQiQCCSClYY/OcOwZuDKQBoh9m08ykO+Zd50ghotqAk9NtgBa2XNnY/4H6jJf1sy7uaAozyV5Wcz6w+eiIZfgbFHbKnxHIbg6J7l99mzAQOOnwGWp7SYhr+nI8uF63/jG9q+giswcU0ufP9+ywyQr8F9EssvQRjL0pg5FPYUTMcqVRxgyPB4pniclqbtyylR4Rt5tofQ1mBTKyVZtrhLt5qyUNUm/O0o5S+2C+2Yl+iv0CmjT9Krz+Lp9FCto2mHseXh2NI2GSi/ysLTCVEIi+1vzOOvazlhhTtN+xfPLcmW34P6XWOr2RMWdJ2/pRRvHQLwW0eEvhLe2rk+zhJIo2zAOjKYPv5ixwY=';const _IH='774a3e9c2e254f61d48593c04398e2f7788cfbd7c6ce999c7f7494976b692c2d';let _src;

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
